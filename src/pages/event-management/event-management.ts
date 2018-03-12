import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ActionSheetController, PopoverController, LoadingController, FabContainer } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Settings, Common, MsgType } from '../../providers/providers';
import { HttpClient } from '../../http-client/http-client';
import { isNumber } from 'ionic-angular/util/util';

import { TypeCode } from '../../lib/Enums/RsaEnum';
import { EventDetailPage } from '../event-detail/event-detail';
import { GlobalData } from '../login/login';
import { TaskDetailPage } from '../../pages/task-detail/task-detail';
/*s
  Generated class for the event_management page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'my-app',
  templateUrl: 'event-management.html'
  //template: ''

})


export class EventManagementPage1 {
  // Our translated text strings
  private errorDataNotFound: string;
  private dtEvent: any;
  private dtStruct: any;
  dtUser: Array<any>;
  skip: number = 0;
  limit: number = 15;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public translateService: TranslateService,
    public common: Common,
    public setting: Settings,
    private httpClient: HttpClient,
    private actionSheet: ActionSheetController,
    private popCtrl: PopoverController,
    private loadingCtrl: LoadingController
  ) {
    this.dtUser = this.navParams.get("dtUser");
    this.translateService.get('DATA_NOT_FOUND').subscribe((value) => {
      this.errorDataNotFound = value;
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad event_managementPage');

    this.presentLoadingDefault();
    this.getTableColumns();
    this.loadUser();
    //this.loadCalendar();
  }

  getUserName(groupUser: string): string {
    if (this.dtUser === undefined) return "";
    if (groupUser === undefined || groupUser === null) return "";
    var userList = groupUser.split(";");
    var resultUsers = this.dtUser.filter(user => userList.indexOf(user.USERID.toString()) > -1);
    var value = "";
    for (var i = 0; i < resultUsers.length; i++) {
      value += resultUsers[i].U_NAME + "; ";
    }
    if (value.length > 0) {
      value = value.slice(0, value.length - 2);
    }

    return value;
  }

  showCalendar() {
    try {
      this.navCtrl.push(CalendarPage);
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }
  async presentLoadingDefault() {
    try {
      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: "Please wait...",
        duration: 5000
      });

      loading.present();
      await this.initializeItems();
      loading.dismiss();
      // setTimeout(() => {
      //   loading.dismiss();
      // }, 5000);
    } catch (error) {
      this.common.createToast(error, 0);
    }

  }

  async initializeItems() {
    let jsonTest = this.prepareDtSearch();
    await this.loadEvent(jsonTest);
  }



  doRefresh(refresher) {
    try {
      console.log('Begin async operation', refresher);
      this.skip = 0;
      setTimeout(() => {
        this.initializeItems();
        console.log('Async operation has ended');
        refresher.complete();
      }, 2000);
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }

  doInfinite(infiniteScroll) {
    try {
      console.log('Begin async operation');

      setTimeout(() => {
        this.initializeItems();

        console.log('Async operation has ended');

        infiniteScroll.complete();
      }, 500);
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }

  //Searching...
  async onInput(ev: any) {
    try {
      // Reset items back to all of the items
      await this.initializeItems();
      // set val to the value of the searchbar
      let val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.dtEvent = this.dtEvent.filter((item) => {
          return (item.Details.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }

  onCancel(ev: any) {
    this.initializeItems();
  }
  async loadUser() {
    try {
      var result = await this.httpClient.Common.getUserList();
      this.dtUser = result[1];
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }


  fillInfo(event: any) {
    try {
      this.navCtrl.push(EventDetailPage, { event: event, isAdd: false, callback: this.callback });
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }

  addNewEvent() {
    try {
      let newEvent: any = {};
      newEvent.GroupUser = GlobalData.USERID.toString();
      newEvent.Recontact = new Date().toISOString();
      newEvent.endDate = new Date().toISOString();
      newEvent.ClgCode = 0;
      newEvent.BeginTime = 0;
      newEvent.ENDTime = 100;
      newEvent.RecurPat = "N";
      newEvent.SeStartDat = new Date().toISOString();
      newEvent.Interval = 1;
      newEvent.MaxOccur = 1;
      newEvent.AllDayEvent = true;
      newEvent.GroupEmployee = "";
      newEvent.DayInMonth = new Date().getDate();
      newEvent.Monday = "N";
      newEvent.Tuesday = "N";
      newEvent.Wednesday = "N";
      newEvent.Thursday = "N";
      newEvent.Friday = "N";
      newEvent.Saturday = "N";
      newEvent.Sunday = "N";
      newEvent.AllUserInvite = "N";
      newEvent.AllUserShare = "N";
      newEvent.AllEmplInvite = "N";
      newEvent.AllEmplShare = "N";
      newEvent.CntctDate = new Date().toISOString();
      newEvent.Reminder = "N";
      newEvent.RemQty = 15;
      newEvent.RemType = "M";
      newEvent.EndType = "N";
      newEvent.SubOption = 1;
      this.navCtrl.push(EventDetailPage, { event: newEvent, isAdd: true, callback: this.callback });
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }

  callback = (params) => {

    return new Promise((resolve, reject) => {
      var event = params;
      if (event) {
        this.dtEvent.push(event);
        resolve();
      }
    });
  }

  showActionSheet(event: any) {
    try {
      let sheet = this.actionSheet.create({
        title: '',
        buttons: [
          {
            text: 'Remove',
            handler: () => { this.deleteEvent(event); }
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
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }

  deleteEvent(removedEvent: any) {
    try {
      //array of columns
      let collumns = this.dtStruct[0];
      //array of rows (với các properties là các columns tương ứng)
      let rows = [];
      //object row given by dx-datagrid: chứa toàn bộ giá trị của các trường
      rows.push(removedEvent);

      //dùng hàm chuyển từ dạng json chỉ chứa các row về dạng json chuẩn APZ (có Apz-Columns và Apz-Rows)
      //truyền vào mảng gồm các Row và 1 mảng chứa thông tin của các cột
      let table = this.common.ToApzJson(rows, collumns);

      let clgCode = removedEvent['ClgCode'];
      if (parseInt(clgCode) != 0 && isNumber(clgCode)) {
        this.httpClient.Event.deleteEvent(table).then(result => {
          if (result == "") {
            this.common.createToast("Delete successfully!", MsgType.success);
            //remove event from list
            this.dtEvent = this.dtEvent.filter(event => event !== removedEvent);
            return;
          }
          else {
            this.common.createToast(result["Message"], MsgType.error);
          }
          console.log(result);
        }
          , (err) => {
            this.common.createToast(err, MsgType.error);
          }
        );
      }
    } catch (error) {
      this.common.createToast(error, MsgType.error);
    }
  }


  //#region Old COde
  prepareDtSearch(): any {
    try {
      let cols = [];
      let col1 = {
        "Name": "userCode",
        "Type": "String",
        "dflt": null
      };

      let col2 = {
        "Name": "startDate",
        "Type": "DateTime",
        "dflt": null
      };

      let col3 = {
        "Name": "endDate",
        "Type": "DateTime",
        "dflt": null
      };
      let col4 = {
        "Name": "skip",
        "Type": "Int32",
        "dflt": null
      };
      let col5 = {
        "Name": "limit",
        "Type": "Int32",
        "dflt": null
      };
      cols.push(col1);
      cols.push(col2);
      cols.push(col3);
      cols.push(col4);
      cols.push(col5);

      let rows = [{
        "startDate": "",
        "userCode": GlobalData.UserCodeLogin,
        "endDate": "",
        "skip": this.skip,
        "limit": this.limit
      }];

      let dt = this.common.ToApzJson(rows, cols);
      return dt;
    } catch (error) {
      console.log(error);
    }
  }
  getTableColumns() {
    let tableName: string = "APZ_OCLG";
    this.httpClient.Common.getTableColumns(tableName).then(result => {
      this.dtStruct = result;
      console.log(result);
    });
  }

  async loadEvent(data: any) {
    try {
      var result: any = [];
      var rs = await this.httpClient.Event.loadEvent(data);
      result = rs;
      this.dtEvent = [];
      if (result.length > 0) {
        for (let record of result) {
          this.dtEvent.push(record);
        }
        this.limit += 10;
      }

    } catch (error) {
      this.common.createToast(error, MsgType.error);
    }

  }
  showDetails: boolean = true;
  icon: string = "arrow-dropup";
  toggleDetails() {
    if (this.showDetails) {
      this.showDetails = false;
      this.icon = "arrow-dropup";
    } else {
      this.showDetails = true;
      this.icon = "arrow-dropdown";
    }
  }
  //#endregion

}



@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  recurPats: any;
  event: any;

  constructor(public viewCtrl: ViewController,
    public navParams: NavParams,
    private httpClient: HttpClient,
    public common: Common,
    public navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    this.loadCalendar();
  }

  //#region Calendar
  eventSource: any[];
  viewTitle;
  isToday: boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    locale: 'vi-VN'
  }; // these are the variable used by the calendar.
  start: string = new Date().toISOString();
  end: string = new Date().toISOString()
  selectedInterval: Date = new Date();
  async processLoad() {
    try {
      let cols = [];
      let col1 = {
        "Name": "userCode",
        "Type": "String",
        "dflt": null
      };

      let col2 = {
        "Name": "startDate",
        "Type": "DateTime",
        "dflt": null
      };

      let col3 = {
        "Name": "endDate",
        "Type": "DateTime",
        "dflt": null
      };
      cols.push(col1);
      cols.push(col2);
      cols.push(col3);
      var param: any = {};
      let rows: any = [];
      param.userCode = GlobalData.UserCodeLogin;
      param.startDate = this.start;
      param.endDate = this.end;
      rows.push(param);
      let dt = this.common.ToApzJson(rows, cols);

      var result = await this.httpClient.Calendar.loadCalendar(dt);
      var listEvent: any = [];
      this.eventSource = [];
      if (result) {
        listEvent = result;
        listEvent.forEach(element => {
          let event: any = {};
          event.id = element.ClgCode;
          event.title = element.Details;
          event.action = element.Action;
          let startDate = new Date(element.Recontact);
          let endDate = new Date(element.endDate);
          let beginTimeString = this.common.toNormalTime(element.BeginTime);
          let endTimeString = this.common.toNormalTime(element.ENDTime);
          let beginHour: any = 0;
          let beginMin: any = 0;
          if (beginTimeString) {
            beginHour = beginTimeString.split(":")[0];
            beginMin = beginTimeString.split(":")[1];
          }
          let endHour: any = 0;
          let endMin: any = 0;
          if (endTimeString) {
            endHour = endTimeString.split(":")[0];
            endMin = endTimeString.split(":")[1];
          }

          event.startTime = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), beginHour, beginMin);
          event.endTime = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endHour, endMin);
          event.detail = element.Notes;
          event.location = element.LocationCode;
          event.allDay = element.AllDayEvent;
          this.eventSource.push(event);

        });
      }


    } catch (error) {
      this.common.createToast(error, MsgType.error);
    }

  }

  async loadCalendar() {
    try {
      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: "Please wait...",
        duration: 5000
      });

      loading.present();
      await this.processLoad();
      loading.dismiss();
      // setTimeout(() => {
      //   loading.dismiss();
      // }, 5000);
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }


  addNewEvent(fab: FabContainer) {
    try {
      let newEvent: any = {};
      newEvent.GroupUser = GlobalData.USERID.toString();
      newEvent.Recontact = this.selectedInterval.toISOString();
      newEvent.endDate = this.selectedInterval.toISOString();
      newEvent.ClgCode = 0;
      newEvent.BeginTime = 0;
      newEvent.ENDTime = 100;
      newEvent.RecurPat = "N";
      newEvent.SeStartDat = this.selectedInterval.toISOString();
      newEvent.Interval = 1;
      newEvent.MaxOccur = 1;
      newEvent.AllDayEvent = true;
      newEvent.GroupEmployee = "";
      newEvent.DayInMonth = this.selectedInterval.getDate();
      newEvent.Monday = "N";
      newEvent.Tuesday = "N";
      newEvent.Wednesday = "N";
      newEvent.Thursday = "N";
      newEvent.Friday = "N";
      newEvent.Saturday = "N";
      newEvent.Sunday = "N";
      newEvent.AllUserInvite = "N";
      newEvent.AllUserShare = "N";
      newEvent.AllEmplInvite = "N";
      newEvent.AllEmplShare = "N";
      newEvent.CntctDate = new Date().toISOString();
      newEvent.Reminder = "N";
      newEvent.RemQty = 15;
      newEvent.RemType = "M";
      newEvent.EndType = "N";
      newEvent.SubOption = 1;
      fab.close();
      this.navCtrl.push(EventDetailPage, { event: newEvent, isAdd: true });
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onEventSelected(event) {
    if (event.action == "V") {
      this.httpClient.Event.loadEventByCode(event.id, "manager").then((result) => {
        let selectedEvent: any;
        if (result[0]) {
          selectedEvent = result[0];

          this.navCtrl.push(EventDetailPage, { event: selectedEvent, isAdd: false });
        }
        else {
          this.common.createToast("This event had been removed!", MsgType.error);
        }

      });
    }
    else if (event.action == "T") {
      this.httpClient.Event.loadSingleTask(event.id, GlobalData.UserCodeLogin).then((result) => {
        let selectedTask: any;
        if (result[0]) {
          selectedTask = result[0];

          this.navCtrl.push(TaskDetailPage, { task: selectedTask, isAdd: false });
        }
        else {
          this.common.createToast("This task had been removed!", MsgType.error);
        }

      });
    }
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title + event.location + event.notes);

  }
  changeMode(mode) {
    this.calendar.mode = mode;
  }
  today() {
    this.calendar.currentDate = new Date();
  }
  onTimeSelected(ev) {
    this.selectedInterval = ev.selectedTime;
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }
  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime.toISOString() + ', endTime: ' + ev.endTime.toISOString());
    this.start = ev.startTime.toISOString();
    this.end = ev.endTime.toISOString();
    this.processLoad();
  }
  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };

  doRefresh(refresher) {
    try {
      console.log('Begin async operation', refresher);

      setTimeout(() => {
        this.processLoad().then(rs => {
          console.log('Async operation has ended');
          refresher.complete();
        });
        
      }, 2000);
    } catch (error) {
      this.common.createToast(error, 0);
    }
  }
  //#endregion

}