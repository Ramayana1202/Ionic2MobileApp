import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, DateTime,ActionSheetController } from 'ionic-angular';
import { HttpClient } from '../../http-client/http-client';
import { Common, MsgType } from '../../providers/common';
import { EventManagementPage1 } from '../event-management/event-management';
import { GlobalData } from '../login/login';

/**
 * Generated class for the EventDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
type CallBackDelegate = (params: any) => void;
@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})


export class EventDetailPage {

  //#region Vars
  dtComment: Array<Object> = [];
  dtBP: Array<Object> = [];
  private dtLocation: any;
  event: any;
  dtUser: any;
  listRecur: any;
  isAdd: boolean;
  visible: boolean = false;
  tab = "detail";
  commentText: string = "";
  beginTimeString: string;
  endTimeString: string;
  groupUser: Array<any> = [];
  adding: boolean = false;
  private dtStruct: any;
  callbackDelegate: (any) => Promise<any>;
  //#endregion
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient,
    private common: Common,
    public modalCtrl: ModalController,
    private actionSheet: ActionSheetController,
    //detailMode:DetailMode = DetailMode.Update
  ) {

    // var taskParams=navParams.get('task');
    //this.task=taskParams;
    // this.mode=detailMode;
    this.event = navParams.get('event');
    this.isAdd = navParams.get('isAdd');
    this.callbackDelegate = navParams.get('callback');
    if (this.event.GroupUser) {
      this.groupUser = this.event.GroupUser.split(";");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
    this.getTableColumns();
    this.loadDefaultDate();
    if (!this.isAdd) {
      this.loadComment();
    }
    else {
      this.recontactChanged();
    }
    this.loadBusinessPartner();
    this.loadRecurPat();
    this.loadLocation();
    this.loadUser();
  }

  async loadLocation() {
    try {
      let result = await this.httpClient.Event.loadMettingLocation();
      if (result === undefined)
        return;
      this.dtLocation = result;
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }

  async loadUser() {
    try {
      var result = await this.httpClient.Common.getUserList();
      this.dtUser = result[1];
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }
  recontactChanged() {
    try {
      var dateChanged = new Date(this.event.Recontact.toString());
      this.event.endDate = this.event.Recontact;
      this.event.SeStartDat = this.event.Recontact;
      this.event.Monday = "N";
      this.event.Tuesday = "N";
      this.event.Wednesday = "N";
      this.event.Thursday = "N";
      this.event.Friday = "N";
      this.event.Saturday = "N";
      this.event.Sunday = "N";
      this.getDay(dateChanged);
      this.getDayOfMonth(dateChanged);
      this.getMonth(dateChanged);
      this.getWeekOfMonth(dateChanged);
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }
  getDay(date: Date) {
    //var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.event.DayOfWeek = date.getDay() + 1;
    //days[date.getDay()];
  }

  getDayOfMonth(date: Date) {
    this.event.DayInMonth = date.getDate();
  }

  getMonth(date: Date) {
    //var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.event.Month = date.getMonth() + 1;
    // months[date.getMonth()];
  }

  getWeekOfMonth(date: Date) {
    var weekOfMonth = ['First', 'Second', 'Third', 'Fourth', 'Last'];
    this.event.Week = 1 | date.getDate() / 7;
    //weekOfMonth[0 | date.getDate() / 7];
  }
  //#region  Load Data
  loadRecurPat() {
    try {
      this.listRecur = new Array();
      let pat = {
        "Code": "N",
        "Name": "None"
      };

      let pat2 = {
        "Code": "D",
        "Name": "Daily"
      };

      let pat3 = {
        "Code": "W",
        "Name": "Weekly"
      };

      let pat4 = {
        "Code": "M",
        "Name": "Monthly"
      };

      let pat5 = {
        "Code": "A",
        "Name": "Annualy"
      };
      this.listRecur.push(pat);
      this.listRecur.push(pat2);
      this.listRecur.push(pat3);
      this.listRecur.push(pat4);
      this.listRecur.push(pat5);
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }
  presentRecurModal(event: any) {
    try {
      let profileModal = this.modalCtrl.create(RecurrencePage, { event: event, listRecur: this.listRecur });
      profileModal.onDidDismiss(data => {
        //this.event = data;
        console.log(data);
      });
      profileModal.present();
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }

  async loadBusinessPartner() {
    try {
      var result = await this.httpClient.CFL.loadBusinessPartner();
      this.dtBP = result[1];
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }

  loadDefaultDate() {
    try {
      if (!this.event.AllDayEvent) {
        if (this.event.BeginTime === null || this.event.BeginTime === undefined) {
          this.event.BeginTime = 1000;
        }
        if (this.event.ENDTime === null || this.event.ENDTime === undefined) {
          this.event.ENDTime = this.event.BeginTime + 100;
        }
      }
      this.beginTimeString = this.common.toNormalTime(this.event.BeginTime);
      this.endTimeString = this.common.toNormalTime(this.event.ENDTime);
    } catch (error) {
      this.common.createToast(error, 0);
    }

  }

  getUserName(groupUser: string): string {
    try {
      if (this.dtUser === undefined) return "";
      if (groupUser === undefined || groupUser === null) return "";
      var userList = groupUser.toString().split(";");
      var resultUsers = this.dtUser.filter(user => userList.indexOf(user.USERID.toString()) > -1);
      var value = "";
      for (var i = 0; i < resultUsers.length; i++) {
        value += resultUsers[i].U_NAME + "; ";
      }
      if (value.length > 0) {
        value = value.slice(0, value.length - 2);
      }

      return value;
    } catch (error) {
      this.common.createToast(error, 0);
    }

  }

  async loadComment() {
    try {
      var result = await this.httpClient.Comment.loadComment(this.event.ClgCode, '1470000129');
      if (result[0]) {
        this.dtComment = result[0];
      }
      console.log("Loaded comments");
    } catch (error) {
      this.common.createToast(error, 0);
    }

  }

  getTableColumns() {
    try {
      let tableName: string = "APZ_OCLG";
      this.httpClient.Common.getTableColumns(tableName).then(result => {
        this.dtStruct = result;
        console.log(result);
      });
    } catch (error) {
      this.common.createToast(error, 0);
    }

  }
  //#endregion

  //#region Processing
  clickComment(comment: any) {
    let sheet = this.actionSheet.create({
      title: '',
      buttons: [
        {
          text: 'Remove',
          handler: () => { 
            //this.removeComment(comment); 
           }
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
     //remove comment in db
     var result = await this.httpClient.Task.removeTask([comment]);
     if (result !== undefined && result !== "") {
       this.common.createToast(result, 0);
       return;
     }
     //remove comment from list
     this.dtComment = this.dtComment.filter(cmt => cmt !== comment);
 
     console.log(comment);
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
      var event: any = {};
      //set ClgCode= 0
      event.ID = this.event.ClgCode;
      event.ObjType = "1470000129";
      event.CmtCode = 0;
      //TODO: fix to current user
      event.UserSign = GlobalData.USERID;
      //fix this too
      event.UserName = GlobalData.UserCodeLogin;
      event.CreatedTime = this.common.adjustForTimezone(new Date());
      event.Content = taskText;

      var dt = [event];
      var ds = { "CommentInfo": dt, "AdditionNotifyUser": [1, 2, 3] };
      var result = await this.httpClient.Comment.addComment(ds);

      if (result.Message != "") {
        this.common.createToast(result.Message, 0);
        return;
      }
      //set task clg code = new clg code get from api
      event.CmtCode = result.Content;
      this.dtComment.push(event);
      this.commentText = "";
    }
    catch (error) {
      this.common.createToast(error, 0);
    }
    finally {
      this.adding = false;
    }

  }

  async addEvent() {
    try {
      if (this.event.Details === "" || this.event.Details === null || this.event.Details === undefined) {
        this.common.createToast("Event details can not be empty!", MsgType.error);
        return;
      }
      var currentDate = new Date();

      this.event.ClgCode = 0;
      this.event.Action = "V";
      this.event.CntctDate = currentDate;
      this.event.IsRemoved = "N";
      if (this.endTimeString != "") {
        this.event.ENDTime = this.common.toGluedTime(this.endTimeString);
      }
      if (this.beginTimeString != "") {
        this.event.BeginTime = this.common.toGluedTime(this.beginTimeString);
      }
      if (!!this.event.Recontact) {
        this.event.Recontact = currentDate.toJSON().slice(0, 10);

        var currentTime = new Date().toTimeString().slice(0, 5).replace(":", "");

        this.event.BeginTime = currentTime;
      }
      if (this.groupUser) {
        this.event.GroupUser = this.groupUser.join(";");
      }

      let collumns = this.dtStruct[0];
      let rows = [];
      rows.push(this.event);
      let table = this.common.ToApzJson(rows, collumns);
      let tables = [];
      tables.push(table);
      let dataSet = this.common.ToApzJsonDataSet(tables);
      var result = await this.httpClient.Event.addEvent(dataSet);

      if (result["Message"] == "") {
        this.common.createToast("Add new successfully!", MsgType.success);
        this.callbackDelegate(this.event);
        this.navCtrl.pop();
        return;
      }
      else {
        this.common.createToast(result["Message"], MsgType.error);
      }
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }

  async saveEvent() {
    try {
      if (this.event.Details === "") {
        this.common.createToast("Event details can not be empty!", MsgType.error);
        return;
      }
      this.event.ENDTime = this.common.toGluedTime(this.endTimeString);
      this.event.BeginTime = this.common.toGluedTime(this.beginTimeString);
      if (this.groupUser) {
        this.event.GroupUser = this.groupUser.join(";");
      }
      let collumns = this.dtStruct[0];
      let rows = [];
      rows.push(this.event);
      let table = this.common.ToApzJson(rows, collumns);
      let tables = [];
      tables.push(table);
      let dataSet = this.common.ToApzJsonDataSet(tables);
      var result = await this.httpClient.Event.saveEvent(dataSet);

      if (result["Message"] == "") {
        this.common.createToast("Save successfully!", MsgType.success);
        this.navCtrl.pop();
        return;
      }
      else {
        this.common.createToast(result["Message"], MsgType.error);
      }
    } catch (error) {
      this.common.createToast(error, 0);
    }


  }
  //#endregion

}

@Component({
  selector: 'page-recurrence',
  templateUrl: 'recurrence.html',
})
export class RecurrencePage {
  recurPats: any;
  event: any;
  monColor: string;
  tueColor: string;
  wedColor: string;
  thuColor: string;
  friColor: string;
  satColor: string;
  sunColor: string;
  constructor(public viewCtrl: ViewController,
    public navParams: NavParams,
  ) {

    this.event = navParams.get('event');
    this.recurPats = navParams.get('listRecur');
  }

  ionViewDidLoad() {

  }

  checkWeekDays(weekDays: string) {
    try {
      switch (weekDays) {
        case "mon":
          this.setValueWeekDay("Monday", "monColor");
          break;
        case "tue":
          this.setValueWeekDay("Tuesday", "tueColor");
          break;
        case "wed":
          this.setValueWeekDay("Wednesday", "wedColor");
          break;
        case "thu":
          this.setValueWeekDay("Thursday", "thuColor");
          break;
        case "fri":
          this.setValueWeekDay("Friday", "friColor");
          break;
        case "sat":
          this.setValueWeekDay("Saturday", "satColor");
          break;
        case "sun":
          this.setValueWeekDay("Sunday", "sunColor");
          break;

        default:
          break;
      }
    } catch (error) {

    }
  }

  setValueWeekDay(weekday: string, color: any) {
    if (this.event[weekday] == "Y") {
      this.event[weekday] = "N";
    }
    else {
      this.event[weekday] = "Y";

    }
    if (this.event[weekday] === "Y") {
      this[color] = "primary";
    }
    else {
      this[color] = "black";
    }
  }

  dismiss(event: any) {
    //let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(event);
  }

}