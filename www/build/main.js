webpackJsonp([9],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inventory_report_complete__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_inventory_transfers__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inventory_picked_confirm__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__(149);
/* unused harmony reexport Api */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__login__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__inventory_report_complete__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__inventory_inventory_transfers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__common__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__common__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__inventory_picked_confirm__["a"]; });








//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 1345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AutosizeDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var AutosizeDirective = (function () {
    function AutosizeDirective(element) {
        this.element = element;
    }
    AutosizeDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    AutosizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    AutosizeDirective.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        var scrollHeight = textArea.scrollHeight + "px";
        textArea.style.height = scrollHeight;
    };
    return AutosizeDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLTextAreaElement]),
    __metadata("design:returntype", void 0)
], AutosizeDirective.prototype, "onInput", null);
AutosizeDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'ion-textarea[autosize]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], AutosizeDirective);

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 1350:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MsgType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_Enums_RsaEnum__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HttpClientRepository } from './../../http-client/http-client';



var Common = (function () {
    function Common(toastCtrl, api) {
        this.toastCtrl = toastCtrl;
        this.api = api;
    }
    Common.prototype.createToast = function (mesg, type) {
        if (type == MsgType.success) {
            var toast = this.toastCtrl.create({
                message: mesg,
                duration: 3000,
                position: 'top',
                cssClass: 'toast-success'
            });
            return toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: mesg,
                duration: 3000,
                position: 'top',
                cssClass: 'toast-error'
            });
            return toast.present();
        }
    };
    //data: an array of object that contains row's info
    //struct: an array of table columns
    Common.prototype.ToApzJson = function (inputRows, inputColumns) {
        try {
            var table;
            var rowArray = [];
            var rows = [];
            var table_1 = {};
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
            table_1['Apz-Columns'] = inputColumns;
            table_1['Apz-Rows'] = rows;
            return table_1;
        }
        catch (error) {
            throw (error);
        }
    };
    Common.prototype.ToApzJsonDataSet = function (tables) {
        try {
            var jsonDataSet = {};
            for (var index = 0; index < tables.length; index++) {
                if (index == 0)
                    jsonDataSet['Table'] = tables[0];
                else
                    jsonDataSet['Table' + index] = tables[index];
            }
            return jsonDataSet;
        }
        catch (error) {
            throw (error);
        }
    };
    Common.prototype.toNormalTime = function (timeNumber) {
        if (timeNumber != null && timeNumber != undefined) {
            //javascript auto set type for time as number
            //instead of string
            //need to convert back
            var formatTime = timeNumber.toString();
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
    };
    Common.prototype.toGluedTime = function (time) {
        if (time) {
            var timeNumber = time.toString().replace(":", "");
            return timeNumber;
        }
        return null;
    };
    Common.prototype.cloning = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    Common.prototype.addTimeToDate = function (date, time) {
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
    };
    Common.prototype.adjustForTimezone = function (date) {
        var timeOffsetInMS = date.getTimezoneOffset() * 60000;
        date.setTime(date.getTime() - timeOffsetInMS);
        return date;
    };
    Common.prototype.formatCreateDate = function (date, preWord) {
        if (preWord === void 0) { preWord = ""; }
        if (!date)
            return "";
        var _date = new Date(date);
        var distance = this.timeSince(_date);
        if (distance._seconds < 10) {
            return "few seconds ago";
        }
        else if (distance._seconds < 60) {
            return distance._seconds + " seconds ago";
        }
        else if (distance._minutes < 60) {
            if (distance._minutes == 1)
                return "1 minute ago";
            return distance._minutes + " minutes ago";
        }
        else if (distance._hours < 24) {
            if (distance._hours == 1)
                return "1 hour ago";
            return distance._hours + " hours ago";
        }
        else if (distance._days < 7) {
            if (distance._days < 2)
                return "Yesterday";
            return distance._days + " days ago";
        }
        return preWord + _date.toDateString();
    };
    Common.prototype.timeSince = function (when) {
        var obj = {};
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
    };
    //#region Tạm thời không dùng
    //Chuyển đối tượng thuộc lớp DataTable về dạng Json chuẩn APZ
    Common.prototype.dataTableToApzJson = function (dt) {
        try {
            var columns = dt.Columns.List;
            var jsonCols = [];
            columns.forEach(function (col) {
                var colObj = {};
                colObj['Name'] = col.ColumnName;
                colObj['Type'] = __WEBPACK_IMPORTED_MODULE_5__lib_Enums_RsaEnum__["b" /* TypeCode */][col.DataType];
                colObj['dflt'] = col.DefaultValue;
                jsonCols.push(colObj);
            });
            var rows = dt.Rows;
            var jsonRows = [];
            var jsonTable = {};
            for (var i = 0; i < rows.Count; i++) {
                var dataRow = rows.getRow(i);
                jsonRows.push(dataRow.list);
            }
            jsonTable['Apz-Columns'] = jsonCols;
            jsonTable['Apz-Rows'] = jsonRows;
            return jsonTable;
        }
        catch (error) {
            throw (error);
        }
    };
    //Chuyển đối tượng thuộc lớp DataSet về dạng Json chuẩn APZ
    Common.prototype.dataSetToApzJson = function (ds) {
        try {
            var jsonDataSet = {};
            for (var index = 0; index < ds.Tables.List.length; index++) {
                var dt = ds.Tables[index];
                var columns = dt.Columns;
                var jsonCols = [];
                columns.forEach(function (col) {
                    var colObj = {};
                    colObj['Name'] = col.ColumnName;
                    colObj['Type'] = __WEBPACK_IMPORTED_MODULE_5__lib_Enums_RsaEnum__["b" /* TypeCode */][col.DataType];
                    colObj['dflt'] = col.DefaultValue;
                    jsonCols.push(colObj);
                });
                var rows = dt.Rows;
                var jsonRows = [];
                var jsonTable = {};
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
        }
        catch (error) {
            throw (error);
        }
    };
    //Chuyển chuỗi Json dạng chuẩn APZ về dạng Json chỉ chứa các rows
    Common.prototype.ApzJsonDeserialize = function (dt) {
        try {
            if (null == dt || !dt.hasOwnProperty('Apz-Columns'))
                return dt;
            var table;
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
        }
        catch (error) {
            throw (error);
        }
    };
    //CHuyển đối tượng thuộc lớp DataTable về dạng Json chỉ chứa các rows
    Common.prototype.dataTableToJson = function (dt) {
        try {
            var apzJson = this.dataTableToApzJson(dt);
            var result = this.ApzJsonDeserialize(apzJson);
            return result;
        }
        catch (error) {
            throw (error);
        }
    };
    return Common;
}());
Common = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */]])
], Common);

var MsgType;
(function (MsgType) {
    MsgType[MsgType["success"] = 1] = "success";
    MsgType[MsgType["error"] = 0] = "error";
})(MsgType || (MsgType = {}));
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var HttpClientHelper = (function () {
    function HttpClientHelper(http) {
        this.http = http;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        header.append('SessionId', this._sessionId);
        this._options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: header,
        });
    }
    HttpClientHelper.prototype.get = function (controller, endpoint, params, options) {
        if (!options) {
            options = this.creatOption();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            for (var k in params) {
                p.set(params[k].name, params[k].value);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return this.http.get(this.url + '/' + controller + '/' + endpoint, options);
    };
    HttpClientHelper.prototype.getDataSet = function (controller, action, params, options) {
        var _this = this;
        if (!options) {
            options = this.creatOption();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            for (var k in params) {
                p.set(params[k].name, params[k].value);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/' + controller + '/' + action, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var dataSet;
                for (var property in data) {
                    if (data.hasOwnProperty(property)) {
                        var table = _this.ApzJsonDeserialize(data[property]);
                        if (dataSet == null)
                            dataSet = [table];
                        else
                            dataSet.push(table);
                    }
                }
                resolve(dataSet);
                (function (Error) {
                    console.log(Error);
                });
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    HttpClientHelper.prototype.getAsync = function (action, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var p, k;
            return __generator(this, function (_a) {
                // Support easy query params for GET requests
                if (params) {
                    p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                    for (k in params) {
                        p.set(params[k].name, params[k].value);
                    }
                    // Set the search field if we have params and don't already have
                    // a search field set in options.
                    this._options.search = !this._options.search && p || this._options.search;
                }
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.get(_this.url + '/' + _this._controller + '/' + action, _this._options)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            resolve(data);
                            (function (Error) {
                                console.log(Error);
                            });
                        });
                    }).catch(function (err) {
                        console.log(err);
                    })];
            });
        });
    };
    HttpClientHelper.prototype.getAsyncDataSet = function (action, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var p, k;
            return __generator(this, function (_a) {
                // Support easy query params for GET requests
                if (params) {
                    p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                    for (k in params) {
                        p.set(params[k].name, params[k].value);
                    }
                    // Set the search field if we have params and don't already have
                    // a search field set in options.
                    this._options.search = !this._options.search && p || this._options.search;
                }
                //let str = this.url + '/' + this._controller + '/' + action;
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.get(_this.url + '/' + _this._controller + '/' + action, _this._options)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            console.log(data);
                            var dataSet;
                            if (data.count > 0)
                                data.forEach(function (element) {
                                    dataSet.push(_this.ApzJsonDeserialize(element));
                                });
                            resolve(dataSet);
                            (function (Error) {
                                console.log(Error);
                            });
                        });
                    }).catch(function (err) {
                        console.log(err);
                    })];
            });
        });
    };
    HttpClientHelper.prototype.post = function (controller, endpoint, body, options) {
        if (!options) {
            options = this.creatOption();
        }
        return this.http.post(this.url + '/' + controller + '/' + endpoint, body, options);
    };
    HttpClientHelper.prototype.put = function (controller, endpoint, body, options) {
        if (!options) {
            options = this.creatOption();
        }
        return this.http.put(this.url + '/' + controller + '/' + endpoint, body, options);
    };
    HttpClientHelper.prototype.delete = function (controller, endpoint, options) {
        if (!options) {
            options = this.creatOption();
        }
        return this.http.delete(this.url + '/' + controller + '/' + endpoint, options);
    };
    HttpClientHelper.prototype.creatOption = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        header.append('SessionId', this._sessionId);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: header,
        });
    };
    HttpClientHelper.prototype.ApzJsonDeserialize = function (data) {
        try {
            if (null == data || !data.hasOwnProperty('Apz-Columns'))
                return data;
            var table;
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
        }
        catch (error) {
            throw (error);
        }
    };
    return HttpClientHelper;
}());
HttpClientHelper = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HttpClientHelper);

//# sourceMappingURL=http-helper.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pages__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inventory_transfer_inventory_transfer__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_picked_confirm_picked_confirm__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_ApzRsa__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_hub_helper__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_client_http_helper__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var LoginPage = (function () {
    function LoginPage(navCtrl, modalCtrl, login, translateService, common, setting, httpHelper) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.login = login;
        this.translateService = translateService;
        this.common = common;
        this.setting = setting;
        this.httpHelper = httpHelper;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            Doimain: '',
            UserName: '',
            Password: '',
            DbName: '',
            ClientVersion: '',
            BuildVersion: ''
        };
        this.isLogin = false;
        this.disable = false;
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.getDefautLogin();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        if (this.login._login != null) {
            this.isLogin = true;
            this.hubHelper = new __WEBPACK_IMPORTED_MODULE_9__providers_hub_helper__["a" /* HubHelper */]();
            this.hubHelper.domain = this.httpHelper.url + "/SignalR";
            this.hubHelper.hubName = "notificationClient";
            this.hubHelper.addEvent("UpdateNotification", this.updateNotification.bind(this));
            this.hubHelper.start();
        }
    };
    LoginPage.prototype.updateNotification = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var title, options, allowNotify, notify;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(content.Detail);
                        title = "A new task has been assigned to you";
                        options = { body: content.Detail, icon: "" };
                        return [4 /*yield*/, Notification.requestPermission()];
                    case 1:
                        allowNotify = _a.sent();
                        if (allowNotify != "granted")
                            return [2 /*return*/];
                        notify = new Notification(title, options);
                        setTimeout(notify.close.bind(notify), 6000);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.domainChange = function () {
        var _this = this;
        this.login.loadCompany(this.account.Doimain)
            .subscribe(function (data) {
            _this.listCompany = data;
        }, function (err) {
            _this.createToast(err, __WEBPACK_IMPORTED_MODULE_7__providers_providers__["d" /* MsgType */].error);
        });
    };
    LoginPage.prototype.getUserSign = function (nameLogin) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.login.getUserSign(nameLogin)];
                    case 1:
                        result = _a.sent();
                        GlobalData.USERID = result[0]["USERID"];
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.createToast(err_1, __WEBPACK_IMPORTED_MODULE_7__providers_providers__["d" /* MsgType */].error);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.getUserLogin = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.login.getUserLogin(userName)];
                    case 1:
                        result = _a.sent();
                        if (result[0]) {
                            GlobalData.UserCodeLogin = result[0]["USER_CODE"];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        this.createToast(err_2, __WEBPACK_IMPORTED_MODULE_7__providers_providers__["d" /* MsgType */].error);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Attempt to login in through Login service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.disable = true;
        this.login.login(this.account).subscribe(function (resp) {
            console.log(resp.json().Message);
            var httpResult = resp.json();
            var message = Object(__WEBPACK_IMPORTED_MODULE_8__lib_ApzRsa__["a" /* Decrypt */])(httpResult.Message);
            if (message == 'success') {
                _this.getUserSign(_this.account.UserName);
                _this.getUserLogin(_this.account.UserName);
                switch (_this.setting.settings.defaultPage) {
                    case 'ReportCompletePage':
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_pages__["b" /* MainPage */]);
                        break;
                    case 'PickedConfirmPage':
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_picked_confirm_picked_confirm__["a" /* PickedConfirmPage */]);
                        break;
                    default:
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_inventory_transfer_inventory_transfer__["a" /* InventoryTransferPage */]);
                        break;
                }
            }
            else {
                _this.createToast(message, __WEBPACK_IMPORTED_MODULE_7__providers_providers__["d" /* MsgType */].error);
                _this.disable = false;
            }
        }, function (err) {
            // Unable to log in
            _this.createToast(err, __WEBPACK_IMPORTED_MODULE_7__providers_providers__["d" /* MsgType */].error);
            _this.disable = false;
        });
    };
    LoginPage.prototype.loadCompany = function () {
        var _this = this;
        this.login.loadCompany(this.account.Doimain)
            .subscribe(function (data) {
            _this.listCompany = data;
        }, function (err) {
            _this.createToast(err, __WEBPACK_IMPORTED_MODULE_7__providers_providers__["d" /* MsgType */].error);
        });
    };
    LoginPage.prototype.loadCompany2 = function () {
        var _this = this;
        this.login.loadCompany2(this.account.Doimain)
            .then(function (data) {
            _this.listCompany = data;
        }, function (err) {
            _this.createToast(err, __WEBPACK_IMPORTED_MODULE_7__providers_providers__["d" /* MsgType */].error);
        });
    };
    LoginPage.prototype.openSetting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */]);
    };
    LoginPage.prototype.getDefautLogin = function () {
        var _this = this;
        //let er1 = Decrypt("svUhP9ZfY6jb1fbOHOSp3SBTZbs6kJo7NqboDhvUsS92yl5zxZ5QnkYzxtuArfklDtdWsjxpVqWsvY5V4PGqhuTilMFdxki6RszjJGh/KvrCpW5yWnu+WP2oABgBSjp5waytud1guzrGxgF2NKNxFn4j6ozYN3Je6bxsnvoNrW0gdq4bFmPS6TCw5WvtJmnAyrPlN4hGe5HUo6CKWI2zowwMmYd6HOJqtCQknOKinfE5/jKHy/eJ1dFIMUAO+RU8NjdUy9KAM8rHgtKaVlAoGJcqJPXujRVbvfqgwH1WceUwbzq1lCYNItdMQ6Q0mAfUGFi8DzDwTNXqhqr7JoKPBw==");
        var er1 = "manager";
        //let err = Encrypt("Công ty apzon");
        var err = "Apzon";
        this.login.initApi().then(function (setting) {
            _this.account.Doimain = err;
            _this.account.DbName = setting.company;
            _this.account.UserName = er1;
            _this.loadCompany();
        }, function (err) {
            _this.createToast(err, __WEBPACK_IMPORTED_MODULE_7__providers_providers__["d" /* MsgType */].error);
        });
    };
    LoginPage.prototype.createToast = function (mesg, type) {
        this.common.createToast(mesg, type);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle *ngIf="isLogin">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form (submit)="doLogin()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>{{ \'DOMAIN\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.Doimain" name="domain" (change)="domainChange()" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'COMPANY\' | translate }}</ion-label>\n        <ion-select class="myCustomSelect" [(ngModel)]="account.DbName" multiple="false" name="company" required>\n          <ion-option *ngFor="let company of listCompany" value="{{company.ID}}">{{company.Name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.UserName" name="username" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.Password" name="password" required></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" [disabled]="disable" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n      </div>\n\n    </ion-list>\n  </form>\n\n  <div padding>\n    <button ion-button icon-left color="primary" [disabled]="disable" block (click)="openSetting()">{{ \'SETTINGS_TITLE\' | translate }}\n      <ion-icon name="settings"></ion-icon>\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_providers__["c" /* Login */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_providers__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_7__providers_providers__["g" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_10__http_client_http_helper__["a" /* HttpClientHelper */]])
], LoginPage);

var GlobalData = (function () {
    function GlobalData() {
    }
    return GlobalData;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BinConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BinConfirmPage = (function () {
    function BinConfirmPage(navCtrl, navParams, viewCtrl, barcodeScanner, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.barcodeScanner = barcodeScanner;
        this.common = common;
        this.isUseBarcode = false;
        this.isUseBarcode = navParams.get('isUseBarcode');
    }
    BinConfirmPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.isUseBarcode)
            this.scanBarcode();
        setTimeout(function () {
            _this.binInput.setFocus();
        }, 250);
    };
    BinConfirmPage.prototype.scanBarcode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (!barcodeData.cancelled)
                _this.barcode = barcodeData.text;
            setTimeout(function () {
                _this.binInput.setFocus();
            }, 150);
        }, function (err) {
            _this.common.createToast(err, __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* MsgType */].error).then(function () {
                setTimeout(function () {
                    _this.binInput.setFocus();
                }, 150);
            });
        });
    };
    BinConfirmPage.prototype.changeBarcode = function () {
        this.isReadyToSave = this.barcode;
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    BinConfirmPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * back to the presenter.
     */
    BinConfirmPage.prototype.done = function () {
        if (!this.barcode) {
            return;
        }
        this.viewCtrl.dismiss(this.barcode);
    };
    return BinConfirmPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('binInput'),
    __metadata("design:type", Object)
], BinConfirmPage.prototype, "binInput", void 0);
BinConfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bin-confirm',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\bin-confirm\bin-confirm.html"*/'<!--\n  Generated template for the BinConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          {{ \'CANCEL_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n        <span color="primary" showWhen="ios">\n          {{ \'DONE_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form (submit)="done()">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" #binInput placeholder="Bin / Warehouse" [(ngModel)]="barcode" name="barcode" (input)="changeBarcode()"\n          required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button icon-left color="primary" *ngIf="barcode">\n    <ion-icon name="checkmark" > Confirm</ion-icon>\n  </button>\n  </form>\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\bin-confirm\bin-confirm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* Common */]])
], BinConfirmPage);

//# sourceMappingURL=bin-confirm.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TypeCode; });
/* unused harmony export PaddingMode */
/* unused harmony export CipherMode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RsaPaddingObj; });
var TypeCode;
(function (TypeCode) {
    TypeCode[TypeCode["Empty"] = 0] = "Empty";
    TypeCode[TypeCode["Object"] = 1] = "Object";
    TypeCode[TypeCode["DBNull"] = 2] = "DBNull";
    TypeCode[TypeCode["Boolean"] = 3] = "Boolean";
    TypeCode[TypeCode["Char"] = 4] = "Char";
    TypeCode[TypeCode["SByte"] = 5] = "SByte";
    TypeCode[TypeCode["Byte"] = 6] = "Byte";
    TypeCode[TypeCode["Int16"] = 7] = "Int16";
    TypeCode[TypeCode["UInt16"] = 8] = "UInt16";
    TypeCode[TypeCode["Int32"] = 9] = "Int32";
    TypeCode[TypeCode["UInt32"] = 10] = "UInt32";
    TypeCode[TypeCode["Int64"] = 11] = "Int64";
    TypeCode[TypeCode["UInt64"] = 12] = "UInt64";
    TypeCode[TypeCode["Single"] = 13] = "Single";
    TypeCode[TypeCode["Double"] = 14] = "Double";
    TypeCode[TypeCode["Decimal"] = 15] = "Decimal";
    TypeCode[TypeCode["DateTime"] = 16] = "DateTime";
    TypeCode[TypeCode["String"] = 18] = "String";
})(TypeCode || (TypeCode = {}));
;
var PaddingMode;
(function (PaddingMode) {
    PaddingMode[PaddingMode["None"] = 1] = "None";
    PaddingMode[PaddingMode["PKCS7"] = 2] = "PKCS7";
    PaddingMode[PaddingMode["Zeros"] = 3] = "Zeros";
    PaddingMode[PaddingMode["ANSIX923"] = 4] = "ANSIX923";
    PaddingMode[PaddingMode["ISO10126"] = 5] = "ISO10126";
    PaddingMode[PaddingMode["RsaEsPkcs"] = 6] = "RsaEsPkcs";
    PaddingMode[PaddingMode["RsaEsOaep"] = 7] = "RsaEsOaep";
})(PaddingMode || (PaddingMode = {}));
;
var CipherMode;
(function (CipherMode) {
    CipherMode[CipherMode["CBC"] = 1] = "CBC";
    CipherMode[CipherMode["ECB"] = 2] = "ECB";
    CipherMode[CipherMode["OFB"] = 3] = "OFB";
    CipherMode[CipherMode["CFB"] = 4] = "CFB";
    CipherMode[CipherMode["CTS"] = 5] = "CTS";
})(CipherMode || (CipherMode = {}));
;
var RsaPaddingObj;
(function (RsaPaddingObj) {
    RsaPaddingObj[RsaPaddingObj["blocksCount"] = 0] = "blocksCount";
    RsaPaddingObj[RsaPaddingObj["iBuffer"] = 1] = "iBuffer";
    RsaPaddingObj[RsaPaddingObj["oBuffer"] = 2] = "oBuffer";
})(RsaPaddingObj || (RsaPaddingObj = {}));
//# sourceMappingURL=RsaEnum.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(492);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = 'apz_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype.loadAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(this.SETTINGS_KEY).then(function (value) {
                            if (value) {
                                _this.settings = value;
                                return _this._mergeDefaults(_this._defaults);
                            }
                            else {
                                return _this.setAll(_this._defaults).then(function (val) {
                                    _this.settings = val;
                                });
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    return Settings;
}());
Settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_popover__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_task_view_task_view__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sort_popover__ = __webpack_require__(503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








//import 'jquery';
//import 'signalr';
/**
 * Generated class for the TaskManagementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TaskManagementPage = (function () {
    function TaskManagementPage(navCtrl, httpClient, common, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.common = common;
        this.popoverCtrl = popoverCtrl;
    }
    TaskManagementPage.prototype.ionViewDidLoad = function () {
    };
    TaskManagementPage.prototype.sendNotify = function (data) {
        this.hubHelper.hubProxy.invoke("SendNotifiedToClient", { NotifiedUser: "1", Detail: data.Detail });
    };
    TaskManagementPage.prototype.updateNotification = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    TaskManagementPage.prototype.showSort = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__sort_popover__["a" /* SortPopoverPage */], { dtTask: this.taskView.dtTask });
        popover.present({ ev: event });
    };
    TaskManagementPage.prototype.showMore = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__more_popover__["a" /* MorePopoverPage */]);
        popover.present({ ev: event });
    };
    return TaskManagementPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__components_task_view_task_view__["a" /* TaskViewComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_task_view_task_view__["a" /* TaskViewComponent */])
], TaskManagementPage.prototype, "taskView", void 0);
TaskManagementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-task-management',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\task-management\task-management.html"*/'<!--\n  Generated template for the TaskManagementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bar-light ">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Task</ion-title>\n    \n    <ion-buttons end>\n      <button ion-button icon-only (click)="showSort($event)">\n        <ion-icon name="ios-podium"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showMore($event)">\n        <ion-icon name="ios-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n <!-- <ion-input class="maintext"  style="font-size:1.2em;padding-bottom:9px;padding-left:13px" placeholder="Add a task..." [(ngModel)]="addText" (keydown.enter)="buttonAddClick()"></ion-input>    -->\n</ion-header>\n\n\n<ion-content  scroll="false">\n<task-view></task-view>\n\n    \n                       \n<!-- <ion-list>\n  <ion-item [style.background-color]="task.Closed===\'Y\'? \'rgb(172, 172, 172)\':\'white\'" *ngFor="let task of dtTask">\n    <ion-checkbox mode="ios" style="margin-right:30px" (ionChange)="taskStatusChanged(task)" [checked]="task.Closed===\'Y\'"></ion-checkbox>\n    <ion-label style="margin:0px;">\n      <button (press)="showActionSheet(task)" (tap)="fillInfo(task)" [style.background-color]="task.Closed===\'Y\'? \'rgb(172, 172, 172)\':\'white\'" ion-item no-lines >\n                    <ion-row style="white-space:normal" >\n                       <ion-col class="maintext" style="font-size:1.1em;"> {{task.Details}} </ion-col>\n                     </ion-row>\n\n                     <ion-row>\n                      <ion-col style="color:rgb(109, 78, 69);white-space:normal">{{getUserName(task.GroupUser)}}</ion-col> \n                      <ion-col *ngIf="isOverdue(task)" class="overdue" col-2 style="text-align: right;" >{{formatDueDate(task)}}</ion-col>\n                      <ion-col *ngIf="!isOverdue(task)" class="underdue" col-2 style="text-align: right;" >{{formatDueDate(task)}}</ion-col>\n                     </ion-row>  \n                     <ion-row style="color:gray;font-size:0.8em" *ngIf="task.ProjectEntry > 0">\n                      <ion-col >{{getProjectName(task.ProjectEntry)}}<span *ngIf="task.ProjectWBS"> - {{task.ProjectWBS}} </span>  </ion-col> \n                     </ion-row> \n                    \n                             \n      </button>\n    </ion-label>\n  </ion-item>          \n  </ion-list> -->\n\n</ion-content>\n\n'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\task-management\task-management.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
], TaskManagementPage);

//# sourceMappingURL=task-management.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var TaskDetailPage = TaskDetailPage_1 = (function () {
    function TaskDetailPage(navCtrl, navParams, httpClient, common, actionSheet, setting) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.common = common;
        this.actionSheet = actionSheet;
        this.setting = setting;
        this.dtComment = [];
        this.dtAttachment = [];
        this.taskStatus = 'N';
        this.dtTask = [];
        this.dtStructure = [];
        this.dtBP = [];
        this.dtProjectTask = [];
        this.dtProject = [];
        this.changeStatus = false;
        this.groupUser = [];
        this.isAdd = false;
        this.tab = "detail";
        this.addText = "";
        this.commentText = "";
        this.adding = false;
        this.navOptions = { animation: "ios-transition", duration: 600 };
        this.callback = function (params) {
            return new Promise(function (resolve, reject) {
                var task = params["task"];
                if (task) {
                    _this.dtTask.unshift(task);
                    _this.dtTask.sort(function (a, b) { return b.ClgCode - a.ClgCode; });
                    resolve();
                }
            });
        };
        this.task = navParams.get('task');
        this.isAdd = navParams.get('isAdd');
        this.callbackDelegate = navParams.get('callback');
        if (this.task.GroupUser) {
            this.groupUser = this.task.GroupUser.split(";");
        }
        this.beginTime = this.common.toNormalTime(this.task.BeginTime);
        this.endTime = this.common.toNormalTime(this.task.ENDTime);
    }
    TaskDetailPage.prototype.ionViewDidLoad = function () {
        this.navBar.backButtonClick = this.saveTask.bind(this);
        this.loadTask();
        this.loadUser();
        this.loadProject();
        this.loadComment();
        //this.loadAttachment();
        if (this.task.ProjectEntry) {
            this.loadProjectTask(this.task.ProjectEntry);
        }
        this.loadBusinessPartner();
    };
    TaskDetailPage.prototype.loadTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, _a, rowStruct, column;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Task.loadSubTask(this.task.ClgCode)];
                    case 1:
                        result = _b.sent();
                        if (!(result === undefined || result.length == 0)) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.httpClient.Common.getTableStructure("APZ_OCLG")];
                    case 2:
                        _a.dtStructure = (_b.sent());
                        this.dtTask = [];
                        return [3 /*break*/, 4];
                    case 3:
                        //cloning by JSON
                        //result.slice(0,1) will return a new array contains only first data row from result
                        //doing this to prevent copy by reference
                        this.dtStructure = this.common.cloning(result.slice(0, 1));
                        rowStruct = this.dtStructure[0];
                        for (column in rowStruct) {
                            if (rowStruct.hasOwnProperty(column)) {
                                rowStruct[column] = null;
                            }
                        }
                        this.dtTask = result;
                        _b.label = 4;
                    case 4:
                        console.log('Loaded');
                        //sort by clgCode
                        //descending
                        // if (this.taskStatus == "N") {
                        this.dtTask.sort(function (a, b) { return a.ClgCode - b.ClgCode; });
                        // }
                        // if (this.taskStatus == "Y") {
                        //   this.dtTask.sort((a, b) => b.CloseDate - a.CloseDate);
                        // }
                        //add an ":" for endDate
                        this.dtTask.forEach(function (task) {
                            //format ENDTime and BeginTime from number HHmm
                            //to correct Hour and Minute format HH:mm
                            task.ENDTime = _this.common.toNormalTime(task.ENDTime);
                            task.BeginTime = _this.common.toNormalTime(task.BeginTime);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.taskStatusChanged = function (changedTask) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var ds, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Checked");
                        //prevent too many task being completed
                        if (this.changeStatus === true)
                            return [2 /*return*/];
                        this.changeStatus = true;
                        //set task status
                        if (changedTask.Closed === "N") {
                            changedTask.Closed = "Y";
                            changedTask.status = 2;
                            changedTask.CloseDate = new Date();
                        }
                        else if (changedTask.Closed === "Y") {
                            changedTask.Closed = "N";
                            changedTask.status = 1;
                        }
                        setTimeout(function () {
                            //this.dtTask = this.dtTask.filter(task => task !== changedTask || (task===changedTask && changedTask.Closed===this.taskStatus));
                            _this.changeStatus = false;
                        }, 450);
                        ds = { Table1: [changedTask] };
                        return [4 /*yield*/, this.httpClient.Task.changeTaskStatus(ds)];
                    case 1:
                        result = _a.sent();
                        if (result !== undefined && result.Message !== "") {
                            this.common.createToast(result.Message, 0);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.showActionSheet = function (task) {
        var _this = this;
        var sheet = this.actionSheet.create({
            title: '',
            buttons: [
                {
                    text: 'Remove',
                    handler: function () { _this.removeTask(task); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        sheet.present();
    };
    TaskDetailPage.prototype.removeTask = function (removedTask) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Task.removeTask([removedTask])];
                    case 1:
                        result = _a.sent();
                        if (result !== undefined && result !== "") {
                            this.common.createToast(result, 0);
                            return [2 /*return*/];
                        }
                        //remove task from list
                        this.dtTask = this.dtTask.filter(function (task) { return task !== removedTask; });
                        console.log(removedTask);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.fillInfo = function (task) {
        //get clgCode from task
        //var clgCode=task.ClgCode;
        //load task from api 
        //=> add later
        //currently use data from dtTask
        //try navigate to task detail first
        var navOptions = { animation: "ios-transition", duration: 600 };
        this.navCtrl.push(TaskDetailPage_1, { task: task, dtUser: this.dtUser, isAdd: false, callback: this.callback }, navOptions);
        //  this.navCtrl.push(TaskDetailPage, {task: task});
    };
    TaskDetailPage.prototype.isOverdue = function (task) {
        try {
            var dueDate = new Date(task.endDate);
            dueDate = this.common.addTimeToDate(dueDate, task.ENDTime);
            var currentDate = new Date();
            if (dueDate < currentDate) {
                return true;
            }
        }
        catch (error) {
        }
        return false;
    };
    TaskDetailPage.prototype.getUserName = function (groupUser) {
        if (this.dtUser === undefined)
            return "";
        if (groupUser === undefined || groupUser === null)
            return "";
        var userList = groupUser.toString().split(";");
        var resultUsers = this.dtUser.filter(function (user) { return userList.indexOf(user.USERID.toString()) > -1; });
        var value = "";
        for (var i = 0; i < resultUsers.length; i++) {
            value += resultUsers[i].U_NAME + "; ";
        }
        if (value.length > 0) {
            value = value.slice(0, value.length - 2);
        }
        return value;
    };
    TaskDetailPage.prototype.getProjectName = function (projectId) {
        if (this.dtProject === undefined)
            return "";
        var result = this.dtProject.find(function (project) { return project.AbsEntry == projectId; });
        if (result != undefined) {
            return result.Code + " - " + result.Name;
        }
        return "";
    };
    TaskDetailPage.prototype.formatDueDate = function (task) {
        //get due date
        //format from text to
        //DD.MM
        try {
            if (task.endDate == null)
                return "";
            var dueDate = new Date(task.endDate);
            var dateString = dueDate.getDate().toString();
            if (dateString.length < 2) {
                dateString = "0" + dateString;
            }
            //need to + 1 for month
            //because getMonth() will return current month - 1
            var monthString = (dueDate.getMonth() + 1).toString();
            if (monthString.length < 2) {
                monthString = "0" + monthString;
            }
            var dueDateFormatted = dateString + "." + monthString;
            return dueDateFormatted;
        }
        catch (error) {
            return "";
        }
    };
    TaskDetailPage.prototype.loadUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Common.getUserList()];
                    case 1:
                        result = _a.sent();
                        if (result[1]) {
                            this.dtUser = result[1];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.loadProject = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Project.loadProject()];
                    case 1:
                        result = _a.sent();
                        if (result[1]) {
                            this.dtProject = result[1];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.loadComment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Comment.loadComment(this.task.ClgCode)];
                    case 1:
                        result = _a.sent();
                        if (result[0]) {
                            this.dtComment = result[0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.loadAttachment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Common.loadAttachment(this.task.AtcEntry)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.dtAttachment = result;
                        }
                        else {
                            this.dtAttachment = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.loadProjectTask = function (projectId, resetValue) {
        if (resetValue === void 0) { resetValue = false; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //reset value when reload Project
                        if (resetValue) {
                            this.task.ProjectWBS = null;
                        }
                        return [4 /*yield*/, this.httpClient.Project.loadProjectTask(projectId)];
                    case 1:
                        result = _a.sent();
                        this.dtProjectTask = result[1];
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.loadBusinessPartner = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.CFL.loadBusinessPartner()];
                    case 1:
                        result = _a.sent();
                        this.dtBP = result[1];
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.buttonAddClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var taskText, task, currentDate, currentTime, dt, ds, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.adding)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        this.adding = true;
                        taskText = this.addText.trim();
                        //get text from add task input
                        //if prevent adding task when no text
                        if (taskText === "")
                            return [2 /*return*/];
                        task = this.common.cloning(this.dtStructure[0]);
                        //set ClgCode= 0
                        task.ClgCode = 0;
                        task.Details = taskText;
                        //set closed ="N"
                        task.Closed = "N";
                        //set type = task
                        task.Action = "T";
                        task.Priority = "1";
                        task.DocType = -1;
                        task.GroupUser = this.setting.settings.userSign.toString();
                        task.AssignedBy = this.setting.settings.userSign;
                        currentDate = new Date();
                        task.CntctDate = currentDate;
                        task.parentTask = this.task.ClgCode;
                        //if no  Start Date
                        // (!!task.Recontact means task.Reconnect is null or empty)
                        //=>add a default Start Date
                        if (!task.Recontact) {
                            task.Recontact = currentDate.toJSON().slice(0, 10);
                            currentTime = new Date().toTimeString().slice(0, 5).replace(":", "");
                            task.BeginTime = currentTime;
                        }
                        dt = [task];
                        ds = { Table1: dt };
                        return [4 /*yield*/, this.httpClient.Task.addTask(ds)];
                    case 2:
                        result = _a.sent();
                        if (result.Message != "") {
                            this.common.createToast(result.Message, 0);
                            return [2 /*return*/];
                        }
                        //set task clg code = new clg code get from api
                        task.ClgCode = result.Content;
                        this.dtTask.push(task);
                        this.addText = "";
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        this.common.createToast(error_1, 0);
                        return [3 /*break*/, 5];
                    case 4:
                        this.adding = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.addComment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var taskText, task, dt, ds, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.adding)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        this.adding = true;
                        taskText = this.commentText.trim();
                        //get text from add task input
                        //if prevent adding task when no text
                        if (taskText === "")
                            return [2 /*return*/];
                        task = {};
                        //set ClgCode= 0
                        task.ID = this.task.ClgCode;
                        task.ObjType = "1470000128";
                        task.CmtCode = 0;
                        //TODO: fix to current user
                        task.UserSign = this.setting.settings.userSign;
                        //fix this too
                        task.UserName = this.setting.settings.UserNameLogin;
                        task.CreatedTime = this.common.adjustForTimezone(new Date());
                        task.Content = taskText;
                        dt = [task];
                        ds = { "CommentInfo": dt, "AdditionNotifyUser": [1, 2, 3] };
                        return [4 /*yield*/, this.httpClient.Comment.addComment(ds)];
                    case 2:
                        result = _a.sent();
                        if (result.Message != "") {
                            this.common.createToast(result.Message, 0);
                            return [2 /*return*/];
                        }
                        //set task clg code = new clg code get from api
                        task.CmtCode = result.Content;
                        this.dtComment.push(task);
                        this.commentText = "";
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        this.common.createToast(error_2, 0);
                        return [3 /*break*/, 5];
                    case 4:
                        this.adding = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.saveTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _task, dt, ds, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _task = this.task;
                        _task.ENDTime = this.common.toGluedTime(this.endTime);
                        _task.BeginTime = this.common.toGluedTime(this.beginTime);
                        if (this.groupUser) {
                            _task.GroupUser = this.groupUser.join(";");
                        }
                        if (_task.ProjectEntry === -1) {
                            _task.ProjectEntry = null;
                        }
                        if (_task.ProjectWBS === -1) {
                            _task.ProjectWBS = null;
                        }
                        if (_task.CardCode === -1) {
                            _task.CardCode = null;
                        }
                        dt = [_task];
                        ds = { Table1: dt };
                        return [4 /*yield*/, this.httpClient.Task.saveTask(ds)];
                    case 1:
                        result = _a.sent();
                        if (result.Message == "") {
                            this.navCtrl.pop(this.navOptions);
                            return [2 /*return*/];
                        }
                        if (result.Message != "") {
                            this.common.createToast(result.Message, 0);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.common.createToast(error_3, 0);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.openFile = function (attachment) {
        if (!attachment)
            return;
        var file_path = attachment.trgtPath + attachment.FileName + "." + attachment.FileExt;
        var a = document.createElement('A');
        a.href = file_path;
        a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    TaskDetailPage.prototype.clickComment = function (comment) {
        var _this = this;
        var sheet = this.actionSheet.create({
            title: '',
            buttons: [
                {
                    text: 'Remove',
                    handler: function () { _this.removeComment(comment); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        sheet.present();
    };
    TaskDetailPage.prototype.removeComment = function (comment) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Task.removeTask([comment])];
                    case 1:
                        result = _a.sent();
                        if (result !== undefined && result !== "") {
                            this.common.createToast(result, 0);
                            return [2 /*return*/];
                        }
                        //remove task from list
                        this.dtComment = this.dtComment.filter(function (cmt) { return cmt !== comment; });
                        console.log(comment);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.validateDueDate = function () {
        try {
            if (this.task.endDate) {
                var dueDate = this.common.addTimeToDate(this.task.endDate, this.endTime);
                var startDate = this.common.addTimeToDate(this.task.Recontact, this.beginTime);
                if (dueDate < startDate) {
                    this.common.createToast("Due date must be before Start date.", 0);
                    this.task.endDate = this.task.Recontact;
                    this.endTime = this.beginTime;
                }
            }
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    TaskDetailPage.prototype.formatCreateDate = function (date) {
        return this.common.formatCreateDate(date);
    };
    TaskDetailPage.prototype.clearDate = function (event) {
        this.task.endDate = null;
    };
    return TaskDetailPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
], TaskDetailPage.prototype, "navBar", void 0);
TaskDetailPage = TaskDetailPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-task-detail',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\task-detail\task-detail.html"*/'<!--\n  Generated template for the TaskDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header  class="bar-light ">\n\n  <ion-navbar>\n    <ion-title>Task: {{task.Details}}</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n  <ion-segment [(ngModel)]="tab">\n      <ion-segment-button value="detail">\n          Details\n        </ion-segment-button>\n        <ion-segment-button value="subtask">\n          Sub Tasks <span *ngIf="dtTask && dtTask.length > 0">({{dtTask.length}}) </span>\n        </ion-segment-button>\n        <!-- <ion-segment-button value="attachment">\n          Attachments <span *ngIf="dtAttachment && dtAttachment.length > 0">({{dtAttachment.length}}) </span>\n         </ion-segment-button> -->\n        <ion-segment-button value="comment">\n           Comments <span *ngIf="dtComment && dtComment.length > 0">({{dtComment.length}}) </span>\n          </ion-segment-button>\n  </ion-segment>\n</div>\n  <div [ngSwitch]="tab">\n  <ion-list *ngSwitchCase="\'detail\'" class="maintext">\n    <!-- <ion-item>\n      <ion-label >ClgCode</ion-label>\n      <ion-input [(ngModel)]="task.ClgCode"></ion-input>\n    </ion-item> -->\n\n    <ion-item>\n      <!-- <ion-label>Task</ion-label> -->\n      <ion-textarea class="maintext" autosize [(ngModel)]="task.Details" placeholder="Task..." style="font-weight:bold" [attr.autofocus]="isAdd ? true : null"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-textarea autosize [(ngModel)]="task.Notes" placeholder="Description..."></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floatting>Assign to</ion-label>\n      <ion-select [(ngModel)]="groupUser" multiple="true">\n        <ion-option *ngFor="let user of dtUser" [value]="user.USERID">\n          {{user.U_NAME}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Due date</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="task.endDate" cancelText="Clear" (ionCancel)="clearDate($event)" (ionChange)="validateDueDate()" ></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Due time</ion-label>\n      <ion-datetime displayFormat="H:mm" [(ngModel)]="endTime" (ionChange)="validateDueDate()" ></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Start date</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="task.Recontact" ></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Start time</ion-label>\n      <ion-datetime displayFormat="H:mm" [(ngModel)]="beginTime"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floatting>Project</ion-label>\n      <ion-select [(ngModel)]="task.ProjectEntry" (ionChange)="loadProjectTask(task.ProjectEntry, true)">\n        <ion-option [value]="-1">\n          (No Project)\n        </ion-option>\n        <ion-option *ngFor="let project of dtProject" [value]="project.AbsEntry">\n          {{project.Code}} - {{project.Name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floatting>Project WBS</ion-label>\n      <ion-select [(ngModel)]="task.ProjectWBS">\n        <ion-option [value]="-1">\n          (No WBS)\n        </ion-option>\n        <ion-option *ngFor="let wbs of dtProjectTask" [value]="wbs.TaskCode">\n          {{wbs.TaskCode}} - {{wbs.TaskName}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floatting>Business Partner</ion-label>\n      <ion-select [(ngModel)]="task.CardCode">\n        <ion-option [value]="-1">\n          (No BP)\n        </ion-option>\n        <ion-option *ngFor="let bp of dtBP" [value]="bp.CardCode">\n          {{bp.CardName}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngSwitchCase="\'subtask\'">\n    <!-- <task-view [taskStatus]="\'\'"></task-view> -->\n      <ion-input class="maintext"  style="font-size:1.2em;padding-bottom:9px;padding-left:13px" placeholder="Add a sub task..." [(ngModel)]="addText" (keydown.enter)="buttonAddClick()"></ion-input>   \n      <ion-list>\n          <ion-item [style.background-color]="_task.Closed===\'Y\'? \'rgb(200, 200, 200)\':\'white\'" *ngFor="let _task of dtTask">\n            <ion-checkbox mode="ios" style="margin-right:30px" (ionChange)="taskStatusChanged(_task)" [checked]="_task.Closed===\'Y\'"></ion-checkbox>\n            <ion-label style="margin:0px;">\n              <button (press)="showActionSheet(_task)" (tap)="fillInfo(_task)" [style.background-color]="_task.Closed===\'Y\'? \'rgb(200, 200, 200)\':\'white\'"  ion-item no-lines >\n                            <ion-row style="white-space:normal;" >\n                               <ion-col class="maintext" style="font-size:1.1em;"> {{_task.Details}} </ion-col>\n                             </ion-row>\n        \n                             <ion-row>\n                              <ion-col style="color:rgb(109, 78, 69);white-space:normal">{{getUserName(_task.GroupUser)}}</ion-col> \n                              <ion-col *ngIf="isOverdue(_task)" class="overdue" col-2 style="text-align: right;" >{{formatDueDate(_task)}}</ion-col>\n                              <ion-col *ngIf="!isOverdue(_task)" class="underdue" col-2 style="text-align: right;" >{{formatDueDate(_task)}}</ion-col>\n                             </ion-row>  \n                             <ion-row style="color:gray;font-size:0.8em" *ngIf="_task.ProjectEntry > 0">\n                              <ion-col >{{getProjectName(_task.ProjectEntry)}}<span *ngIf="_task.ProjectWBS"> - {{_task.ProjectWBS}} </span>  </ion-col> \n                             </ion-row> \n                            \n                                     \n              </button>\n            </ion-label>\n          </ion-item>          \n          </ion-list>\n  </div>\n\n  <ion-list *ngSwitchCase="\'attachment\'" style="padding-bottom:20px">\n    <button ion-item *ngFor="let attachment of dtAttachment" (click)="openFile(attachment)">\n                      <ion-row  >\n                          <ion-col class="maintext" style="font-size:1.1em;color:rgb(143, 119, 119)"> {{attachment.FileName}} </ion-col>\n                          <ion-col style="font-size:0.75em;color:rgb(173, 173, 173);text-align: right;margin-top:10px;"> {{common.formatCreateDate(attachment.Date)}} </ion-col>\n                      </ion-row>  \n                      <ion-row>\n                     \n                         \n                      </ion-row>  \n                      <ion-row style="white-space:normal" >\n                         <ion-col  style="font-size:0.85em;color:rgb(73, 73, 105)"> {{attachment.trgtPath}}\{{attachment.FileName}}.{{attachment.FileExt}} </ion-col>\n                      </ion-row>                      \n                               \n    </button>          \n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'comment\'" style="padding-bottom:20px">\n    <button ion-item *ngFor="let comment of dtComment" (click)="clickComment(comment)">\n                      <ion-row  >\n                          <ion-col class="maintext" style="font-size:1.1em;color:#488aff"> {{comment.UserName}} </ion-col>\n                          <ion-col style="font-size:0.75em;color:rgb(173, 173, 173);text-align: right;margin-top:10px;"> {{common.formatCreateDate(comment.CreatedTime)}} </ion-col>\n                      </ion-row>  \n                      <ion-row>\n                         \n                      </ion-row>  \n                      <ion-row style="white-space:normal" >\n                         <ion-col  style="color:rgb(68, 68, 80)"> {{comment.Content}} </ion-col>\n                      </ion-row>                      \n                               \n    </button>          \n  </ion-list>\n\n</div>\n</ion-content>\n<ion-footer >\n    <ion-toolbar *ngIf="tab==\'detail\'" style="text-align:center; color:rgb(172,172,172)">\n     Created {{common.formatCreateDate(task.CntctDate, \'on \')}} <span *ngIf="task.AssignedBy!=task.GroupUser">, by {{getUserName(task.AssignedBy)}} </span>\n      </ion-toolbar>\n    <ion-toolbar *ngIf="tab==\'comment\'">\n        <ion-input class="maintext"  style="font-size:1.2em;padding-bottom:9px;padding-left:13px" placeholder="Add a comment..." [(ngModel)]="commentText" (keydown.enter)="addComment()"></ion-input>   \n      </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\task-detail\task-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* Settings */]])
], TaskDetailPage);

var TaskDetailPage_1;
//# sourceMappingURL=task-detail.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryTransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bin_confirm_bin_confirm__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the InventoryTransferPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InventoryTransferPage = (function () {
    function InventoryTransferPage(transfer, modalCtrl, translateService, barcodeScanner, common, setting) {
        var _this = this;
        this.transfer = transfer;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        this.barcodeScanner = barcodeScanner;
        this.common = common;
        this.setting = setting;
        this.isUseBarcode = false;
        this.translateService.get('DATA_NOT_FOUND').subscribe(function (value) {
            _this.errorDataNotFound = value;
        });
    }
    InventoryTransferPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setting.load().then(function (setting) {
            if (setting.barcodeInternal) {
                _this.isUseBarcode = true;
            }
            setTimeout(function () {
                _this.barcodeInput.setFocus();
            }, 150);
        });
    };
    InventoryTransferPage.prototype.handler = function (ev) {
        var _this = this;
        if (ev.keyCode == 13 && this.barcode != '') {
            if (this.listBarcode != null && this.listBarcode.indexOf(this.barcode) > -1) {
                this.barcode = '';
                return;
            }
            this.transfer.getItem(this.barcode)
                .then(function (data) {
                _this.getData(data);
                var bar = _this.barcode;
                if (_this.listBarcode != null)
                    _this.listBarcode.push(bar);
                else
                    _this.listBarcode = [bar];
            }, function (err) {
                _this.createToast(err, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
            });
            this.barcode = '';
            this.barcodeInput.setFocus();
        }
    };
    InventoryTransferPage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (barcodeData.cancelled)
                return;
            if (_this.listBarcode != null && _this.listBarcode.indexOf(_this.barcode) > -1) {
                _this.barcode = '';
                return;
            }
            _this.transfer.getItem(barcodeData.text)
                .then(function (data) {
                _this.getData(data);
                var bar = barcodeData.text;
                if (_this.listBarcode != null)
                    _this.listBarcode.push(bar);
                else
                    _this.listBarcode = [bar];
            }, function (err) {
                _this.createToast(err, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
            });
        }).catch(function (err) {
            _this.createToast(err, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
        });
    };
    InventoryTransferPage.prototype.createToast = function (mesg, type) {
        var _this = this;
        this.common.createToast(mesg, type).then(function (rs) {
            _this.barcodeInput.setFocus();
        });
    };
    InventoryTransferPage.prototype.getData = function (data) {
        var _this = this;
        if (data[0] != null && data[0].length > 0)
            this.structrure = data[0];
        if (data[1] != null && data[1].length > 0) {
            if (this.data == null) {
                this.data = data[1];
            }
            else {
                data[1].forEach(function (obj) {
                    _this.data.push(obj);
                });
            }
        }
        else {
            this.createToast(this.errorDataNotFound, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
        }
    };
    InventoryTransferPage.prototype.refreshForm = function () {
        this.structrure = null;
        this.data = null;
        this.listBarcode = null;
        this.barcodeInput.setFocus();
    };
    InventoryTransferPage.prototype.submit = function () {
        var _this = this;
        try {
            //check data empty
            if (this.data == null || this.data.length == 0) {
                this.createToast("Data is empty!", __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
                this.barcodeInput.setFocus();
                return;
            }
            var binModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__bin_confirm_bin_confirm__["a" /* BinConfirmPage */], { isUseBarcode: this.isUseBarcode });
            binModal.onDidDismiss(function (barcode) {
                if (barcode)
                    _this.confirmBin(barcode);
                setTimeout(function () {
                    _this.barcodeInput.setFocus();
                }, 150);
            });
            binModal.present();
        }
        catch (error) {
            this.createToast(error, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
        }
    };
    InventoryTransferPage.prototype.confirmBin = function (binCode) {
        var _this = this;
        this.transfer.doTransfer(this.data, binCode)
            .then(function (rs) {
            if (rs['Message'] == "") {
                _this.createToast("Inventory transfer success! " + rs['Content'], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].success);
                _this.refreshForm();
            }
            else {
                _this.createToast(rs['Message'], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
                console.log(rs['Message']);
                _this.barcodeInput.setFocus();
            }
            (function (err) {
                _this.createToast(err, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
            });
        });
    };
    return InventoryTransferPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('focusInput'),
    __metadata("design:type", Object)
], InventoryTransferPage.prototype, "barcodeInput", void 0);
InventoryTransferPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-inventory-transfer',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\inventory-transfer\inventory-transfer.html"*/'<!--\n  Generated template for the InventoryTransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inventory Transfer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>\n      <ion-icon name="barcode"></ion-icon>\n    </ion-label>\n    <ion-input type="text" placeholder="Barcode" [(ngModel)]="barcode" name="barcode" (keydown)="handler($event)" #focusInput></ion-input>\n  </ion-item>\n\n  <ion-grid>\n\n    <ion-row justify-content-start class="rowHeader">\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{col.ColumnName}} width-10>\n        {{col.Caption}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor="let row of data" justify-content-start>\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{row[col.ColumnName]}} width-10>\n        {{row[col.ColumnName]}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <button ion-button icon-left (click)="scan()" *ngIf="isUseBarcode">\n    <ion-icon name="barcode" > Scan</ion-icon>\n  </button>\n\n  <button ion-button icon-left (click)="refreshForm()" *ngIf="data!= null">\n    <ion-icon name="refresh" > Refresh</ion-icon>\n  </button>\n\n  <button ion-button icon-right (click)="submit()" *ngIf="data!= null">\n    <ion-icon name="arrow-round-forward" > Confirm Bin</ion-icon>\n  </button>\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\inventory-transfer\inventory-transfer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* InventoryTransfers */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* Settings */]])
], InventoryTransferPage);

//# sourceMappingURL=inventory-transfer.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickedConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bin_confirm_bin_confirm__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the InventoryTransferPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PickedConfirmPage = (function () {
    function PickedConfirmPage(transfer, modalCtrl, translateService, barcodeScanner, common, setting, picking) {
        var _this = this;
        this.transfer = transfer;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        this.barcodeScanner = barcodeScanner;
        this.common = common;
        this.setting = setting;
        this.picking = picking;
        this.isUseBarcode = false;
        this.translateService.get('DATA_NOT_FOUND').subscribe(function (value) {
            _this.errorDataNotFound = value;
        });
    }
    PickedConfirmPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setting.load().then(function (setting) {
            if (setting.barcodeInternal) {
                _this.isUseBarcode = true;
            }
            setTimeout(function () {
                _this.barcodeInput.setFocus();
            }, 150);
        });
    };
    PickedConfirmPage.prototype.handler = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(ev.keyCode == 13 && this.barcode != '')) return [3 /*break*/, 2];
                        if (this.listBarcode != null && this.listBarcode.indexOf(this.barcode) > -1) {
                            this.barcode = '';
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.picking.LoadBatchLine(this.barcode, -1)];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        this.barcode = '';
                        this.barcodeInput.setFocus();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    PickedConfirmPage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (barcodeData.cancelled)
                return;
            if (_this.listBarcode != null && _this.listBarcode.indexOf(_this.barcode) > -1) {
                _this.barcode = '';
                return;
            }
            _this.transfer.getItem(barcodeData.text)
                .then(function (data) {
                _this.getData(data);
                var bar = barcodeData.text;
                if (_this.listBarcode != null)
                    _this.listBarcode.push(bar);
                else
                    _this.listBarcode = [bar];
            }, function (err) {
                _this.createToast(err, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
            });
        }).catch(function (err) {
            _this.createToast(err, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
        });
    };
    PickedConfirmPage.prototype.createToast = function (mesg, type) {
        var _this = this;
        this.common.createToast(mesg, type).then(function (rs) {
            _this.barcodeInput.setFocus();
        });
    };
    PickedConfirmPage.prototype.getData = function (data) {
        var _this = this;
        if (data[0] != null && data[0].length > 0)
            this.structrure = data[0];
        if (data[1] != null && data[1].length > 0) {
            if (this.data == null) {
                this.data = data[1];
            }
            else {
                data[1].forEach(function (obj) {
                    _this.data.push(obj);
                });
            }
        }
        else {
            this.createToast(this.errorDataNotFound, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
        }
    };
    PickedConfirmPage.prototype.refreshForm = function () {
        this.structrure = null;
        this.data = null;
        this.listBarcode = null;
        this.barcodeInput.setFocus();
    };
    PickedConfirmPage.prototype.submit = function () {
        var _this = this;
        try {
            //check data empty
            if (this.data == null || this.data.length == 0) {
                this.createToast("Data is empty!", __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
                this.barcodeInput.setFocus();
                return;
            }
            var binModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__bin_confirm_bin_confirm__["a" /* BinConfirmPage */], { isUseBarcode: this.isUseBarcode });
            binModal.onDidDismiss(function (barcode) {
                if (barcode)
                    _this.confirmBin(barcode);
                setTimeout(function () {
                    _this.barcodeInput.setFocus();
                }, 150);
            });
            binModal.present();
        }
        catch (error) {
            this.createToast(error, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
        }
    };
    PickedConfirmPage.prototype.confirmBin = function (binCode) {
        var _this = this;
        this.transfer.doTransfer(this.data, binCode)
            .then(function (rs) {
            if (rs['Message'] == "") {
                _this.createToast("Inventory transfer success! " + rs['Content'], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].success);
                _this.refreshForm();
            }
            else {
                _this.createToast(rs['Message'], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
                console.log(rs['Message']);
                _this.barcodeInput.setFocus();
            }
            (function (err) {
                _this.createToast(err, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
            });
        });
    };
    return PickedConfirmPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('focusInput'),
    __metadata("design:type", Object)
], PickedConfirmPage.prototype, "barcodeInput", void 0);
PickedConfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-picked-confirm',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\picked-confirm\picked-confirm.html"*/'<!--\n  Generated template for the InventoryTransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Picked Confirm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>\n      <ion-icon name="barcode"></ion-icon>\n    </ion-label>\n    <ion-input type="text" placeholder="Barcode" [(ngModel)]="barcode" name="barcode" (keydown)="handler($event)" #focusInput></ion-input>\n  </ion-item>\n\n  <ion-grid>\n\n    <ion-row justify-content-start class="rowHeader">\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{col.ColumnName}} width-10>\n        {{col.Caption}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor="let row of data" justify-content-start>\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{row[col.ColumnName]}} width-10>\n        {{row[col.ColumnName]}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <button ion-button icon-left (click)="scan()" *ngIf="isUseBarcode">\n    <ion-icon name="barcode" > Scan</ion-icon>\n  </button>\n\n  <button ion-button icon-left (click)="refreshForm()" *ngIf="data!= null">\n    <ion-icon name="refresh" > Refresh</ion-icon>\n  </button>\n\n  <button ion-button icon-right (click)="submit()" *ngIf="data!= null">\n    <ion-icon name="arrow-round-forward" > Confirm Bin</ion-icon>\n  </button>\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\picked-confirm\picked-confirm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* InventoryTransfers */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["e" /* PickedConfirm */]])
], PickedConfirmPage);

//# sourceMappingURL=picked-confirm.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_client_http_helper__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_ApzRsa__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_client_http_client__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var Login = (function () {
    function Login(http, api, setting, httpHelper, httpClient) {
        this.http = http;
        this.api = api;
        this.setting = setting;
        this.httpHelper = httpHelper;
        this.httpClient = httpClient;
    }
    Login.prototype.initApi = function () {
        var _this = this;
        return this.setting.load().then(function (option) {
            _this.api.url = option.apiAdress;
            _this.httpHelper.url = option.apiAdress;
            return Promise.resolve(option);
        });
    };
    Login.prototype.loadCompany = function (domain) {
        return this.api.get('Commons', 'GetDbList', [{ name: 'domain', value: domain }])
            .map(function (res) { return res.json(); });
    };
    Login.prototype.loadCompany2 = function (domain) {
        var _this = this;
        if (this.listCompany) {
            return Promise.resolve(this.listCompany);
        }
        return new Promise(function (resolve) {
            _this.api.get('Commons', 'GetDbList', [{ name: 'domain', value: domain }])
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.listCompany = data;
                resolve(_this.listCompany);
                console.log(_this.listCompany),
                    function (Error) {
                        console.log('Something went wrong!');
                    };
            });
        });
    };
    Login.prototype.saveLoginInfor = function (loginInfo) {
        this.setting.settings.domain = loginInfo.Doimain;
        this.setting.settings.company = loginInfo.DbName;
        this.setting.settings.userName = loginInfo.UserName;
        this.setting.settings.UserNameLogin = loginInfo.UserNameLogin;
        this.setting.settings.userSign = loginInfo.UserSign;
        this.setting.save();
    };
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    Login.prototype.login = function (loginInfo) {
        var _this = this;
        var _loginInfo = {};
        _loginInfo.Doimain = Object(__WEBPACK_IMPORTED_MODULE_7__lib_ApzRsa__["b" /* Encrypt */])(loginInfo.Doimain);
        _loginInfo.DbName = Object(__WEBPACK_IMPORTED_MODULE_7__lib_ApzRsa__["b" /* Encrypt */])(loginInfo.DbName);
        _loginInfo.UserName = Object(__WEBPACK_IMPORTED_MODULE_7__lib_ApzRsa__["b" /* Encrypt */])(loginInfo.UserName);
        _loginInfo.Password = Object(__WEBPACK_IMPORTED_MODULE_7__lib_ApzRsa__["b" /* Encrypt */])(loginInfo.Password);
        _loginInfo.BuildVersion = Object(__WEBPACK_IMPORTED_MODULE_7__lib_ApzRsa__["b" /* Encrypt */])("000");
        _loginInfo.ClientVersion = Object(__WEBPACK_IMPORTED_MODULE_7__lib_ApzRsa__["b" /* Encrypt */])("2.00");
        var seq = this.api.post('LoginIRS', 'Login', _loginInfo).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
            // If the API returned a successful response, mark the user as logged in
            if (Object(__WEBPACK_IMPORTED_MODULE_7__lib_ApzRsa__["a" /* Decrypt */])(res.Message) == "success") {
                _this.api._sessionId = Object(__WEBPACK_IMPORTED_MODULE_7__lib_ApzRsa__["a" /* Decrypt */])(res.Content).split(",", 1);
                _this.httpClient.Common.getUserLoginInfo(loginInfo.UserName).then(function (additionLoginInfo) {
                    if (additionLoginInfo[0]) {
                        loginInfo.UserSign = additionLoginInfo[0].UserID;
                        loginInfo.UserNameLogin = additionLoginInfo[0].U_NAME;
                    }
                    _this._loggedIn(loginInfo);
                    _this.saveLoginInfor(loginInfo);
                }).catch(function (res) {
                    _this._loggedIn(loginInfo);
                    _this.saveLoginInfor(loginInfo);
                });
            }
            else {
                console.error('ERROR', Object(__WEBPACK_IMPORTED_MODULE_7__lib_ApzRsa__["a" /* Decrypt */])(res.Message));
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    Login.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.api.get('LoginIRS', 'LogOut', [{ name: 'sessionId', value: _this.api._sessionId }])
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            });
        });
    };
    Login.prototype._loggedOut = function () {
        this._login = null;
        this.api._sessionId = '';
    };
    /**
     * Process a login/signup response to store user data
     */
    Login.prototype._loggedIn = function (loginInfo) {
        this._login = loginInfo;
    };
    Login.prototype.getUserSign = function (nameLogin) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getDataTable("Users", "GetUserSign", [{ name: "nameLogin", value: nameLogin }])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Login.prototype.getUserLogin = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getDataTable("Users", "GetUserLogin", [{ name: "madk", value: userName }])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* Settings */], __WEBPACK_IMPORTED_MODULE_4__http_client_http_helper__["a" /* HttpClientHelper */], __WEBPACK_IMPORTED_MODULE_8__http_client_http_client__["a" /* HttpClient */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = ArrayReverse;
/* harmony export (immutable) */ __webpack_exports__["d"] = ArrayCopy1;
/* unused harmony export ArrayCopy2 */
/* unused harmony export ArrayFillMultiDimensional */
/* unused harmony export ArrayGetMultiDimensional */
/* harmony export (immutable) */ __webpack_exports__["c"] = ArrayClear;
/* harmony export (immutable) */ __webpack_exports__["f"] = BufferBlockCopy;
/* harmony export (immutable) */ __webpack_exports__["g"] = UnicodeEncoderGetBytes;
/* harmony export (immutable) */ __webpack_exports__["h"] = UnicodeEncoderGetString;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApzRandom; });
/* harmony export (immutable) */ __webpack_exports__["a"] = ApzByte;
function ArrayReverse(array, index, length) {
    index = index ? index : 0;
    length = length ? length : array.length;
    var iArray = array.slice(index, index + length).reverse();
    for (var i = 0; i < length; i++)
        array[i + index] = iArray[i];
}
;
function ArrayCopy1(sourceArray, destinationArray, length) {
    for (var i = 0; i < length; i++) {
        destinationArray[i] = sourceArray[i];
    }
}
;
function ArrayCopy2(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
    for (var i = 0; i < length; i++) {
        destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
    }
}
;
function ArrayFillMultiDimensional(array, dimensions, value) {
    var x;
    if (dimensions.length > 0) {
        for (x = 0; x < array.length; x++) {
            var ar = new Array(dimensions[0]);
            var dims = dimensions.slice(1);
            ArrayFillMultiDimensional(ar, dims, value);
            array[x] = ar;
        }
    }
    else {
        // if this array is placed at last level.
        for (x = 0; x < array.length; x++) {
            // set default value.
            array[x] = value;
        }
    }
    return array;
}
;
function ArrayGetMultiDimensional(dimensions, value) {
    var array = new Array(dimensions[0]);
    return ArrayFillMultiDimensional(array, dimensions.slice(1), value);
}
;
function ArrayClear(array, index, length) {
    for (var i = 0; i < length; i++)
        array[i + index] = 0;
}
;
function BufferBlockCopy(src, srcOffset, dst, dstOffset, count) {
    for (var i = 0; i < count; i++) {
        dst[dstOffset + i] = src[srcOffset + i];
    }
}
;
/*
export function UTF8GetBytes(s : string) {
    var bytes = [];
    var c = 0;
    for (var i = 0; i < s.length; i++) {
        c = s.charCodeAt(i);
        // Convert char code to bytes.
        if (c < 0x80) {
            bytes.push(c);
        } else if (c < 0x800) {
            bytes.push(0xC0 | c >> 6);
            bytes.push(0x80 | c & 0x3F);
        } else if (c < 0x10000) {
            bytes.push(0xE0 | c >> 12);
            bytes.push(0x80 | c >> 6 & 0x3F);
            bytes.push(0x80 | c & 0x3F);
        } else if (c < 0x200000) {
            bytes.push(0xF0 | c >> 18);
            bytes.push(0x80 | c >> 12 & 0x3F);
            bytes.push(0x80 | c >> 6 & 0x3F);
            bytes.push(0x80 | c & 0x3F);
        } else {
            // If char is unknown then push "?".
            bytes.push(0x3F);
        }
    }
    return bytes;
};
*/
function UnicodeEncoderGetBytes(s) {
    var bytes = [];
    var c = 0;
    for (var i = 0; i < s.length; i++) {
        c = s.charCodeAt(i);
        if (c > 0xFFFF) {
            bytes.push(0xDC00 | c & 0x3FF);
            bytes.push(0xD7C0 + (c >> 10));
        }
        else {
            bytes.push(c & 0xFF);
            bytes.push(c >> 8);
        }
    }
    return bytes;
}
;
function UnicodeEncoderGetString(bytes) {
    var s = "";
    var b1 = 0;
    var b2 = 0;
    for (var i = 0; i < bytes.length; i++) {
        b1 = bytes[i];
        i++;
        b2 = bytes[i];
        s += String.fromCharCode(b2 << 8 | b1);
    }
    return s;
}
;
var ApzRandom = (function () {
    function ApzRandom() {
    }
    ;
    ApzRandom.prototype.Next = function (minValue, maxValue) {
        switch (arguments.length) {
            case 0:
                maxValue = Math.pow(2, 31);
                minValue = 0;
                break;
            case 1:
                maxValue = arguments[0];
                minValue = 0;
                break;
            case 2:
                break;
            default:
                return 0;
        }
        var number = minValue;
        if (maxValue > minValue) {
            number = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
        }
        return number;
    };
    ;
    ApzRandom.prototype.NextBytes = function (buffer) {
        var length = buffer.length;
        for (var i = 0; i < length; i++) {
            buffer[i] = this.Next(0, 256);
        }
        return buffer;
    };
    ;
    return ApzRandom;
}());

;
function ApzByte(para) {
    var dims = [];
    dims.push(para);
    // Return multi-dimensional array filled with zero.
    return ArrayGetMultiDimensional(dims, 0);
}
;
//# sourceMappingURL=ApzSystem.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = SettingsPage_1 = (function () {
    function SettingsPage(navCtrl, viewCtrl, settings, formBuilder, navParams, translate) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'login',
            pageTitleKey: 'SETTINGS_PAGE_LOGINFO'
        };
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SettingsPage_1;
    }
    SettingsPage.prototype._buildForm = function () {
        var _this = this;
        var group = {
            apiAdress: [this.options.apiAdress],
            barcodeInternal: [this.options.barcodeInternal],
            defaultPage: [this.options.defaultPage],
        };
        switch (this.page) {
            case 'main':
                break;
            case 'login':
                group = {
                    domain: [this.options.domain],
                    company: [this.options.company],
                    userName: [this.options.userName]
                };
                break;
        }
        this.form = this.formBuilder.group(group);
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.settings.merge(_this.form.value);
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.page = this.navParams.get('page') || this.page;
        this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
        this.translate.get(this.pageTitleKey).subscribe(function (res) {
            _this.pageTitle = res;
        });
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.options = _this.settings.allSettings;
            _this._buildForm();
        });
    };
    SettingsPage.prototype.saveSetting = function () {
        this.settings.save().then(function () {
            console.log('saved');
        });
    };
    SettingsPage.prototype.ngOnChanges = function () {
        console.log('Ng All Changes');
    };
    SettingsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return SettingsPage;
}());
SettingsPage = SettingsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ pageTitle }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="form" *ngIf="settingsReady">\n    <ion-list *ngIf="page == \'main\'">\n\n      <ion-item>\n        <ion-label>{{ \'SETTINGS_BARCODE\' | translate }}</ion-label>\n        <ion-toggle formControlName="barcodeInternal"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'DEFAULT_PAGE\' | translate }}</ion-label>\n        <ion-select formControlName="defaultPage">\n          <ion-option value="ReportCompletePage" checked="true">Report Complete Page</ion-option>\n          <ion-option value="InventoryTransferPage">Inventory Transfer Page</ion-option>\n          <ion-option value="PickedConfirmPage">Picked Confirm Page</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>API</ion-label>\n        <ion-input formControlName="apiAdress"></ion-input>\n      </ion-item>\n\n      <button ion-item [navPush]="subSettings" [navParams]="profileSettings">\n        {{ \'SETTINGS_LOGINFO_BUTTON\' | translate }}\n      </button>\n    </ion-list>\n\n    <ion-list *ngIf="page == \'login\'">\n      <ion-item>\n        <ion-label>{{ \'DOMAIN\' | translate }}</ion-label>\n        <ion-input formControlName="domain"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'COMPANY\' | translate }}</ion-label>\n        <ion-input formControlName="company"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input formControlName="userName"></ion-input>\n      </ion-item>\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
], SettingsPage);

var SettingsPage_1;
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TaskListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TaskListPage = (function () {
    function TaskListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TaskListPage.prototype.ionViewDidLoad = function () {
        this.navBar.backButtonClick = this.clickBack.bind(this);
    };
    TaskListPage.prototype.clickBack = function () {
        var navOptions = { animation: "ios-transition", duration: 600 };
        this.navCtrl.pop(navOptions);
    };
    return TaskListPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
], TaskListPage.prototype, "navBar", void 0);
TaskListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-task-list',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\task-list\task-list.html"*/'<!--\n  Generated template for the TaskListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bar-light">\n  <ion-navbar >\n    <ion-title>Completed Task</ion-title>\n   \n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content >\n  <task-view [taskStatus]="\'Y\'" [hideAddText]="\'true\'"></task-view>\n                     \n<!-- <ion-list>\n  <ion-item  [style.background-color]="task.Closed===\'Y\'? \'rgb(172, 172, 172)\':\'white\'" *ngFor="let task of dtTask">\n    <ion-checkbox mode="ios" style="margin-right:30px" (ionChange)="taskStatusChanged(task)" [checked]="task.Closed===\'Y\'"></ion-checkbox>\n    <ion-label style="margin:0px;">\n      <button (press)="showActionSheet(task)" (tap)="fillInfo(task)"  [style.background-color]="task.Closed===\'Y\'? \'rgb(172, 172, 172)\':\'white\'" ion-item no-lines >\n                    <ion-row style="white-space:normal" >\n                       <ion-col class="maintext" style="font-size:1.1em;"> {{task.Details}} </ion-col>\n                     </ion-row>\n\n                     <ion-row>\n                      <ion-col style="color:rgb(109, 78, 69);white-space:normal">{{getUserName(task.GroupUser)}}</ion-col> \n                      <ion-col *ngIf="isOverdue(task)" class="overdue" col-2 style="text-align: right;" >{{formatDueDate(task)}}</ion-col>\n                      <ion-col *ngIf="!isOverdue(task)" class="underdue" col-2 style="text-align: right;" >{{formatDueDate(task)}}</ion-col>\n                     </ion-row>  \n                     <ion-row style="color:gray;font-size:0.8em" *ngIf="task.ProjectEntry > 0">\n                      <ion-col >{{getProjectName(task.ProjectEntry)}}<span *ngIf="task.ProjectWBS"> - {{task.ProjectWBS}} </span>  </ion-col> \n                     </ion-row> \n                    \n                             \n      </button>\n    </ion-label>\n  </ion-item>          \n  </ion-list> -->\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\task-list\task-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], TaskListPage);

//# sourceMappingURL=task-list.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bin_confirm_bin_confirm__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ReportCompletePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ReportCompletePage = (function () {
    function ReportCompletePage(navCtrl, navParams, report, modalCtrl, translateService, barcodeScanner, common, setting) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.report = report;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        this.barcodeScanner = barcodeScanner;
        this.common = common;
        this.setting = setting;
        this.isUseBarcode = false;
        this.translateService.get('DATA_NOT_FOUND').subscribe(function (value) {
            _this.errorDataNotFound = value;
        });
    }
    ReportCompletePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setting.load().then(function (setting) {
            if (setting.barcodeInternal) {
                _this.isUseBarcode = true;
            }
            setTimeout(function () {
                _this.barcodeInput.setFocus();
            }, 150);
        });
    };
    ReportCompletePage.prototype.handler = function (ev) {
        var _this = this;
        if (ev.keyCode == 13 && this.barcode != '') {
            if (this.listBarcode != null && this.listBarcode.indexOf(this.barcode) > -1) {
                this.barcode = '';
                return;
            }
            this.report.getProduction(this.barcode)
                .then(function (data) {
                _this.getData(data);
                var bar = _this.barcode;
                if (_this.listBarcode != null)
                    _this.listBarcode.push(bar);
                else
                    _this.listBarcode = [bar];
            }, function (err) {
                _this.createToast(err, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
            });
            this.barcode = '';
            this.barcodeInput.setFocus();
        }
    };
    ReportCompletePage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (barcodeData.cancelled)
                return;
            if (_this.listBarcode != null && _this.listBarcode.indexOf(_this.barcode) > -1) {
                _this.barcode = '';
                return;
            }
            _this.report.getProduction(barcodeData.text)
                .then(function (data) {
                _this.getData(data);
                var bar = barcodeData.text;
                if (_this.listBarcode != null)
                    _this.listBarcode.push(bar);
                else
                    _this.listBarcode = [bar];
            }, function (err) {
                _this.createToast(err, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
            });
        }).catch(function (err) {
            _this.createToast(err, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
        });
    };
    ReportCompletePage.prototype.createToast = function (mesg, type) {
        var _this = this;
        this.common.createToast(mesg, type).then(function (rs) {
            _this.barcodeInput.setFocus();
        });
    };
    ReportCompletePage.prototype.getData = function (data) {
        var _this = this;
        if (data[0] != null && data[0].length > 0)
            this.structrure = data[0];
        if (data[1] != null && data[1].length > 0) {
            if (this.data == null) {
                this.data = data[1];
            }
            else {
                data[1].forEach(function (obj) {
                    _this.data.push(obj);
                });
            }
        }
        else {
            this.createToast(this.errorDataNotFound, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
        }
    };
    ReportCompletePage.prototype.refreshForm = function () {
        this.structrure = null;
        this.data = null;
        this.listBarcode = null;
        this.barcodeInput.setFocus();
    };
    ReportCompletePage.prototype.submit = function () {
        var _this = this;
        try {
            //check data empty
            if (this.data == null || this.data.length == 0) {
                this.createToast("Data is empty!", __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
                this.barcodeInput.setFocus();
                return;
            }
            var binModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__bin_confirm_bin_confirm__["a" /* BinConfirmPage */], { isUseBarcode: this.isUseBarcode });
            binModal.onDidDismiss(function (barcode) {
                if (barcode)
                    _this.confirmBin(barcode);
                setTimeout(function () {
                    _this.barcodeInput.setFocus();
                }, 150);
            });
            binModal.present();
        }
        catch (error) {
            this.createToast(error, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
        }
    };
    ReportCompletePage.prototype.confirmBin = function (binCode) {
        var _this = this;
        //inset bincode to data
        if ("BinCode" in this.data[0]) {
            this.data[0].BinCode = binCode;
        }
        this.report.reportComplete(this.data)
            .then(function (rs) {
            if (rs == "") {
                _this.createToast("Report complete success!", __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].success);
                _this.refreshForm();
            }
            else {
                _this.createToast(rs, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
                _this.barcodeInput.setFocus();
            }
            (function (err) {
                _this.createToast(err, __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* MsgType */].error);
            });
        });
    };
    return ReportCompletePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('focusInput'),
    __metadata("design:type", Object)
], ReportCompletePage.prototype, "barcodeInput", void 0);
ReportCompletePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-report-complete',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\report-complete\report-complete.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Report Complete</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>\n      <ion-icon name="barcode"></ion-icon>\n    </ion-label>\n    <ion-input type="text" placeholder="Barcode" [(ngModel)]="barcode" name="barcode" (keydown)="handler($event)" #focusInput></ion-input>\n  </ion-item>\n\n  <ion-grid>\n\n    <ion-row justify-content-start class="rowHeader">\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{col.ColumnName}}>\n        {{col.Caption}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor="let row of data" justify-content-start>\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{row[col.ColumnName]}}>\n        {{row[col.ColumnName]}}\n      </ion-col>\n    </ion-row> \n  </ion-grid>\n\n  <button ion-button icon-left (click)="scan()" *ngIf="isUseBarcode">\n    <ion-icon name="barcode" > Scan</ion-icon>\n  </button>\n\n  <button ion-button icon-left (click)="refreshForm()" *ngIf="data!= null">\n    <ion-icon name="refresh" > Refresh</ion-icon>\n  </button>\n\n  <button ion-button icon-right (click)="submit()" *ngIf="data!= null">\n    <ion-icon name="arrow-round-forward" > Confirm Bin</ion-icon>\n  </button>\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\report-complete\report-complete.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["f" /* ReportComplete */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* Settings */]])
], ReportCompletePage);

//# sourceMappingURL=report-complete.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RecurrencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var EventDetailPage = (function () {
    //#endregion
    function EventDetailPage(navCtrl, navParams, httpClient, common, modalCtrl, actionSheet) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.common = common;
        this.modalCtrl = modalCtrl;
        this.actionSheet = actionSheet;
        //#region Vars
        this.dtComment = [];
        this.dtBP = [];
        this.visible = false;
        this.tab = "detail";
        this.commentText = "";
        this.groupUser = [];
        this.adding = false;
        // var taskParams=navParams.get('task');
        //this.task=taskParams;
        // this.mode=detailMode;
        this.event = navParams.get('event');
        this.isAdd = navParams.get('isAdd');
        this.callbackDelegate = navParams.get('callback');
        if (this.event.GroupUser) {
            this.groupUser = this.event.GroupUser.split(";");
        }
    }
    EventDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventDetailPage');
        this.getTableColumns();
        this.loadDefaultDate();
        if (!this.isAdd) {
            this.loadComment();
        }
        else {
            this.recontactChanged();
        }
        this.loadBusinessPartner();
        this.loadRecurPat();
        this.loadLocation();
        this.loadUser();
    };
    EventDetailPage.prototype.loadLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpClient.Event.loadMettingLocation()];
                    case 1:
                        result = _a.sent();
                        if (result === undefined)
                            return [2 /*return*/];
                        this.dtLocation = result;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.common.createToast(error_1, 0);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EventDetailPage.prototype.loadUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpClient.Common.getUserList()];
                    case 1:
                        result = _a.sent();
                        this.dtUser = result[1];
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.common.createToast(error_2, 0);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EventDetailPage.prototype.recontactChanged = function () {
        try {
            var dateChanged = new Date(this.event.Recontact.toString());
            this.event.endDate = this.event.Recontact;
            this.event.SeStartDat = this.event.Recontact;
            this.event.Monday = "N";
            this.event.Tuesday = "N";
            this.event.Wednesday = "N";
            this.event.Thursday = "N";
            this.event.Friday = "N";
            this.event.Saturday = "N";
            this.event.Sunday = "N";
            this.getDay(dateChanged);
            this.getDayOfMonth(dateChanged);
            this.getMonth(dateChanged);
            this.getWeekOfMonth(dateChanged);
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    EventDetailPage.prototype.getDay = function (date) {
        //var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.event.DayOfWeek = date.getDay() + 1;
        //days[date.getDay()];
    };
    EventDetailPage.prototype.getDayOfMonth = function (date) {
        this.event.DayInMonth = date.getDate();
    };
    EventDetailPage.prototype.getMonth = function (date) {
        //var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.event.Month = date.getMonth() + 1;
        // months[date.getMonth()];
    };
    EventDetailPage.prototype.getWeekOfMonth = function (date) {
        var weekOfMonth = ['First', 'Second', 'Third', 'Fourth', 'Last'];
        this.event.Week = 1 | date.getDate() / 7;
        //weekOfMonth[0 | date.getDate() / 7];
    };
    //#region  Load Data
    EventDetailPage.prototype.loadRecurPat = function () {
        try {
            this.listRecur = new Array();
            var pat = {
                "Code": "N",
                "Name": "None"
            };
            var pat2 = {
                "Code": "D",
                "Name": "Daily"
            };
            var pat3 = {
                "Code": "W",
                "Name": "Weekly"
            };
            var pat4 = {
                "Code": "M",
                "Name": "Monthly"
            };
            var pat5 = {
                "Code": "A",
                "Name": "Annualy"
            };
            this.listRecur.push(pat);
            this.listRecur.push(pat2);
            this.listRecur.push(pat3);
            this.listRecur.push(pat4);
            this.listRecur.push(pat5);
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    EventDetailPage.prototype.presentRecurModal = function (event) {
        try {
            var profileModal = this.modalCtrl.create(RecurrencePage, { event: event, listRecur: this.listRecur });
            profileModal.onDidDismiss(function (data) {
                //this.event = data;
                console.log(data);
            });
            profileModal.present();
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    EventDetailPage.prototype.loadBusinessPartner = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpClient.CFL.loadBusinessPartner()];
                    case 1:
                        result = _a.sent();
                        this.dtBP = result[1];
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.common.createToast(error_3, 0);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EventDetailPage.prototype.loadDefaultDate = function () {
        try {
            if (!this.event.AllDayEvent) {
                if (this.event.BeginTime === null || this.event.BeginTime === undefined) {
                    this.event.BeginTime = 1000;
                }
                if (this.event.ENDTime === null || this.event.ENDTime === undefined) {
                    this.event.ENDTime = this.event.BeginTime + 100;
                }
            }
            this.beginTimeString = this.common.toNormalTime(this.event.BeginTime);
            this.endTimeString = this.common.toNormalTime(this.event.ENDTime);
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    EventDetailPage.prototype.getUserName = function (groupUser) {
        try {
            if (this.dtUser === undefined)
                return "";
            if (groupUser === undefined || groupUser === null)
                return "";
            var userList = groupUser.toString().split(";");
            var resultUsers = this.dtUser.filter(function (user) { return userList.indexOf(user.USERID.toString()) > -1; });
            var value = "";
            for (var i = 0; i < resultUsers.length; i++) {
                value += resultUsers[i].U_NAME + "; ";
            }
            if (value.length > 0) {
                value = value.slice(0, value.length - 2);
            }
            return value;
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    EventDetailPage.prototype.loadComment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpClient.Comment.loadComment(this.event.ClgCode, '1470000129')];
                    case 1:
                        result = _a.sent();
                        if (result[0]) {
                            this.dtComment = result[0];
                        }
                        console.log("Loaded comments");
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        this.common.createToast(error_4, 0);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EventDetailPage.prototype.getTableColumns = function () {
        var _this = this;
        try {
            var tableName = "APZ_OCLG";
            this.httpClient.Common.getTableColumns(tableName).then(function (result) {
                _this.dtStruct = result;
                console.log(result);
            });
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    //#endregion
    //#region Processing
    EventDetailPage.prototype.clickComment = function (comment) {
        var sheet = this.actionSheet.create({
            title: '',
            buttons: [
                {
                    text: 'Remove',
                    handler: function () {
                        //this.removeComment(comment); 
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        sheet.present();
    };
    EventDetailPage.prototype.removeComment = function (comment) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Task.removeTask([comment])];
                    case 1:
                        result = _a.sent();
                        if (result !== undefined && result !== "") {
                            this.common.createToast(result, 0);
                            return [2 /*return*/];
                        }
                        //remove comment from list
                        this.dtComment = this.dtComment.filter(function (cmt) { return cmt !== comment; });
                        console.log(comment);
                        return [2 /*return*/];
                }
            });
        });
    };
    EventDetailPage.prototype.addComment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var taskText, event, dt, ds, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.adding)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        this.adding = true;
                        taskText = this.commentText.trim();
                        //get text from add task input
                        //if prevent adding task when no text
                        if (taskText === "")
                            return [2 /*return*/];
                        event = {};
                        //set ClgCode= 0
                        event.ID = this.event.ClgCode;
                        event.ObjType = "1470000129";
                        event.CmtCode = 0;
                        //TODO: fix to current user
                        event.UserSign = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* GlobalData */].USERID;
                        //fix this too
                        event.UserName = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* GlobalData */].UserCodeLogin;
                        event.CreatedTime = this.common.adjustForTimezone(new Date());
                        event.Content = taskText;
                        dt = [event];
                        ds = { "CommentInfo": dt, "AdditionNotifyUser": [1, 2, 3] };
                        return [4 /*yield*/, this.httpClient.Comment.addComment(ds)];
                    case 2:
                        result = _a.sent();
                        if (result.Message != "") {
                            this.common.createToast(result.Message, 0);
                            return [2 /*return*/];
                        }
                        //set task clg code = new clg code get from api
                        event.CmtCode = result.Content;
                        this.dtComment.push(event);
                        this.commentText = "";
                        return [3 /*break*/, 5];
                    case 3:
                        error_5 = _a.sent();
                        this.common.createToast(error_5, 0);
                        return [3 /*break*/, 5];
                    case 4:
                        this.adding = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EventDetailPage.prototype.addEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentDate, currentTime, collumns, rows, table, tables, dataSet, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (this.event.Details === "" || this.event.Details === null || this.event.Details === undefined) {
                            this.common.createToast("Event details can not be empty!", __WEBPACK_IMPORTED_MODULE_3__providers_common__["b" /* MsgType */].error);
                            return [2 /*return*/];
                        }
                        currentDate = new Date();
                        this.event.ClgCode = 0;
                        this.event.Action = "V";
                        this.event.CntctDate = currentDate;
                        this.event.IsRemoved = "N";
                        if (this.endTimeString != "") {
                            this.event.ENDTime = this.common.toGluedTime(this.endTimeString);
                        }
                        if (this.beginTimeString != "") {
                            this.event.BeginTime = this.common.toGluedTime(this.beginTimeString);
                        }
                        if (!!this.event.Recontact) {
                            this.event.Recontact = currentDate.toJSON().slice(0, 10);
                            currentTime = new Date().toTimeString().slice(0, 5).replace(":", "");
                            this.event.BeginTime = currentTime;
                        }
                        if (this.groupUser) {
                            this.event.GroupUser = this.groupUser.join(";");
                        }
                        collumns = this.dtStruct[0];
                        rows = [];
                        rows.push(this.event);
                        table = this.common.ToApzJson(rows, collumns);
                        tables = [];
                        tables.push(table);
                        dataSet = this.common.ToApzJsonDataSet(tables);
                        return [4 /*yield*/, this.httpClient.Event.addEvent(dataSet)];
                    case 1:
                        result = _a.sent();
                        if (result["Message"] == "") {
                            this.common.createToast("Add new successfully!", __WEBPACK_IMPORTED_MODULE_3__providers_common__["b" /* MsgType */].success);
                            this.callbackDelegate(this.event);
                            this.navCtrl.pop();
                            return [2 /*return*/];
                        }
                        else {
                            this.common.createToast(result["Message"], __WEBPACK_IMPORTED_MODULE_3__providers_common__["b" /* MsgType */].error);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        this.common.createToast(error_6, 0);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EventDetailPage.prototype.saveEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var collumns, rows, table, tables, dataSet, result, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (this.event.Details === "") {
                            this.common.createToast("Event details can not be empty!", __WEBPACK_IMPORTED_MODULE_3__providers_common__["b" /* MsgType */].error);
                            return [2 /*return*/];
                        }
                        this.event.ENDTime = this.common.toGluedTime(this.endTimeString);
                        this.event.BeginTime = this.common.toGluedTime(this.beginTimeString);
                        if (this.groupUser) {
                            this.event.GroupUser = this.groupUser.join(";");
                        }
                        collumns = this.dtStruct[0];
                        rows = [];
                        rows.push(this.event);
                        table = this.common.ToApzJson(rows, collumns);
                        tables = [];
                        tables.push(table);
                        dataSet = this.common.ToApzJsonDataSet(tables);
                        return [4 /*yield*/, this.httpClient.Event.saveEvent(dataSet)];
                    case 1:
                        result = _a.sent();
                        if (result["Message"] == "") {
                            this.common.createToast("Save successfully!", __WEBPACK_IMPORTED_MODULE_3__providers_common__["b" /* MsgType */].success);
                            this.navCtrl.pop();
                            return [2 /*return*/];
                        }
                        else {
                            this.common.createToast(result["Message"], __WEBPACK_IMPORTED_MODULE_3__providers_common__["b" /* MsgType */].error);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        this.common.createToast(error_7, 0);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return EventDetailPage;
}());
EventDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-event-detail',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\event-detail\event-detail.html"*/'<!--\n  Generated template for the TaskDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!isAdd">Event Detail</ion-title>\n    <ion-title *ngIf="isAdd">New Event</ion-title>\n    <div [ngSwitch]="tab">\n      <ion-buttons *ngSwitchCase="\'detail\'" end>\n        <button ion-button icon-left block clear (click)=addEvent() *ngIf="isAdd">\n          <ion-icon name="checkmark-circle"></ion-icon>\n          Add\n        </button>\n        <button ion-button icon-left block clear (click)="saveEvent()" *ngIf="!isAdd" type="submit">\n          <ion-icon name="checkmark-circle"></ion-icon>\n          Save\n        </button>\n      </ion-buttons>\n\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <ion-segment [(ngModel)]="tab">\n      <ion-segment-button value="detail" *ngIf="!isAdd">\n        Details\n      </ion-segment-button>\n      <ion-segment-button value="comment" *ngIf="!isAdd">\n        Comments\n        <span *ngIf="dtComment && dtComment.length > 0">({{dtComment.length}}) </span>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="tab">\n\n    <ion-list *ngSwitchCase="\'detail\'" class="maintext">\n\n      <ion-item>\n        <ion-input type="text" required class="maintext" [(ngModel)]="event.Details" name="Details" placeholder="Event..." style="font-weight:bold"\n          [attr.autofocus]="isAdd ? true : null"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floatting>User</ion-label>\n        <ion-select [(ngModel)]="groupUser" name="GroupUser" multiple="true">\n          <ion-option *ngFor="let user of dtUser" [value]="user.USERID">\n            {{user.U_NAME}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Location</ion-label>\n        <ion-select [(ngModel)]="event.Location" name="Location">\n          <ion-option *ngFor="let loc of dtLocation" [value]="loc.Code">\n            {{loc.Name}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Start Date</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="event.Recontact" name="Recontact" (ionChange)="recontactChanged($event)" style="position: relative"></ion-datetime>\n        <ion-datetime displayFormat="HH:mm" [(ngModel)]="beginTimeString" name="BeginTime" *ngIf="!event.AllDayEvent" style="position: relative"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Due Date</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="event.endDate" name="endDate"  style="position: relative"></ion-datetime>\n        <ion-datetime displayFormat="HH:mm" [(ngModel)]="endTimeString" name="ENDTime" *ngIf="!event.AllDayEvent"  style="position: relative"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-checkbox item-end [(ngModel)]="event.AllDayEvent" (ionChange)="loadDefaultDate()"></ion-checkbox>\n        <ion-label text-right>All Day</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea [(ngModel)]="event.Notes" name="Notes" placeholder="Description..."></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floatting>Business Partner</ion-label>\n        <ion-select [(ngModel)]="event.CardCode">\n          <ion-option [value]="-1">\n            (No BP)\n          </ion-option>\n          <ion-option *ngFor="let bp of dtBP" [value]="bp.CardCode">\n            {{bp.CardName}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="black" (click)=presentRecurModal(event)>Recurring Pattern</ion-label>\n          <!-- <button ion-button  (click)=presentRecurModal(event)>\n            <ion-icon name="settings"></ion-icon>\n            asdfg\n          </button> -->\n          <ion-icon item-end name="settings" (click)="presentRecurModal(event)" color="primary"></ion-icon>\n        <ion-select [(ngModel)]="event.RecurPat" multiple="false" [disabled]="true">\n          <ion-option *ngFor="let pat of listRecur" [value]="pat.Code">\n            {{pat.Name}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'comment\'" style="padding-bottom:20px">\n      <button ion-item *ngFor="let comment of dtComment" (press)="clickComment(comment)">\n        <ion-row>\n          <ion-col class="maintext" style="font-size:1.1em;color:#488aff"> {{comment.UserName}} </ion-col>\n          <ion-col style="font-size:0.75em;color:rgb(172, 172, 172);text-align: right;margin-top:10px;"> {{common.formatCreateDate(comment.CreatedTime)}} </ion-col>\n        </ion-row>\n        <ion-row>\n\n        </ion-row>\n        <ion-row style="white-space:normal">\n          <ion-col style="color:rgb(68, 68, 80)"> {{comment.Content}} </ion-col>\n        </ion-row>\n\n      </button>\n    </ion-list>\n  </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar *ngIf="tab==\'detail\' && !isAdd" style="text-align:center; color:rgb(172,172,172)">\n\n    Created {{common.formatCreateDate(event.CntctDate, \'on \')}}\n    <span *ngIf="event.AssignedBy!=event.GroupUser">, by {{getUserName(event.AssignedBy)}} </span>\n  </ion-toolbar>\n  <ion-toolbar *ngIf="tab==\'comment\'">\n    <ion-input class="maintext" style="font-size:1.2em;padding-bottom:9px;padding-left:13px" placeholder="Add a comment..." [(ngModel)]="commentText"\n      (keydown.enter)="addComment()"></ion-input>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\event-detail\event-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], EventDetailPage);

var RecurrencePage = (function () {
    function RecurrencePage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.event = navParams.get('event');
        this.recurPats = navParams.get('listRecur');
    }
    RecurrencePage.prototype.ionViewDidLoad = function () {
    };
    RecurrencePage.prototype.checkWeekDays = function (weekDays) {
        try {
            switch (weekDays) {
                case "mon":
                    this.setValueWeekDay("Monday", "monColor");
                    break;
                case "tue":
                    this.setValueWeekDay("Tuesday", "tueColor");
                    break;
                case "wed":
                    this.setValueWeekDay("Wednesday", "wedColor");
                    break;
                case "thu":
                    this.setValueWeekDay("Thursday", "thuColor");
                    break;
                case "fri":
                    this.setValueWeekDay("Friday", "friColor");
                    break;
                case "sat":
                    this.setValueWeekDay("Saturday", "satColor");
                    break;
                case "sun":
                    this.setValueWeekDay("Sunday", "sunColor");
                    break;
                default:
                    break;
            }
        }
        catch (error) {
        }
    };
    RecurrencePage.prototype.setValueWeekDay = function (weekday, color) {
        if (this.event[weekday] == "Y") {
            this.event[weekday] = "N";
        }
        else {
            this.event[weekday] = "Y";
        }
        if (this.event[weekday] === "Y") {
            this[color] = "primary";
        }
        else {
            this[color] = "black";
        }
    };
    RecurrencePage.prototype.dismiss = function (event) {
        //let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(event);
    };
    return RecurrencePage;
}());
RecurrencePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-recurrence',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\event-detail\recurrence.html"*/'<!--\n\n  Generated template for the NewPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button clear (click)="dismiss(event)">OK</button>\n\n        <ion-title>Recurrence Information</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list class="maintext" no-lines>\n\n        <ion-item>\n\n            <ion-label floatting>Recurring Pattern</ion-label>\n\n            <ion-select [(ngModel)]="event.RecurPat" multiple="false" interface="popover">\n\n                <ion-option *ngFor="let pat of recurPats" [value]="pat.Code">\n\n                    {{pat.Name}}\n\n                </ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="event.RecurPat == \'D\'">\n\n            <ion-label floatting>Repeat option</ion-label>\n\n            <ion-select [(ngModel)]="event.SubOption" multiple="false" interface="popover">\n\n                <ion-option [value]="1">\n\n                    Amount of Days\n\n                </ion-option>\n\n                <ion-option [value]="2">\n\n                    Every Week Day\n\n                </ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="(event.RecurPat != \'N\' && event.RecurPat != \'D\') || (event.RecurPat == \'D\' && event.SubOption == 1)">\n\n            <ion-grid item-content>\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <ion-label>Repeat Every</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-3>\n\n                        <ion-input [(ngModel)]="event.Interval" type="number"></ion-input>\n\n                    </ion-col>\n\n                    <!-- #region Repeat label-->\n\n                    <ion-col col-3 *ngIf="event.RecurPat == \'D\'">\n\n                        <ion-label>Day(s)</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-3 *ngIf="event.RecurPat == \'W\'">\n\n                        <ion-label>Week(s)</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-3 *ngIf="event.RecurPat == \'M\'">\n\n                        <ion-label>Month(s)</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-3 *ngIf="event.RecurPat == \'A\'">\n\n                        <ion-label>Years(s)</ion-label>\n\n                    </ion-col>\n\n                    <!-- #endregion -->\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-item>\n\n        <ion-item *ngIf="event.RecurPat == \'W\'">\n\n            <ion-label [color]="monColor" (click)="checkWeekDays(\'mon\')" style=" text-decoration: underline;">Mon</ion-label>\n\n            <ion-label [color]="tueColor" (click)="checkWeekDays(\'tue\')" style=" text-decoration: underline;">Tue</ion-label>\n\n            <ion-label [color]="wedColor" (click)="checkWeekDays(\'wed\')" style=" text-decoration: underline;">Wed</ion-label>\n\n            <ion-label [color]="thuColor" (click)="checkWeekDays(\'thu\')" style=" text-decoration: underline;">Thu</ion-label>\n\n            <ion-label [color]="friColor" (click)="checkWeekDays(\'fri\')" style=" text-decoration: underline;">Fri</ion-label>\n\n            <ion-label [color]="satColor" (click)="checkWeekDays(\'sat\')" style=" text-decoration: underline;">Sat</ion-label>\n\n            <ion-label [color]="sunColor" (click)="checkWeekDays(\'sun\')" style=" text-decoration: underline;">Sun</ion-label>\n\n        </ion-item>\n\n        <ion-item *ngIf="event.RecurPat == \'M\'">\n\n            <ion-label floatting>Repeat on</ion-label>\n\n            <ion-select [(ngModel)]="event.SubOption" multiple="false" interface="popover">\n\n                <ion-option [value]="1">\n\n                    Exact Date\n\n                </ion-option>\n\n                <ion-option [value]="2">\n\n                    Day of week\n\n                </ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="event.RecurPat == \'A\'">\n\n            <ion-label floatting>Repeat on</ion-label>\n\n            <ion-select [(ngModel)]="event.SubOption" multiple="false" interface="popover">\n\n                <ion-option [value]="1">\n\n                    Exact Date\n\n                </ion-option>\n\n                <ion-option [value]="2">\n\n                    Day of month\n\n                </ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="(event.RecurPat == \'M\' || event.RecurPat == \'A\') && event.SubOption == 1">\n\n            <ion-label *ngIf="event.RecurPat == \'M\'">Day</ion-label>\n\n            <ion-select *ngIf="event.RecurPat == \'A\'" [(ngModel)]="event.Month" multiple="false" interface="popover" placeholder="Month"\n\n                style="float:right">\n\n                <ion-option [value]="1">\n\n                    January\n\n                </ion-option>\n\n                <ion-option [value]="2">\n\n                    February\n\n                </ion-option>\n\n                <ion-option [value]="3">\n\n                    March\n\n                </ion-option>\n\n                <ion-option [value]="4">\n\n                    April\n\n                </ion-option>\n\n                <ion-option [value]="5">\n\n                    May\n\n                </ion-option>\n\n                <ion-option [value]="6">\n\n                    June\n\n                </ion-option>\n\n                <ion-option [value]="7">\n\n                    July\n\n                </ion-option>\n\n                <ion-option [value]="8">\n\n                    August\n\n                </ion-option>\n\n                <ion-option [value]="9">\n\n                    September\n\n                </ion-option>\n\n                <ion-option [value]="10">\n\n                    October\n\n                </ion-option>\n\n                <ion-option [value]="11">\n\n                    November\n\n                </ion-option>\n\n                <ion-option [value]="12">\n\n                    December\n\n                </ion-option>\n\n            </ion-select>\n\n            <ion-input type="number" [(ngModel)]="event.DayInMonth" place-holder="Day"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="(event.RecurPat == \'M\' ||event.RecurPat == \'A\') && event.SubOption == 2">\n\n            <ion-select [(ngModel)]="event.Week" multiple="false" interface="popover" placeholder="Week"  style="position: relative">\n\n                <ion-option [value]="1">\n\n                    First\n\n                </ion-option>\n\n                <ion-option [value]="2">\n\n                    Second\n\n                </ion-option>\n\n                <ion-option [value]="3">\n\n                    Third\n\n                </ion-option>\n\n                <ion-option [value]="4">\n\n                    Fourth\n\n                </ion-option>\n\n                <ion-option [value]="5">\n\n                    Last\n\n                </ion-option>\n\n            </ion-select>\n\n            <ion-select [(ngModel)]="event.DayOfWeek" multiple="false" interface="popover" placeholder="Day of week"  style="position: relative">\n\n                <ion-option [value]="8">\n\n                    Day\n\n                </ion-option>\n\n                <ion-option [value]="9">\n\n                    WeekDay\n\n                </ion-option>\n\n                <ion-option [value]="0">\n\n                    Weekend Day\n\n                </ion-option>\n\n                <ion-option [value]="1">\n\n                    Sunday\n\n                </ion-option>\n\n                <ion-option [value]="2">\n\n                    Monday\n\n                </ion-option>\n\n                <ion-option [value]="3">\n\n                    Tuesday\n\n                </ion-option>\n\n                <ion-option [value]="4">\n\n                    Wednesday\n\n                </ion-option>\n\n                <ion-option [value]="5">\n\n                    Thursday\n\n                </ion-option>\n\n                <ion-option [value]="6">\n\n                    Friday\n\n                </ion-option>\n\n                <ion-option [value]="7">\n\n                    Saturday\n\n                </ion-option>\n\n\n\n            </ion-select>\n\n            <span *ngIf="event.RecurPat == \'A\'" item-content class="inline-edit">Of</span>\n\n            <ion-select item-right *ngIf="event.RecurPat == \'A\'" [(ngModel)]="event.Month" multiple="false" interface="popover" placeholder="Month">\n\n                <ion-option [value]="1">\n\n                    January\n\n                </ion-option>\n\n                <ion-option [value]="2">\n\n                    February\n\n                </ion-option>\n\n                <ion-option [value]="3">\n\n                    March\n\n                </ion-option>\n\n                <ion-option [value]="4">\n\n                    April\n\n                </ion-option>\n\n                <ion-option [value]="5">\n\n                    May\n\n                </ion-option>\n\n                <ion-option [value]="6">\n\n                    June\n\n                </ion-option>\n\n                <ion-option [value]="7">\n\n                    July\n\n                </ion-option>\n\n                <ion-option [value]="8">\n\n                    August\n\n                </ion-option>\n\n                <ion-option [value]="9">\n\n                    September\n\n                </ion-option>\n\n                <ion-option [value]="10">\n\n                    October\n\n                </ion-option>\n\n                <ion-option [value]="11">\n\n                    November\n\n                </ion-option>\n\n                <ion-option [value]="12">\n\n                    December\n\n                </ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="event.RecurPat != \'N\'">\n\n            <ion-grid item-content>\n\n                <!-- Thiết lập khoảng thời gian kết thúc cho chuỗi lặp lại -->\n\n                <ion-row>\n\n                    <ion-col col-2>\n\n                        <ion-label>Start</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-4></ion-col>\n\n                    <ion-col col-3>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="event.SeStartDat" name="SeStartDat" disabled = "true"></ion-datetime>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col col-2>\n\n                        <ion-label>End</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-4>\n\n                        <ion-select [(ngModel)]="event.EndType" interface="popover" style="max-width: 100% ;">\n\n                            <ion-option value="N">\n\n                                No End Date\n\n                            </ion-option>\n\n                            <ion-option value="C">\n\n                                After\n\n                            </ion-option>\n\n                            <ion-option value="D">\n\n                                By\n\n                            </ion-option>\n\n                        </ion-select>\n\n                    </ion-col>\n\n                    <ion-col col-3>\n\n                        <ion-input [(ngModel)]="event.MaxOccur" type="number" *ngIf="event.EndType == \'C\'"  style="position: relative"></ion-input>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="event.SeEndDat" name="SeEndDat" *ngIf="event.EndType ==\'D\'"  style="position: relative"></ion-datetime>\n\n                    </ion-col>\n\n                    <ion-col col-3>\n\n                        <ion-label *ngIf="event.EndType == \'C\'"> Occurence(s)</ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n\n\n            <!-- <ion-toggle ion-toggle-text ng-true-value="1" ng-false-value="2" [(ngModel)]="event.Interval">  </ion-toggle> -->\n\n        </ion-item>\n\n        <!-- <iton-item item-content>\n\n            <ion-toggle ion-toggle-text ng-model="simple">\n\n                Simple Example:\n\n                <b>{{ simple || false }}</b>\n\n            </ion-toggle>\n\n\n\n            <ion-toggle ion-toggle-text="online;offline" ng-model="customText">\n\n                Custom text:\n\n                <b>{{ customText || false }}</b>\n\n            </ion-toggle>\n\n\n\n            <ion-toggle ion-toggle-text ng-true-value="so true" ng-false-value="so false" ng-model="textByValue">\n\n                Text by value:\n\n                <b>{{ textByValue || \'so false\' }}</b>\n\n            </ion-toggle>\n\n        </iton-item> -->\n\n    </ion-list>\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n\n\n\n\n</ion-footer>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\event-detail\recurrence.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], RecurrencePage);

//# sourceMappingURL=event-detail.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventManagementPage1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_client_http_client__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_util__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_detail_event_detail__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_task_detail_task_detail__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/*s
  Generated class for the event_management page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var EventManagementPage1 = (function () {
    function EventManagementPage1(navCtrl, navParams, modalCtrl, translateService, common, setting, httpClient, actionSheet, popCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        this.common = common;
        this.setting = setting;
        this.httpClient = httpClient;
        this.actionSheet = actionSheet;
        this.popCtrl = popCtrl;
        this.loadingCtrl = loadingCtrl;
        this.callback = function (params) {
            return new Promise(function (resolve, reject) {
                var event = params;
                if (event) {
                    _this.dtEvent.push(event);
                    resolve();
                }
            });
        };
        this.showDetails = true;
        this.icon = "arrow-dropup";
        this.dtUser = this.navParams.get("dtUser");
        this.translateService.get('DATA_NOT_FOUND').subscribe(function (value) {
            _this.errorDataNotFound = value;
        });
    }
    EventManagementPage1.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad event_managementPage');
        this.presentLoadingDefault();
        this.getTableColumns();
        this.loadUser();
        //this.loadCalendar();
    };
    EventManagementPage1.prototype.getUserName = function (groupUser) {
        if (this.dtUser === undefined)
            return "";
        if (groupUser === undefined || groupUser === null)
            return "";
        var userList = groupUser.split(";");
        var resultUsers = this.dtUser.filter(function (user) { return userList.indexOf(user.USERID.toString()) > -1; });
        var value = "";
        for (var i = 0; i < resultUsers.length; i++) {
            value += resultUsers[i].U_NAME + "; ";
        }
        if (value.length > 0) {
            value = value.slice(0, value.length - 2);
        }
        return value;
    };
    EventManagementPage1.prototype.showCalendar = function () {
        try {
            this.navCtrl.push(CalendarPage);
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    EventManagementPage1.prototype.presentLoadingDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        loading = this.loadingCtrl.create({
                            spinner: 'crescent',
                            content: "Please wait...",
                            duration: 5000
                        });
                        loading.present();
                        return [4 /*yield*/, this.initializeItems()];
                    case 1:
                        _a.sent();
                        loading.dismiss();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.common.createToast(error_1, 0);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EventManagementPage1.prototype.initializeItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jsonTest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jsonTest = this.prepareDtSearch();
                        return [4 /*yield*/, this.loadEvent(jsonTest)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventManagementPage1.prototype.doRefresh = function (refresher) {
        var _this = this;
        try {
            console.log('Begin async operation', refresher);
            setTimeout(function () {
                _this.initializeItems();
                console.log('Async operation has ended');
                refresher.complete();
            }, 2000);
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    EventManagementPage1.prototype.doInfinite = function (infiniteScroll) {
        try {
            console.log('Begin async operation');
            setTimeout(function () {
                // for (let i = 0; i < 30; i++) {
                //   this.dtEvent.push(this.dtEvent.length);
                // }
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    //Searching...
    EventManagementPage1.prototype.onInput = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var val_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // Reset items back to all of the items
                        return [4 /*yield*/, this.initializeItems()];
                    case 1:
                        // Reset items back to all of the items
                        _a.sent();
                        val_1 = ev.target.value;
                        // if the value is an empty string don't filter the items
                        if (val_1 && val_1.trim() != '') {
                            this.dtEvent = this.dtEvent.filter(function (item) {
                                return (item.Details.toLowerCase().indexOf(val_1.toLowerCase()) > -1);
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.common.createToast(error_2, 0);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EventManagementPage1.prototype.onCancel = function (ev) {
        this.initializeItems();
    };
    EventManagementPage1.prototype.loadUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpClient.Common.getUserList()];
                    case 1:
                        result = _a.sent();
                        this.dtUser = result[1];
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.common.createToast(error_3, 0);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EventManagementPage1.prototype.fillInfo = function (event) {
        try {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_detail_event_detail__["a" /* EventDetailPage */], { event: event, isAdd: false, callback: this.callback });
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    EventManagementPage1.prototype.addNewEvent = function () {
        try {
            var newEvent = {};
            newEvent.GroupUser = __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* GlobalData */].USERID.toString();
            newEvent.Recontact = new Date().toISOString();
            newEvent.endDate = new Date().toISOString();
            newEvent.ClgCode = 0;
            newEvent.BeginTime = 0;
            newEvent.ENDTime = 100;
            newEvent.RecurPat = "N";
            newEvent.SeStartDat = new Date().toISOString();
            newEvent.Interval = 1;
            newEvent.MaxOccur = 1;
            newEvent.AllDayEvent = true;
            newEvent.GroupEmployee = "";
            newEvent.DayInMonth = new Date().getDate();
            newEvent.Monday = "N";
            newEvent.Tuesday = "N";
            newEvent.Wednesday = "N";
            newEvent.Thursday = "N";
            newEvent.Friday = "N";
            newEvent.Saturday = "N";
            newEvent.Sunday = "N";
            newEvent.AllUserInvite = "N";
            newEvent.AllUserShare = "N";
            newEvent.AllEmplInvite = "N";
            newEvent.AllEmplShare = "N";
            newEvent.CntctDate = new Date().toISOString();
            newEvent.Reminder = "N";
            newEvent.RemQty = 15;
            newEvent.RemType = "M";
            newEvent.EndType = "N";
            newEvent.SubOption = 1;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_detail_event_detail__["a" /* EventDetailPage */], { event: newEvent, isAdd: true, callback: this.callback });
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    EventManagementPage1.prototype.showActionSheet = function (event) {
        var _this = this;
        try {
            var sheet = this.actionSheet.create({
                title: '',
                buttons: [
                    {
                        text: 'Remove',
                        handler: function () { _this.deleteEvent(event); }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            sheet.present();
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    EventManagementPage1.prototype.deleteEvent = function (removedEvent) {
        var _this = this;
        try {
            //array of columns
            var collumns = this.dtStruct[0];
            //array of rows (với các properties là các columns tương ứng)
            var rows = [];
            //object row given by dx-datagrid: chứa toàn bộ giá trị của các trường
            rows.push(removedEvent);
            //dùng hàm chuyển từ dạng json chỉ chứa các row về dạng json chuẩn APZ (có Apz-Columns và Apz-Rows)
            //truyền vào mảng gồm các Row và 1 mảng chứa thông tin của các cột
            var table = this.common.ToApzJson(rows, collumns);
            var clgCode = removedEvent['ClgCode'];
            if (parseInt(clgCode) != 0 && Object(__WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_util__["j" /* isNumber */])(clgCode)) {
                this.httpClient.Event.deleteEvent(table).then(function (result) {
                    if (result == "") {
                        _this.common.createToast("Delete successfully!", __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* MsgType */].success);
                        //remove event from list
                        _this.dtEvent = _this.dtEvent.filter(function (event) { return event !== removedEvent; });
                        return;
                    }
                    else {
                        _this.common.createToast(result["Message"], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* MsgType */].error);
                    }
                    console.log(result);
                }, function (err) {
                    _this.common.createToast(err, __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* MsgType */].error);
                });
            }
        }
        catch (error) {
            this.common.createToast(error, __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* MsgType */].error);
        }
    };
    //#region Old COde
    EventManagementPage1.prototype.prepareDtSearch = function () {
        try {
            var cols = [];
            var col1 = {
                "Name": "userCode",
                "Type": "String",
                "dflt": null
            };
            var col2 = {
                "Name": "startDate",
                "Type": "DateTime",
                "dflt": null
            };
            var col3 = {
                "Name": "endDate",
                "Type": "DateTime",
                "dflt": null
            };
            cols.push(col1);
            cols.push(col2);
            cols.push(col3);
            var rows = [{
                    "startDate": "2017-02-28",
                    "userCode": __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* GlobalData */].UserCodeLogin,
                    "endDate": "",
                }];
            var dt = this.common.ToApzJson(rows, cols);
            return dt;
        }
        catch (error) {
            console.log(error);
        }
    };
    EventManagementPage1.prototype.getTableColumns = function () {
        var _this = this;
        var tableName = "APZ_OCLG";
        this.httpClient.Common.getTableColumns(tableName).then(function (result) {
            _this.dtStruct = result;
            console.log(result);
        });
    };
    EventManagementPage1.prototype.loadEvent = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpClient.Event.loadEvent(data)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            this.dtEvent = result;
                        }
                        else {
                            this.dtEvent = [];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        this.common.createToast(error_4, __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* MsgType */].error);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EventManagementPage1.prototype.toggleDetails = function () {
        if (this.showDetails) {
            this.showDetails = false;
            this.icon = "arrow-dropup";
        }
        else {
            this.showDetails = true;
            this.icon = "arrow-dropdown";
        }
    };
    return EventManagementPage1;
}());
EventManagementPage1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-app',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\event-management\event-management.html"*/'<!--\n\n  Generated template for the EventManagementPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Event Management</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear (click)="showCalendar();">\n\n        <ion-icon ios="ios-calendar" md="md-calendar"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only clear (click)="addNewEvent();">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <!-- <ion-navbar color="primary">\n\n    <ion-title>{{viewTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n\n      <button ion-button (click)="changeMode(\'month\')">M</button>\n\n      <button ion-button (click)="changeMode(\'week\')">W</button>\n\n      <button ion-button (click)="changeMode(\'day\')">D</button>\n\n      <button ion-button (click)="loadCalendar()">Load Events</button>\n\n    </ion-buttons>\n\n  </ion-navbar> -->\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="false" (ionInput)="onInput($event)" (ionClear)="onCancel($event)">\n\n  </ion-searchbar>\n\n\n\n  <ion-list>\n\n    <ion-list-header (click)="toggleDetails()">\n\n      <ion-icon color="primary" item-right [name]="icon"></ion-icon>\n\n      Reccent Events\n\n    </ion-list-header>\n\n    <div *ngIf="showDetails">\n\n      <button ion-item *ngFor="let event of dtEvent" (tap)="fillInfo(event)" (press)="showActionSheet(event)">\n\n        <ion-row style="white-space:normal">\n\n\n\n          <ion-col class="maintext" style="font-size:1.1em;">\n\n            {{event.Details}}\n\n          </ion-col>\n\n\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col style="color:rgb(109, 78, 69);white-space:normal">{{getUserName(event.GroupUser)}}</ion-col>\n\n          <ion-col class="overdue" col-2>\n\n            <!-- {{formatDueDate(task)}} -->\n\n          </ion-col>\n\n        </ion-row>\n\n      </button>\n\n    </div>\n\n  </ion-list>\n\n  <!-- <ion-calendar></ion-calendar> -->\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n  <!-- <calendar [eventSource]="eventSource" [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate" (onEventSelected)="onEventSelected($event)"\n\n    (onTitleChanged)="onViewTitleChanged($event)" (onTimeSelected)="onTimeSelected($event)" step="30" class="calendar"> -->\n\n  <!-- </calendar> -->\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\event-management\event-management.html"*/
        //template: ''
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["g" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_4__http_client_http_client__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], EventManagementPage1);

var CalendarPage = (function () {
    function CalendarPage(viewCtrl, navParams, httpClient, common, navCtrl, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.common = common;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        }; // these are the variable used by the calendar.
        this.selectedInterval = new Date();
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
        this.loadCalendar();
    };
    CalendarPage.prototype.procesesLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cols, col1, col2, col3, param, rows, dt, result, listEvent, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        cols = [];
                        col1 = {
                            "Name": "userCode",
                            "Type": "String",
                            "dflt": null
                        };
                        col2 = {
                            "Name": "startDate",
                            "Type": "DateTime",
                            "dflt": null
                        };
                        col3 = {
                            "Name": "endDate",
                            "Type": "DateTime",
                            "dflt": null
                        };
                        cols.push(col1);
                        cols.push(col2);
                        cols.push(col3);
                        param = {};
                        rows = [];
                        param.userCode = __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* GlobalData */].UserCodeLogin;
                        param.startDate = "2017-02-28";
                        param.endDate = "";
                        rows.push(param);
                        dt = this.common.ToApzJson(rows, cols);
                        return [4 /*yield*/, this.httpClient.Calendar.loadCalendar(dt)];
                    case 1:
                        result = _a.sent();
                        listEvent = [];
                        this.eventSource = [];
                        if (result) {
                            listEvent = result;
                            listEvent.forEach(function (element) {
                                var event = {};
                                event.id = element.ClgCode;
                                event.title = element.Details;
                                event.action = element.Action;
                                var startDate = new Date(element.Recontact);
                                var endDate = new Date(element.endDate);
                                var beginTimeString = _this.common.toNormalTime(element.BeginTime);
                                var endTimeString = _this.common.toNormalTime(element.ENDTime);
                                var beginHour = 0;
                                var beginMin = 0;
                                if (beginTimeString) {
                                    beginHour = beginTimeString.split(":")[0];
                                    beginMin = beginTimeString.split(":")[1];
                                }
                                var endHour = 0;
                                var endMin = 0;
                                if (endTimeString) {
                                    endHour = endTimeString.split(":")[0];
                                    endMin = endTimeString.split(":")[1];
                                }
                                event.startTime = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), beginHour, beginMin);
                                event.endTime = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endHour, endMin);
                                event.detail = element.Notes;
                                event.location = element.LocationCode;
                                event.allDay = element.AllDayEvent;
                                _this.eventSource.push(event);
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        this.common.createToast(error_5, __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* MsgType */].error);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CalendarPage.prototype.loadCalendar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        loading = this.loadingCtrl.create({
                            spinner: 'crescent',
                            content: "Please wait...",
                            duration: 5000
                        });
                        loading.present();
                        return [4 /*yield*/, this.procesesLoad()];
                    case 1:
                        _a.sent();
                        loading.dismiss();
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        this.common.createToast(error_6, 0);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CalendarPage.prototype.addNewEvent = function (fab) {
        try {
            var newEvent = {};
            newEvent.GroupUser = __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* GlobalData */].USERID.toString();
            newEvent.Recontact = this.selectedInterval.toISOString();
            newEvent.endDate = this.selectedInterval.toISOString();
            newEvent.ClgCode = 0;
            newEvent.BeginTime = 0;
            newEvent.ENDTime = 100;
            newEvent.RecurPat = "N";
            newEvent.SeStartDat = this.selectedInterval.toISOString();
            newEvent.Interval = 1;
            newEvent.MaxOccur = 1;
            newEvent.AllDayEvent = true;
            newEvent.GroupEmployee = "";
            newEvent.DayInMonth = this.selectedInterval.getDate();
            newEvent.Monday = "N";
            newEvent.Tuesday = "N";
            newEvent.Wednesday = "N";
            newEvent.Thursday = "N";
            newEvent.Friday = "N";
            newEvent.Saturday = "N";
            newEvent.Sunday = "N";
            newEvent.AllUserInvite = "N";
            newEvent.AllUserShare = "N";
            newEvent.AllEmplInvite = "N";
            newEvent.AllEmplShare = "N";
            newEvent.CntctDate = new Date().toISOString();
            newEvent.Reminder = "N";
            newEvent.RemQty = 15;
            newEvent.RemType = "M";
            newEvent.EndType = "N";
            newEvent.SubOption = 1;
            fab.close();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_detail_event_detail__["a" /* EventDetailPage */], { event: newEvent, isAdd: true });
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.onEventSelected = function (event) {
        var _this = this;
        if (event.action == "V") {
            this.httpClient.Event.loadEventByCode(event.id, "manager").then(function (result) {
                var selectedEvent;
                if (result[0]) {
                    selectedEvent = result[0];
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_detail_event_detail__["a" /* EventDetailPage */], { event: selectedEvent, isAdd: false });
                }
                else {
                    _this.common.createToast("This event had been removed!", __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* MsgType */].error);
                }
            });
        }
        else if (event.action == "T") {
            this.httpClient.Event.loadSingleTask(event.id, __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* GlobalData */].UserCodeLogin).then(function (result) {
                var selectedTask;
                if (result[0]) {
                    selectedTask = result[0];
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_task_detail_task_detail__["a" /* TaskDetailPage */], { task: selectedTask, isAdd: false });
                }
                else {
                    _this.common.createToast("This task had been removed!", __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* MsgType */].error);
                }
            });
        }
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title + event.location + event.notes);
    };
    CalendarPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    CalendarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalendarPage.prototype.onTimeSelected = function (ev) {
        this.selectedInterval = ev.selectedTime;
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    CalendarPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    CalendarPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    CalendarPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        try {
            console.log('Begin async operation', refresher);
            setTimeout(function () {
                _this.loadCalendar();
                console.log('Async operation has ended');
                refresher.complete();
            }, 2000);
        }
        catch (error) {
            this.common.createToast(error, 0);
        }
    };
    return CalendarPage;
}());
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-calendar',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\event-management\calendar.html"*/'<!--\n\n  Generated template for the EventManagementPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Activity Calendar</ion-title>\n\n  </ion-navbar>\n\n  <ion-navbar color="primary">\n\n    <ion-label style="color:white">{{viewTitle}}</ion-label>\n\n    <ion-buttons end>\n\n      <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n\n      <button ion-button (click)="changeMode(\'month\')">M</button>\n\n      <button ion-button (click)="changeMode(\'week\')">W</button>\n\n      <button ion-button (click)="changeMode(\'day\')">D</button>\n\n      <!-- <button ion-button (click)="loadCalendar()">Load Events</button> -->\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <template #template let-view="displayEvent">\n\n        <div class="calendar-event-inner">{{displayEvent.event.title}}</div>\n\n  </template>\n\n  <template #template1 let-view="view"  let-row="row" let-col="col">\n\n      {{view.dates[row*7+col].label}}\n\n</template>\n\n  <calendar \n\n  \n\n  [monthviewDisplayEventTemplate] = "template1"\n\n  [eventSource]="eventSource" \n\n  [calendarMode]="calendar.mode" \n\n  [currentDate]="calendar.currentDate" \n\n  [showEventDetail] = "true"\n\n  (onEventSelected)="onEventSelected($event)"\n\n    (onTitleChanged)="onViewTitleChanged($event)" \n\n    (onTimeSelected)="onTimeSelected($event)" step="30" class="calendar">\n\n  </calendar>\n\n  <ion-fab middle right edge #fab>\n\n    <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n\n    <ion-fab-list side = "top">\n\n      <button ion-fab color="danger" >Task</button>\n\n      <button ion-fab color="danger" (click)="addNewEvent(fab)">Event</button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\event-management\calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__http_client_http_client__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], CalendarPage);

//# sourceMappingURL=event-management.js.map

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 439;

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bin-confirm/bin-confirm.module": [
		1360,
		8
	],
	"../pages/event-detail/event-detail.module": [
		1364,
		7
	],
	"../pages/event-management/event-management.module": [
		1365,
		6
	],
	"../pages/inventory-transfer/inventory-transfer.module": [
		1361,
		5
	],
	"../pages/picked-confirm/picked-confirm.module": [
		1362,
		4
	],
	"../pages/report-complete/report-complete.module": [
		1363,
		3
	],
	"../pages/task-detail/task-detail.module": [
		1359,
		2
	],
	"../pages/task-list/task-list.module": [
		1357,
		1
	],
	"../pages/task-management/task-management.module": [
		1358,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 481;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonsClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CommonsClient = (function () {
    function CommonsClient(api) {
        this.api = api;
    }
    CommonsClient.prototype.getAllEmployee = function () {
        console.log('get all employee');
    };
    CommonsClient.prototype.getTableStructure = function (tableName) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result, dtStructure, obj, i, colInfo, dtData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [];
                        params.push({ name: "table", value: tableName });
                        return [4 /*yield*/, this.api.getDataSet("BusinessMasterData", "GetBPTableStructure", params)];
                    case 1:
                        result = _a.sent();
                        dtStructure = result[0];
                        obj = {};
                        for (i = 0; i < dtStructure.length; i++) {
                            colInfo = dtStructure[i];
                            //add to dtData a element
                            //with name = colInfo.Name
                            //and type = colInfo.type
                            obj[colInfo.Name] = null;
                        }
                        dtData = [obj];
                        // 
                        return [2 /*return*/, dtData];
                }
            });
        });
    };
    CommonsClient.prototype.getTableColumns = function (tableName) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [];
                        params.push({ name: "table", value: tableName });
                        return [4 /*yield*/, this.api.getAsyncDataSet("BusinessMasterData", "GetBPTableStructure", params)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CommonsClient.prototype.getUserList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.api.getDataSet("CFL", "GetUserList")];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    CommonsClient.prototype.loadAttachment = function (absEntry) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!absEntry)
                            return [2 /*return*/, null];
                        params = [];
                        params.push({ name: "absEntry", value: absEntry.toString() });
                        return [4 /*yield*/, this.api.getDataTable("IssueForProduction", "LoadAttachFiles", params)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommonsClient.prototype.getUserLoginInfo = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!userName)
                            return [2 /*return*/, null];
                        params = [];
                        params.push({ name: "madk", value: userName.toString() });
                        return [4 /*yield*/, this.api.getDataTable("Users", "GetUserLogin", params)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CommonsClient;
}());
CommonsClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_api__["a" /* Api */]])
], CommonsClient);

//# sourceMappingURL=common-client.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickingClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_helper__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PickingClient = (function () {
    function PickingClient(helper) {
        this.helper = helper;
        this._controller = 'Picking';
        helper._controller = this._controller;
    }
    PickingClient.prototype.LoadBatchLine = function (docEntry, lineNum) {
        return this.helper.getAsyncDataSet('LoadBatchLine', [{ name: 'docEntry', value: docEntry }, { name: 'lineNum', value: lineNum }]);
    };
    PickingClient.prototype.getItem = function (barcode) {
        // return new Promise()
        // return this.helper.getDataSet('GetItemByBarcode', [{ name: 'barcode', value: barcode }]);
    };
    return PickingClient;
}());
PickingClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_helper__["a" /* HttpClientHelper */]])
], PickingClient);

//# sourceMappingURL=picking-client.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_client_http_client__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/*
  Generated class for the TaskProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var TaskProvider = (function () {
    function TaskProvider(http, api) {
        this.http = http;
        this.api = api;
        this._controller = "SubActivities";
    }
    TaskProvider.prototype.loadTask = function (taskStatus) {
        if (taskStatus === void 0) { taskStatus = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [];
                        params.push({ name: "userName", value: "manager" });
                        params.push({ name: "taskStatus", value: taskStatus });
                        return [4 /*yield*/, this.api.getDataTable(this._controller, "LoadTask", params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaskProvider.prototype.loadSubTask = function (clgCode) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [];
                        params.push({ name: "clgCode", value: clgCode.toString() });
                        params.push({ name: "userName", value: "manager" });
                        return [4 /*yield*/, this.api.getDataTable(this._controller, "LoadSubTask", params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaskProvider.prototype.saveTask = function (dt) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.api.post(this._controller, "SaveTask", dt).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.json()];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1.message);
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_4__http_client_http_client__["b" /* HttpResult */](error_1.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskProvider.prototype.addTask = function (dt) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.api.post(this._controller, "AddTask", dt).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.json()];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2.message);
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_4__http_client_http_client__["b" /* HttpResult */](error_2.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskProvider.prototype.changeTaskStatus = function (dt) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.api.post(this._controller, "ChangeTaskStatus", dt).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.json()];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3.message);
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_4__http_client_http_client__["b" /* HttpResult */](error_3.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskProvider.prototype.removeTask = function (dt) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.api.post(this._controller, "RemoveTask", dt).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.json()];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4.message);
                        return [2 /*return*/, error_4.message];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return TaskProvider;
}());
TaskProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */]])
], TaskProvider);

//# sourceMappingURL=task.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import { HttpClientRepository } from './../../http-client/http-client';



/*
  Generated class for the event_management provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var EventProvider = (function () {
    //data: any;
    function EventProvider(http, api) {
        this.http = http;
        this.api = api;
        this._controller = 'SubActivities';
    }
    EventProvider.prototype.loadEvent = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postAsyncDataTable(this._controller, "LoadEventByInterval", data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventProvider.prototype.saveEvent = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postAsyncDataTable(this._controller, "SaveAllEvent", data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventProvider.prototype.addEvent = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postAsyncDataTable(this._controller, "AddEvent", data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventProvider.prototype.deleteEvent = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postAsyncDataTable(this._controller, "RemoveAllEvent", data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventProvider.prototype.loadEventByCode = function (clgCode, userCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getDataTable(this._controller, "LoadEventByCode", [{ name: 'clgCode', value: clgCode }, { name: "userCode", value: userCode }])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventProvider.prototype.loadSingleTask = function (clgCode, userCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getDataTable(this._controller, "LoadSingleTask", [{ name: 'clgCode', value: clgCode }, { name: "userName", value: userCode }])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventProvider.prototype.loadMettingLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getDataTable("ActivityMeetingLocation", "GetAll")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return EventProvider;
}());
EventProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__api__["a" /* Api */]])
], EventProvider);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ProjectProvider = (function () {
    function ProjectProvider(http, api) {
        this.http = http;
        this.api = api;
        this._controller = "SubActivities";
        console.log('Hello ProjectProvider Provider');
    }
    ProjectProvider.prototype.loadProject = function (projectid) {
        if (projectid === void 0) { projectid = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var params, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = [];
                        params.push({ name: "projectid", value: projectid.toString() });
                        return [4 /*yield*/, this.api.getDataSet("CFL", "GetDataProjectManager", params)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProjectProvider.prototype.loadProjectTask = function (projectid) {
        return __awaiter(this, void 0, void 0, function () {
            var params, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = [];
                        params.push({ name: "projectId", value: projectid.toString() });
                        return [4 /*yield*/, this.api.getDataSet("CFL", "GetDataProjectTask", params)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ProjectProvider;
}());
ProjectProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */]])
], ProjectProvider);

//# sourceMappingURL=project.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CflProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the CflProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CflProvider = (function () {
    function CflProvider(http, api) {
        this.http = http;
        this.api = api;
        this._controller = "CFL";
    }
    CflProvider.prototype.loadBusinessPartner = function (cardType, userName, branch) {
        if (cardType === void 0) { cardType = ""; }
        if (userName === void 0) { userName = ""; }
        if (branch === void 0) { branch = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var params, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.dtBP)
                            return [2 /*return*/, this.dtBP];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        params = [];
                        params.push({ name: "cardType", value: "" });
                        params.push({ name: "userName", value: "" });
                        params.push({ name: "branch", value: "" });
                        _a = this;
                        return [4 /*yield*/, this.api.getDataSet(this._controller, "LoadBusinessPartner", params)];
                    case 2:
                        _a.dtBP = _b.sent();
                        return [2 /*return*/, this.dtBP];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CflProvider;
}());
CflProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */]])
], CflProvider);

//# sourceMappingURL=cfl.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_client_http_client__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/*
  Generated class for the CommentProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CommentProvider = (function () {
    function CommentProvider(http, api) {
        this.http = http;
        this.api = api;
        this._controller = "SubActivities";
    }
    CommentProvider.prototype.loadComment = function (Id, type, userSign) {
        if (type === void 0) { type = "1470000128"; }
        if (userSign === void 0) { userSign = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var params, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = [];
                        params.push({ name: "Id", value: Id.toString() });
                        params.push({ name: "type", value: type });
                        params.push({ name: "userSign", value: userSign.toString() });
                        return [4 /*yield*/, this.api.getDataSet(this._controller, "LoadComment", params)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommentProvider.prototype.addComment = function (tuple) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.api.post(this._controller, "SaveCommentMobile", tuple).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.json()];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2.message);
                        return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_4__http_client_http_client__["b" /* HttpResult */](error_2.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CommentProvider;
}());
CommentProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */]])
], CommentProvider);

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import { HttpClientRepository } from './../../http-client/http-client';



/*
  Generated class for the event_management provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var CalendarProvider = (function () {
    //data: any;
    function CalendarProvider(http, api) {
        this.http = http;
        this.api = api;
        this._controller = 'SubActivities';
    }
    CalendarProvider.prototype.loadCalendar = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postAsyncDataTable(this._controller, "GetDocByInterval", data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CalendarProvider;
}());
CalendarProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__api__["a" /* Api */]])
], CalendarProvider);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_list_task_list__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MorePopoverPage = (function () {
    function MorePopoverPage(viewCtrl, navCtrl, appCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
    }
    MorePopoverPage.prototype.showCompleted = function () {
        this.viewCtrl.dismiss();
        var navOptions = { animation: "ios-transition", duration: 600 };
        this.appCtrl.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_2__task_list_task_list__["a" /* TaskListPage */], { taskStatus: "Y" }, navOptions);
        //this.navCtrl.setRoot(TaskManagementPage);
        // this.navCtrl.push(TaskListPage, { taskStatus: "Y" }, navOptions);
    };
    return MorePopoverPage;
}());
MorePopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n      <ion-list>\n        <button ion-item (click)=\"showCompleted()\">Show Completed Task</button>\n      </ion-list>\n    "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], MorePopoverPage);

//# sourceMappingURL=more-popover.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_task_detail_task_detail__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_client_http_helper__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_client_http_client__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the TaskViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var TaskViewComponent = (function () {
    function TaskViewComponent(navCtrl, navParams, httpClient, common, httpHelper, actionSheet, setting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.common = common;
        this.httpHelper = httpHelper;
        this.actionSheet = actionSheet;
        this.setting = setting;
        this.taskStatus = 'N';
        this.hideAddText = false;
        this.addText = "";
        this.adding = false;
        this.changeStatus = false;
    }
    TaskViewComponent.prototype.ngOnInit = function () {
        this.loadTask();
        this.loadUser();
        this.loadProject();
    };
    TaskViewComponent.prototype.clickBack = function () {
        var navOptions = { animation: "ios-transition", duration: 600 };
        this.navCtrl.pop(navOptions);
    };
    TaskViewComponent.prototype.loadTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, _a, rowStruct, column;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Task.loadTask(this.taskStatus)];
                    case 1:
                        result = _b.sent();
                        if (!(result === undefined || result.length == 0)) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.httpClient.Common.getTableStructure("APZ_OCLG")];
                    case 2:
                        _a.dtStructure = (_b.sent());
                        this.dtTask = [];
                        return [3 /*break*/, 4];
                    case 3:
                        //cloning by JSON
                        //result.slice(0,1) will return a new array contains only first data row from result
                        //doing this to prevent copy by reference
                        this.dtStructure = this.common.cloning(result.slice(0, 1));
                        rowStruct = this.dtStructure[0];
                        for (column in rowStruct) {
                            if (rowStruct.hasOwnProperty(column)) {
                                rowStruct[column] = null;
                            }
                        }
                        this.dtTask = result;
                        _b.label = 4;
                    case 4:
                        console.log('Loaded');
                        //sort by clgCode
                        //descending
                        if (this.taskStatus == "N") {
                            this.dtTask.sort(function (a, b) { return b.ClgCode - a.ClgCode; });
                        }
                        if (this.taskStatus == "Y") {
                            this.dtTask.sort(function (a, b) { return b.CloseDate - a.CloseDate; });
                        }
                        //add an ":" for endDate
                        this.dtTask.forEach(function (task) {
                            //format ENDTime and BeginTime from number HHmm
                            //to correct Hour and Minute format HH:mm
                            task.ENDTime = _this.common.toNormalTime(task.ENDTime);
                            task.BeginTime = _this.common.toNormalTime(task.BeginTime);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskViewComponent.prototype.loadUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Common.getUserList()];
                    case 1:
                        result = _a.sent();
                        this.dtUser = result[1];
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskViewComponent.prototype.loadProject = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Project.loadProject()];
                    case 1:
                        result = _a.sent();
                        this.dtProject = result[1];
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskViewComponent.prototype.loadProjectTask = function (projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Project.loadProjectTask(projectId)];
                    case 1:
                        result = _a.sent();
                        this.dtProjectTask = result[1];
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskViewComponent.prototype.fillInfo = function (task) {
        //get clgCode from task
        //var clgCode=task.ClgCode;
        //load task from api 
        //=> add later
        //currently use data from dtTask
        //try navigate to task detail first
        var navOptions = { animation: "ios-transition", duration: 600 };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_task_detail_task_detail__["a" /* TaskDetailPage */], { task: task, dtUser: this.dtUser, isAdd: false }, navOptions);
        //  this.navCtrl.push(TaskDetailPage, {task: task});
    };
    TaskViewComponent.prototype.saveTask = function (dt) {
        this.httpClient.Task.saveTask(dt);
    };
    TaskViewComponent.prototype.showActionSheet = function (task) {
        var _this = this;
        var sheet = this.actionSheet.create({
            title: '',
            buttons: [
                {
                    text: 'Remove',
                    handler: function () { _this.removeTask(task); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        sheet.present();
    };
    TaskViewComponent.prototype.removeTask = function (removedTask) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Task.removeTask([removedTask])];
                    case 1:
                        result = _a.sent();
                        if (result !== undefined && result !== "") {
                            this.common.createToast(result, 0);
                            return [2 /*return*/];
                        }
                        //remove task from list
                        this.dtTask = this.dtTask.filter(function (task) { return task !== removedTask; });
                        console.log(removedTask);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskViewComponent.prototype.taskStatusChanged = function (changedTask) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var ds, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Checked");
                        //prevent too many task being completed
                        if (this.changeStatus === true)
                            return [2 /*return*/];
                        this.changeStatus = true;
                        //set task status
                        if (changedTask.Closed === "N") {
                            changedTask.Closed = "Y";
                            changedTask.status = 2;
                            changedTask.CloseDate = this.common.adjustForTimezone(new Date());
                        }
                        else if (changedTask.Closed === "Y") {
                            changedTask.Closed = "N";
                            changedTask.status = 1;
                        }
                        setTimeout(function () {
                            if (_this.taskStatus !== "") {
                                _this.dtTask = _this.dtTask.filter(function (task) { return task !== changedTask || (task === changedTask && changedTask.Closed === _this.taskStatus); });
                            }
                            _this.changeStatus = false;
                        }, 450);
                        ds = { Table1: [changedTask] };
                        return [4 /*yield*/, this.httpClient.Task.changeTaskStatus(ds)];
                    case 1:
                        result = _a.sent();
                        if (result !== undefined && result.Message !== "") {
                            this.common.createToast(result.Message, 0);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskViewComponent.prototype.buttonAddClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var taskText, task, currentDate, currentTime, dt, ds, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.adding)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        this.adding = true;
                        taskText = this.addText.trim();
                        //get text from add task input
                        //if prevent adding task when no text
                        if (taskText === "")
                            return [2 /*return*/];
                        task = this.common.cloning(this.dtStructure[0]);
                        //set ClgCode= 0
                        task.ClgCode = 0;
                        task.Details = taskText;
                        //set closed ="N"
                        task.Closed = "N";
                        //set type = task
                        task.Action = "T";
                        currentDate = this.common.adjustForTimezone(new Date());
                        task.CntctDate = currentDate;
                        //if no  Start Date
                        // (!!task.Recontact means task.Reconnect is null or empty)
                        //=>add a default Start Date
                        if (!task.Recontact) {
                            task.Recontact = currentDate.toJSON().slice(0, 10);
                            currentTime = currentDate.toTimeString().slice(0, 5).replace(":", "");
                            task.BeginTime = currentTime;
                        }
                        task.GroupUser = this.setting.settings.userSign.toString();
                        dt = [task];
                        ds = { Table1: dt };
                        return [4 /*yield*/, this.httpClient.Task.addTask(ds)];
                    case 2:
                        result = _a.sent();
                        if (result.Message != "") {
                            this.common.createToast(result.Message, 0);
                            return [2 /*return*/];
                        }
                        //set task clg code = new clg code get from api
                        task.ClgCode = result.Content;
                        //if task status ===""
                        //=> use as sub task list
                        //add new task at bottom instead of top
                        if (this.taskStatus === "") {
                            this.dtTask.push(task);
                        }
                        else {
                            this.dtTask.unshift(task);
                        }
                        this.addText = "";
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        this.common.createToast(error_1, 0);
                        return [3 /*break*/, 5];
                    case 4:
                        this.adding = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TaskViewComponent.prototype.getUserName = function (groupUser) {
        if (this.dtUser === undefined)
            return "";
        if (groupUser === undefined || groupUser === null)
            return "";
        var userList = groupUser.split(";");
        var resultUsers = this.dtUser.filter(function (user) { return userList.indexOf(user.USERID.toString()) > -1; });
        var value = "";
        for (var i = 0; i < resultUsers.length; i++) {
            value += resultUsers[i].U_NAME + "; ";
        }
        if (value.length > 0) {
            value = value.slice(0, value.length - 2);
        }
        return value;
    };
    TaskViewComponent.prototype.getProjectName = function (projectId) {
        if (this.dtProject === undefined)
            return "";
        var result = this.dtProject.find(function (project) { return project.AbsEntry == projectId; });
        if (result != undefined) {
            return result.Code + " - " + result.Name;
        }
        return "";
    };
    TaskViewComponent.prototype.formatDueDate = function (task) {
        //get due date
        //format from text to
        //DD.MM
        try {
            if (task.endDate == null)
                return "";
            var dueDate = new Date(task.endDate);
            var dateString = dueDate.getDate().toString();
            if (dateString.length < 2) {
                dateString = "0" + dateString;
            }
            //need to + 1 for month
            //because getMonth() will return current month - 1
            var monthString = (dueDate.getMonth() + 1).toString();
            if (monthString.length < 2) {
                monthString = "0" + monthString;
            }
            var dueDateFormatted = dateString + "." + monthString;
            return dueDateFormatted;
        }
        catch (error) {
            return "";
        }
    };
    TaskViewComponent.prototype.isOverdue = function (task) {
        try {
            var dueDate = new Date(task.endDate);
            dueDate = this.common.addTimeToDate(dueDate, task.ENDTime);
            var currentDate = this.common.adjustForTimezone(new Date());
            if (dueDate < currentDate) {
                return true;
            }
        }
        catch (error) {
        }
        return false;
    };
    return TaskViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TaskViewComponent.prototype, "taskStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TaskViewComponent.prototype, "hideAddText", void 0);
TaskViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'task-view',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\components\task-view\task-view.html"*/'<!-- Generated template for the TaskViewComponent component -->\n\n<ion-header>\n<ion-input *ngIf="hideAddText===false" class="maintext"  style="font-size:1.2em;padding-bottom:9px;padding-left:13px" placeholder="Add a task..." [(ngModel)]="addText" (keydown.enter)="buttonAddClick()"></ion-input> \n</ion-header>\n\n<ion-content >\n<ion-list>\n    <ion-item  [style.background-color]="task.Closed===\'Y\'? \'rgb(200, 200, 200)\':\'white\'" *ngFor="let task of dtTask">\n      <ion-checkbox mode="ios" style="margin-right:30px" (ionChange)="taskStatusChanged(task)" [checked]="task.Closed===\'Y\'"></ion-checkbox>\n      <ion-label style="margin:0px;">\n        <button (press)="showActionSheet(task)" (tap)="fillInfo(task)"  [style.background-color]="task.Closed===\'Y\'? \'rgb(200, 200, 200)\':\'white\'" ion-item no-lines >\n                      <ion-row style="white-space:normal" >\n                         <ion-col class="maintext" style="font-size:1.1em;"> {{task.Details}} </ion-col>\n                       </ion-row>\n  \n                       <ion-row>\n                        <ion-col style="color:rgb(109, 78, 69);white-space:normal">{{getUserName(task.GroupUser)}}</ion-col> \n                        <ion-col *ngIf="isOverdue(task)" class="overdue" col-2 style="text-align: right;" >{{formatDueDate(task)}}</ion-col>\n                        <ion-col *ngIf="!isOverdue(task)" class="underdue" col-2 style="text-align: right;" >{{formatDueDate(task)}}</ion-col>\n                       </ion-row>  \n                       <ion-row style="color:gray;font-size:0.8em" *ngIf="task.ProjectEntry > 0">\n                        <ion-col >{{getProjectName(task.ProjectEntry)}}<span *ngIf="task.ProjectWBS"> - {{task.ProjectWBS}} </span>  </ion-col> \n                       </ion-row> \n                      \n                               \n        </button>\n      </ion-label>\n    </ion-item>          \n    </ion-list>\n  </ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\components\task-view\task-view.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__http_client_http_client__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_3__http_client_http_helper__["a" /* HttpClientHelper */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_providers__["g" /* Settings */]])
], TaskViewComponent);

//# sourceMappingURL=task-view.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = Encrypt;
/* harmony export (immutable) */ __webpack_exports__["a"] = Decrypt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ApzRSACryptoServiceProvider__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ApzSystem__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ApzConverter__ = __webpack_require__(494);



var privateKeyXml = "<RSAKeyValue><Modulus>vLtugeMPaxyc+bmo2bmzimv+cp79GCM6dVBCyPzChQG67+cJuIs6Mg0yEUaJUHvsmpvufAnKhTLtbY690PQ1XWwl07ehp7xB9yryd9VF2f5fh8yE3xhTj0VkxFbPPnN8+biljlYptq6fCkH2PzwQ9AzbszXs5c9OksQR6DMOtN/zbmjg3rkDt8DN43BhYtVPuKdv2nfeuwaTtttJ6IAJXjs3rDRinhx3ZKv/OFYozT4DiAeic5bv1XKj8rf58yXFYNE4soHQVWMlvs56+ePdHQWU9UJXHX5WwoC+ACHpw+zsJKYfh6dgtBTHhqjwls/lV/wEE1E4l44deA7OcQTvJw==</Modulus><Exponent>AQAB</Exponent><P>3SEXy03d2BzQuHQ4yYAvjytvkl2+qNbL6czJbcCQ225x5ccoxkGm6mgQjalCAZLCsTJjaDwYh9MGDy/odYFY+yDDXH2GbNdppNNKQBZ3bhkxQFEEkgXBtRfsl7OjPp3/mMCmRZ4UfMKnnyXYyb3DoOMpBmvp7WJ9fWcWTRHkTVU=</P><Q>2n56qoDvlCn/y3bK5OZ68RZiQSWUyzS2JTwIBtnCC8JTDRrviCCDsa/WdBTSPYN6mfiWNrQAqZQtUmSDmyuSlu8TueG0gu7LBuZvQzBETWlFx2i0llFpkBrteMEUvZrHnTcYm8CESbP8ClxiTtm8DTTLnWKtBwZ36PijlufjKos=</Q><DP>WjonkE/8ZjMTwz/A8A862Ks7gjh4FEJYv9RMmFjLgo2lMcG61HJzXhAKORNIGIY+pLjPsPdcdwdW4JmGu3OE0CtFK5cYY47dz2BbWp0QLD9hRkIIoGBy8qaJZjjpMiKb6UMqVRu0dleit6BkvaSNjzdBRRqBP9hBJgsLIXVcd2U=</DP><DQ>BKkqCLUTZz+2Gyr/jP51pOrrUaRxlhwbvpOXQD4o64NLrj3i2i6HYKT1mChRi8pgNSSeX7BbS0LD7LwEKq01RU74RsDPzvM1FYKY4QAIlPYn7OcI4yP9cnuAkVDdFmZU17+zIK9sov3Z5Iav+iqe3lE//q16L2ot6KRVKQTtTZ0=</DQ><InverseQ>d00QEr7Z883pfzWWYkPp5/IhCEZyIRZFutCWzmptNFVAsXpkPGG5vLaUblagKwu/wOaqXSEMbG6QckyhrFzQjlc/e9b9Z+q8PJNxBhRPBk1O/EJIvIugpoOoui/fySsgBQFeh3RNDqBLthAlg4Y78oq3vmKW3r5yK57IRgwP9bk=</InverseQ><D>bJf4PNo2S+5Z0ELoieaVDOeYr8EVZecXQtscomL1Veyp8FHiwQGzSYtYLKKGbf3wJQHl1g8YLU4hWTGRvIJXllqc5VY6uLXUyvA2NYdMuuLnes7OAUQRCFXoZiSA+LEgzttUvzKKq+eL8S4FD1tzcclYPKShm5WN41rX5uBB7QYWKawsTCvFpqFMHpoE3p2PZBQC8g0tKbK5WR6lUmcbzEbJy/UeG2PNSD3sj4UPglHywvBGS0l14h+aA4HwRo1Ea6qRR5N3sEsQwI3Q/I/xzemKECCd/lVbvGkuYBJiMPdQ/ENN+/e//exxViER8IDqWXglB0aZ5qnOaDyr8FI4qQ==</D></RSAKeyValue>";
var publicKeyXml = "<RSAKeyValue><Modulus>vLtugeMPaxyc+bmo2bmzimv+cp79GCM6dVBCyPzChQG67+cJuIs6Mg0yEUaJUHvsmpvufAnKhTLtbY690PQ1XWwl07ehp7xB9yryd9VF2f5fh8yE3xhTj0VkxFbPPnN8+biljlYptq6fCkH2PzwQ9AzbszXs5c9OksQR6DMOtN/zbmjg3rkDt8DN43BhYtVPuKdv2nfeuwaTtttJ6IAJXjs3rDRinhx3ZKv/OFYozT4DiAeic5bv1XKj8rf58yXFYNE4soHQVWMlvs56+ePdHQWU9UJXHX5WwoC+ACHpw+zsJKYfh6dgtBTHhqjwls/lV/wEE1E4l44deA7OcQTvJw==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>";
var GetNewRsaProvider = function () {
    return new __WEBPACK_IMPORTED_MODULE_0__ApzRSACryptoServiceProvider__["a" /* ApzRSACryptoServiceProvider */](2048);
};
var GetRsaKey = function (isEncryt) {
    var rsa = GetNewRsaProvider();
    rsa.FromXmlString(isEncryt ? publicKeyXml : privateKeyXml, isEncryt);
    return rsa.ExportParameters(isEncryt);
};
function Encrypt(plainText) {
    var decryptedBytes = __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["g" /* UnicodeEncoderGetBytes */](plainText);
    var doOaepPadding = false;
    var rsa = GetNewRsaProvider();
    rsa.ImportParameters(GetRsaKey(true));
    var encryptedBytes = rsa.Encrypt(decryptedBytes, doOaepPadding);
    var encryptedString = __WEBPACK_IMPORTED_MODULE_2__ApzConverter__["b" /* ToBase64String */](encryptedBytes, false);
    return encryptedString;
}
function Decrypt(sourceText) {
    var encryptedBytes = __WEBPACK_IMPORTED_MODULE_2__ApzConverter__["a" /* FromBase64String */](sourceText, false);
    var doOaepPadding = false;
    var rsa = GetNewRsaProvider();
    rsa.ImportParameters(GetRsaKey(false));
    var decryptedBytes = rsa.Decrypt(encryptedBytes, doOaepPadding);
    return __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["h" /* UnicodeEncoderGetString */](decryptedBytes);
}
//# sourceMappingURL=ApzRsa.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FromBase64String;
/* harmony export (immutable) */ __webpack_exports__["b"] = ToBase64String;
/* unused harmony export BitConverter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__ = __webpack_require__(240);

var Base64Array = (function () {
    function Base64Array() {
        this.S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        this.CA = [];
        this.IA = [];
        var c = "";
        for (var i = 0; i < this.S.length; i++) {
            c = this.S.charAt(i);
            this.CA[i] = c;
            this.IA[c] = i;
        }
    }
    ;
    return Base64Array;
}());
;
function FromBase64String(s, fix) {
    var B64 = new Base64Array();
    if (fix) {
        var regex = new RegExp("[^" + B64.S + "]", "g");
        s = s.replace(regex, "");
    }
    var sLen = s.length;
    if (sLen === 0)
        return new Array(0);
    var sIx = 0, eIx = sLen - 1;
    var pad = s.charAt(eIx) === '=' ? s.charAt(eIx - 1) === '=' ? 2 : 1 : 0; // Count '=' at end.
    var cCnt = eIx - sIx + 1;
    var sepLn = s.charAt(76) === '\r' ? cCnt / 78 : 0;
    var sepCnt = sLen > 76 ? sepLn << 1 : 0;
    var len = ((cCnt - sepCnt) * 6 >> 3) - pad;
    var bytes = new Array(len);
    var d = 0;
    var eLen = Math.floor(len / 3) * 3;
    var i;
    for (var cc = 0; d < eLen;) {
        i = B64.IA[s.charAt(sIx++)] << 18 |
            B64.IA[s.charAt(sIx++)] << 12 |
            B64.IA[s.charAt(sIx++)] << 6 |
            B64.IA[s.charAt(sIx++)];
        bytes[d++] = i >> 16;
        bytes[d++] = (i & 0xFFFF) >> 8;
        bytes[d++] = i & 0xFF;
        if (sepCnt > 0 && ++cc === 19) {
            sIx += 2;
            cc = 0;
        }
    }
    if (d < len) {
        i = 0;
        for (var j = 0; sIx <= eIx - pad; j++) {
            i |= B64.IA[s.charAt(sIx++)] << 18 - j * 6;
        }
        for (var r = 16; d < len; r -= 8) {
            var cropBits = Math.pow(2, r + 8) - 1;
            bytes[d++] = (i & cropBits) >> r;
        }
    }
    return bytes;
}
;
function ToBase64String(b, wrap) {
    var B64 = new Base64Array();
    var bLen = b ? b.length : 0;
    if (bLen === 0)
        return "";
    var eLen = Math.floor(bLen / 3) * 3;
    var cCnt = (bLen - 1) / 3 + 1 << 2;
    var dLen = cCnt + (wrap ? (cCnt - 1) / 76 << 1 : 0); // Length of returned array
    var dArr = new Array(dLen);
    for (var s = 0, d = 0, cc = 0; s < eLen;) {
        var i = (b[s++] & 0xff) << 16 | (b[s++] & 0xff) << 8 | b[s++] & 0xff;
        dArr[d++] = B64.CA[i >>> 18 & 0x3f];
        dArr[d++] = B64.CA[i >>> 12 & 0x3f];
        dArr[d++] = B64.CA[i >>> 6 & 0x3f];
        dArr[d++] = B64.CA[i & 0x3f];
        if (wrap && ++cc === 19 && d < dLen - 2) {
            dArr[d++] = '\r';
            dArr[d++] = '\n';
            cc = 0;
        }
    }
    var left = bLen - eLen; // 0 - 2.
    if (left > 0) {
        var j = (b[eLen] & 0xff) << 10 | (left === 2 ? (b[bLen - 1] & 0xff) << 2 : 0);
        dArr[dLen - 4] = B64.CA[j >> 12];
        dArr[dLen - 3] = B64.CA[j >>> 6 & 0x3f];
        dArr[dLen - 2] = left === 2 ? B64.CA[j & 0x3f] : '=';
        dArr[dLen - 1] = '=';
    }
    return dArr.join("");
}
;
var BitConverter = (function () {
    function BitConverter() {
        this.me = this;
        this.cMask = {};
        this.sBits = {};
        this.SemSingleToBytes = function (sign, exponent, mantissa) {
            var B = new Array(4);
            // Round.
            mantissa = Math.pow(2, 23) * mantissa + 0.5;
            B[3] = 0xFF & mantissa;
            B[2] = 0xFF & mantissa >> 8;
            B[1] = 0x7F & mantissa >> 16 | (exponent & 1) << 7;
            B[0] = sign << 7 | exponent >> 1;
            return B;
        };
        this.SemDoubleToBytes = function (sign, exponent, mantissa) {
            var B = new Array(4);
            mantissa = Math.pow(2, 52) * mantissa;
            B[3] = 0xFFFF & mantissa;
            B[2] = 0xFFFF & mantissa >> 16;
            // Integers are only 32-bit.
            mantissa /= Math.pow(2, 32);
            B[1] = 0xFFFF & mantissa;
            B[0] = sign << 15 | exponent << 4 | 0x000F & mantissa >> 16;
            // Convert Int16[] to bytes[];
            return this.GetBytesFromInt16ArrayBe(B, 0, B.length);
        };
        this.GetBytesFromNumber = function (Qty, NumW) {
            this.Number = Qty;
            var Bin;
            this.nb01 = ""; // , OutW = NumW/4
            var Inf = { 32: { d: 0x7F, c: 0x80, b: 0, a: 0 }, 64: { d: 0x7FF0, c: 0, b: 0, a: 0 } };
            var ExW = { 32: 8, 64: 11 }[NumW];
            var MtW = NumW - ExW - 1;
            var sign;
            var exponent;
            var mantissa;
            if (isNaN(Qty)) {
                Bin = Inf[NumW];
                Bin.a = 1;
                sign = false;
                exponent = Math.pow(2, ExW) - 1;
                mantissa = Math.pow(2, -MtW);
            }
            if (!Bin) {
                sign = Qty < 0 || 1 / Qty < 0; // OK for +-0
                if (!isFinite(Qty)) {
                    Bin = Inf[NumW];
                    if (this.Sign)
                        Bin.d += 1 << NumW / 4 - 1;
                    exponent = Math.pow(2, ExW) - 1;
                    mantissa = 0;
                }
            }
            if (!Bin) {
                exponent = { 32: 127, 64: 1023 }[NumW];
                mantissa = Math.abs(Qty);
                while (mantissa >= 2) {
                    exponent++;
                    mantissa /= 2;
                }
                while (mantissa < 1 && this.Exponent > 0) {
                    exponent--;
                    mantissa *= 2;
                }
                if (exponent <= 0) {
                    mantissa /= 2;
                    // "Zero or Denormal";
                }
                if (NumW === 32 && this.Exponent > 254) {
                    // "Too big for Single";
                    Bin = { d: sign ? 0xFF : 0x7F, c: 0x80, b: 0, a: 0 };
                    exponent = Math.pow(2, ExW) - 1;
                    mantissa = 0;
                }
            }
            var array;
            if (!Bin) {
                if (NumW === 32)
                    array = this.SemSingleToBytes(sign, exponent, mantissa);
                if (NumW === 64)
                    array = this.SemDoubleToBytes(sign, exponent, mantissa);
            }
            else {
                array = [Bin.a, Bin.b, Bin.c, Bin.d];
                // Convert Int16[] to bytes[];
                if (NumW === 64)
                    array = this.GetBytesFromInt16ArrayBe(array, 0, array.length);
            }
            // Reverse from big-endian to little-endian;
            return array.reverse();
        };
        this.cMask[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Boolean] = 0x1;
        this.cMask[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Byte] = 0xFF;
        this.cMask[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].SByte] = 0x7F;
        this.cMask[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16] = 0x7FFF;
        this.cMask[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32] = 0x7FFFFFFF;
        this.cMask[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].UInt16] = 0xFFFF;
        this.cMask[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].UInt32] = 0xFFFFFFFF;
        this.sBits[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Boolean] = 1;
        this.sBits[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Byte] = 8;
        this.sBits[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].SByte] = 8;
        this.sBits[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16] = 16;
        this.sBits[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32] = 32;
        this.sBits[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].UInt16] = 16;
        this.sBits[__WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].UInt32] = 32;
        this.IsLittleEndian = this._isLittleEndian();
    }
    ;
    BitConverter.prototype.GetBytes = function (value, typeCode) {
        switch (typeof value) {
            case "boolean":
                return value ? [1] : [0];
            case "number":
                switch (typeCode) {
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Single: return this.GetBytesFromNumber(value, 32);
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Double: return this.GetBytesFromNumber(value, 64);
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16:
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].UInt16: return this.GetBytesFromInt16Le(value);
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32:
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].UInt32: return this.GetBytesFromInt32Le(value);
                    default: return this.GetBytesFromInt32Le(value);
                }
            case "object":
                // Value is array of numbers.
                switch (typeCode) {
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Single: return this.GetBytesFromNumber(value, 32);
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Double: return this.GetBytesFromNumber(value, 64);
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16:
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].UInt16:
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32:
                    case __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].UInt32: return this.GetBytesFromInt32ArrayLe(value, 0, 0);
                    default: return this.GetBytesFromInt32ArrayLe(value, 0, 0);
                }
            default:
                // Unknown type.
                break;
        }
    };
    ;
    BitConverter.prototype.ToSingle = function (value, startIndex) {
        var bytes = value.slice(startIndex, startIndex + 4);
        return this.ToNumber(bytes);
    };
    ;
    BitConverter.prototype.ToDouble = function (value, startIndex) {
        var bytes = value.slice(startIndex, startIndex + 8);
        return this.ToNumber(bytes);
    };
    ;
    BitConverter.prototype.ToBoolean = function (value, startIndex) {
        return value[startIndex] & 0x1 ? true : false;
    };
    ;
    BitConverter.prototype.ToInt16Le = function (value, startIndex) {
        return this.GetSigned(this.ToInt16ArrayLe(value, startIndex, 2)[0], __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16);
    };
    ;
    BitConverter.prototype.ToInt16Be = function (value, startIndex) {
        return this.GetSigned(this.ToInt16ArrayBe(value, startIndex, 2)[0], __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16);
    };
    ;
    BitConverter.prototype.ToUInt16Le = function (value, startIndex) {
        return this.GetUnsigned(this.ToInt16Le(value, startIndex), __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16);
    };
    ;
    BitConverter.prototype.ToUInt16Be = function (value, startIndex) {
        return this.GetUnsigned(this.ToInt16Be(value, startIndex), __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16);
    };
    ;
    BitConverter.prototype.ToInt32Le = function (value, startIndex) {
        return this.ToInt32ArrayLe(value, startIndex, 4)[0];
    };
    ;
    BitConverter.prototype.ToInt32Be = function (value, startIndex) {
        return this.ToInt32ArrayBe(value, startIndex, 4)[0];
    };
    ;
    BitConverter.prototype.ToUInt32Le = function (value, startIndex) {
        return this.GetUnsigned(this.ToInt32Le(value, startIndex), __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32);
    };
    ;
    BitConverter.prototype.ToUInt32Be = function (value, startIndex) {
        return this.GetUnsigned(this.ToInt32Be(value, startIndex), __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32);
    };
    ;
    BitConverter.prototype._GetBytesFromInt = function (value, typeCode, bigEndian) {
        var b, m;
        var sizeBits = this.sBits[typeCode];
        var sizeBytes = (sizeBits ? sizeBits : 32) / 8;
        var bytes = new Array(sizeBytes);
        for (b = 0; b < sizeBytes; b++) {
            m = bigEndian
                ? sizeBytes - 1 - b
                : b;
            bytes[m] = value >> b * 8 & 0xff;
        }
        return bytes;
    };
    ;
    BitConverter.prototype.GetBytesFromInt16Le = function (value) {
        return this._GetBytesFromInt(value, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16, false);
    };
    ;
    BitConverter.prototype.GetBytesFromInt16Be = function (value) {
        return this._GetBytesFromInt(value, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16, true);
    };
    ;
    BitConverter.prototype.GetBytesFromInt32Le = function (value) {
        return this._GetBytesFromInt(value, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32, false);
    };
    ;
    BitConverter.prototype.GetBytesFromInt32Be = function (value) {
        return this._GetBytesFromInt(value, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32, true);
    };
    ;
    BitConverter.prototype.GetBitsLe = function (array, typeCode) {
        var length = array.length;
        var bpn = this.sBits[typeCode];
        bpn = bpn ? bpn : 32;
        var bits = new Array(length * bpn);
        for (var i = 0; i < length; i++) {
            var value = array[i];
            for (var b = 0; b < bpn; b++) {
                bits[i * bpn + b] = value & 0x1;
                value = value >> 1;
            }
        }
        return bits;
    };
    ;
    BitConverter.prototype.GetBitsBe = function (array, typeCode) {
        var length = array.length;
        var bpn = this.sBits[typeCode];
        // Treat array as Int32[].
        bpn = bpn ? bpn : 32;
        var bits = new Array(length * bpn);
        for (var i = 0; i < length; i++) {
            var value = array[i];
            for (var b = 0; b < bpn; b++) {
                bits[i * bpn + bpn - 1 - b] = value & 0x1;
                value = value >> 1;
            }
        }
        return bits;
    };
    ;
    BitConverter.prototype.GetUnsigned = function (value, typeCode) {
        var results;
        var umask = this.cMask[typeCode + 1];
        // If value is number.
        if (typeof value === "number") {
            results = (value & umask) << 0 >>> 0;
        }
        else {
            // Value is array of numbers.
            umask = this.cMask[typeCode + 1];
            var length = value.length;
            results = new Array(length);
            for (var i = 0; i < length; i++) {
                var n = value[i];
                results[i] = n & umask << 0 >>> 0;
            }
        }
        return results;
    };
    ;
    BitConverter.prototype.GetSigned = function (value, typeCode) {
        var results;
        var umask = this.cMask[typeCode];
        var smask = this.cMask[typeCode - 1];
        // If value is number.
        if (typeof value === "number") {
            results = value > smask ? -(-value & umask) : value;
        }
        else {
            // Value is array of numbers.
            var length = value.length;
            results = new Array(length);
            for (var i = 0; i < length; i++) {
                var n = value[i];
                results[i] = n > smask ? -(-n & umask) : n;
            }
        }
        return results;
    };
    ;
    BitConverter.prototype._GetBytesFromIntArray = function (array, startIndex, count, typeCode, bigEndian) {
        var sizeBits = this.sBits[typeCode];
        var sizeBytes = (sizeBits ? sizeBits : 32) / 8;
        startIndex = startIndex ? startIndex : 0;
        count = count > 0 ? count : array.length - startIndex;
        var bytes = new Array(count * sizeBytes);
        var i, b, m;
        var length = startIndex + count;
        for (i = startIndex; i < length; i++) {
            for (b = 0; b < sizeBytes; b++) {
                m = bigEndian
                    ? i * sizeBytes + sizeBytes - 1 - b
                    : i * sizeBytes + b;
                bytes[m] = array[i] >> b * 8 & 0xff;
            }
        }
        return bytes;
    };
    BitConverter.prototype.GetBytesFromInt16ArrayLe = function (value, startIndex, count) {
        return this._GetBytesFromIntArray(value, startIndex, count, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16, false);
    };
    ;
    BitConverter.prototype.GetBytesFromInt16ArrayBe = function (value, startIndex, count) {
        return this._GetBytesFromIntArray(value, startIndex, count, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16, true);
    };
    ;
    BitConverter.prototype.GetBytesFromInt32ArrayLe = function (value, startIndex, count) {
        return this._GetBytesFromIntArray(value, startIndex, count, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32, false);
    };
    ;
    BitConverter.prototype.GetBytesFromInt32ArrayBe = function (value, startIndex, count) {
        return this._GetBytesFromIntArray(value, startIndex, count, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32, true);
    };
    ;
    BitConverter.prototype._ToIntArray = function (bytes, startIndex, count, typeCode, bigEndian) {
        // Convert bytes to Int<Bits> array. 
        var sizeBits = this.sBits[typeCode];
        var sizeBytes = (sizeBits ? sizeBits : 32) / 8;
        startIndex = startIndex ? startIndex : 0;
        count = count ? count : bytes.length - startIndex;
        var mask = (1 << 8) - 1;
        var array = Array();
        var v, m;
        for (var i = 0; i < count; i++) {
            var bi = (i - i % sizeBytes) / sizeBytes;
            v = bytes[startIndex + i] & mask;
            m = i % sizeBytes * 8;
            if (bigEndian)
                m = sizeBits - 8 - m;
            array[bi] |= v << m;
        }
        return array;
    };
    BitConverter.prototype.ToInt16ArrayLe = function (value, startIndex, count) {
        return this._ToIntArray(value, startIndex, count, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16, false);
    };
    ;
    BitConverter.prototype.ToInt16ArrayBe = function (value, startIndex, count) {
        return this._ToIntArray(value, startIndex, count, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int16, true);
    };
    ;
    BitConverter.prototype.ToInt32ArrayLe = function (value, startIndex, count) {
        return this._ToIntArray(value, startIndex, count, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32, false);
    };
    ;
    BitConverter.prototype.ToInt32ArrayBe = function (value, startIndex, count) {
        return this._ToIntArray(value, startIndex, count, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Int32, true);
    };
    ;
    BitConverter.prototype.Int16EndianSwap = function (x) {
        x = x >> 8 |
            x << 8;
        return x;
    };
    ;
    BitConverter.prototype.Int32EndianSwap = function (x) {
        x = x >> 24 |
            x << 8 & 0x00FF0000 |
            x >> 8 & 0x0000FF00 |
            x << 24;
        return x;
    };
    ;
    BitConverter.prototype.Int64EndianSwap = function (x) {
        // Swap number bytes.
        x = x >> 56 |
            x << 40 & 0x00FF000000000000 |
            x << 24 & 0x0000FF0000000000 |
            x << 8 & 0x000000FF00000000 |
            x >> 8 & 0x00000000FF000000 |
            x >> 24 & 0x0000000000FF0000 |
            x >> 40 & 0x000000000000FF00 |
            x << 56;
        return x;
    };
    ;
    BitConverter.prototype.ToString = function (bytes, separator, format) {
        var sb = [];
        if (!bytes)
            return;
        // Formats: X[1-N];
        format = format ? format : "X2";
        var len = parseInt(format.substr(1));
        var pfx = "";
        var i;
        for (i = 0; i < len; i++)
            pfx += "0";
        for (i = 0; i < bytes.length; i++) {
            // If number is negative (sByte: -127; 127) makes it byte.
            var b = bytes[i] & 0xFF;
            var hex = b.toString(16).toUpperCase();
            sb.push(pfx.substr(0, len - hex.length) + hex);
        }
        var sep = typeof separator === "undefined" ? '-' : separator;
        return sb.join(sep);
    };
    ;
    BitConverter.prototype.ToNumber = function (value) {
        // Reverse from little-endian to big-endian;
        var bytes = value.reverse();
        var bits = this.GetBitsBe(bytes, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Byte);
        var BinStr = this.GetBitsBe(bytes, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Byte).join('');
        var ExW = { 32: 8, 64: 11 }[BinStr.length];
        var M = BinStr.match(new RegExp("^(.)(.{" + ExW + "})(.*)$"));
        // M[1] sign, M[2] exponent, M[3] mantissa.
        var sign = bits[0] === 1 ? "-" : "+";
        var denorm = +M[2] === 0;
        var expo = parseInt(M[2], 2) - Math.pow(2, ExW - 1) + 1;
        var array = this.DecimalDigits(bits, ExW);
        // Prepend digit point.
        array.unshift(+!denorm);
        if (denorm)
            expo++;
        while (expo < 0) {
            expo++;
            this.Halve(array);
        }
        while (expo > 0) {
            expo--;
            this.Twice(array);
        }
        var value1 = sign + array.join("").replace(/(\d)0+$/, "$1");
        return +eval(value1);
    };
    ;
    BitConverter.prototype.Add = function (A, P) {
        var C = 0;
        var K = P.length;
        var T;
        while (K--) {
            T = (A[K] | 0) + P[K] + C;
            A[K] = T % 10;
            C = T > 9 ? 1 : 0;
        }
    };
    BitConverter.prototype.Halve = function (P) {
        var C = 0;
        var L = P.length;
        var T;
        for (var K = 0; K < L; K++) {
            if ((T = P[K]) !== ".") {
                T += 10 * C;
                C = T & 1;
                P[K] = T >> 1;
            }
        }
        if (C)
            P[K] = 5;
    };
    BitConverter.prototype.DecimalDigits = function (bits, ExW) {
        var A = [0];
        var P = [10];
        // Route througth mantisa bits.
        var index = ExW + 1;
        var length = bits.length;
        for (var i = index; i < length; i++) {
            this.Halve(P);
            if (bits[i] === 1)
                this.Add(A, P);
        }
        // A, P decimal fraction parts.
        return A;
    };
    BitConverter.prototype.Twice = function (A) {
        var K = A.length;
        var C = 0;
        var T;
        while (K--) {
            if ((T = A[K]) !== ".") {
                T = 2 * T + C;
                A[K] = T % 10;
                C = T > 9 ? 1 : 0;
            }
        }
        // Prepend.
        if (C)
            A.unshift(1);
    };
    BitConverter.prototype._isLittleEndian = function () {
        var bytes = this.GetBytes(-1.5, __WEBPACK_IMPORTED_MODULE_0__Enums_RsaEnum__["b" /* TypeCode */].Double);
        return bytes[0] === 0;
    };
    ;
    return BitConverter;
}());

;
//# sourceMappingURL=ApzConverter.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComplete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportComplete = (function () {
    function ReportComplete(http, api) {
        this.http = http;
        this.api = api;
    }
    ReportComplete.prototype.getProduction = function (barcode) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.api.get('ProductionOder', 'GetProductionByBarcode', [{ name: 'barcode', value: barcode }])
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.structure = _this.api.ApzJsonDeserialize(data.Table);
                _this.data = _this.api.ApzJsonDeserialize(data.Table1);
                resolve([_this.structure, _this.data])
                    ,
                        function (err) {
                            console.log(err);
                            throw (err);
                        };
            });
        });
    };
    ReportComplete.prototype.reportComplete = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.api.post('ProductionOrderImportTool', 'SaveRC', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data)
                    ,
                        function (err) {
                            console.log(err);
                            resolve(err);
                        };
            });
        });
    };
    return ReportComplete;
}());
ReportComplete = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */]])
], ReportComplete);

//# sourceMappingURL=report-complete.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryTransfers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_InventoryTranferImpl__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_InventoryTranfer_LineImpl__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_StockTransferLinesBinAllocationsImpl__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_BatchNumbersImpl__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_SerialNumbersImpl__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the InventoryTransfersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var InventoryTransfers = (function () {
    function InventoryTransfers(http, api) {
        this.http = http;
        this.api = api;
        this.controller = "InventoryTranfer";
    }
    InventoryTransfers.prototype.getItem = function (barcode) {
        return this.api.getDataSet(this.controller, 'GetItemByBarcode', [{ name: 'barcode', value: barcode }]);
    };
    InventoryTransfers.prototype.GetWhs = function (binCode) {
        return this.api.getDataTable(this.controller, 'GetWhsByBin', [{ name: 'binCode', value: binCode }]);
    };
    InventoryTransfers.prototype.doTransfer = function (data, binCode) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.createDoc(data, binCode).then(function (doc) {
                _this.api.post('InventoryTranfer', 'SaveDoc', doc)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data)
                        ,
                            function (err) {
                                console.log(err);
                                resolve(err);
                            };
                });
            });
        });
    };
    InventoryTransfers.prototype.createDoc = function (data, binCode) {
        var _this = this;
        return new Promise(function (resolve) {
            var toBinId = -1;
            var toWhs = '';
            //lấy thông tin kho từ bin
            _this.GetWhs(binCode).then(function (whs) {
                if (whs) {
                    toWhs = whs[0]['WhsCode'];
                    toBinId = whs[0]['AbsEntry'];
                }
                var doc = new __WEBPACK_IMPORTED_MODULE_3__models_InventoryTranferImpl__["a" /* InventoryTranferImpl */]();
                doc.DocEntry = 0;
                doc.DocDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
                doc.TaxDate = doc.DocDate;
                doc.DocDueDate = doc.DocDate;
                doc.ToWhsCode = toWhs;
                doc.Lines = new Array();
                doc.BinAllocations = new Array();
                data.forEach(function (row) {
                    var line = new __WEBPACK_IMPORTED_MODULE_4__models_InventoryTranfer_LineImpl__["a" /* InventoryTranfer_LineImpl */]();
                    line.LineNum = data.indexOf(row);
                    line.ItemCode = row['ItemCode'];
                    line.FromWhsCod = row['WhsCode'];
                    doc.Filler = line.FromWhsCod;
                    line.WhsCode = doc.ToWhsCode;
                    line.Quantity = row['Quantity'];
                    var type = row['ObjType'];
                    if (type == '10000044') {
                        line.BatchNumbers = new Array();
                        var batchNo = row['DistNumber'];
                        if (batchNo) {
                            var batch = new __WEBPACK_IMPORTED_MODULE_6__models_BatchNumbersImpl__["a" /* BatchNumbersImpl */]();
                            batch.BatchNumber = batchNo;
                            batch.BaseLineNumber = line.LineNum;
                            batch.Quantity = line.Quantity;
                            line.BatchNumbers.push(batch);
                        }
                    }
                    else if (type == '10000045') {
                        line.SerialNumbers = new Array();
                        var seriNo = row['DistNumber'];
                        if (seriNo) {
                            var serial = new __WEBPACK_IMPORTED_MODULE_7__models_SerialNumbersImpl__["a" /* SerialNumbersImpl */]();
                            serial.BatchID = seriNo;
                            serial.SystemSerialNumber = row['SysNumber'];
                            serial.BaseLineNumber = line.LineNum;
                            serial.Quantity = line.Quantity;
                            line.SerialNumbers.push(serial);
                        }
                    }
                    doc.Lines.push(line);
                    // add bin
                    var bin = new __WEBPACK_IMPORTED_MODULE_5__models_StockTransferLinesBinAllocationsImpl__["b" /* StockTransferLinesBinAllocationsImpl */]();
                    bin.BinAbsEntry = row['BinAbs'];
                    bin.BaseLineNumber = line.LineNum;
                    bin.BinActionType = __WEBPACK_IMPORTED_MODULE_5__models_StockTransferLinesBinAllocationsImpl__["a" /* BinActionTypeEnum */].batFromWarehouse;
                    bin.Quantity = line.Quantity;
                    bin.SerialAndBatchNumbersBaseLine = 0;
                    if (bin.BinAbsEntry > 0) {
                        doc.BinAllocations.push(bin);
                    }
                    var binTo = new __WEBPACK_IMPORTED_MODULE_5__models_StockTransferLinesBinAllocationsImpl__["b" /* StockTransferLinesBinAllocationsImpl */]();
                    binTo.BinAbsEntry = toBinId;
                    binTo.BaseLineNumber = line.LineNum;
                    binTo.BinActionType = __WEBPACK_IMPORTED_MODULE_5__models_StockTransferLinesBinAllocationsImpl__["a" /* BinActionTypeEnum */].batToWarehouse;
                    binTo.Quantity = line.Quantity;
                    binTo.SerialAndBatchNumbersBaseLine = 0;
                    if (binTo.BinAbsEntry > 0)
                        doc.BinAllocations.push(binTo);
                });
                resolve(doc); // return document transfer
            });
        });
    };
    return InventoryTransfers;
}());
InventoryTransfers = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */]])
], InventoryTransfers);

//# sourceMappingURL=inventory-transfers.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryTranferImpl; });
var InventoryTranferImpl = (function () {
    function InventoryTranferImpl() {
    }
    return InventoryTranferImpl;
}());

//# sourceMappingURL=InventoryTranferImpl.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryTranfer_LineImpl; });
var InventoryTranfer_LineImpl = (function () {
    function InventoryTranfer_LineImpl() {
    }
    return InventoryTranfer_LineImpl;
}());

//# sourceMappingURL=InventoryTranfer_LineImpl.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StockTransferLinesBinAllocationsImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinActionTypeEnum; });
var StockTransferLinesBinAllocationsImpl = (function () {
    function StockTransferLinesBinAllocationsImpl() {
    }
    return StockTransferLinesBinAllocationsImpl;
}());

var BinActionTypeEnum;
(function (BinActionTypeEnum) {
    BinActionTypeEnum[BinActionTypeEnum["batToWarehouse"] = 1] = "batToWarehouse";
    BinActionTypeEnum[BinActionTypeEnum["batFromWarehouse"] = 2] = "batFromWarehouse";
})(BinActionTypeEnum || (BinActionTypeEnum = {}));
//# sourceMappingURL=StockTransferLinesBinAllocationsImpl.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchNumbersImpl; });
var BatchNumbersImpl = (function () {
    function BatchNumbersImpl() {
    }
    return BatchNumbersImpl;
}());

//# sourceMappingURL=BatchNumbersImpl.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialNumbersImpl; });
var SerialNumbersImpl = (function () {
    function SerialNumbersImpl() {
    }
    return SerialNumbersImpl;
}());

//# sourceMappingURL=SerialNumbersImpl.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickedConfirm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_client_http_client__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_InventoryTranferImpl__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_InventoryTranfer_LineImpl__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_StockTransferLinesBinAllocationsImpl__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_BatchNumbersImpl__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_SerialNumbersImpl__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











/*
  Generated class for the InventoryTransfersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PickedConfirm = (function () {
    function PickedConfirm(http, api, httpClient) {
        this.http = http;
        this.api = api;
        this.httpClient = httpClient;
        this.controller = 'Picking';
    }
    PickedConfirm.prototype.LoadBatchLine = function (docEntry, lineNum) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.Picking.LoadBatchLine(docEntry, lineNum)];
                    case 1: 
                    //return await this.api.getAsyncDataSet(this.controller, 'LoadBatchLine', [{ name: 'docEntry', value: docEntry }, { name: 'lineNum', value: lineNum }]);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PickedConfirm.prototype.getItem = function (barcode) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.api.get('InventoryTranfer', 'GetItemByBarcode', [{ name: 'barcode', value: barcode }])
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.structure = _this.api.ApzJsonDeserialize(data.Table);
                _this.data = _this.api.ApzJsonDeserialize(data.Table1);
                resolve([_this.structure, _this.data])
                    ,
                        function (err) {
                            console.log(err);
                            throw (err);
                        };
            });
        });
    };
    PickedConfirm.prototype.GetWhs = function (binCode) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.api.get('InventoryTranfer', 'GetWhsByBin', [{ name: 'binCode', value: binCode }])
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(_this.api.ApzJsonDeserialize(data))
                    ,
                        function (err) {
                            console.log(err);
                            throw (err);
                        };
            });
        });
    };
    PickedConfirm.prototype.doTransfer = function (data, binCode) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.createDoc(data, binCode).then(function (doc) {
                _this.api.post('InventoryTranfer', 'SaveDoc', doc)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data)
                        ,
                            function (err) {
                                console.log(err);
                                resolve(err);
                            };
                });
            });
        });
    };
    PickedConfirm.prototype.createDoc = function (data, binCode) {
        var _this = this;
        return new Promise(function (resolve) {
            var toBinId = -1;
            var toWhs = '';
            //lấy thông tin kho từ bin
            _this.GetWhs(binCode).then(function (whs) {
                if (whs) {
                    toWhs = whs[0]['WhsCode'];
                    toBinId = whs[0]['AbsEntry'];
                }
                var doc = new __WEBPACK_IMPORTED_MODULE_4__models_InventoryTranferImpl__["a" /* InventoryTranferImpl */]();
                doc.DocEntry = 0;
                doc.DocDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
                doc.TaxDate = doc.DocDate;
                doc.DocDueDate = doc.DocDate;
                doc.ToWhsCode = toWhs;
                doc.Lines = new Array();
                doc.BinAllocations = new Array();
                data.forEach(function (row) {
                    var line = new __WEBPACK_IMPORTED_MODULE_5__models_InventoryTranfer_LineImpl__["a" /* InventoryTranfer_LineImpl */]();
                    line.LineNum = data.indexOf(row);
                    line.ItemCode = row['ItemCode'];
                    line.FromWhsCod = row['WhsCode'];
                    doc.Filler = line.FromWhsCod;
                    line.WhsCode = doc.ToWhsCode;
                    line.Quantity = row['Quantity'];
                    var type = row['ObjType'];
                    if (type == '10000044') {
                        line.BatchNumbers = new Array();
                        var batchNo = row['DistNumber'];
                        if (batchNo) {
                            var batch = new __WEBPACK_IMPORTED_MODULE_7__models_BatchNumbersImpl__["a" /* BatchNumbersImpl */]();
                            batch.BatchNumber = batchNo;
                            batch.BaseLineNumber = line.LineNum;
                            batch.Quantity = line.Quantity;
                            line.BatchNumbers.push(batch);
                        }
                    }
                    else if (type == '10000045') {
                        line.SerialNumbers = new Array();
                        var seriNo = row['DistNumber'];
                        if (seriNo) {
                            var serial = new __WEBPACK_IMPORTED_MODULE_8__models_SerialNumbersImpl__["a" /* SerialNumbersImpl */]();
                            serial.BatchID = seriNo;
                            serial.SystemSerialNumber = row['SysNumber'];
                            serial.BaseLineNumber = line.LineNum;
                            serial.Quantity = line.Quantity;
                            line.SerialNumbers.push(serial);
                        }
                    }
                    doc.Lines.push(line);
                    // add bin
                    var bin = new __WEBPACK_IMPORTED_MODULE_6__models_StockTransferLinesBinAllocationsImpl__["b" /* StockTransferLinesBinAllocationsImpl */]();
                    bin.BinAbsEntry = row['BinAbs'];
                    bin.BaseLineNumber = line.LineNum;
                    bin.BinActionType = __WEBPACK_IMPORTED_MODULE_6__models_StockTransferLinesBinAllocationsImpl__["a" /* BinActionTypeEnum */].batFromWarehouse;
                    bin.Quantity = line.Quantity;
                    bin.SerialAndBatchNumbersBaseLine = 0;
                    if (bin.BinAbsEntry > 0) {
                        doc.BinAllocations.push(bin);
                    }
                    var binTo = new __WEBPACK_IMPORTED_MODULE_6__models_StockTransferLinesBinAllocationsImpl__["b" /* StockTransferLinesBinAllocationsImpl */]();
                    binTo.BinAbsEntry = toBinId;
                    binTo.BaseLineNumber = line.LineNum;
                    binTo.BinActionType = __WEBPACK_IMPORTED_MODULE_6__models_StockTransferLinesBinAllocationsImpl__["a" /* BinActionTypeEnum */].batToWarehouse;
                    binTo.Quantity = line.Quantity;
                    binTo.SerialAndBatchNumbersBaseLine = 0;
                    if (binTo.BinAbsEntry > 0)
                        doc.BinAllocations.push(binTo);
                });
                resolve(doc); // return document transfer
            });
        });
    };
    return PickedConfirm;
}());
PickedConfirm = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_0__http_client_http_client__["a" /* HttpClient */]])
], PickedConfirm);

//# sourceMappingURL=picked-confirm.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SortPopoverPage = (function () {
    function SortPopoverPage(viewCtrl, navCtrl, appCtrl, common, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.common = common;
        this.navParams = navParams;
    }
    SortPopoverPage.prototype.ngOnInit = function () {
        this.dtTask = this.navParams.data.dtTask;
    };
    SortPopoverPage.prototype.sort = function (type) {
        var _this = this;
        if (!this.dtTask)
            return;
        switch (type) {
            case 'none':
                this.dtTask = this.dtTask.sort(function (a, b) { return b.ClgCode - a.ClgCode; });
            case 'duedate':
                this.dtTask = this.dtTask.sort(function (a, b) { return _this.common.addTimeToDate(a.endDate, a.ENDTime) - _this.common.addTimeToDate(b.endDate, b.ENDTime); });
        }
        this.viewCtrl.dismiss();
        //this.navCtrl.setRoot(TaskManagementPage);
        // this.navCtrl.push(TaskListPage, { taskStatus: "Y" }, navOptions);
    };
    return SortPopoverPage;
}());
SortPopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n      <ion-list>\n      <ion-list-header>Sort by</ion-list-header>\n      <button ion-item (click)=\"sort('none')\">(None)</button>\n        <button ion-item (click)=\"sort('duedate')\">Due Date</button>\n      </ion-list>\n    "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__providers_common__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], SortPopoverPage);

//# sourceMappingURL=sort-popover.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_management_task_management__ = __webpack_require__(297);


// The page the user lands on after opening the app and without a session
var FirstRunPage = __WEBPACK_IMPORTED_MODULE_0__login_login__["b" /* LoginPage */];
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = __WEBPACK_IMPORTED_MODULE_1__task_management_task_management__["a" /* TaskManagementPage */];
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HubHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_signalr_no_jquery__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_signalr_no_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_signalr_no_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HubHelper = (function () {
    function HubHelper() {
        this.hubConnection = __WEBPACK_IMPORTED_MODULE_0_signalr_no_jquery__["hubConnection"];
    }
    HubHelper.prototype.addEvent = function (eventName, method) {
        this.hubEvent = eventName;
        this.clientCallback = method;
        // if(this.hubProxy){     
        // this.hubProxy.on(this.hubEvent, this.clientCallback);
        // }
    };
    HubHelper.prototype.start = function () {
        this.connection = Object(__WEBPACK_IMPORTED_MODULE_0_signalr_no_jquery__["hubConnection"])(this.domain, { useDefaultPath: false });
        //this.taskHub=this.connection.createHubProxy('notificationHub');
        this.hubProxy = this.connection.createHubProxy(this.hubName);
        // this.taskHub.on("UpdateNotification", (content) => {console.log(content.Detail);});
        this.hubProxy.on(this.hubEvent, this.clientCallback);
        // this.taskHub.on("broadcastMessage", (content,name) => {console.log(content);});
        return this.connection.start();
    };
    return HubHelper;
}());
HubHelper = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], HubHelper);

//# sourceMappingURL=hub-helper.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http) {
        this.http = http;
    }
    Api.prototype.get = function (controller, endpoint, params, options) {
        if (!options) {
            options = this.creatOption();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            for (var k in params) {
                p.set(params[k].name, params[k].value);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return this.http.get(this.url + '/' + controller + '/' + endpoint, options);
    };
    Api.prototype.getDataSet = function (controller, action, params, options) {
        var _this = this;
        if (!options) {
            options = this.creatOption();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            for (var k in params) {
                p.set(params[k].name, params[k].value);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/' + controller + '/' + action, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var dataSet;
                for (var property in data) {
                    if (data.hasOwnProperty(property)) {
                        var table = _this.ApzJsonDeserialize(data[property]);
                        if (dataSet == null)
                            dataSet = [table];
                        else
                            dataSet.push(table);
                    }
                }
                resolve(dataSet);
                (function (Error) {
                    console.log(Error);
                });
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    Api.prototype.getDataTable = function (controller, action, params, options) {
        var _this = this;
        if (!options) {
            options = this.creatOption();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            for (var k in params) {
                p.set(params[k].name, params[k].value);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/' + controller + '/' + action, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var dataTable;
                dataTable = _this.ApzJsonDeserialize(data);
                resolve(dataTable);
                (function (Error) {
                    console.log(Error);
                });
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    //#region Luannt
    Api.prototype.getAsyncDataSet = function (controller, action, params, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var p, k;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!options) {
                            options = this.creatOption();
                        }
                        // Support easy query params for GET requests
                        if (params) {
                            p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                            for (k in params) {
                                p.set(params[k].name, params[k].value);
                            }
                            // Set the search field if we have params and don't already have
                            // a search field set in options.
                            options.search = !options.search && p || options.search;
                        }
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.http.get(_this.url + '/' + controller + '/' + action, options)
                                    .map(function (res) { return res.json(); })
                                    .subscribe(function (data) {
                                    var dataSet;
                                    for (var property in data) {
                                        if (data.hasOwnProperty(property)) {
                                            var table = _this.ApzJsonDeserialize(data[property]);
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
                                    (function (Error) {
                                        console.log(Error);
                                    });
                                });
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Api.prototype.postAsyncDataTable = function (controller, endpoint, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!options) {
                            options = this.creatOption();
                        }
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.http.post(_this.url + '/' + controller + '/' + endpoint, body, options)
                                    .map(function (res) { return res.json(); })
                                    .subscribe(function (data) {
                                    var dataTable;
                                    dataTable = _this.ApzJsonDeserialize(data);
                                    resolve(dataTable);
                                    (function (Error) {
                                        console.log(Error);
                                    });
                                });
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    Api.prototype.post = function (controller, endpoint, body, options) {
        if (!options) {
            options = this.creatOption();
        }
        return this.http.post(this.url + '/' + controller + '/' + endpoint, body, options);
    };
    Api.prototype.put = function (controller, endpoint, body, options) {
        if (!options) {
            options = this.creatOption();
        }
        return this.http.put(this.url + '/' + controller + '/' + endpoint, body, options);
    };
    Api.prototype.delete = function (controller, endpoint, options) {
        if (!options) {
            options = this.creatOption();
        }
        return this.http.delete(this.url + '/' + controller + '/' + endpoint, options);
    };
    Api.prototype.creatOption = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        header.append('SessionId', this._sessionId);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: header,
        });
    };
    Api.prototype.ApzJsonDeserialize = function (data) {
        try {
            if (null == data || !data.hasOwnProperty('Apz-Columns'))
                return data;
            var table;
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
        }
        catch (error) {
            throw (error);
        }
    };
    return Api;
}());
Api = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], Api);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(857);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_report_complete_report_complete__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inventory_transfer_inventory_transfer__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bin_confirm_bin_confirm__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_picked_confirm_picked_confirm__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_event_management_event_management__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_api__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_settings__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_login__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_inventory_report_complete__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_common__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_inventory_inventory_transfers__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_inventory_picked_confirm__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_event_event__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__http_client_http_client__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__http_client_http_helper__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__http_client_picking_client__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_barcode_scanner__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ngx_translate_core__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ngx_translate_http_loader__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_task_task__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_task_management_task_management__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_task_detail_task_detail__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_devextreme_angular__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_devextreme_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__http_client_common_client__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__directives_autosize_autosize__ = __webpack_require__(1345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_project_project__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_task_management_more_popover__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_task_list_task_list__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_cfl_cfl__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_comment_comment__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_task_view_task_view__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_task_management_sort_popover__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ionic2_calendar__ = __webpack_require__(1346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_event_detail_event_detail__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_calendar_calendar__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_29__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_14__providers_settings__["a" /* Settings */](storage, {
        apiAdress: 'http://172.16.8.52:8000/api',
        domain: 'apzon',
        company: 'IRS_DEV',
        userName: 'manager',
        barcodeInternal: true,
        defaultPage: 'ReportCompletePage'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["b" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_report_complete_report_complete__["a" /* ReportCompletePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_inventory_transfer_inventory_transfer__["a" /* InventoryTransferPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_bin_confirm_bin_confirm__["a" /* BinConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_picked_confirm_picked_confirm__["a" /* PickedConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_event_management_event_management__["b" /* EventManagementPage1 */],
            __WEBPACK_IMPORTED_MODULE_44__pages_event_detail_event_detail__["a" /* EventDetailPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_task_management_task_management__["a" /* TaskManagementPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_task_detail_task_detail__["a" /* TaskDetailPage */],
            __WEBPACK_IMPORTED_MODULE_35__directives_autosize_autosize__["a" /* AutosizeDirective */],
            __WEBPACK_IMPORTED_MODULE_37__pages_task_management_more_popover__["a" /* MorePopoverPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_task_list_task_list__["a" /* TaskListPage */],
            __WEBPACK_IMPORTED_MODULE_41__components_task_view_task_view__["a" /* TaskViewComponent */],
            __WEBPACK_IMPORTED_MODULE_42__pages_task_management_sort_popover__["a" /* SortPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_event_detail_event_detail__["b" /* RecurrencePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_event_management_event_management__["a" /* CalendarPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_33_devextreme_angular__["DevExtremeModule"],
            __WEBPACK_IMPORTED_MODULE_43_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_28__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_28__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/task-list/task-list.module#TaskListPageModule', name: 'TaskListPage', segment: 'task-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/task-management/task-management.module#TaskManagementPageModule', name: 'TaskManagementPage', segment: 'task-management', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/task-detail/task-detail.module#TaskDetailPageModule', name: 'TaskDetailPage', segment: 'task-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bin-confirm/bin-confirm.module#BinConfirmPageModule', name: 'BinConfirmPage', segment: 'bin-confirm', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inventory-transfer/inventory-transfer.module#InventoryTransferPageModule', name: 'InventoryTransferPage', segment: 'inventory-transfer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/picked-confirm/picked-confirm.module#PickedConfirmPageModule', name: 'PickedConfirmPage', segment: 'picked-confirm', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/report-complete/report-complete.module#ReportCompletePageModule', name: 'ReportCompletePage', segment: 'report-complete', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-detail/event-detail.module#EventDetailPageModule', name: 'EventDetailPage', segment: 'event-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-management/event-management.module#EventManagementPageModule', name: 'EventManagementPage1', segment: 'event-management', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_33_devextreme_angular__["DevExtremeModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["b" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_report_complete_report_complete__["a" /* ReportCompletePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_inventory_transfer_inventory_transfer__["a" /* InventoryTransferPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_bin_confirm_bin_confirm__["a" /* BinConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_picked_confirm_picked_confirm__["a" /* PickedConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_event_management_event_management__["b" /* EventManagementPage1 */],
            __WEBPACK_IMPORTED_MODULE_31__pages_task_management_task_management__["a" /* TaskManagementPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_task_detail_task_detail__["a" /* TaskDetailPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_event_detail_event_detail__["a" /* EventDetailPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_task_management_more_popover__["a" /* MorePopoverPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_task_list_task_list__["a" /* TaskListPage */],
            __WEBPACK_IMPORTED_MODULE_41__components_task_view_task_view__["a" /* TaskViewComponent */],
            __WEBPACK_IMPORTED_MODULE_42__pages_task_management_sort_popover__["a" /* SortPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_event_detail_event_detail__["b" /* RecurrencePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_event_management_event_management__["a" /* CalendarPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_15__providers_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_16__providers_inventory_report_complete__["a" /* ReportComplete */],
            __WEBPACK_IMPORTED_MODULE_18__providers_inventory_inventory_transfers__["a" /* InventoryTransfers */],
            __WEBPACK_IMPORTED_MODULE_17__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__providers_inventory_picked_confirm__["a" /* PickedConfirm */],
            __WEBPACK_IMPORTED_MODULE_21__http_client_http_client__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_23__http_client_picking_client__["a" /* PickingClient */],
            __WEBPACK_IMPORTED_MODULE_22__http_client_http_helper__["a" /* HttpClientHelper */],
            __WEBPACK_IMPORTED_MODULE_20__providers_event_event__["a" /* EventProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_14__providers_settings__["a" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_30__providers_task_task__["a" /* TaskProvider */],
            __WEBPACK_IMPORTED_MODULE_34__http_client_common_client__["a" /* CommonsClient */],
            __WEBPACK_IMPORTED_MODULE_36__providers_project_project__["a" /* ProjectProvider */],
            __WEBPACK_IMPORTED_MODULE_39__providers_cfl_cfl__["a" /* CflProvider */],
            __WEBPACK_IMPORTED_MODULE_40__providers_comment_comment__["a" /* CommentProvider */],
            __WEBPACK_IMPORTED_MODULE_45__providers_calendar_calendar__["a" /* CalendarProvider */]
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApzRSACryptoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ApzBigInt__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ApzSystem__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ApzConverter__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ApzCryto__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enums_RsaEnum__ = __webpack_require__(240);





var ApzRSACryptoServiceProvider = (function () {
    function ApzRSACryptoServiceProvider(rsaKeySize) {
        this.KeySize = 512;
        this.BlockSize = 512;
        this.FeedbackSize = 512;
        this.IV = [];
        this.HashSize = 20 * 8;
        this.rsaParams = null;
        this.rsaParamsBi = null;
        this.bi = new __WEBPACK_IMPORTED_MODULE_0__ApzBigInt__["a" /* ApzBigIntUnit */]();
        this.KeySize = rsaKeySize;
        this.BlockSize = this.KeySize;
        this.FeedbackSize = this.KeySize;
    }
    ;
    ApzRSACryptoServiceProvider.prototype.GetKeyPair = function () {
        if (this.rsaParams === null)
            this.rsaParams = this.NewKeyPair(true);
        return this.rsaParams;
    };
    ApzRSACryptoServiceProvider.prototype.NewKeyPair = function (truePrime) {
        var p; // p / Primary 1
        var q; // q / Primary 2
        var n; // n / Modulus.
        var d; // d / D / secret exponent / decryption exponent.
        var e = this.bi.FromString("10001", 16, 0); // e / Exponent / public exponent / encryption exponent.
        var pLen = this.KeySize + 1 >> 1;
        var qLen = this.KeySize - pLen;
        for (;;) {
            p = truePrime ? this.bi.NewPrime(pLen) : this.bi.NewProbPrime(pLen);
            if (!this.bi.EqualsInt(this.bi.Mod(p, e), 1))
                break;
        }
        for (;;) {
            for (;;) {
                q = truePrime ? this.bi.NewPrime(qLen) : this.bi.NewProbPrime(qLen);
                if (!this.bi.Equals(p, q) && !this.bi.EqualsInt(this.bi.Mod(q, e), 1))
                    break;
            }
            n = this.bi.Multiply(p, q);
            if (this.bi.BitCount(n) === this.KeySize)
                break;
            if (this.bi.MoreThan(q, p))
                p = q;
        }
        if (this.bi.MoreThan(q, p)) {
            var t = p;
            p = q;
            q = t;
        }
        var p1 = this.bi.AddInt(p, -1);
        var q1 = this.bi.AddInt(q, -1);
        var phi = this.bi.Multiply(p1, q1);
        d = this.bi.InverseMod(e, phi);
        var qInv = this.bi.InverseMod(q, p);
        var dP = this.bi.InverseMod(e, p1);
        var dQ = this.bi.InverseMod(e, q1);
        var parameters = new ApzRSAParameters();
        parameters.Exponent = this.bi.ToBytes(e);
        parameters.Modulus = this.bi.ToBytes(n);
        parameters.D = this.bi.ToBytes(d);
        parameters.P = this.bi.ToBytes(p);
        parameters.Q = this.bi.ToBytes(q);
        parameters.DP = this.bi.ToBytes(dP);
        parameters.DQ = this.bi.ToBytes(dQ);
        parameters.InverseQ = this.bi.ToBytes(qInv);
        __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](parameters.Exponent, 0, 0);
        __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](parameters.Modulus, 0, 0);
        __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](parameters.D, 0, 0);
        __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](parameters.P, 0, 0);
        __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](parameters.Q, 0, 0);
        __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](parameters.DP, 0, 0);
        __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](parameters.DQ, 0, 0);
        __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](parameters.InverseQ, 0, 0);
        return parameters;
    };
    ApzRSACryptoServiceProvider.prototype.getXmlValue = function (xmlString, tag) {
        var rx = new RegExp("<" + tag + ">(.*?)</" + tag + ">", "gi");
        var tagMatch = xmlString.match(rx);
        if (!tagMatch)
            return null;
        var base64 = tagMatch[0].replace(rx, "$1");
        var bytes = __WEBPACK_IMPORTED_MODULE_2__ApzConverter__["a" /* FromBase64String */](base64, false);
        return bytes;
    };
    ApzRSACryptoServiceProvider.prototype.ImportParameters = function (parameters) {
        this.rsaParams = parameters.Clone(true);
        this.rsaParamsBi = null;
        this.KeySize = this.rsaParams.Modulus.length * 8;
        this.BlockSize = this.KeySize;
        this.FeedbackSize = this.KeySize;
    };
    ;
    ApzRSACryptoServiceProvider.prototype.ExportParameters = function (isEncrypt) {
        var key = this.GetKeyPair();
        return key.Clone(!isEncrypt);
    };
    ;
    ApzRSACryptoServiceProvider.prototype.FromXmlString = function (xmlString, isEncryt) {
        var parameters = new ApzRSAParameters();
        var tagSpace = new RegExp("\\s", "gi");
        xmlString = xmlString.replace(tagSpace, "");
        parameters.Exponent = this.getXmlValue(xmlString, "Exponent");
        parameters.Modulus = this.getXmlValue(xmlString, "Modulus");
        if (!isEncryt) {
            parameters.D = this.getXmlValue(xmlString, "D");
            parameters.DP = this.getXmlValue(xmlString, "DP");
            parameters.DQ = this.getXmlValue(xmlString, "DQ");
            parameters.InverseQ = this.getXmlValue(xmlString, "InverseQ");
            parameters.P = this.getXmlValue(xmlString, "P");
            parameters.Q = this.getXmlValue(xmlString, "Q");
        }
        this.ImportParameters(parameters);
    };
    ;
    ApzRSACryptoServiceProvider.prototype.Padding = function (input, fOAEP, encrypt) {
        var crypto = new __WEBPACK_IMPORTED_MODULE_3__ApzCryto__["a" /* ICryptoTransform */](this, true);
        var output = encrypt
            ? (crypto._Padding(input, 0, input.length))[__WEBPACK_IMPORTED_MODULE_4__Enums_RsaEnum__["a" /* RsaPaddingObj */].iBuffer]
            : crypto._PaddingRemove(input, 0, input.length);
        return output;
    };
    ApzRSACryptoServiceProvider.prototype.RsaEncryptBlock = function (block, key) {
        var mBytes = block;
        __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](mBytes, 0, mBytes.length);
        var e = this.bi.FromBytes(key.Exponent);
        var n = this.bi.FromBytes(key.Modulus);
        var m = this.bi.FromBytes(mBytes);
        // Encrypt: c = m^e mod n
        var c = this.bi.PowMod(m, e, n);
        var cBytes = this.bi.ToBytes(c);
        // Expand to block size with empty bytes.
        var bpb = this.KeySize / 8; // bytes per block
        for (var i = cBytes.length; i < bpb; i++)
            cBytes.push(0x00);
        __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](cBytes, 0, cBytes.length);
        return cBytes;
    };
    ApzRSACryptoServiceProvider.prototype.EncryptBytes = function (key, input, fOAEP) {
        var bpb = this.KeySize / 8 - (fOAEP ? 41 : 11); // bytes per block
        var output = []; // plaintext array
        var block; // current block number
        for (var b = 0; b < input.length / bpb; b++) {
            block = input.slice(b * bpb, (b + 1) * bpb);
            // Reverse bytes for compatibility with RSACryptoServiceProvider.
            __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](block, 0, 0);
            // Add padding.
            var padded = this.Padding(block, fOAEP, true);
            // RSA Encrypt.
            var cBytes = this.RsaEncryptBlock(padded, key);
            // Add result to output.
            output = output.concat(cBytes);
        }
        return output;
    };
    ApzRSACryptoServiceProvider.prototype.Encrypt = function (rgb, fOAEP) {
        var key = this.GetKeyPair();
        return this.EncryptBytes(key, rgb, fOAEP);
    };
    ;
    ApzRSACryptoServiceProvider.prototype.Decrypt = function (rgb, fOAEP) {
        var key = this.GetKeyPair();
        return this.DecryptBytes(key, rgb, fOAEP);
    };
    ;
    ApzRSACryptoServiceProvider.prototype.RsaDecryptBlock = function (block, key) {
        var c = this.bi.FromBytes(block);
        var dP = this.bi.FromBytes(key.DP);
        var dQ = this.bi.FromBytes(key.DQ);
        var qInv = this.bi.FromBytes(key.InverseQ);
        var p = this.bi.FromBytes(key.P);
        var q = this.bi.FromBytes(key.Q);
        var m1 = this.bi.PowMod(c, dP, p);
        var m2 = this.bi.PowMod(c, dQ, q);
        var h = this.bi.MultiplyMod(qInv, this.bi.Subtract(this.bi.Add(m1, p), m2), p);
        var m = this.bi.Add(m2, this.bi.Multiply(h, q));
        var mBytes = this.bi.ToBytes(m);
        var bpb = this.KeySize / 8;
        for (var i = mBytes.length; i < bpb; i++)
            mBytes.push(0x00);
        return mBytes;
    };
    ApzRSACryptoServiceProvider.prototype.DecryptBytes = function (key, input, fOAEP) {
        var bpb = this.KeySize / 8;
        var output = [];
        for (var b = 0; b < input.length / bpb; b++) {
            var block = input.slice(b * bpb, (b + 1) * bpb);
            block = this.RsaDecryptBlock(block, key);
            var unpadded = this.Padding(block, fOAEP, false);
            __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["e" /* ArrayReverse */](unpadded, 0, unpadded.length);
            output = output.concat(unpadded);
        }
        return output;
    };
    return ApzRSACryptoServiceProvider;
}());

;
var ApzRSAParameters = (function () {
    function ApzRSAParameters() {
        this.Exponent = [];
        this.Modulus = [];
        this.D = [];
        this.DP = [];
        this.DQ = [];
        this.InverseQ = [];
        this.P = [];
        this.Q = [];
        this.Clone = function (includePrivateParameters) {
            var parameters = new ApzRSAParameters();
            __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["d" /* ArrayCopy1 */](this.Exponent, parameters.Exponent, this.Exponent.length);
            __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["d" /* ArrayCopy1 */](this.Modulus, parameters.Modulus, this.Modulus.length);
            if (includePrivateParameters) {
                if (this.D)
                    __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["d" /* ArrayCopy1 */](this.D, parameters.D, this.D.length);
                if (this.DP)
                    __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["d" /* ArrayCopy1 */](this.DP, parameters.DP, this.DP.length);
                if (this.DQ)
                    __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["d" /* ArrayCopy1 */](this.DQ, parameters.DQ, this.DQ.length);
                if (this.InverseQ)
                    __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["d" /* ArrayCopy1 */](this.InverseQ, parameters.InverseQ, this.InverseQ.length);
                if (this.P)
                    __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["d" /* ArrayCopy1 */](this.P, parameters.P, this.P.length);
                if (this.Q)
                    __WEBPACK_IMPORTED_MODULE_1__ApzSystem__["d" /* ArrayCopy1 */](this.Q, parameters.Q, this.Q.length);
            }
            return parameters;
        };
    }
    return ApzRSAParameters;
}());
;
//# sourceMappingURL=ApzRSACryptoServiceProvider.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApzBigIntUnit; });
var ApzBigIntUnit = (function () {
    function ApzBigIntUnit() {
        //globals
        this.bpe = 0; //bits stored per array element
        this.mask = 0; //AND this with an array element to chop it down to bpe bits
        this.radix = 0;
        this.digitsStr = "";
        this.one = [];
        this.t = new Array(0);
        this.ss = this.t; //used in mult_()
        this.s0 = this.t; //used in multMod_(), squareMod_() 
        this.s1 = this.t; //used in powMod_(), multMod_(), squareMod_() 
        this.s2 = this.t; //used in powMod_(), multMod_()
        this.s3 = this.t; //used in powMod_()
        this.s4 = this.t;
        this.s5 = this.t; //used in mod_()
        this.s6 = this.t; //used in bigInt2str()
        this.s7 = this.t; //used in powMod_()
        this.T = this.t; //used in GCD_()
        this.sa = this.t; //used in mont_()
        this.mr_x1 = this.t;
        this.mr_r = this.t;
        this.mr_a = this.t; //used in millerRabin()
        this.eg_v = this.t;
        this.eg_u = this.t;
        this.eg_A = this.t;
        this.eg_B = this.t;
        this.eg_C = this.t;
        this.eg_D = this.t; //used in eGCD_(), inverseMod_()
        this.md_q1 = this.t;
        this.md_q2 = this.t;
        this.md_q3 = this.t;
        this.md_r = this.t;
        this.md_r1 = this.t;
        this.md_r2 = this.t;
        this.md_tt = this.t; //used in mod_()
        this.primes = this.t;
        this.pows = this.t;
        this.s_i = this.t;
        this.s_i2 = this.t;
        this.s_R = this.t;
        this.s_rm = this.t;
        this.s_q = this.t;
        this.s_n1 = this.t;
        this.s_a = this.t;
        this.s_r2 = this.t;
        this.s_n = this.t;
        this.s_b = this.t;
        this.s_d = this.t;
        this.s_x1 = this.t;
        this.s_x2 = this.t;
        this.s_aa = this.t; //used in randTruePrime_()
        this.rpprb = this.t; //used in randProbPrimeRounds() (which also uses "primes")
        this.radix = this.mask + 1;
        this.digitsStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\\'\"+-';
        for (this.bpe = 0; (1 << (this.bpe + 1)) > (1 << this.bpe); this.bpe++)
            ; //bpe=number of bits in the mantissa on this platform
        this.bpe >>= 1; //bpe=number of bits in one element of the array representing the bigInt
        this.mask = (1 << this.bpe) - 1; //AND the mask with an integer to get its bpe least significant bits
        this.radix = this.mask + 1; //2^bpe.  a single 1 bit to the left of the first bit of mask
        this.one = this.FromInt(1, 1, 1); //constant used in powMod_()
    }
    ApzBigIntUnit.prototype.GetPrimes = function (n) {
        var i;
        var s = new Array(n);
        for (i = 0; i < n; i++)
            s[i] = 0;
        s[0] = 2;
        var p = 0; //first p elements of s are primes, the rest are a sieve
        for (; s[p] < n;) {
            for (i = s[p] * s[p]; i < n; i += s[p])
                s[i] = 1;
            p++;
            s[p] = s[p - 1] + 1;
            for (; s[p] < n && s[s[p]]; s[p]++)
                ; //find next prime (where s[p]==0)
        }
        var ans = new Array(p);
        for (i = 0; i < p; i++)
            ans[i] = s[i];
        return ans;
    };
    ApzBigIntUnit.prototype.IsPronPrimeInt = function (x, b) {
        if (this.mr_x1.length != x.length) {
            this.mr_x1 = this.Clone(x);
            this.mr_r = this.Clone(x);
            this.mr_a = this.Clone(x);
        }
        this.CloneInt_(this.mr_a, b);
        return this.IsProbPrime(x, this.mr_a);
    };
    ApzBigIntUnit.prototype.IsProbPrime = function (x, b) {
        var i, j, k, s;
        if (this.mr_x1.length != x.length) {
            this.mr_x1 = this.Clone(x);
            this.mr_r = this.Clone(x);
            this.mr_a = this.Clone(x);
        }
        this.Clone_(this.mr_a, b);
        this.Clone_(this.mr_r, x);
        this.Clone_(this.mr_x1, x);
        this.AddInt_(this.mr_r, -1);
        this.AddInt_(this.mr_x1, -1);
        //s=the highest power of two that divides mr_r
        k = 0;
        for (i = 0; i < this.mr_r.length; i++)
            for (j = 1; j < this.mask; j <<= 1)
                if (x[i] & j) {
                    s = (k < this.mr_r.length + this.bpe ? k : 0);
                    i = this.mr_r.length;
                    j = this.mask;
                }
                else
                    k++;
        if (s)
            this.RightShift_(this.mr_r, s);
        this.PowMod_(this.mr_a, this.mr_r, x);
        if (!this.EqualsInt(this.mr_a, 1) && !this.Equals(this.mr_a, this.mr_x1)) {
            j = 1;
            while (j <= s - 1 && !this.Equals(this.mr_a, this.mr_x1)) {
                this.SquareMod_(this.mr_a, x);
                if (this.EqualsInt(this.mr_a, 1)) {
                    return 0;
                }
                j++;
            }
            if (!this.Equals(this.mr_a, this.mr_x1)) {
                return 0;
            }
        }
        return 1;
    };
    ApzBigIntUnit.prototype.BitCount = function (x) {
        var j, z, w;
        for (j = x.length - 1; (x[j] == 0) && (j > 0); j--)
            ;
        for (z = 0, w = x[j]; w; (w >>= 1), z++)
            ;
        z += this.bpe * j;
        return z;
    };
    ApzBigIntUnit.prototype.Expand = function (x, n) {
        var ans = this.FromInt(0, (x.length > n ? x.length : n) * this.bpe, 0);
        this.Clone_(ans, x);
        return ans;
    };
    ApzBigIntUnit.prototype.NewPrime = function (k) {
        var ans = this.FromInt(0, k, 0);
        this.NewPrime_(ans, k);
        return this.Trim(ans, 1);
    };
    ApzBigIntUnit.prototype.NewProbPrime = function (k) {
        if (k >= 600)
            return this.randProbPrimeRounds(k, 2); //numbers from HAC table 4.3
        if (k >= 550)
            return this.randProbPrimeRounds(k, 4);
        if (k >= 500)
            return this.randProbPrimeRounds(k, 5);
        if (k >= 400)
            return this.randProbPrimeRounds(k, 6);
        if (k >= 350)
            return this.randProbPrimeRounds(k, 7);
        if (k >= 300)
            return this.randProbPrimeRounds(k, 9);
        if (k >= 250)
            return this.randProbPrimeRounds(k, 12); //numbers from HAC table 4.4
        if (k >= 200)
            return this.randProbPrimeRounds(k, 15);
        if (k >= 150)
            return this.randProbPrimeRounds(k, 18);
        if (k >= 100)
            return this.randProbPrimeRounds(k, 27);
        return this.randProbPrimeRounds(k, 40); //number from HAC remark 4.26 (only an estimate)
    };
    ApzBigIntUnit.prototype.randProbPrimeRounds = function (k, n) {
        var i, divisible;
        var B = 30000; //B is largest prime to use in trial division
        var ans = this.FromInt(0, k, 0);
        if (this.primes.length == 0)
            this.primes = this.GetPrimes(30000); //check for divisibility by primes <=30000
        if (this.rpprb.length != ans.length)
            this.rpprb = this.Clone(ans);
        for (;;) {
            this.NewBigInt_(ans, k, 0); //ans = a random odd number to check
            ans[0] |= 1;
            divisible = 0;
            for (i = 0; (i < this.primes.length) && (this.primes[i] <= B); i++)
                if (this.ModInt(ans, this.primes[i]) == 0 && !this.EqualsInt(ans, this.primes[i])) {
                    divisible = 1;
                    break;
                }
            for (i = 0; i < n && !divisible; i++) {
                this.NewBigInt_(this.rpprb, k, 0);
                while (!this.MoreThan(ans, this.rpprb))
                    this.NewBigInt_(this.rpprb, k, 0);
                if (!this.IsProbPrime(ans, this.rpprb))
                    divisible = 1;
            }
            if (!divisible)
                return ans;
        }
    };
    ApzBigIntUnit.prototype.Mod = function (x, n) {
        var ans = this.Clone(x);
        this.Mod_(ans, n);
        return this.Trim(ans, 1);
    };
    ApzBigIntUnit.prototype.AddInt = function (x, n) {
        var ans = this.Expand(x, x.length + 1);
        this.AddInt_(ans, n);
        return this.Trim(ans, 1);
    };
    ApzBigIntUnit.prototype.Multiply = function (x, y) {
        var ans = this.Expand(x, x.length + y.length);
        this.Multiply_(ans, y);
        return this.Trim(ans, 1);
    };
    ApzBigIntUnit.prototype.PowMod = function (x, y, n) {
        var ans = this.Expand(x, n.length);
        this.PowMod_(ans, this.Trim(y, 2), this.Trim(n, 2));
        return this.Trim(ans, 1);
    };
    ApzBigIntUnit.prototype.Subtract = function (x, y) {
        var xN = this.IsNegative(x);
        var yN = this.IsNegative(y);
        var x1 = x;
        var y1 = y;
        var z;
        // Make positive.
        if (xN)
            x1 = this.Negate(x);
        if (yN)
            y1 = this.Negate(y);
        if (xN) {
            if (yN) {
                if (this.MoreThan(x1, y1)) {
                    z = this.Subtract(x1, y1);
                    this.Negate_(z);
                    return z;
                }
                else {
                    return this.Subtract(y1, x1);
                }
            }
            else {
                z = this.Add(x1, y);
                this.Negate_(z);
                return z;
            }
        }
        else {
            if (yN) {
                return this.Add(x, y1);
            }
            else {
                if (!this.MoreThan(x1, y1)) {
                    z = this.Subtract(y1, x);
                    this.Negate_(z);
                    return z;
                }
            }
        }
        var ans = this.Expand(x, (x.length > y.length ? x.length + 1 : y.length + 1));
        this.Subtract_(ans, y);
        return this.Trim(ans, 1);
    };
    ApzBigIntUnit.prototype.Add = function (x, y) {
        var xN = this.IsNegative(x);
        var yN = this.IsNegative(y);
        var x1 = x;
        var y1 = y;
        var z;
        // Make positive.
        if (xN)
            x1 = this.Negate(x);
        if (yN)
            y1 = this.Negate(y);
        if (xN) {
            if (yN) {
                z = this.Add(x1, y1);
                this.Negate_(z);
                return z;
            }
            else {
                if (this.MoreThan(y1, x1)) {
                    return this.Subtract(y1, x1);
                }
                else {
                    z = this.Subtract(x1, y1);
                    this.Negate_(z);
                    return z;
                }
            }
        }
        else {
            if (yN) {
                if (this.MoreThan(x1, y1)) {
                    return this.Subtract(x1, y1);
                }
                else {
                    z = this.Subtract(y1, x1);
                    this.Negate_(z);
                    return z;
                }
            }
        }
        var ans = this.Expand(x, (x.length > y.length ? x.length + 1 : y.length + 1));
        this.Add_(ans, y);
        return this.Trim(ans, 1);
    };
    ApzBigIntUnit.prototype.InverseMod = function (x, n) {
        var ans = this.Expand(x, n.length);
        var s;
        s = this.InverseMod_(ans, n);
        return s ? this.Trim(ans, 1) : null;
    };
    ApzBigIntUnit.prototype.MultiplyMod = function (x, y, n) {
        var ans = this.Expand(x, n.length);
        this.MultiplyMod_(ans, y, n);
        return this.Trim(ans, 1);
    };
    ApzBigIntUnit.prototype.NewPrime_ = function (ans, k) {
        var divisible, zz, recLimit, w, r, j;
        if (this.primes.length == 0)
            this.primes = this.GetPrimes(30000); //check for divisibility by primes <=30000
        if (this.pows.length == 0) {
            this.pows = new Array(512);
            for (j = 0; j < 512; j++) {
                this.pows[j] = Math.pow(2, j / 511. - 1.);
            }
        }
        var c = 0.1; //c=0.1 in HAC
        var m = 20; //generate this k-bit number by first recursively generating a number that has between k/2 and k-m bits
        recLimit = 20; //stop recursion when k <=recLimit.  Must have recLimit >= 2
        if (this.s_i2.length != ans.length) {
            this.s_i2 = this.Clone(ans);
            this.s_R = this.Clone(ans);
            this.s_n1 = this.Clone(ans);
            this.s_r2 = this.Clone(ans);
            this.s_d = this.Clone(ans);
            this.s_x1 = this.Clone(ans);
            this.s_x2 = this.Clone(ans);
            this.s_b = this.Clone(ans);
            this.s_n = this.Clone(ans);
            this.s_i = this.Clone(ans);
            this.s_rm = this.Clone(ans);
            this.s_q = this.Clone(ans);
            this.s_a = this.Clone(ans);
            this.s_aa = this.Clone(ans);
        }
        if (k <= recLimit) {
            var pm = (1 << ((k + 2) >> 1)) - 1; //pm is binary number with all ones, just over sqrt(2^k)
            this.CloneInt_(ans, 0);
            for (var dd = 1; dd;) {
                dd = 0;
                ans[0] = 1 | (1 << (k - 1)) | Math.floor(Math.random() * (1 << k)); //random, k-bit, odd integer, with msb 1
                for (j = 1; (j < this.primes.length) && ((this.primes[j] & pm) == this.primes[j]); j++) {
                    if (0 == (ans[0] % this.primes[j])) {
                        dd = 1;
                        break;
                    }
                }
            }
            this.Carry_(ans);
            return;
        }
        var B = c * k * k; //try small primes up to B (or all the primes[] array if the largest is less than B).
        if (k > 2 * m)
            for (r = 1; k - k * r <= m;)
                r = this.pows[Math.floor(Math.random() * 512)]; //r=Math.pow(2,Math.random()-1);
        else
            r = .5;
        var recSize = Math.floor(r * k) + 1;
        this.NewPrime_(this.s_q, recSize);
        this.CloneInt_(this.s_i2, 0);
        this.s_i2[Math.floor((k - 2) / this.bpe)] |= (1 << ((k - 2) % this.bpe)); //s_i2=2^(k-2)
        this.Divide_(this.s_i2, this.s_q, this.s_i, this.s_rm); //s_i=floor((2^(k-1))/(2q))
        var z = this.BitCount(this.s_i);
        for (;;) {
            for (;;) {
                this.NewBigInt_(this.s_R, z, 0);
                if (this.MoreThan(this.s_i, this.s_R))
                    break;
            } //now s_R is in the range [0,s_i-1]
            this.AddInt_(this.s_R, 1); //now s_R is in the range [1,s_i]
            this.Add_(this.s_R, this.s_i); //now s_R is in the range [s_i+1,2*s_i]
            this.Clone_(this.s_n, this.s_q);
            this.Multiply_(this.s_n, this.s_R);
            this.MultiplyInt_(this.s_n, 2);
            this.AddInt_(this.s_n, 1); //s_n=2*s_R*s_q+1
            this.Clone_(this.s_r2, this.s_R);
            this.MultiplyInt_(this.s_r2, 2); //s_r2=2*s_R
            //check s_n for divisibility by small primes up to B
            for (divisible = 0, j = 0; (j < this.primes.length) && (this.primes[j] < B); j++)
                if (this.ModInt(this.s_n, this.primes[j]) == 0 && !this.EqualsInt(this.s_n, this.primes[j])) {
                    divisible = 1;
                    break;
                }
            if (!divisible)
                if (!this.IsPronPrimeInt(this.s_n, 2))
                    divisible = 1;
            if (!divisible) {
                this.AddInt_(this.s_n, -3);
                for (j = this.s_n.length - 1; (this.s_n[j] == 0) && (j > 0); j--)
                    ; //strip leading zeros
                for (zz = 0, w = this.s_n[j]; w; (w >>= 1), zz++)
                    ;
                zz += this.bpe * j; //zz=number of bits in s_n, ignoring leading zeros
                for (;;) {
                    this.NewBigInt_(this.s_a, zz, 0);
                    if (this.MoreThan(this.s_n, this.s_a))
                        break;
                }
                this.AddInt_(this.s_n, 3); //now s_a is in the range [0,s_n-4]
                this.AddInt_(this.s_a, 2); //now s_a is in the range [2,s_n-2]
                this.Clone_(this.s_b, this.s_a);
                this.Clone_(this.s_n1, this.s_n);
                this.AddInt_(this.s_n1, -1);
                this.PowMod_(this.s_b, this.s_n1, this.s_n); //s_b=s_a^(s_n-1) modulo s_n
                this.AddInt_(this.s_b, -1);
                if (this.IsZero(this.s_b)) {
                    this.Clone_(this.s_b, this.s_a);
                    this.PowMod_(this.s_b, this.s_r2, this.s_n);
                    this.AddInt_(this.s_b, -1);
                    this.Clone_(this.s_aa, this.s_n);
                    this.Clone_(this.s_d, this.s_b);
                    this.GCD_(this.s_d, this.s_n); //if s_b and s_n are relatively prime, then s_n is a prime
                    if (this.EqualsInt(this.s_d, 1)) {
                        this.Clone_(ans, this.s_aa);
                        return; //if we've made it this far, then s_n is absolutely guaranteed to be prime
                    }
                }
            }
        }
    };
    ApzBigIntUnit.prototype.NewBigInt_ = function (b, n, s) {
        var i;
        for (i = 0; i < b.length; i++)
            b[i] = 0;
        var a = Math.floor((n - 1) / this.bpe) + 1; //# array elements to hold the BigInt
        for (i = 0; i < a; i++) {
            b[i] = Math.floor(Math.random() * (1 << (this.bpe - 1)));
        }
        b[a - 1] &= (2 << ((n - 1) % this.bpe)) - 1;
        if (s == 1)
            b[a - 1] |= (1 << ((n - 1) % this.bpe));
    };
    ApzBigIntUnit.prototype.GCD_ = function (x, y) {
        var i, xp, yp, q, sing, qp, t1;
        if (this.T.length != x.length)
            this.T = this.Clone(x);
        sing = 1;
        while (sing) {
            sing = 0;
            for (i = 1; i < y.length; i++)
                if (y[i]) {
                    sing = 1;
                    break;
                }
            if (!sing)
                break; //quit when y all zero elements except possibly y[0]
            for (i = x.length; !x[i] && i >= 0; i--)
                ; //find most significant element of x
            xp = x[i];
            yp = y[i];
            var A = 1, B = 0, C = 0, D = 1;
            while ((yp + C) && (yp + D)) {
                q = Math.floor((xp + A) / (yp + C));
                qp = Math.floor((xp + B) / (yp + D));
                if (q != qp)
                    break;
                t1 = A - q * C;
                A = C;
                C = t1; //  do (A,B,xp, C,D,yp) = (C,D,yp, A,B,xp) - q*(0,0,0, C,D,yp)      
                t1 = B - q * D;
                B = D;
                D = t1;
                t1 = xp - q * yp;
                xp = yp;
                yp = t1;
            }
            if (B) {
                this.Clone_(this.T, x);
                this.LinComb_(x, y, A, B); //x=A*x+B*y
                this.LinComb_(y, this.T, D, C); //y=D*y+C*T
            }
            else {
                this.Mod_(x, y);
                this.Clone_(this.T, x);
                this.Clone_(x, y);
                this.Clone_(y, this.T);
            }
        }
        if (y[0] == 0)
            return;
        t1 = this.ModInt(x, y[0]);
        this.CloneInt_(x, y[0]);
        y[0] = t1;
        while (y[0]) {
            x[0] %= y[0];
            t1 = x[0];
            x[0] = y[0];
            y[0] = t1;
        }
    };
    ApzBigIntUnit.prototype.InverseMod_ = function (x, n) {
        var k = 1 + 2 * Math.max(x.length, n.length);
        if (!(x[0] & 1) && !(n[0] & 1)) {
            this.CloneInt_(x, 0);
            return 0;
        }
        if (this.eg_u.length != k) {
            this.eg_u = new Array(k);
            this.eg_v = new Array(k);
            this.eg_A = new Array(k);
            this.eg_B = new Array(k);
            this.eg_C = new Array(k);
            this.eg_D = new Array(k);
        }
        this.Clone_(this.eg_u, x);
        this.Clone_(this.eg_v, n);
        this.CloneInt_(this.eg_A, 1);
        this.CloneInt_(this.eg_B, 0);
        this.CloneInt_(this.eg_C, 0);
        this.CloneInt_(this.eg_D, 1);
        for (;;) {
            while (!(this.eg_u[0] & 1)) {
                this.Halve_(this.eg_u);
                if (!(this.eg_A[0] & 1) && !(this.eg_B[0] & 1)) {
                    this.Halve_(this.eg_A);
                    this.Halve_(this.eg_B);
                }
                else {
                    this.Add_(this.eg_A, n);
                    this.Halve_(this.eg_A);
                    this.Subtract_(this.eg_B, x);
                    this.Halve_(this.eg_B);
                }
            }
            while (!(this.eg_v[0] & 1)) {
                this.Halve_(this.eg_v);
                if (!(this.eg_C[0] & 1) && !(this.eg_D[0] & 1)) {
                    this.Halve_(this.eg_C);
                    this.Halve_(this.eg_D);
                }
                else {
                    this.Add_(this.eg_C, n);
                    this.Halve_(this.eg_C);
                    this.Subtract_(this.eg_D, x);
                    this.Halve_(this.eg_D);
                }
            }
            if (!this.MoreThan(this.eg_v, this.eg_u)) {
                this.Subtract_(this.eg_u, this.eg_v);
                this.Subtract_(this.eg_A, this.eg_C);
                this.Subtract_(this.eg_B, this.eg_D);
            }
            else {
                this.Subtract_(this.eg_v, this.eg_u);
                this.Subtract_(this.eg_C, this.eg_A);
                this.Subtract_(this.eg_D, this.eg_B);
            }
            if (this.EqualsInt(this.eg_u, 0)) {
                if (this.IsNegative(this.eg_C))
                    this.Add_(this.eg_C, n);
                this.Clone_(x, this.eg_C);
                if (!this.EqualsInt(this.eg_v, 1)) {
                    this.CloneInt_(x, 0);
                    return 0;
                }
                return 1;
            }
        }
    };
    ApzBigIntUnit.prototype.InverseModInt = function (x, n) {
        var a = 1, b = 0;
        for (;;) {
            if (x == 1)
                return a;
            if (x == 0)
                return 0;
            b -= a * Math.floor(n / x);
            n %= x;
            if (n == 1)
                return b; //to avoid negatives, change this b to n-b, and each -= to +=
            if (n == 0)
                return 0;
            a -= b * Math.floor(x / n);
            x %= n;
        }
    };
    ApzBigIntUnit.prototype.IsNegative = function (x) {
        return ((x[x.length - 1] >> (this.bpe - 1)) & 1);
    };
    ApzBigIntUnit.prototype.MoreThanShitf = function (x, y, shift) {
        var i, kx = x.length, ky = y.length;
        var k = ((kx + shift) < ky) ? (kx + shift) : ky;
        for (i = ky - 1 - shift; i < kx && i >= 0; i++)
            if (x[i] > 0)
                return 1; //if there are nonzeros in x to the left of the first column of y, then x is bigger
        for (i = kx - 1 + shift; i < ky; i++)
            if (y[i] > 0)
                return 0; //if there are nonzeros in y to the left of the first column of x, then x is not bigger
        for (i = k - 1; i >= shift; i--)
            if (x[i - shift] > y[i])
                return 1;
            else if (x[i - shift] < y[i])
                return 0;
        return 0;
    };
    ApzBigIntUnit.prototype.MoreThan = function (x, y) {
        var i;
        var k = (x.length < y.length) ? x.length : y.length;
        for (i = x.length; i < y.length; i++)
            if (y[i])
                return 0; //y has more digits
        for (i = y.length; i < x.length; i++)
            if (x[i])
                return 1; //x has more digits
        for (i = k - 1; i >= 0; i--)
            if (x[i] > y[i])
                return 1;
            else if (x[i] < y[i])
                return 0;
        return 0;
    };
    ApzBigIntUnit.prototype.Divide_ = function (x, y, q, r) {
        var kx, ky;
        var i, y1, y2, c, a;
        this.Clone_(r, x);
        for (ky = y.length; y[ky - 1] == 0; ky--)
            ;
        var b = y[ky - 1];
        for (a = 0; b; a++)
            b >>= 1;
        a = this.bpe - a; //a is how many bits to shift so that the high order bit of y is leftmost in its array element
        this.LeftShift_(y, a); //multiply both by 1<<a now, then divide both by that at the end
        this.LeftShift_(r, a);
        for (kx = r.length; r[kx - 1] == 0 && kx > ky; kx--)
            ; //kx is number of elements in normalized x, not including leading zeros
        this.CloneInt_(q, 0); // q=0
        while (!this.MoreThanShitf(y, r, kx - ky)) {
            this.SubtractShift_(r, y, kx - ky); //   r=r-leftShift_(y,kx-ky)
            q[kx - ky]++; //   q[kx-ky]++;
        } // }
        for (i = kx - 1; i >= ky; i--) {
            if (r[i] == y[ky - 1])
                q[i - ky] = this.mask;
            else
                q[i - ky] = Math.floor((r[i] * this.radix + r[i - 1]) / y[ky - 1]);
            for (;;) {
                y2 = (ky > 1 ? y[ky - 2] : 0) * q[i - ky];
                c = y2 >> this.bpe;
                y2 = y2 & this.mask;
                y1 = c + q[i - ky] * y[ky - 1];
                c = y1 >> this.bpe;
                y1 = y1 & this.mask;
                if (c == r[i] ? y1 == r[i - 1] ? y2 > (i > 1 ? r[i - 2] : 0) : y1 > r[i - 1] : c > r[i])
                    q[i - ky]--;
                else
                    break;
            }
            this.LinCombShift_(r, y, -q[i - ky], i - ky); //r=r-q[i-ky]*leftShift_(y,i-ky)
            if (this.IsNegative(r)) {
                this.AddShift_(r, y, i - ky); //r=r+leftShift_(y,i-ky)
                q[i - ky]--;
            }
        }
        this.RightShift_(y, a); //undo the normalization step
        this.RightShift_(r, a); //undo the normalization step
    };
    ApzBigIntUnit.prototype.Carry_ = function (x) {
        var k = x.length;
        var c = 0;
        for (var i = 0; i < k; i++) {
            c += x[i];
            var b = 0;
            if (c < 0) {
                b = -(c >> this.bpe);
                c += b * this.radix;
            }
            x[i] = c & this.mask;
            c = (c >> this.bpe) - b;
        }
    };
    ApzBigIntUnit.prototype.ModInt = function (x, n) {
        var i, c = 0;
        for (i = x.length - 1; i >= 0; i--)
            c = (c * this.radix + x[i]) % n;
        return c;
    };
    ApzBigIntUnit.prototype.FromInt = function (t, bits, minSize) {
        var k = Math.ceil(bits / this.bpe) + 1;
        k = minSize > k ? minSize : k;
        var buff = new Array(k);
        this.CloneInt_(buff, t);
        return buff;
    };
    ApzBigIntUnit.prototype.FromString = function (s, base, minSize) {
        var d, i, x, y, kk;
        var k = s.length;
        if (base == -1) {
            x = new Array(0);
            for (;;) {
                y = new Array(x.length + 1);
                for (i = 0; i < x.length; i++)
                    y[i + 1] = x[i];
                y[0] = parseInt(s, 10);
                x = y;
                d = s.indexOf(',', 0);
                if (d < 1)
                    break;
                s = s.substring(d + 1);
                if (s.length == 0)
                    break;
            }
            if (x.length < minSize) {
                y = new Array(minSize);
                this.Clone_(y, x);
                return y;
            }
            return x;
        }
        x = this.FromInt(0, base * k, 0);
        for (i = 0; i < k; i++) {
            d = this.digitsStr.indexOf(s.substring(i, i + 1), 0);
            if (base <= 36 && d >= 36)
                d -= 26;
            if (d >= base || d < 0) {
                break;
            }
            this.MultiplyInt_(x, base);
            this.AddInt_(x, d);
        }
        for (k = x.length; k > 0 && !x[k - 1]; k--)
            ; //strip off leading zeros
        k = minSize > k + 1 ? minSize : k + 1;
        y = new Array(k);
        kk = k < x.length ? k : x.length;
        for (i = 0; i < kk; i++)
            y[i] = x[i];
        for (; i < k; i++)
            y[i] = 0;
        return y;
    };
    ApzBigIntUnit.prototype.EqualsInt = function (x, y) {
        var i;
        if (x[0] != y)
            return 0;
        for (i = 1; i < x.length; i++)
            if (x[i])
                return 0;
        return 1;
    };
    ApzBigIntUnit.prototype.Equals = function (x, y) {
        var i;
        var k = x.length < y.length ? x.length : y.length;
        for (i = 0; i < k; i++)
            if (x[i] != y[i])
                return 0;
        if (x.length > y.length) {
            for (; i < x.length; i++)
                if (x[i])
                    return 0;
        }
        else {
            for (; i < y.length; i++)
                if (y[i])
                    return 0;
        }
        return 1;
    };
    ApzBigIntUnit.prototype.IsZero = function (x) {
        var i;
        for (i = 0; i < x.length; i++)
            if (x[i])
                return 0;
        return 1;
    };
    ApzBigIntUnit.prototype.ToString = function (x, base) {
        var i, t, s = "";
        if (this.s6.length != x.length)
            this.s6 = this.Clone(x);
        else
            this.Clone_(this.s6, x);
        if (base == -1) {
            for (i = x.length - 1; i > 0; i--)
                s += x[i] + ',';
            s += x[0];
        }
        else {
            while (!this.IsZero(this.s6)) {
                t = this.DivideInt_(this.s6, base); //t=s6 % base; s6=floor(s6/base);
                s = this.digitsStr.substring(t, t + 1) + s;
            }
        }
        if (s.length == 0)
            s = "0";
        return s;
    };
    ApzBigIntUnit.prototype.Clone = function (x) {
        var buff = new Array(x.length);
        this.Clone_(buff, x);
        return buff;
    };
    ApzBigIntUnit.prototype.Clone_ = function (x, y) {
        var i;
        var k = x.length < y.length ? x.length : y.length;
        for (i = 0; i < k; i++)
            x[i] = y[i];
        for (i = k; i < x.length; i++)
            x[i] = 0;
    };
    ApzBigIntUnit.prototype.CloneInt_ = function (x, n) {
        var i, c;
        for (c = n, i = 0; i < x.length; i++) {
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    };
    ApzBigIntUnit.prototype.AddInt_ = function (x, n) {
        var i, k, c, b;
        x[0] += n;
        k = x.length;
        c = 0;
        for (i = 0; i < k; i++) {
            c += x[i];
            b = 0;
            if (c < 0) {
                b = -(c >> this.bpe);
                c += b * this.radix;
            }
            x[i] = c & this.mask;
            c = (c >> this.bpe) - b;
            if (!c)
                return; //stop carrying as soon as the carry is zero
        }
    };
    ApzBigIntUnit.prototype.RightShift_ = function (x, n) {
        var i;
        var k = Math.floor(n / this.bpe);
        if (k) {
            for (i = 0; i < x.length - k; i++)
                x[i] = x[i + k];
            for (; i < x.length; i++)
                x[i] = 0;
            n %= this.bpe;
        }
        for (i = 0; i < x.length - 1; i++) {
            x[i] = this.mask & ((x[i + 1] << (this.bpe - n)) | (x[i] >> n));
        }
        x[i] >>= n;
    };
    ApzBigIntUnit.prototype.Halve_ = function (x) {
        var i;
        for (i = 0; i < x.length - 1; i++) {
            x[i] = this.mask & ((x[i + 1] << (this.bpe - 1)) | (x[i] >> 1));
        }
        x[i] = (x[i] >> 1) | (x[i] & (this.radix >> 1)); //most significant bit stays the same
    };
    ApzBigIntUnit.prototype.LeftShift_ = function (x, n) {
        var i;
        var k = Math.floor(n / this.bpe);
        if (k) {
            for (i = x.length; i >= k; i--)
                x[i] = x[i - k];
            for (; i >= 0; i--)
                x[i] = 0;
            n %= this.bpe;
        }
        if (!n)
            return;
        for (i = x.length - 1; i > 0; i--) {
            x[i] = this.mask & ((x[i] << n) | (x[i - 1] >> (this.bpe - n)));
        }
        x[i] = this.mask & (x[i] << n);
    };
    ApzBigIntUnit.prototype.MultiplyInt_ = function (x, n) {
        var i, k, c, b;
        if (!n)
            return;
        k = x.length;
        c = 0;
        for (i = 0; i < k; i++) {
            c += x[i] * n;
            b = 0;
            if (c < 0) {
                b = -(c >> this.bpe);
                c += b * this.radix;
            }
            x[i] = c & this.mask;
            c = (c >> this.bpe) - b;
        }
    };
    ApzBigIntUnit.prototype.DivideInt_ = function (x, n) {
        var i, r = 0, s;
        for (i = x.length - 1; i >= 0; i--) {
            s = r * this.radix + x[i];
            x[i] = Math.floor(s / n);
            r = s % n;
        }
        return r;
    };
    ApzBigIntUnit.prototype.LinComb_ = function (x, y, a, b) {
        var i, c;
        var k = x.length < y.length ? x.length : y.length;
        var kk = x.length;
        for (c = 0, i = 0; i < k; i++) {
            c += a * x[i] + b * y[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; i < kk; i++) {
            c += a * x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    };
    ApzBigIntUnit.prototype.LinCombShift_ = function (x, y, b, ys) {
        var i, c;
        var k = x.length < ys + y.length ? x.length : ys + y.length;
        var kk = x.length;
        for (c = 0, i = ys; i < k; i++) {
            c += x[i] + b * y[i - ys];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; c && i < kk; i++) {
            c += x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    };
    ApzBigIntUnit.prototype.AddShift_ = function (x, y, ys) {
        var i, c;
        var k = x.length < ys + y.length ? x.length : ys + y.length;
        var kk = x.length;
        for (c = 0, i = ys; i < k; i++) {
            c += x[i] + y[i - ys];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; c && i < kk; i++) {
            c += x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    };
    ApzBigIntUnit.prototype.SubtractShift_ = function (x, y, ys) {
        var i, c;
        var k = x.length < ys + y.length ? x.length : ys + y.length;
        var kk = x.length;
        for (c = 0, i = ys; i < k; i++) {
            c += x[i] - y[i - ys];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; c && i < kk; i++) {
            c += x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    };
    ApzBigIntUnit.prototype.Subtract_ = function (x, y) {
        var i, c, k;
        k = x.length < y.length ? x.length : y.length;
        for (c = 0, i = 0; i < k; i++) {
            c += x[i] - y[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; c && i < x.length; i++) {
            c += x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    };
    ApzBigIntUnit.prototype.Add_ = function (x, y) {
        var xN = this.IsNegative(x);
        var yN = this.IsNegative(y);
        var z, y1;
        if (yN)
            y1 = this.Negate(y);
        if (!xN) {
            if (yN) {
                if (this.MoreThan(x, y1)) {
                    this.Subtract_(x, y1);
                    return;
                }
                else {
                    z = this.Subtract(y1, x);
                    this.Clone_(x, z);
                    this.Negate_(x);
                    return;
                }
            }
        }
        var i, c, k;
        k = x.length < y.length ? x.length : y.length;
        for (c = 0, i = 0; i < k; i++) {
            c += x[i] + y[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; c && i < x.length; i++) {
            c += x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    };
    ApzBigIntUnit.prototype.Multiply_ = function (x, y) {
        var i;
        if (this.ss.length != 2 * x.length)
            this.ss = new Array(2 * x.length);
        this.CloneInt_(this.ss, 0);
        for (i = 0; i < y.length; i++)
            if (y[i])
                this.LinCombShift_(this.ss, x, y[i], i); //ss=1*ss+y[i]*(x<<(i*bpe))
        this.Clone_(x, this.ss);
    };
    ApzBigIntUnit.prototype.Mod_ = function (x, n) {
        if (this.s4.length != x.length)
            this.s4 = this.Clone(x);
        else
            this.Clone_(this.s4, x);
        if (this.s5.length != x.length)
            this.s5 = this.Clone(x);
        this.Divide_(this.s4, n, this.s5, x); //x = remainder of s4 / n
    };
    ApzBigIntUnit.prototype.MultiplyMod_ = function (x, y, n) {
        var i;
        if (this.s0.length != 2 * x.length)
            this.s0 = new Array(2 * x.length);
        this.CloneInt_(this.s0, 0);
        for (i = 0; i < y.length; i++)
            if (y[i])
                this.LinCombShift_(this.s0, x, y[i], i); //s0=1*s0+y[i]*(x<<(i*bpe))
        this.Mod_(this.s0, n);
        this.Clone_(x, this.s0);
    };
    ApzBigIntUnit.prototype.SquareMod_ = function (x, n) {
        var i, j, c, kx, k;
        for (kx = x.length; kx > 0 && !x[kx - 1]; kx--)
            ; //ignore leading zeros in x
        k = kx > n.length ? 2 * kx : 2 * n.length; //k=# elements in the product, which is twice the elements in the larger of x and n
        if (this.s0.length != k)
            this.s0 = new Array(k);
        this.CloneInt_(this.s0, 0);
        for (i = 0; i < kx; i++) {
            c = this.s0[2 * i] + x[i] * x[i];
            this.s0[2 * i] = c & this.mask;
            c >>= this.bpe;
            for (j = i + 1; j < kx; j++) {
                c = this.s0[i + j] + 2 * x[i] * x[j] + c;
                this.s0[i + j] = (c & this.mask);
                c >>= this.bpe;
            }
            this.s0[i + kx] = c;
        }
        this.Mod_(this.s0, n);
        this.Clone_(x, this.s0);
    };
    ApzBigIntUnit.prototype.Trim = function (x, k) {
        var i;
        for (i = x.length; i > 0 && !x[i - 1]; i--)
            ;
        var y = new Array(i + k);
        this.Clone_(y, x);
        return y;
    };
    ApzBigIntUnit.prototype.PowMod_ = function (x, y, n) {
        var k1, k2, kn, np;
        if (this.s7.length != n.length)
            this.s7 = this.Clone(n);
        if ((n[0] & 1) == 0) {
            this.Clone_(this.s7, x);
            this.CloneInt_(x, 1);
            while (!this.EqualsInt(y, 0)) {
                if (y[0] & 1)
                    this.MultiplyMod_(x, this.s7, n);
                this.DivideInt_(y, 2);
                this.SquareMod_(this.s7, n);
            }
            return;
        }
        this.CloneInt_(this.s7, 0);
        for (kn = n.length; kn > 0 && !n[kn - 1]; kn--)
            ;
        np = this.radix - this.InverseModInt(this.ModInt(n, this.radix), this.radix);
        this.s7[kn] = 1;
        this.MultiplyMod_(x, this.s7, n); // x = x * 2**(kn*bp) mod n
        if (this.s3.length != x.length)
            this.s3 = this.Clone(x);
        else
            this.Clone_(this.s3, x);
        for (k1 = y.length - 1; (k1 > 0 ? 1 : 0) & (!y[k1] ? 1 : 0); k1--)
            ; //k1=first nonzero element of y
        if (y[k1] == 0) {
            this.CloneInt_(x, 1);
            return;
        }
        for (k2 = 1 << (this.bpe - 1); k2 && !(y[k1] & k2); k2 >>= 1)
            ; //k2=position of first 1 bit in y[k1]
        for (;;) {
            if (!(k2 >>= 1)) {
                k1--;
                if (k1 < 0) {
                    this.MontMultiply_(x, this.one, n, np);
                    return;
                }
                k2 = 1 << (this.bpe - 1);
            }
            this.MontMultiply_(x, x, n, np);
            if (k2 & y[k1])
                this.MontMultiply_(x, this.s3, n, np);
        }
    };
    ApzBigIntUnit.prototype.MontMultiply_ = function (x, y, n, np) {
        var i, j, c, ui, t, ks;
        var kn = n.length;
        var ky = y.length;
        if (this.sa.length != kn)
            this.sa = new Array(kn);
        this.CloneInt_(this.sa, 0);
        for (; kn > 0 && n[kn - 1] == 0; kn--)
            ; //ignore leading zeros of n
        for (; ky > 0 && y[ky - 1] == 0; ky--)
            ; //ignore leading zeros of y
        ks = this.sa.length - 1;
        for (i = 0; i < kn; i++) {
            t = this.sa[0] + x[i] * y[0];
            ui = ((t & this.mask) * np) & this.mask; //the inner "& mask" was needed on Safari (but not MSIE) at one time
            c = (t + ui * n[0]) >> this.bpe;
            t = x[i];
            j = 1;
            for (; j < ky - 4;) {
                c += this.sa[j] + ui * n[j] + t * y[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
                c += this.sa[j] + ui * n[j] + t * y[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
                c += this.sa[j] + ui * n[j] + t * y[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
                c += this.sa[j] + ui * n[j] + t * y[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
                c += this.sa[j] + ui * n[j] + t * y[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
            }
            for (; j < ky;) {
                c += this.sa[j] + ui * n[j] + t * y[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
            }
            for (; j < kn - 4;) {
                c += this.sa[j] + ui * n[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
                c += this.sa[j] + ui * n[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
                c += this.sa[j] + ui * n[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
                c += this.sa[j] + ui * n[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
                c += this.sa[j] + ui * n[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
            }
            for (; j < kn;) {
                c += this.sa[j] + ui * n[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
            }
            for (; j < ks;) {
                c += this.sa[j];
                this.sa[j - 1] = c & this.mask;
                c >>= this.bpe;
                j++;
            }
            this.sa[j - 1] = c & this.mask;
        }
        if (!this.MoreThan(n, this.sa))
            this.Subtract_(this.sa, n);
        this.Clone_(x, this.sa);
    };
    ApzBigIntUnit.prototype.Negate = function (x) {
        var y = this.Clone(x);
        this.MultiplyInt_(y, -1);
        return y;
    };
    ApzBigIntUnit.prototype.Negate_ = function (x) {
        this.MultiplyInt_(x, -1);
    };
    ApzBigIntUnit.prototype.ToArray = function (x, base) {
        var i, t;
        var s = [];
        if (this.s6.length != x.length)
            this.s6 = this.Clone(x);
        else
            this.Clone_(this.s6, x);
        if (base == -1) {
            for (i = 0; i < x.length; i++)
                s.push(x[i]);
        }
        else {
            while (!this.IsZero(this.s6)) {
                t = this.DivideInt_(this.s6, base); //t=s6 % base; s6=floor(s6/base);
                s.push(t);
            }
        }
        if (s.length == 0)
            s.push(0);
        return s;
    };
    ApzBigIntUnit.prototype.FromArray = function (s, base, minSize) {
        var d, i, x, kk;
        var k = s.length;
        x = this.FromInt(0, base * k, 0);
        for (i = 0; i < k; i++) {
            d = s[i];
            if (d >= base || d < 0) {
                break;
            }
            this.MultiplyInt_(x, base);
            this.AddInt_(x, d);
        }
        for (k = x.length; k > 0 && !x[k - 1]; k--)
            ; //strip off leading zeros
        k = minSize > k + 1 ? minSize : k + 1;
        var y = new Array(k);
        kk = k < x.length ? k : x.length;
        for (i = 0; i < kk; i++)
            y[i] = x[i];
        for (; i < k; i++)
            y[i] = 0;
        return y;
    };
    ApzBigIntUnit.prototype.ToBytes = function (x) { return this.ToArray(x, 256); };
    ApzBigIntUnit.prototype.FromBytes = function (bytes) { return this.FromArray(bytes, 256, 0); };
    return ApzBigIntUnit;
}());

//# sourceMappingURL=ApzBigInt.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ICryptoTransform; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ApzSystem__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Enums_RsaEnum__ = __webpack_require__(240);


var ICryptoTransform = (function () {
    function ICryptoTransform(algorithm, encryption) {
        this.iv = [];
        this.algo = null;
        this.encrypt = false;
        this.blockSizeByte = 0;
        this.temp = [];
        this.temp2 = [];
        this.workBuff = [];
        this.workout = [];
        this.feedBackByte = 0;
        this.feedBackIter = 0;
        this.m_disposed = false;
        this.lastBlock = false;
        this._rng = null;
        this.InputBlockSize = 0;
        this.OutputBlockSize = 0;
        this.CanTransformMultipleBlocks = true;
        this.CanReuseTransform = false;
        this.algo = algorithm;
        this.encrypt = encryption;
        if (this.algo) {
            this.blockSizeByte = this.algo.BlockSize >> 3;
            this.InputBlockSize = this.blockSizeByte;
            this.OutputBlockSize = this.blockSizeByte;
            // Mode buffers
            this.temp = __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["a" /* ApzByte */](this.blockSizeByte);
            __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["f" /* BufferBlockCopy */](this.algo.IV, 0, this.temp, 0, Math.min(this.blockSizeByte, this.algo.IV.length));
            this.temp2 = __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["a" /* ApzByte */](this.blockSizeByte);
            this.feedBackByte = this.algo.FeedbackSize >> 3;
            if (this.feedBackByte !== 0)
                this.feedBackIter = this.blockSizeByte / this.feedBackByte;
            // Transform buffers
            this.workBuff = __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["a" /* ApzByte */](this.blockSizeByte);
            this.workout = __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["a" /* ApzByte */](this.blockSizeByte);
        }
    }
    ;
    ICryptoTransform.prototype.Random = function (buffer, start, length, zeroBytes) {
        if (!this._rng) {
            this._rng = new RNGCryptoServiceProvider();
        }
        var random = __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["a" /* ApzByte */](length);
        if (zeroBytes) {
            this._rng.GetBytes(random);
        }
        else {
            this._rng.GetNonZeroBytes(random);
        }
        __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["f" /* BufferBlockCopy */](random, 0, buffer, start, length);
    };
    ICryptoTransform.prototype._Padding = function (inputBuffer, inputOffset, inputCount) {
        var rem = this.blockSizeByte - inputCount;
        var paddingSize = rem > 0 ? rem : this.blockSizeByte;
        var paddedInput = __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["a" /* ApzByte */](paddingSize);
        var blocksCount = 1;
        var newBlock = [];
        this.Random(paddedInput, 1, paddedInput.length - 2, false);
        paddedInput[0] = 0;
        paddedInput[paddedInput.length - 2] = 2;
        paddedInput[paddedInput.length - 1] = 0;
        if (rem === 0)
            blocksCount = 2;
        var iBuffer = __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["a" /* ApzByte */](this.blockSizeByte * blocksCount);
        var oBuffer = __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["a" /* ApzByte */](this.blockSizeByte * blocksCount);
        if (newBlock.length === 0) {
            // Copy data to temp input buffer.
            __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["f" /* BufferBlockCopy */](inputBuffer, inputOffset, iBuffer, 0, inputCount);
            // Copy padding to temp input buffer.
            if (rem > 0 || rem === 0 && blocksCount === 2) {
                __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["f" /* BufferBlockCopy */](paddedInput, 0, iBuffer, inputCount, paddingSize);
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["f" /* BufferBlockCopy */](newBlock, inputOffset, iBuffer, 0, inputCount + paddingSize);
        }
        var result = new Array(3);
        result[__WEBPACK_IMPORTED_MODULE_1__Enums_RsaEnum__["a" /* RsaPaddingObj */].blocksCount] = blocksCount;
        result[__WEBPACK_IMPORTED_MODULE_1__Enums_RsaEnum__["a" /* RsaPaddingObj */].iBuffer] = iBuffer;
        result[__WEBPACK_IMPORTED_MODULE_1__Enums_RsaEnum__["a" /* RsaPaddingObj */].oBuffer] = oBuffer;
        return result;
    };
    ;
    ICryptoTransform.prototype._PaddingRemove = function (res, inputOffset, inputCount) {
        var total = res.length;
        var i = 0;
        for (i = total - 1 - 2; i > 0; i--) {
            if (res[i] === 0x00) {
                total = i;
                break;
            }
        }
        if (total > 0) {
            var data = __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["a" /* ApzByte */](total);
            __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["f" /* BufferBlockCopy */](res, 0, data, 0, total);
            __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["c" /* ArrayClear */](res, 0, res.length);
            return data;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["a" /* ApzByte */](0);
        }
    };
    ;
    return ICryptoTransform;
}());

;
var RNGCryptoServiceProvider = (function () {
    function RNGCryptoServiceProvider() {
        this.rnd = new __WEBPACK_IMPORTED_MODULE_0__ApzSystem__["b" /* ApzRandom */]();
    }
    ;
    RNGCryptoServiceProvider.prototype.GetBytes = function (data) {
        var length = data.length;
        for (var i = 0; i < length; i++) {
            data[i] = this.rnd.Next(0, 256);
        }
    };
    ;
    RNGCryptoServiceProvider.prototype.GetNonZeroBytes = function (data) {
        var length = data.length;
        for (var i = 0; i < length; i++) {
            data[i] = this.rnd.Next(1, 256);
        }
    };
    ;
    return RNGCryptoServiceProvider;
}());
;
//# sourceMappingURL=ApzCryto.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_report_complete_report_complete__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inventory_transfer_inventory_transfer__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_picked_confirm_picked_confirm__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_providers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_login__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_event_management_event_management__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_task_management_task_management__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_hub_helper__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__http_client_http_helper__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













//import { EventManagementPage } from '../pages/event-management/event-devex';




var MyApp = (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, login, httpHelper) {
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.login = login;
        this.httpHelper = httpHelper;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_pages__["a" /* FirstRunPage */];
        this.isLogin = false;
        this.pages = [
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["b" /* LoginPage */] },
            { title: 'Report Complete', component: __WEBPACK_IMPORTED_MODULE_7__pages_report_complete_report_complete__["a" /* ReportCompletePage */] },
            { title: 'Inventory Transfer', component: __WEBPACK_IMPORTED_MODULE_8__pages_inventory_transfer_inventory_transfer__["a" /* InventoryTransferPage */] },
            { title: 'Picked Confirm', component: __WEBPACK_IMPORTED_MODULE_9__pages_picked_confirm_picked_confirm__["a" /* PickedConfirmPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'Task', component: __WEBPACK_IMPORTED_MODULE_14__pages_task_management_task_management__["a" /* TaskManagementPage */] },
            { title: 'Event', component: __WEBPACK_IMPORTED_MODULE_13__pages_event_management_event_management__["b" /* EventManagementPage1 */] },
        ];
        this.initTranslate();
        this.hubHelper = new __WEBPACK_IMPORTED_MODULE_15__providers_hub_helper__["a" /* HubHelper */]();
        this.hubHelper.domain = this.httpHelper.url + "/SignalR";
        this.hubHelper.hubName = "notificationClient";
        this.hubHelper.addEvent("UpdateNotification", this.updateNotification.bind(this));
        this.hubHelper.start();
    }
    MyApp.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.updateNotification = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var title, options, allowNotify, notify;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(content.Detail);
                        title = "A new task was assigned to you";
                        options = { body: content.Detail, icon: "" };
                        return [4 /*yield*/, Notification.requestPermission()];
                    case 1:
                        allowNotify = _a.sent();
                        if (allowNotify != "granted")
                            return [2 /*return*/];
                        notify = new Notification(title, options);
                        setTimeout(notify.close.bind(notify), 6000);
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (!this.login._login)
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["b" /* LoginPage */]);
        else
            this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOut = function () {
        var _this = this;
        this.login.logout().then(function (res) {
            _this.login._loggedOut();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_pages__["a" /* FirstRunPage */]);
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <span *ngIf="login._login">You are logged in as: {{login._login.UserName}}</span>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item (click)="logOut()">\n\n        Log Out\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_10__providers_providers__["g" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_11__providers_login__["a" /* Login */],
        __WEBPACK_IMPORTED_MODULE_16__http_client_http_helper__["a" /* HttpClientHelper */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpResult; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_client__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picking_client__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_task_task__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_event__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_project_project__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cfl_cfl__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_comment_comment__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_calendar_calendar__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HttpClient = (function () {
    function HttpClient(pickingClient, taskClient, eventClient, commonClient, projectClient, cflClient, commentClient, calendarClient) {
        this.pickingClient = pickingClient;
        this.taskClient = taskClient;
        this.eventClient = eventClient;
        this.commonClient = commonClient;
        this.projectClient = projectClient;
        this.cflClient = cflClient;
        this.commentClient = commentClient;
        this.calendarClient = calendarClient;
    }
    Object.defineProperty(HttpClient.prototype, "Picking", {
        get: function () {
            return this.pickingClient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClient.prototype, "Task", {
        get: function () {
            return this.taskClient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClient.prototype, "Event", {
        get: function () {
            return this.eventClient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClient.prototype, "Common", {
        get: function () {
            return this.commonClient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClient.prototype, "Project", {
        get: function () {
            return this.projectClient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClient.prototype, "CFL", {
        get: function () {
            return this.cflClient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClient.prototype, "Comment", {
        get: function () {
            return this.commentClient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClient.prototype, "Calendar", {
        get: function () {
            return this.calendarClient;
        },
        enumerable: true,
        configurable: true
    });
    return HttpClient;
}());
HttpClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__picking_client__["a" /* PickingClient */],
        __WEBPACK_IMPORTED_MODULE_3__providers_task_task__["a" /* TaskProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_event_event__["a" /* EventProvider */],
        __WEBPACK_IMPORTED_MODULE_1__common_client__["a" /* CommonsClient */],
        __WEBPACK_IMPORTED_MODULE_5__providers_project_project__["a" /* ProjectProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_cfl_cfl__["a" /* CflProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_comment_comment__["a" /* CommentProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_calendar_calendar__["a" /* CalendarProvider */]])
], HttpClient);

var HttpResult = (function () {
    function HttpResult(message, content) {
        if (message === void 0) { message = ""; }
        if (content === void 0) { content = ""; }
        this.Message = message;
        this.Content = content;
    }
    return HttpResult;
}());

//# sourceMappingURL=http-client.js.map

/***/ })

},[841]);
//# sourceMappingURL=main.js.map