import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { ReportCompletePage } from '../pages/report-complete/report-complete';
import { InventoryTransferPage } from '../pages/inventory-transfer/inventory-transfer';
import { BinConfirmPage } from '../pages/bin-confirm/bin-confirm';
import { PickedConfirmPage } from '../pages/picked-confirm/picked-confirm';
import { EventManagementPage1,CalendarPage } from '../pages/event-management/event-management';

import { Api } from '../providers/api';
import { Settings } from '../providers/settings';
import { Login } from '../providers/login';
import { ReportComplete } from '../providers/inventory/report-complete';
import { Common } from '../providers/common';
import { InventoryTransfers } from '../providers/inventory/inventory-transfers';
import { PickedConfirm } from '../providers/inventory/picked-confirm';
import { EventProvider } from '../providers/event/event';

import { HttpClient } from '../http-client/http-client';
import { HttpClientHelper } from './../http-client/http-helper';
import { PickingClient } from '../http-client/picking-client';

import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TaskProvider } from '../providers/task/task';
import { TaskManagementPage } from '../pages/task-management/task-management';

import { TaskDetailPage } from '../pages/task-detail/task-detail';

import { DevExtremeModule } from 'devextreme-angular';

import { CommonsClient } from '../http-client/common-client';
import { AutosizeDirective } from '../directives/autosize/autosize';
import { ProjectProvider } from '../providers/project/project';
import { MorePopoverPage } from '../pages/task-management/more-popover';
import { TaskListPage } from '../pages/task-list/task-list';
import { CflProvider } from '../providers/cfl/cfl';
import { CommentProvider } from '../providers/comment/comment';
import { TaskViewComponent } from '../components/task-view/task-view';
import { SortPopoverPage } from '../pages/task-management/sort-popover';

import { NgCalendarModule  } from 'ionic2-calendar';
import { EventDetailPage,RecurrencePage } from '../pages/event-detail/event-detail';
import { CalendarProvider } from '../providers/calendar/calendar';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    apiAdress: 'http://172.16.8.52:8000/api',
    domain: 'apzon',
    company: 'IRS_DEV',
    userName: 'manager',
    barcodeInternal: true,
    defaultPage: 'ReportCompletePage'
  });
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SettingsPage,
    ReportCompletePage,
    InventoryTransferPage,
    BinConfirmPage,
    PickedConfirmPage,
   EventManagementPage1,
   EventDetailPage,
   TaskManagementPage,
    TaskDetailPage,
    AutosizeDirective,
    MorePopoverPage,
    TaskListPage,
    TaskViewComponent,
   SortPopoverPage,
   RecurrencePage,
   CalendarPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DevExtremeModule, 
    NgCalendarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    DevExtremeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SettingsPage,
    ReportCompletePage,
    InventoryTransferPage,
    BinConfirmPage,
    PickedConfirmPage,
    EventManagementPage1,
    TaskManagementPage,
    TaskDetailPage,
    EventDetailPage,
    MorePopoverPage,
    TaskListPage,
    TaskViewComponent,
    SortPopoverPage,
    RecurrencePage,
    CalendarPage
  ],
  providers: [
    Api,
    Login,
    ReportComplete,
    InventoryTransfers,
    Common,
    Camera,
    BarcodeScanner,
    SplashScreen,
    StatusBar,
    PickedConfirm,
    HttpClient,
    PickingClient,
    HttpClientHelper,
    EventProvider,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TaskProvider,
    CommonsClient,
    ProjectProvider,
    CflProvider,
    CommentProvider,
CalendarProvider
  ],

})
export class AppModule { }
