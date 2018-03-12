import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from '../api';

/*
  Generated class for the CflProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CflProvider {

  dtBP: any;
  _controller: string = "CFL";

  constructor(private http: Http, private api: Api) {
  }

  async loadBusinessPartner(cardType = "", userName = "", branch = "") {
    if (this.dtBP) return this.dtBP;
    try {
      var params: Array<{ name: string, value: string }> = [];
    
      params.push({ name: "cardType", value: "" });
      params.push({ name: "userName", value: "" });
      params.push({ name: "branch", value: "" });

      this.dtBP = await this.api.getDataSet(this._controller, "LoadBusinessPartner", params);
      
      return this.dtBP;
    }
    catch (error) {
      console.log(error.message);
    
    }
  }

}
