import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string; //='http://172.16.195.60:8082/api';
  _sessionId: any;

  constructor(public http: Http) {

  }

  get(controller: string, endpoint: string, params?: { name: any, value: any }[], options?: RequestOptions) {
    if (!options) {
      options = this.creatOption();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(params[k].name, params[k].value);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }
    return this.http.get(this.url + '/' + controller + '/' + endpoint, options);
  }

  getDataSet(controller: string, action: string, params?: { name: any, value: any }[], options?: RequestOptions) {
    if (!options) {
      options = this.creatOption();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(params[k].name, params[k].value);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    return new Promise(resolve => {
      this.http.get(this.url + '/' + controller + '/' + action, options)
        .map(res => res.json())
        .subscribe(data => {
          let dataSet: any;
          for (var property in data) {
            if (data.hasOwnProperty(property)) {
              let table = this.ApzJsonDeserialize(data[property]);
              if (dataSet == null)
                dataSet = [table];
              else
                dataSet.push(table);
            }
          }
          resolve(dataSet);
          Error => {
            console.log(Error);
          }
        });
    }).catch(err => {
      console.log(err);
    })
  }

  getDataTable(controller: string, action: string, params?: { name: any, value: any }[], options?: RequestOptions) {
    if (!options) {
      options = this.creatOption();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(params[k].name, params[k].value);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    return new Promise(resolve => {
      this.http.get(this.url + '/' + controller + '/' + action, options)
        .map(res => res.json())
        .subscribe(data => {
          let dataTable: any;
          dataTable = this.ApzJsonDeserialize(data);
          resolve(dataTable);
          Error => {
            console.log(Error);
          }
        });
    }).catch(err => {
      console.log(err);
    })
  }

  async getAsyncDataSet(controller: string, action: string, params?: { name: any, value: any }[], options?: RequestOptions) {
    if (!options) {
      options = this.creatOption();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(params[k].name, params[k].value);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    return await new Promise(resolve => {
      this.http.get(this.url + '/' + controller + '/' + action, options)
        .map(res => res.json())
        .subscribe(data => {
          let dataSet: any;
          for (var property in data) {
            if (data.hasOwnProperty(property)) {
              let table = this.ApzJsonDeserialize(data[property]);
              if (dataSet == null)
                dataSet = [table];
              else
                dataSet.push(table);
            }
          }
          //data.forEach(element => {
          //  dataSet.push(this.ApzJsonDeserialize(element));
          //});
          resolve(dataSet);
          Error => {
            console.log(Error);
          }
        });
    }).catch(err => {
      console.log(err);
    })
  }

  post(controller: string, endpoint: string, body: any, options?: RequestOptions) {
    if (!options) {
      options = this.creatOption();
    }
    return this.http.post(this.url + '/' + controller + '/' + endpoint, body, options);
  }

  put(controller: string, endpoint: string, body: any, options?: RequestOptions) {
    if (!options) {
      options = this.creatOption();
    }
    return this.http.put(this.url + '/' + controller + '/' + endpoint, body, options);
  }

  delete(controller: string, endpoint: string, options?: RequestOptions) {
    if (!options) {
      options = this.creatOption();
    }
    return this.http.delete(this.url + '/' + controller + '/' + endpoint, options);
  }

  creatOption(): RequestOptions {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('SessionId', this._sessionId);
    return new RequestOptions({
      headers: header,
    })
  }

  ApzJsonDeserialize(data: any): any {
    try {
      if (null == data || !data.hasOwnProperty('Apz-Columns'))
        return data;

      var table: any;
      var collumns = data['Apz-Columns'];
      var rows = data['Apz-Rows'];

      for (var i = 0; i < rows.length; i++) {
        var obj = {};
        var row = rows[i];

        for (var j = 0; j < collumns.length; j++) {
          var col = collumns[j];
          obj[col.Name] = row[j];
        }
        if (table != null)
          table.push(obj);
        else
          table = [obj];

      }
      return table;
    } catch (error) {
      throw (error);
    }

  }

}
