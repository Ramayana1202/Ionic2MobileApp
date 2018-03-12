import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from '../api';
import { HttpResult } from '../../http-client/http-client';

/*
  Generated class for the CommentProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CommentProvider {

  _controller: string = "SubActivities";

  constructor(private http: Http, private api: Api) {
  }

  async loadComment(Id:number, type:string ="1470000128", userSign = 0) {
    try {
      var params: Array<{ name: string, value: string }> = [];
    
      params.push({ name: "Id", value: Id.toString() });
      params.push({ name: "type", value: type });
      params.push({ name: "userSign", value: userSign.toString() });

      return await this.api.getDataSet(this._controller, "LoadComment", params);
      
    }
    catch (error) {
      console.log(error.message);
    
    }
  }

  async addComment(tuple): Promise<HttpResult> {
    try {

      var res = await this.api.post(this._controller, "SaveCommentMobile", tuple).toPromise();
      return res.json();

    }
    catch (error) {
      console.log(error.message);
      return new HttpResult(error.message);
    }
  }

  //async removeComment()


}
