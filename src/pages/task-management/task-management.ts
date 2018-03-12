import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, PopoverController } from 'ionic-angular';
import { HttpClient, HttpResult } from '../../http-client/http-client';
import { TaskDetailPage } from '../task-detail/task-detail';
import { isUndefined } from 'ionic-angular/util/util';
import { Pipe, PipeTransform } from "@angular/core";
import { Common } from '../../providers/common';
import { HubHelper } from '../../providers/hub-helper';
import { HttpClientHelper } from '../../http-client/http-helper';
import { MorePopoverPage } from './more-popover';
import { TaskListPage } from '../task-list/task-list';
import { ViewChild } from '@angular/core';
import { TaskViewComponent } from '../../components/task-view/task-view';
import { SortPopoverPage } from './sort-popover';
//import 'jquery';
//import 'signalr';
/**
 * Generated class for the TaskManagementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-management',
  templateUrl: 'task-management.html',

})
export class TaskManagementPage {

  @ViewChild(TaskViewComponent) taskView: TaskViewComponent;
  hubHelper: HubHelper;


  constructor(public navCtrl: NavController,
    private httpClient: HttpClient,
    private common: Common,
    public popoverCtrl: PopoverController) {

  }

  ionViewDidLoad() {
    

  }

  sendNotify(data: any) {
    this.hubHelper.hubProxy.invoke("SendNotifiedToClient", { NotifiedUser: "1", Detail: data.Detail });
  }

  async updateNotification(content: any) {

    // console.log(content.Detail);
    // var title = "A new task was assigned to you";
    // var options = { body: content.Detail, icon: "" };
    // var allowNotify = await Notification.requestPermission();
    // if (allowNotify != "granted") return;
    // var notify = new Notification(title, options);
    // setTimeout(notify.close.bind(notify), 4000);

  }

  showSort(event) {
    let popover = this.popoverCtrl.create(SortPopoverPage, {dtTask:this.taskView.dtTask});
    popover.present({ ev: event });
  }


  showMore(event) {
    let popover = this.popoverCtrl.create(MorePopoverPage);
    popover.present({ ev: event });
  }

 

}










