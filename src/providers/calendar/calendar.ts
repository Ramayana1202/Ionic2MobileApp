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
export class CalendarProvider {
  _controller: string = 'SubActivities';
  structure: any;
  //data: any;

  constructor(public http: Http, public api: Api) {

  }

  async loadCalendar(data: any) {
    return await this.api.postAsyncDataTable(this._controller, "GetDocByInterval", data);
  }

  
}
