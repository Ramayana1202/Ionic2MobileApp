import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventManagementPage1 } from './event-management';

@NgModule({
  declarations: [
    EventManagementPage1,
  ],
  imports: [
    IonicPageModule.forChild(EventManagementPage1),
  ],
})
export class EventManagementPageModule { }
