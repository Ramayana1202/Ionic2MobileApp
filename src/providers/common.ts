import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Api } from './api';
import { Http } from '@angular/http';
//import { HttpClientRepository } from './../../http-client/http-client';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as Data from '../models/system-data/data';
import { TypeCode } from '../lib/Enums/RsaEnum';

@Injectable()
export class Common {

    constructor(public toastCtrl: ToastController,
        private api: Api
    ) {

    }


    /**
      * Type = 1 => success, type = 0 => error    
      */
    filter
    createToast(mesg: any, type: MsgType) {
        if (type == MsgType.success) {
            let toast = this.toastCtrl.create({
                message: mesg,
                duration: 3000,
                position: 'top',
                cssClass: 'toast-success'
            });
            return toast.present();
        } else {
            let toast = this.toastCtrl.create({
                message: mesg,
                duration: 3000,
                position: 'top',
                cssClass: 'toast-error'
            });
            return toast.present();
        }
    }

    //data: an array of object that contains row's info
    //struct: an array of table columns
    ToApzJson(inputRows: any[], inputColumns: any[]): any {

        try {
            var table: any;

            var rowArray = [];
            var rows = [];
            let table = {};
            for (var i = 0; i < inputRows.length; i++) {
                for (var j = 0; j < inputColumns.length; j++) {
                    //dt.Columns.addColumn(new DataColumn())

                    var col = inputColumns[j];

                    if (inputRows[i].hasOwnProperty(col.Name)) {

                        rowArray.push(inputRows[i][col.Name]);
                    }
                    else {

                        rowArray.push(null);
                    }
                }
            }
            rows.push(rowArray);

            table['Apz-Columns'] = inputColumns;
            table['Apz-Rows'] = rows;
            return table;
        } catch (error) {
            throw (error);
        }
    }

    ToApzJsonDataSet(tables: any[]): {} {
        try {
            let jsonDataSet = {};
            for (let index = 0; index < tables.length; index++) {
                if (index == 0)
                    jsonDataSet['Table'] = tables[0];
                else
                    jsonDataSet['Table' + index] = tables[index];
            }
            return jsonDataSet;
        } catch (error) {
            throw (error);
        }
    }

    toNormalTime(timeNumber: any): string {
        if (timeNumber!= null && timeNumber != undefined) {
            //javascript auto set type for time as number
            //instead of string
            //need to convert back
            var formatTime: string = timeNumber.toString();

            //if time in format Hmm
            //need to convert to HHmm
            //because of ion-datetime
            //=>add a 0 before string
            if (formatTime.length < 4) {
                switch (formatTime.length) {
                    case 1:
                    formatTime = "000" + formatTime;
                    break;                    
                    case 2:
                    formatTime = "00" + formatTime;
                    break;
                    case 3:
                    formatTime = "0" + formatTime;
                        break;
                
                    default:
                        break;
                }
            }
            //skip adding ":" if ENDTime already have ":"
            if (formatTime.indexOf(":") == -1) {

                formatTime = formatTime.slice(0, -2) + ":" + formatTime.slice(-2);
            }
            return formatTime;
        }
        //if no value return null
        return null;
    }
    toGluedTime(time: any) {
        if (time) {
            var timeNumber = time.toString().replace(":", "");
            return timeNumber;
        }
        return null;
    }

    cloning<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }

    addTimeToDate(date: any, time: any) {
        try {
            if (time) {
                var _date = new Date(date);
                time = time.toString().replace(":", "");
                var minute = Number(time.slice(-2));
                var hour = Number(time.slice(0, -2));
                _date.setMinutes(_date.getMinutes() + minute);
                _date.setHours(_date.getHours() + hour);
            }
            return date;
        }
        catch (error) {

        }
        return null;
    }

    adjustForTimezone(date:Date):Date{
        var timeOffsetInMS:number = date.getTimezoneOffset() * 60000;
        date.setTime(date.getTime() - timeOffsetInMS);
        return date
    }

    formatCreateDate(date: any, preWord:string="") {
        if (!date) return "";
        var _date = new Date(date);
        var distance = this.timeSince(_date);
        if (distance._seconds < 10) {
            return "few seconds ago";
        }
        else
            if (distance._seconds < 60) {
                return distance._seconds + " seconds ago";
            }
            else
                if (distance._minutes < 60) {
                    if (distance._minutes == 1) return "1 minute ago";
                    return distance._minutes + " minutes ago";
                }
                else
                    if (distance._hours < 24) {
                        if (distance._hours == 1) return "1 hour ago";

                        return distance._hours + " hours ago";
                    }
                    else if (distance._days < 7) {
                        if (distance._days < 2) return "Yesterday";
                        return distance._days + " days ago";
                    }
        return preWord + _date.toDateString();


    }

    timeSince(when) { // this ignores months
        var obj: any = {};
        obj._milliseconds = (new Date()).valueOf() - when.valueOf();
        obj.milliseconds = obj._milliseconds % 1000;
        obj._seconds = (obj._milliseconds - obj.milliseconds) / 1000;
        obj.seconds = obj._seconds % 60;
        obj._minutes = (obj._seconds - obj.seconds) / 60;
        obj.minutes = obj._minutes % 60;
        obj._hours = (obj._minutes - obj.minutes) / 60;
        obj.hours = obj._hours % 24;
        obj._days = (obj._hours - obj.hours) / 24;
        obj.days = obj._days % 365;
        // finally
        obj.years = (obj._days - obj.days) / 365;
        return obj;
    }

    //#region Tạm thời không dùng
    //Chuyển đối tượng thuộc lớp DataTable về dạng Json chuẩn APZ
    dataTableToApzJson(dt: Data.DataTable): any {
        try {
            var columns = dt.Columns.List;
            var jsonCols = [];
            columns.forEach(col => {
                let colObj = {};
                colObj['Name'] = col.ColumnName;
                colObj['Type'] = TypeCode[col.DataType];
                colObj['dflt'] = col.DefaultValue;
                jsonCols.push(colObj);
            })
            var rows = dt.Rows;

            var jsonRows = [];
            let jsonTable = {};
            for (var i = 0; i < rows.Count; i++) {
                let dataRow: Data.DataRow = rows.getRow(i);

                jsonRows.push(dataRow.list);
            }

            jsonTable['Apz-Columns'] = jsonCols;
            jsonTable['Apz-Rows'] = jsonRows;
            return jsonTable;
        } catch (error) {
            throw (error);
        }
    }
    //Chuyển đối tượng thuộc lớp DataSet về dạng Json chuẩn APZ
    private dataSetToApzJson(ds: Data.DataSet): any {
        try {
            let jsonDataSet = {};

            for (let index = 0; index < ds.Tables.List.length; index++) {
                var dt = ds.Tables[index];
                var columns = dt.Columns;

                var jsonCols = [];
                columns.forEach(col => {
                    let colObj = {};
                    colObj['Name'] = col.ColumnName;
                    colObj['Type'] = TypeCode[col.DataType];
                    colObj['dflt'] = col.DefaultValue;
                    jsonCols.push(colObj);
                })
                var rows = dt.Rows;

                var jsonRows = [];
                let jsonTable = {};
                for (var i = 0; i < rows.Count; i++) {
                    var dataRow = rows[i];
                    for (var j = 0; j < columns.Count; j++) {
                        var col = columns[j];

                        if (dataRow.hasOwnProperty(col.Name)) {

                            jsonRows.push(dataRow[col.Name]);
                        }
                        else {

                            jsonRows.push(null);
                        }
                    }
                }

                jsonTable['Apz-Columns'] = jsonCols;
                jsonTable['Apz-Rows'] = jsonRows;
                if (index == 0)
                    jsonDataSet['Table'] = jsonTable;
                else
                    jsonDataSet['Table' + index] = jsonTable;
            }

            return jsonDataSet;
        } catch (error) {
            throw (error);
        }
    }
    //Chuyển chuỗi Json dạng chuẩn APZ về dạng Json chỉ chứa các rows
    private ApzJsonDeserialize(dt: any): any {
        try {
            if (null == dt || !dt.hasOwnProperty('Apz-Columns'))
                return dt;

            var table: any;
            var collumns = dt['Apz-Columns'];
            var rows = dt['Apz-Rows'];

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

    //CHuyển đối tượng thuộc lớp DataTable về dạng Json chỉ chứa các rows
    private dataTableToJson(dt: Data.DataTable): any {
        try {
            var apzJson = this.dataTableToApzJson(dt);
            var result = this.ApzJsonDeserialize(apzJson);
            return result;
        } catch (error) {
            throw (error);
        }
    }
    //#endregion
}

export enum MsgType {
    success = 1,
    error = 0
}