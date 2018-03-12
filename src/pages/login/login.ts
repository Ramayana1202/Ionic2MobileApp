import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { MainPage } from '../../pages/pages';
import { InventoryTransferPage } from '../../pages/inventory-transfer/inventory-transfer';
import { PickedConfirmPage } from '../../pages/picked-confirm/picked-confirm';
import { SettingsPage } from '../../pages/settings/settings';

import { Login, Common, MsgType, Settings } from '../../providers/providers';
import {Encrypt, Decrypt} from '../../lib/ApzRsa'
import { HubHelper } from '../../providers/hub-helper';
import { HttpClientHelper } from '../../http-client/http-helper';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: {
    Doimain: string,
    UserName: string,
    Password: string,
    DbName: string,
    ClientVersion: string,
    BuildVersion: string
  } =
  {
    Doimain: '',
    UserName: '',
    Password: '',
    DbName: '',
    ClientVersion: '',
    BuildVersion: ''
  };
  listCompany: any;
  isLogin = false;
  disable = false;

  hubHelper: HubHelper;

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public login: Login,
    public translateService: TranslateService,
    public common: Common,
    public setting: Settings,
    private httpHelper: HttpClientHelper,) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  ionViewDidEnter() {
    this.getDefautLogin();
  }

  ionViewDidLoad() {
    if (this.login._login != null) {
      this.isLogin = true;
    
    this.hubHelper = new HubHelper();
    this.hubHelper.domain = this.httpHelper.url + "/SignalR";
    this.hubHelper.hubName = "notificationClient";
    this.hubHelper.addEvent("UpdateNotification", this.updateNotification.bind(this));
    this.hubHelper.start();
    }
  }

  async updateNotification(content: any) {
  
    console.log(content.Detail);
    var title = "A new task has been assigned to you";
    var options = { body: content.Detail, icon: "" };
    var allowNotify = await Notification.requestPermission();
    if (allowNotify != "granted") return;
    var notify = new Notification(title, options);
    setTimeout(notify.close.bind(notify), 6000);

  }

  domainChange() {
    this.login.loadCompany(this.account.Doimain)
      .subscribe(data => {
        this.listCompany = data;
      }, (err) => {
        this.createToast(err, MsgType.error);
      });
  }

  async getUserSign(nameLogin:string){
    try {
      var result = await this.login.getUserSign(nameLogin);
    GlobalData.USERID = result[0]["USERID"];
    } catch (err) {
      this.createToast(err, MsgType.error);
    }
   
  }

  async getUserLogin(userName: string){
    try {
      var result = await this.login.getUserLogin(userName);
      if(result[0]){
        GlobalData.UserCodeLogin = result[0]["USER_CODE"];
      }
    } catch (err) {
      this.createToast(err, MsgType.error);
    }
  }

  // Attempt to login in through Login service
  doLogin() {
    this.disable = true;
    this.login.login(this.account).subscribe((resp) => {
      console.log(resp.json().Message)
      var httpResult = resp.json();
      var message = Decrypt(httpResult.Message);
      if (message == 'success') {
        this.getUserSign(this.account.UserName);
        this.getUserLogin(this.account.UserName);
        switch (this.setting.settings.defaultPage) {
          case 'ReportCompletePage':
            this.navCtrl.setRoot(MainPage);
            break;
          case 'PickedConfirmPage':
            this.navCtrl.setRoot(PickedConfirmPage);
            break;
          default:
            this.navCtrl.setRoot(InventoryTransferPage);
            break;
        }

      } else {
        this.createToast(message, MsgType.error);
        this.disable = false;
      }
    }, (err) => {
      // Unable to log in
      this.createToast(err, MsgType.error);
      this.disable = false;
    });

  }

  loadCompany() {
    this.login.loadCompany(this.account.Doimain)
      .subscribe(data => {
        this.listCompany = data;
      }, (err) => {
        this.createToast(err, MsgType.error);
      });
  }

  loadCompany2() {
    this.login.loadCompany2(this.account.Doimain)
      .then(data => {
        this.listCompany = data;
      }, (err) => {
        this.createToast(err, MsgType.error);
      });
  }

  openSetting() {
    this.navCtrl.push(SettingsPage);
  }

  getDefautLogin() {
    //let er1 = Decrypt("svUhP9ZfY6jb1fbOHOSp3SBTZbs6kJo7NqboDhvUsS92yl5zxZ5QnkYzxtuArfklDtdWsjxpVqWsvY5V4PGqhuTilMFdxki6RszjJGh/KvrCpW5yWnu+WP2oABgBSjp5waytud1guzrGxgF2NKNxFn4j6ozYN3Je6bxsnvoNrW0gdq4bFmPS6TCw5WvtJmnAyrPlN4hGe5HUo6CKWI2zowwMmYd6HOJqtCQknOKinfE5/jKHy/eJ1dFIMUAO+RU8NjdUy9KAM8rHgtKaVlAoGJcqJPXujRVbvfqgwH1WceUwbzq1lCYNItdMQ6Q0mAfUGFi8DzDwTNXqhqr7JoKPBw==");
    let er1="manager";
    //let err = Encrypt("Công ty apzon");
    let err="Apzon";
    this.login.initApi().then(setting => {
      this.account.Doimain = err;
      this.account.DbName = setting.company;
      this.account.UserName = er1;
      this.loadCompany();
    },
      (err) => {
        this.createToast(err, MsgType.error);
      });
  }

  createToast(mesg: any, type: MsgType) {
    this.common.createToast(mesg, type);
  }

  

}

export class GlobalData {
  static USERID: number;
  static UserCodeLogin: string;

  constructor() {
      
  }
}
