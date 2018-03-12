import { Component, ViewChild, Input } from '@angular/core';
import { MorePopoverPage } from '../../pages/task-management/more-popover';
import { TaskDetailPage } from '../../pages/task-detail/task-detail';
import { PopoverController, ActionSheetController, NavParams, NavController, Navbar } from 'ionic-angular';
import { HttpClientHelper } from '../../http-client/http-helper';
import { Common } from '../../providers/common';
import { HttpClient } from '../../http-client/http-client';
import { Settings } from '../../providers/providers';
/**
 * Generated class for the TaskViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'task-view',
  templateUrl: 'task-view.html'
})
export class TaskViewComponent {

  @Input() taskStatus: string = 'N';
  
  @Input() hideAddText: boolean = false;
  dtProjectTask: Array<Object>;
  dtProject: Array<{ AbsEntry: number, Code: string, Name: string }>;
  dtTask: Array<any>;
  dtUser: Array<{ USERID: any, U_NAME: any }>;
  dtStructure: Array<any>;
  addText: string = "";
  adding: boolean = false;

 


  changeStatus: boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpClient: HttpClient,
    private common: Common,
    private httpHelper: HttpClientHelper,
    private actionSheet: ActionSheetController,
    public setting: Settings) {
    
  }


  ngOnInit() {
   
    this.loadTask();
    this.loadUser();
    this.loadProject();

    
  }
  
  clickBack() {
    var navOptions = { animation: "ios-transition", duration: 600 };
    this.navCtrl.pop(navOptions);
  }

  async loadTask() {

    var result = await this.httpClient.Task.loadTask(this.taskStatus) as Array<any>;
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
    if (this.taskStatus == "N") {
      this.dtTask.sort((a, b) => b.ClgCode - a.ClgCode);
    }
    if (this.taskStatus == "Y") {
      this.dtTask.sort((a, b) => b.CloseDate - a.CloseDate);
    }

    //add an ":" for endDate
    this.dtTask.forEach(task => {
      //format ENDTime and BeginTime from number HHmm
      //to correct Hour and Minute format HH:mm
     task.ENDTime=this.common.toNormalTime(task.ENDTime);
      task.BeginTime = this.common.toNormalTime(task.BeginTime);
      
    });

  }

 

  async loadUser() {
    var result = await this.httpClient.Common.getUserList();
    this.dtUser = result[1];
  }

  async loadProject() {
    var result = await this.httpClient.Project.loadProject();
    this.dtProject = result[1];
  }

  async loadProjectTask(projectId: number) {
    //reset value when reload Project
   
    var result = await this.httpClient.Project.loadProjectTask(projectId);
    this.dtProjectTask = result[1];
  }

  fillInfo(task: any) {
    //get clgCode from task
    //var clgCode=task.ClgCode;
    //load task from api 
    //=> add later
    //currently use data from dtTask
    //try navigate to task detail first
    var navOptions = { animation: "ios-transition", duration: 600 };
    this.navCtrl.push(TaskDetailPage, { task: task, dtUser: this.dtUser, isAdd: false }, navOptions);
    //  this.navCtrl.push(TaskDetailPage, {task: task});
  }

  saveTask(dt: any) {
    this.httpClient.Task.saveTask(dt);
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

  

  async taskStatusChanged(changedTask: any) {
    console.log("Checked");
    //prevent too many task being completed
    if (this.changeStatus === true) return;

    this.changeStatus = true;
    //set task status
    if (changedTask.Closed === "N") {
      changedTask.Closed = "Y";
      changedTask.status = 2;
      changedTask.CloseDate= this.common.adjustForTimezone(new Date());
    }
    else if (changedTask.Closed === "Y") {
      changedTask.Closed = "N";
      changedTask.status = 1;
    }
    setTimeout(() => {
      if (this.taskStatus !== "") {
        this.dtTask = this.dtTask.filter(task => task !== changedTask || (task === changedTask && changedTask.Closed === this.taskStatus));
      }  
      this.changeStatus = false;  
    }, 450);
    var ds = { Table1: [changedTask] };
    var result = await this.httpClient.Task.changeTaskStatus(ds);
    if (result!==undefined && result.Message !== "") {
      this.common.createToast(result.Message, 0);
    }
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
      //add default create date
      var currentDate = this.common.adjustForTimezone(new Date());

      task.CntctDate = currentDate;

      //if no  Start Date
      // (!!task.Recontact means task.Reconnect is null or empty)
      //=>add a default Start Date
      if (!task.Recontact) {
        task.Recontact = currentDate.toJSON().slice(0, 10);

        var currentTime = currentDate.toTimeString().slice(0, 5).replace(":", "");

        task.BeginTime = currentTime;
      }
      task.GroupUser = this.setting.settings.userSign.toString();

      var dt = [task];
      var ds = { Table1: dt };
      var result = await this.httpClient.Task.addTask(ds);

      if (result.Message != "") {
        this.common.createToast(result.Message, 0);
        return;
      }
      //set task clg code = new clg code get from api
      task.ClgCode = result.Content;
      //if task status ===""
      //=> use as sub task list
      //add new task at bottom instead of top
      if (this.taskStatus === "") {
        this.dtTask.push(task);
      }
      else {
        this.dtTask.unshift(task);
      }  
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

  

  getUserName(groupUser: string): string {
    if (this.dtUser === undefined) return "";
    if (groupUser === undefined || groupUser === null) return "";
    var userList = groupUser.split(";");
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


  isOverdue(task: any) {
    try {
      var dueDate = new Date(task.endDate);
      dueDate = this.common.addTimeToDate(dueDate, task.ENDTime);
      var currentDate = this.common.adjustForTimezone(new Date());
      if (dueDate < currentDate) {
        return true;
      }
    }
    catch (error) {

    }
    return false;
  }



  

}
