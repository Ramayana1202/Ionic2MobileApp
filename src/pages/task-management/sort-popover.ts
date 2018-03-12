import { Component } from "@angular/core";
import { ViewController, NavController, App, NavParams } from "ionic-angular";
import { TaskDetailPage } from "../task-detail/task-detail";
import { TaskListPage } from "../task-list/task-list";
import { TaskManagementPage } from "./task-management";
import { Common } from "../../providers/common";

@Component({
  template: `
      <ion-list>
      <ion-list-header>Sort by</ion-list-header>
      <button ion-item (click)="sort('none')">(None)</button>
        <button ion-item (click)="sort('duedate')">Due Date</button>
      </ion-list>
    `
})
export class SortPopoverPage {
  dtTask: any;
  constructor(public viewCtrl: ViewController,
    public navCtrl: NavController,
    public appCtrl: App,
    private common: Common,
    private navParams: NavParams) { }


  ngOnInit() {
    this.dtTask = this.navParams.data.dtTask
      ;
  }
  sort(type: string) {
    if (!this.dtTask) return;
    switch (type) {
      case 'none':
        this.dtTask = this.dtTask.sort((a, b) => b.ClgCode - a.ClgCode);
      case 'duedate':
        this.dtTask = this.dtTask.sort((a, b) => this.common.addTimeToDate(a.endDate, a.ENDTime) - this.common.addTimeToDate(b.endDate, b.ENDTime));
    }
    this.viewCtrl.dismiss();

    //this.navCtrl.setRoot(TaskManagementPage);
    // this.navCtrl.push(TaskListPage, { taskStatus: "Y" }, navOptions);
  }
}