import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from '../api';
import { URLSearchParams } from '@angular/http';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { TaskDetailPage } from '../../pages/task-detail/task-detail';
import { HttpResult } from '../../http-client/http-client';

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TaskProvider {

  _controller: string = "SubActivities";

  constructor(private http: Http, private api: Api) {
  }

  async loadTask(taskStatus="") {
    var params: Array<{ name: string, value: string }> = [];
    params.push({ name: "userName", value: "manager" });
    params.push({ name: "taskStatus", value: taskStatus });

    return await this.api.getDataTable(this._controller, "LoadTask", params);
    //return await this.api.getDataSet("HumanResources","GetDetails",)
  }

  async loadSubTask(clgCode:number) {
    var params: Array<{ name: string, value: string }> = [];
    params.push({ name: "clgCode", value: clgCode.toString() });
    params.push({ name: "userName", value: "manager" });

    return await this.api.getDataTable(this._controller, "LoadSubTask", params);
  }



  async saveTask(dt: any):Promise<HttpResult> {
    try {
      var res = await this.api.post(this._controller, "SaveTask", dt).toPromise();
      return res.json();

    }
    catch (error) {
      console.log(error.message);
      return new HttpResult(error.message);
    }
  }

  async addTask(dt: any): Promise<HttpResult> {
    try {

      var res = await this.api.post(this._controller, "AddTask", dt).toPromise();
      return res.json();

    }
    catch (error) {
      console.log(error.message);
      return new HttpResult(error.message);
    }
  }

  async changeTaskStatus(dt: Object ): Promise<HttpResult> {
    try {

      var res = await this.api.post(this._controller, "ChangeTaskStatus", dt).toPromise();
      return res.json();

    }
    catch (error) {
      console.log(error.message);
      return new HttpResult(error.message);
    }
  }

  async removeTask(dt: Array<any>): Promise<string> {
    try {
      //urlSearchParams.append('dt','abc');
      //dt='abc';
      //return await this.http.post('')
      //var res = await this.api.post(this._controller, "SaveTaskTest", dt).toPromise();

      var res = await this.api.post(this._controller, "RemoveTask", dt).toPromise();
      return res.json();

    }
    catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

 

  
}
