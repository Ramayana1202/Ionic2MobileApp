import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskManagementPage } from './task-management';

@NgModule({
  declarations: [
    TaskManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskManagementPage),
  ],
})
export class TaskManagementPageModule {}
