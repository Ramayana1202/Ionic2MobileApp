import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, PopoverController, Navbar } from 'ionic-angular';
import { HttpClient } from '../../http-client/http-client';
import { Common } from '../../providers/common';
import { HttpClientHelper } from '../../http-client/http-helper';
import { MorePopoverPage } from '../task-management/more-popover';
import { TaskDetailPage } from '../task-detail/task-detail';

/**
 * Generated class for the TaskListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html',
})
export class TaskListPage {
 
  @ViewChild(Navbar) navBar: Navbar;



  constructor(public navCtrl: NavController) {
    
  }


  ionViewDidLoad() {
    this.navBar.backButtonClick = this.clickBack.bind(this);
   

    
  }
  
  clickBack() {
    var navOptions = { animation: "ios-transition", duration: 600 };
    this.navCtrl.pop(navOptions);
  }

 

}
