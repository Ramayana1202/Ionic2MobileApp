import { Component } from "@angular/core";
import { ViewController, NavController, App } from "ionic-angular";
import { TaskDetailPage } from "../task-detail/task-detail";
import { TaskListPage } from "../task-list/task-list";
import { TaskManagementPage } from "./task-management";

@Component({
    template: `
      <ion-list>
        <button ion-item (click)="showCompleted()">Show Completed Task</button>
      </ion-list>
    `
  })
  export class MorePopoverPage {
    constructor(public viewCtrl: ViewController,
      public navCtrl: NavController,
      public appCtrl: App) { }
  
    showCompleted() {
        this.viewCtrl.dismiss();
      var navOptions = { animation: "ios-transition", duration: 600 };
      
      this.appCtrl.getRootNavs()[0].push(TaskListPage, { taskStatus: "Y" }, navOptions);
      //this.navCtrl.setRoot(TaskManagementPage);
     // this.navCtrl.push(TaskListPage, { taskStatus: "Y" }, navOptions);
    }
  }