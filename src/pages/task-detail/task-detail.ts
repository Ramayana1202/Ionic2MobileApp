import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../http-client/http-client';
import { Common, MsgType } from '../../providers/common';
import { TaskManagementPage } from '../task-management/task-management';
import { ViewChild } from '@angular/core';
import { Navbar } from 'ionic-angular';
import { ITask } from '../../interfaces/ITask';
import { ActionSheetController } from 'ionic-angular';
import { Settings } from '../../providers/providers';

/**
 * Generated class for the TaskDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
type CallBackDelegate = (params: any) => void;

@IonicPage()
@Component({
  selector: 'page-task-detail',
  templateUrl: 'task-detail.html',
})


export class TaskDetailPage {
  dtComment: Array<Object> =[];
  dtAttachment: Array<Object> = [];
  taskStatus: string = 'N';
  dtTask: any[] = [];
  dtStructure: any[] = [];
  dtBP: Array<Object> = [];
  dtProjectTask: Array<Object> =[];
  dtProject: Array<{ AbsEntry: number, Code: string, Name: string }> = [];

  changeStatus: boolean = false;

  @ViewChild(Navbar) navBar: Navbar;
 
 // DetailMode:DetailMode;
  task: ITask;
  dtUser: any;

  groupUser: Array<any>=[];

  isAdd: boolean = false;
  beginTime: any;
  endTime: any;
  
  tab = "detail";

  addText: string = "";
  
  commentText: string = "";
  
  adding: boolean = false;

   navOptions = { animation: "ios-transition", duration:600 };
 
  callbackDelegate: (any)=>Promise<any>; 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public httpClient: HttpClient,
    private common: Common,

    private actionSheet: ActionSheetController,
    private setting: Settings
  ) {
    
    this.task = navParams.get('task');
    this.isAdd = navParams.get('isAdd');
    this.callbackDelegate = navParams.get('callback');

    if (this.task.GroupUser) {
      this.groupUser = this.task.GroupUser.split(";");
    }
    this.beginTime = this.common.toNormalTime(this.task.BeginTime);
    this.endTime = this.common.toNormalTime(this.task.ENDTime);
  }

 
  ionViewDidLoad() {
    this.navBar.backButtonClick = this.saveTask.bind(this);
    this.loadTask();
    this.loadUser();
    this.loadProject(); 
    this.loadComment();
    //this.loadAttachment();

    if (this.task.ProjectEntry) {
      this.loadProjectTask(this.task.ProjectEntry);
    }  
    this.loadBusinessPartner();
  }

  async loadTask() {

    var result = await this.httpClient.Task.loadSubTask(this.task.ClgCode) as Array<any>;
    if (result === undefined || result.length == 0) {
      this.dtStructure = await this.httpClient.Common.getTableStructure("APZ_OCLG") as Array<any>;
      this.dtTask = [];
    }
    else {
      //cloning by JSON
      //result.slice(0,1) will return a new array contains only first data row from result
      //doing this to prevent copy by reference
      this.dtStructure = this.common.cloning(result.slice(0, 1));
      var rowStruct = this.dtStructure[0];
      for (var column in rowStruct) {
        if (rowStruct.hasOwnProperty(column)) {
          rowStruct[column] = null;
        }
      }
      this.dtTask = result;
    }
    console.log('Loaded');
    //sort by clgCode
    //descending
    // if (this.taskStatus == "N") {
      this.dtTask.sort((a, b) => a.ClgCode - b.ClgCode);
    // }
    // if (this.taskStatus == "Y") {
    //   this.dtTask.sort((a, b) => b.CloseDate - a.CloseDate);
    // }

    //add an ":" for endDate
    this.dtTask.forEach(task => {
      //format ENDTime and BeginTime from number HHmm
      //to correct Hour and Minute format HH:mm
     task.ENDTime=this.common.toNormalTime(task.ENDTime);
      task.BeginTime = this.common.toNormalTime(task.BeginTime);
      
    });

  }

  async taskStatusChanged(changedTask: any) {
    console.log("Checked");
    //prevent too many task being completed
    if (this.changeStatus === true) return;

    this.changeStatus = true;
    //set task status
    if (changedTask.Closed === "N") {
      changedTask.Closed = "Y";
      changedTask.status = 2;
      changedTask.CloseDate= new Date();
    }
    else if (changedTask.Closed === "Y") {
      changedTask.Closed = "N";
      changedTask.status = 1;
    }
    setTimeout(() => {
      //this.dtTask = this.dtTask.filter(task => task !== changedTask || (task===changedTask && changedTask.Closed===this.taskStatus));
      this.changeStatus = false;  
    }, 450);
    var ds = { Table1: [changedTask] };
    var result = await this.httpClient.Task.changeTaskStatus(ds);
    if (result!==undefined && result.Message !== "") {
      this.common.createToast(result.Message, 0);
    }
  }

  showActionSheet(task:any) {
    let sheet = this.actionSheet.create({
    title: '',
    buttons: [
      {
        text: 'Remove',
        handler: () => { this.removeTask(task);  }
      },
  
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });

    sheet.present();
  }

  async removeTask(removedTask: any) {
    //remove task in db
    var result = await this.httpClient.Task.removeTask([removedTask]);
    if (result !== undefined && result !== "") {
      this.common.createToast(result, 0);
      return;
    }
    //remove task from list
    this.dtTask = this.dtTask.filter(task => task !== removedTask);

    console.log(removedTask);
  }

  fillInfo(task: any) {
    //get clgCode from task
    //var clgCode=task.ClgCode;
    //load task from api 
    //=> add later
    //currently use data from dtTask
    //try navigate to task detail first
    var navOptions = { animation: "ios-transition", duration: 600 };
    this.navCtrl.push(TaskDetailPage, { task: task, dtUser: this.dtUser, isAdd: false, callback: this.callback }, navOptions);
    //  this.navCtrl.push(TaskDetailPage, {task: task});
  }

  callback = (params) => {

    return new Promise((resolve, reject) => {
      var task = params["task"];
      if (task) {
        this.dtTask.unshift(task);
        this.dtTask.sort((a, b) => b.ClgCode - a.ClgCode);
        resolve();
      }
    });
  }

  isOverdue(task: any) {
    try {
      var dueDate = new Date(task.endDate);
      dueDate = this.common.addTimeToDate(dueDate, task.ENDTime);
      var currentDate = new Date();
      if (dueDate < currentDate) {
        return true;
      }
    }
    catch (error) {

    }
    return false;
  }

  getUserName(groupUser: string): string {
    if (this.dtUser === undefined) return "";
    if (groupUser === undefined || groupUser === null) return "";
    var userList = groupUser.toString().split(";");
    var resultUsers = this.dtUser.filter(user => userList.indexOf(user.USERID.toString())> -1);
    var value = "";
    for (var i = 0; i < resultUsers.length; i++){
      value += resultUsers[i].U_NAME + "; ";
    }
    if (value.length > 0) {
      value = value.slice(0,value.length - 2);
    }
   
    return value;
  }

  getProjectName(projectId: number): string{
    if (this.dtProject === undefined) return "";
    var result = this.dtProject.find(project => project.AbsEntry == projectId);
    if (result != undefined) {
      return result.Code + " - " + result.Name;
    }
    return "";
  }

 
  formatDueDate(task: any): string {
    //get due date
    //format from text to
    //DD.MM
    try {
      if (task.endDate == null) return "";
      var dueDate = new Date(task.endDate);
      var dateString = dueDate.getDate().toString();
      if (dateString.length < 2) {
        dateString = "0" + dateString;
      }
      //need to + 1 for month
      //because getMonth() will return current month - 1
      var monthString = (dueDate.getMonth() + 1).toString();
      if (monthString.length < 2) {
        monthString = "0" + monthString;
      }
      var dueDateFormatted: string = dateString + "." + monthString;
      return dueDateFormatted;
    }
    catch (error) {
      return "";
    }
  }


  

  async loadUser() {
    var result = await this.httpClient.Common.getUserList();
    if (result[1]) {
      this.dtUser = result[1];
    }  
  }
  
  async loadProject() {
    var result = await this.httpClient.Project.loadProject();
    if (result[1]) {
      this.dtProject = result[1];
    }  
  }

  async loadComment() {
    var result = await this.httpClient.Comment.loadComment(this.task.ClgCode);
    if (result[0]) {
      this.dtComment = result[0];
    }  
  }

  async loadAttachment() {
    var result = await this.httpClient.Common.loadAttachment(this.task.AtcEntry);
    if (result) {
      this.dtAttachment = result as Array<Object>;
    }  
    else {
      this.dtAttachment = null;
    }
  }

  async loadProjectTask(projectId: number, resetValue: boolean = false) {
    //reset value when reload Project
    if (resetValue) {
      this.task.ProjectWBS = null;
    }
    var result = await this.httpClient.Project.loadProjectTask(projectId);
    this.dtProjectTask = result[1];
  }
  

  async loadBusinessPartner() {
   
    var result = await this.httpClient.CFL.loadBusinessPartner();
    this.dtBP = result[1];
  }

  async buttonAddClick() {
    if (this.adding) return;
    try {
      this.adding = true;
      var taskText = this.addText.trim();
      //get text from add task input
      //if prevent adding task when no text
      if (taskText === "") return;
      //create a new task from dtStructure
      var task = this.common.cloning(this.dtStructure[0]);
      //set ClgCode= 0
      task.ClgCode = 0;
      task.Details = taskText;
      //set closed ="N"
      task.Closed = "N";
      //set type = task
      task.Action = "T";

      task.Priority = "1";

      task.DocType = -1;

      task.GroupUser = this.setting.settings.userSign.toString();

      task.AssignedBy = this.setting.settings.userSign;
      //add default create date
      var currentDate = new Date();

      task.CntctDate = currentDate;

      task.parentTask = this.task.ClgCode;

      //if no  Start Date
      // (!!task.Recontact means task.Reconnect is null or empty)
      //=>add a default Start Date
      if (!task.Recontact) {
        task.Recontact = currentDate.toJSON().slice(0, 10);

        var currentTime = new Date().toTimeString().slice(0, 5).replace(":", "");

        task.BeginTime = currentTime;
      }
      
      var dt = [task];
      var ds = { Table1: dt };
      var result = await this.httpClient.Task.addTask(ds);

      if (result.Message != "") {
        this.common.createToast(result.Message, 0);
        return;
      }
      //set task clg code = new clg code get from api
      task.ClgCode = result.Content;
      this.dtTask.push(task);
      this.addText = "";
      // this.sendNotify({Detail:task.Details});
    }
    catch (error) {
      this.common.createToast(error, 0);
    }
    finally {
      this.adding = false;
    }

  }

  async addComment() {
    if (this.adding) return;
    try {
      this.adding = true;
      var taskText = this.commentText.trim();
      //get text from add task input
      //if prevent adding task when no text
      if (taskText === "") return;
      //create a new task from dtStructure
      var task: any = {};
      //set ClgCode= 0
      task.ID = this.task.ClgCode;
      task.ObjType = "1470000128";
      task.CmtCode = 0;
      //TODO: fix to current user
      task.UserSign = this.setting.settings.userSign;
      //fix this too
      task.UserName = this.setting.settings.UserNameLogin;
      task.CreatedTime = this.common.adjustForTimezone(new Date());
      task.Content = taskText;





   

      var dt = [task];
      var ds = { "CommentInfo": dt, "AdditionNotifyUser":[1,2,3]};
      var result = await this.httpClient.Comment.addComment(ds);

      if (result.Message != "") {
        this.common.createToast(result.Message, 0);
        return;
      }
      //set task clg code = new clg code get from api
      task.CmtCode = result.Content;
      this.dtComment.push(task);
      this.commentText = "";
    }
    catch (error) {
      this.common.createToast(error, 0);
    }
    finally {
      this.adding = false;
    }

  }


  async saveTask() {
    try {
      var _task =this.task;
      _task.ENDTime = this.common.toGluedTime(this.endTime);
      _task.BeginTime = this.common.toGluedTime(this.beginTime);
      if (this.groupUser) {
        _task.GroupUser = this.groupUser.join(";");
      }  
      if (_task.ProjectEntry === -1) {
        _task.ProjectEntry = null;
      }
      if (_task.ProjectWBS === -1) {
        _task.ProjectWBS = null;
      }
      if (_task.CardCode === -1) {
        _task.CardCode = null;
      }
      var dt = [_task];
      var ds = { Table1: dt };
      var result = await this.httpClient.Task.saveTask(ds);
      if (result.Message == "") {
      
        this.navCtrl.pop(this.navOptions);
        return;
      }
      if (result.Message != "") {
        this.common.createToast(result.Message, 0);
      }
    }
    catch(error){
      this.common.createToast(error, 0);
    }
  }

  openFile(attachment: any) {
    if (!attachment) return;
    var file_path = attachment.trgtPath + attachment.FileName + "." + attachment.FileExt;
    var a = document.createElement('A') as any;
    a.href = file_path;
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  clickComment(comment: any) {
    let sheet = this.actionSheet.create({
      title: '',
      buttons: [
        {
          text: 'Remove',
          handler: () => { this.removeComment(comment);  }
        },
    
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
  
      sheet.present();
  }
  
  async removeComment(comment: any) {
     //remove task in db
     var result = await this.httpClient.Task.removeTask([comment]);
     if (result !== undefined && result !== "") {
       this.common.createToast(result, 0);
       return;
     }
     //remove task from list
     this.dtComment = this.dtComment.filter(cmt => cmt !== comment);
 
     console.log(comment);
  }


  validateDueDate() {
    try {
      if (this.task.endDate)
      {
        var dueDate = this.common.addTimeToDate(this.task.endDate, this.endTime);
        var startDate = this.common.addTimeToDate(this.task.Recontact, this.beginTime);
        if (dueDate < startDate) {
          this.common.createToast("Due date must be before Start date.", 0);
          this.task.endDate = this.task.Recontact;
          this.endTime = this.beginTime;
        }
      }
     
    }
    catch (error) {
      this.common.createToast(error, 0);
    }
  }

  formatCreateDate(date: any) {
    return this.common.formatCreateDate(date);
  }


  clearDate(event) {
    this.task.endDate = null;
  }


}   


