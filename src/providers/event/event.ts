import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { HttpClientRepository } from './../../http-client/http-client';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Api } from '../api';
/*
  Generated class for the event_management provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EventProvider {
  _controller: string = 'SubActivities';
  structure: any;
  //data: any;

  constructor(public http: Http, public api: Api) {

  }

  async loadEvent(data: any) {
    return await this.api.postAsyncDataTable(this._controller, "LoadEventByInterval", data);
  }

  async saveEvent(data: any) {
    return await this.api.postAsyncDataTable(this._controller, "SaveAllEvent", data);
  }

  async addEvent(data: any) {
    return await this.api.postAsyncDataTable(this._controller, "AddEvent", data);
  }

  async deleteEvent(data: any) {
    return await this.api.postAsyncDataTable(this._controller, "RemoveAllEvent", data);
  }

  async loadEventByCode(clgCode: number, userCode: string){
    return await this.api.getDataTable(this._controller,"LoadEventByCode",[{ name: 'clgCode', value: clgCode },{name: "userCode",value:userCode}]);
  }

  async loadSingleTask(clgCode: number, userCode:string){
    return await this.api.getDataTable(this._controller,"LoadSingleTask",[{ name: 'clgCode', value: clgCode },{name: "userName",value:userCode}])
  }

  async loadMettingLocation() {
    return await this.api.getDataTable("ActivityMeetingLocation", "GetAll");
  }
}
