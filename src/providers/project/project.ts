import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from '../api';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProjectProvider {

  dtProject: Array<Object>;

  dtProjectTask: Array<Object>;

  _controller: string = "SubActivities";
  
  constructor(public http: Http,
    private api: Api) {
    console.log('Hello ProjectProvider Provider');
  }

  async loadProject(projectid: number = 0) {
    try {
      var params: Array<{ name: string, value: string }> = [];
    
      params.push({ name: "projectid", value: projectid.toString() });

      return await this.api.getDataSet("CFL", "GetDataProjectManager", params);
    }
    catch (error) {
      console.log(error.message);
    }
  }

  async loadProjectTask(projectid: number) {
    try {
      var params: Array<{ name: string, value: string }> = [];
    
      params.push({ name: "projectId", value: projectid.toString() });

      return await this.api.getDataSet("CFL", "GetDataProjectTask", params);
    }
    catch (error) {
      console.log(error.message);
    }
  }

}

