import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api';
import { Settings } from './settings';
import {HttpClientHelper} from '../http-client/http-helper'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Encrypt, Decrypt } from '../lib/ApzRsa';
import { HttpClient } from '../http-client/http-client';



@Injectable()
export class Login {
  public listCompany: any;
  _login: any;

  constructor(public http: Http, public api: Api, public setting: Settings, public httpHelper:HttpClientHelper, public httpClient:HttpClient) {
  }

  initApi() {
    return this.setting.load().then(option => {
      this.api.url = option.apiAdress;
      this.httpHelper.url = option.apiAdress;
      return Promise.resolve(option);
    })
  }

  loadCompany(domain: string) {
    return this.api.get('Commons', 'GetDbList', [{ name: 'domain', value: domain }])
      .map(res => res.json())
  }

  loadCompany2(domain: string) {
    if (this.listCompany) {
      return Promise.resolve(this.listCompany);
    }

    return new Promise(resolve => {
      this.api.get('Commons', 'GetDbList', [{ name: 'domain', value: domain }])
        .map(res => res.json())
        .subscribe(data => {
          this.listCompany = data;
          resolve(this.listCompany);
          console.log(this.listCompany),
            Error => {
              console.log('Something went wrong!');
            }
        });
    });
  }

  saveLoginInfor(loginInfo: any) {
    this.setting.settings.domain = loginInfo.Doimain;
    this.setting.settings.company = loginInfo.DbName;
    this.setting.settings.userName = loginInfo.UserName;
    this.setting.settings.UserNameLogin = loginInfo.UserNameLogin;
    this.setting.settings.userSign=loginInfo.UserSign;
    this.setting.save();
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
 login(loginInfo) {
    var _loginInfo: any = {};
    _loginInfo.Doimain = Encrypt(loginInfo.Doimain);
    _loginInfo.DbName = Encrypt(loginInfo.DbName);
    _loginInfo.UserName = Encrypt(loginInfo.UserName);
    _loginInfo.Password = Encrypt(loginInfo.Password);
    _loginInfo.BuildVersion = Encrypt("000");
    _loginInfo.ClientVersion =Encrypt("2.00");
    let seq = this.api.post('LoginIRS', 'Login', _loginInfo).share();
    seq
      .map(res => res.json())
      .subscribe( res => {
        console.log(res);
        // If the API returned a successful response, mark the user as logged in
        if (Decrypt(res.Message) == "success") {
          this.api._sessionId = Decrypt(res.Content).split(",", 1);

          this.httpClient.Common.getUserLoginInfo(loginInfo.UserName).then(additionLoginInfo => {
            if (additionLoginInfo[0]) {
              loginInfo.UserSign = additionLoginInfo[0].UserID;
              loginInfo.UserNameLogin = additionLoginInfo[0].U_NAME;
            }
            this._loggedIn(loginInfo);  
            this.saveLoginInfor(loginInfo);
            
          }).catch(res => {
            this._loggedIn(loginInfo);
            this.saveLoginInfor(loginInfo);
            })
          ;  
        
        } else {
          console.error('ERROR', Decrypt(res.Message));
        }
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    return new Promise(resolve => {
      this.api.get('LoginIRS', 'LogOut', [{ name: 'sessionId', value: this.api._sessionId }])
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        });
    })
  }

  _loggedOut() {
    this._login = null;
    this.api._sessionId = '';
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(loginInfo) {
    this._login = loginInfo;
  }


  async getUserSign(nameLogin: string) {
    return await this.api.getDataTable("Users", "GetUserSign", [{name: "nameLogin",value: nameLogin}]);
  }

  async getUserLogin(userName: string) {
    return await this.api.getDataTable("Users", "GetUserLogin", [{name: "madk",value: userName}]);
  }
}
