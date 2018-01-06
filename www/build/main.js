webpackJsonp([4],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pages__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inventory_transfer_inventory_transfer__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_picked_confirm_picked_confirm__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, modalCtrl, login, translateService, common, setting) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.login = login;
        this.translateService = translateService;
        this.common = common;
        this.setting = setting;
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
        if (this.login._login != null)
            this.isLogin = true;
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
    // Attempt to login in through Login service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.disable = true;
        this.login.login(this.account).subscribe(function (resp) {
            console.log(resp.json().Message);
            var httpResult = resp.json();
            if (httpResult.Message == '') {
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
                _this.createToast(httpResult.Message, __WEBPACK_IMPORTED_MODULE_7__providers_providers__["d" /* MsgType */].error);
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
        this.login.initApi().then(function (setting) {
            _this.account.Doimain = setting.domain;
            _this.account.DbName = setting.company;
            _this.account.UserName = setting.userName;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle *ngIf="isLogin">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form (submit)="doLogin()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>{{ \'DOMAIN\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.Doimain" name="domain" (change)="domainChange()" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'COMPANY\' | translate }}</ion-label>\n        <ion-select class="myCustomSelect" [(ngModel)]="account.DbName" multiple="false" name="company" required>\n          <ion-option *ngFor="let company of listCompany" value="{{company.ID}}">{{company.Name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.UserName" name="username" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.Password" name="password" required></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" [disabled]="disable" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n      </div>\n\n    </ion-list>\n  </form>\n\n  <div padding>\n    <button ion-button icon-left color="primary" [disabled]="disable" block (click)="openSetting()">{{ \'SETTINGS_TITLE\' | translate }}\n      <ion-icon name="settings"></ion-icon>\n    </button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_providers__["c" /* Login */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_providers__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_7__providers_providers__["g" /* Settings */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(32);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ pageTitle }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="form" *ngIf="settingsReady">\n    <ion-list *ngIf="page == \'main\'">\n\n      <ion-item>\n        <ion-label>{{ \'SETTINGS_BARCODE\' | translate }}</ion-label>\n        <ion-toggle formControlName="barcodeInternal"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'DEFAULT_PAGE\' | translate }}</ion-label>\n        <ion-select formControlName="defaultPage">\n          <ion-option value="ReportCompletePage" checked="true">Report Complete Page</ion-option>\n          <ion-option value="InventoryTransferPage">Inventory Transfer Page</ion-option>\n          <ion-option value="PickedConfirmPage">Picked Confirm Page</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>API</ion-label>\n        <ion-input formControlName="apiAdress"></ion-input>\n      </ion-item>\n\n      <button ion-item [navPush]="subSettings" [navParams]="profileSettings">\n        {{ \'SETTINGS_LOGINFO_BUTTON\' | translate }}\n      </button>\n    </ion-list>\n\n    <ion-list *ngIf="page == \'login\'">\n      <ion-item>\n        <ion-label>{{ \'DOMAIN\' | translate }}</ion-label>\n        <ion-input formControlName="domain"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'COMPANY\' | translate }}</ion-label>\n        <ion-input formControlName="company"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input formControlName="userName"></ion-input>\n      </ion-item>\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
], SettingsPage);

var SettingsPage_1;
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 131:
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
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bin-confirm/bin-confirm.module": [
		314,
		3
	],
	"../pages/inventory-transfer/inventory-transfer.module": [
		315,
		2
	],
	"../pages/picked-confirm/picked-confirm.module": [
		316,
		1
	],
	"../pages/report-complete/report-complete.module": [
		317,
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
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComplete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(36);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */]])
], ReportComplete);

//# sourceMappingURL=report-complete.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryTransfers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_InventoryTranferImpl__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_InventoryTranfer_LineImpl__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_StockTransferLinesBinAllocationsImpl__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_BatchNumbersImpl__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_SerialNumbersImpl__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(36);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */]])
], InventoryTransfers);

//# sourceMappingURL=inventory-transfers.js.map

/***/ }),

/***/ 178:
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

/***/ 179:
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

/***/ 180:
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

/***/ 181:
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

/***/ 182:
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

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickedConfirm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_client_http_client__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_InventoryTranferImpl__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_InventoryTranfer_LineImpl__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_StockTransferLinesBinAllocationsImpl__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_BatchNumbersImpl__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_SerialNumbersImpl__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(36);
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
                //return await this.api.getAsyncDataSet(this.controller, 'LoadBatchLine', [{ name: 'docEntry', value: docEntry }, { name: 'lineNum', value: lineNum }]);
                return [2 /*return*/, this.httpClient.Picking.LoadBatchLine(docEntry, lineNum)];
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_0__http_client_http_client__["a" /* HttpClientRepository */]])
], PickedConfirm);

//# sourceMappingURL=picked-confirm.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_client__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picking_client__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpClientRepository = (function () {
    function HttpClientRepository(pickingClient) {
        this.pickingClient = pickingClient;
    }
    Object.defineProperty(HttpClientRepository.prototype, "Commons", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__common_client__["a" /* CommonsClient */]();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClientRepository.prototype, "Picking", {
        get: function () {
            return this.pickingClient;
        },
        enumerable: true,
        configurable: true
    });
    return HttpClientRepository;
}());
HttpClientRepository = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__picking_client__["a" /* PickingClient */]])
], HttpClientRepository);

//# sourceMappingURL=http-client.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickingClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_helper__ = __webpack_require__(95);
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
        //return this.helper.getDataSet('GetItemByBarcode', [{ name: 'barcode', value: barcode }]);
    };
    return PickingClient;
}());
PickingClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_helper__["a" /* HttpClientHelper */]])
], PickingClient);

//# sourceMappingURL=picking-client.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MsgType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Common = (function () {
    function Common(toastCtrl) {
        this.toastCtrl = toastCtrl;
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
    return Common;
}());
Common = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], Common);

var MsgType;
(function (MsgType) {
    MsgType[MsgType["success"] = 1] = "success";
    MsgType[MsgType["error"] = 0] = "error";
})(MsgType || (MsgType = {}));
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_complete_report_complete__ = __webpack_require__(63);


// The page the user lands on after opening the app and without a session
var FirstRunPage = __WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */];
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = __WEBPACK_IMPORTED_MODULE_1__report_complete_report_complete__["a" /* ReportCompletePage */];
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_report_complete_report_complete__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inventory_transfer_inventory_transfer__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bin_confirm_bin_confirm__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_picked_confirm_picked_confirm__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_settings__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_inventory_report_complete__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_common__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_inventory_inventory_transfers__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_inventory_picked_confirm__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__http_client_http_client__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__http_client_http_helper__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__http_client_picking_client__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_barcode_scanner__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ngx_translate_http_loader__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_27__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_13__providers_settings__["a" /* Settings */](storage, {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_report_complete_report_complete__["a" /* ReportCompletePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_inventory_transfer_inventory_transfer__["a" /* InventoryTransferPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_bin_confirm_bin_confirm__["a" /* BinConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_picked_confirm_picked_confirm__["a" /* PickedConfirmPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/bin-confirm/bin-confirm.module#BinConfirmPageModule', name: 'BinConfirmPage', segment: 'bin-confirm', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inventory-transfer/inventory-transfer.module#InventoryTransferPageModule', name: 'InventoryTransferPage', segment: 'inventory-transfer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/picked-confirm/picked-confirm.module#PickedConfirmPageModule', name: 'PickedConfirmPage', segment: 'picked-confirm', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/report-complete/report-complete.module#ReportCompletePageModule', name: 'ReportCompletePage', segment: 'report-complete', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_report_complete_report_complete__["a" /* ReportCompletePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_inventory_transfer_inventory_transfer__["a" /* InventoryTransferPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_bin_confirm_bin_confirm__["a" /* BinConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_picked_confirm_picked_confirm__["a" /* PickedConfirmPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_14__providers_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_15__providers_inventory_report_complete__["a" /* ReportComplete */],
            __WEBPACK_IMPORTED_MODULE_17__providers_inventory_inventory_transfers__["a" /* InventoryTransfers */],
            __WEBPACK_IMPORTED_MODULE_16__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__providers_inventory_picked_confirm__["a" /* PickedConfirm */],
            __WEBPACK_IMPORTED_MODULE_19__http_client_http_client__["a" /* HttpClientRepository */],
            __WEBPACK_IMPORTED_MODULE_21__http_client_picking_client__["a" /* PickingClient */],
            __WEBPACK_IMPORTED_MODULE_20__http_client_http_helper__["a" /* HttpClientHelper */],
            { provide: __WEBPACK_IMPORTED_MODULE_13__providers_settings__["a" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonsClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommonsClient = (function () {
    function CommonsClient() {
    }
    CommonsClient.prototype.getAllEmployee = function () {
        console.log('get all employee');
    };
    return CommonsClient;
}());
CommonsClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], CommonsClient);

//# sourceMappingURL=common-client.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_report_complete_report_complete__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inventory_transfer_inventory_transfer__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_picked_confirm_picked_confirm__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_providers__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, login) {
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.login = login;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_pages__["a" /* FirstRunPage */];
        this.isLogin = false;
        this.pages = [
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] },
            { title: 'Report Complete', component: __WEBPACK_IMPORTED_MODULE_7__pages_report_complete_report_complete__["a" /* ReportCompletePage */] },
            { title: 'Inventory Transfer', component: __WEBPACK_IMPORTED_MODULE_8__pages_inventory_transfer_inventory_transfer__["a" /* InventoryTransferPage */] },
            { title: 'Picked Confirm', component: __WEBPACK_IMPORTED_MODULE_9__pages_picked_confirm_picked_confirm__["a" /* PickedConfirmPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] }
        ];
        this.initTranslate();
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
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <span *ngIf="login._login">You are logged in as: {{login._login.UserName}}</span>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item (click)="logOut()">\n\n        Log Out\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_10__providers_providers__["g" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Config */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_11__providers_login__["a" /* Login */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inventory_report_complete__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_inventory_transfers__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inventory_picked_confirm__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__(186);
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(36);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], Api);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(34);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('binInput'),
    __metadata("design:type", Object)
], BinConfirmPage.prototype, "binInput", void 0);
BinConfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bin-confirm',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\bin-confirm\bin-confirm.html"*/'<!--\n  Generated template for the BinConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          {{ \'CANCEL_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n        <span color="primary" showWhen="ios">\n          {{ \'DONE_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form (submit)="done()">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" #binInput placeholder="Bin / Warehouse" [(ngModel)]="barcode" name="barcode" (input)="changeBarcode()"\n          required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button icon-left color="primary" *ngIf="barcode">\n    <ion-icon name="checkmark" > Confirm</ion-icon>\n  </button>\n  </form>\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\bin-confirm\bin-confirm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* Common */]])
], BinConfirmPage);

//# sourceMappingURL=bin-confirm.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(175);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryTransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bin_confirm_bin_confirm__ = __webpack_require__(47);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('focusInput'),
    __metadata("design:type", Object)
], InventoryTransferPage.prototype, "barcodeInput", void 0);
InventoryTransferPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inventory-transfer',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\inventory-transfer\inventory-transfer.html"*/'<!--\n  Generated template for the InventoryTransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inventory Transfer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>\n      <ion-icon name="barcode"></ion-icon>\n    </ion-label>\n    <ion-input type="text" placeholder="Barcode" [(ngModel)]="barcode" name="barcode" (keydown)="handler($event)" #focusInput></ion-input>\n  </ion-item>\n\n  <ion-grid>\n\n    <ion-row justify-content-start class="rowHeader">\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{col.ColumnName}} width-10>\n        {{col.Caption}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor="let row of data" justify-content-start>\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{row[col.ColumnName]}} width-10>\n        {{row[col.ColumnName]}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <button ion-button icon-left (click)="scan()" *ngIf="isUseBarcode">\n    <ion-icon name="barcode" > Scan</ion-icon>\n  </button>\n\n  <button ion-button icon-left (click)="refreshForm()" *ngIf="data!= null">\n    <ion-icon name="refresh" > Refresh</ion-icon>\n  </button>\n\n  <button ion-button icon-right (click)="submit()" *ngIf="data!= null">\n    <ion-icon name="arrow-round-forward" > Confirm Bin</ion-icon>\n  </button>\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\inventory-transfer\inventory-transfer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* InventoryTransfers */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* Settings */]])
], InventoryTransferPage);

//# sourceMappingURL=inventory-transfer.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickedConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bin_confirm_bin_confirm__ = __webpack_require__(47);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('focusInput'),
    __metadata("design:type", Object)
], PickedConfirmPage.prototype, "barcodeInput", void 0);
PickedConfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-picked-confirm',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\picked-confirm\picked-confirm.html"*/'<!--\n  Generated template for the InventoryTransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Picked Confirm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>\n      <ion-icon name="barcode"></ion-icon>\n    </ion-label>\n    <ion-input type="text" placeholder="Barcode" [(ngModel)]="barcode" name="barcode" (keydown)="handler($event)" #focusInput></ion-input>\n  </ion-item>\n\n  <ion-grid>\n\n    <ion-row justify-content-start class="rowHeader">\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{col.ColumnName}} width-10>\n        {{col.Caption}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor="let row of data" justify-content-start>\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{row[col.ColumnName]}} width-10>\n        {{row[col.ColumnName]}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <button ion-button icon-left (click)="scan()" *ngIf="isUseBarcode">\n    <ion-icon name="barcode" > Scan</ion-icon>\n  </button>\n\n  <button ion-button icon-left (click)="refreshForm()" *ngIf="data!= null">\n    <ion-icon name="refresh" > Refresh</ion-icon>\n  </button>\n\n  <button ion-button icon-right (click)="submit()" *ngIf="data!= null">\n    <ion-icon name="arrow-round-forward" > Confirm Bin</ion-icon>\n  </button>\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\picked-confirm\picked-confirm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* InventoryTransfers */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["e" /* PickedConfirm */]])
], PickedConfirmPage);

//# sourceMappingURL=picked-confirm.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bin_confirm_bin_confirm__ = __webpack_require__(47);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('focusInput'),
    __metadata("design:type", Object)
], ReportCompletePage.prototype, "barcodeInput", void 0);
ReportCompletePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-report-complete',template:/*ion-inline-start:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\report-complete\report-complete.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Report Complete</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>\n      <ion-icon name="barcode"></ion-icon>\n    </ion-label>\n    <ion-input type="text" placeholder="Barcode" [(ngModel)]="barcode" name="barcode" (keydown)="handler($event)" #focusInput></ion-input>\n  </ion-item>\n\n  <ion-grid>\n\n    <ion-row justify-content-start class="rowHeader">\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{col.ColumnName}}>\n        {{col.Caption}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor="let row of data" justify-content-start>\n      <ion-col *ngFor="let col of structrure" [hidden]="col.Width <= 0" #{{row[col.ColumnName]}}>\n        {{row[col.ColumnName]}}\n      </ion-col>\n    </ion-row> \n  </ion-grid>\n\n  <button ion-button icon-left (click)="scan()" *ngIf="isUseBarcode">\n    <ion-icon name="barcode" > Scan</ion-icon>\n  </button>\n\n  <button ion-button icon-left (click)="refreshForm()" *ngIf="data!= null">\n    <ion-icon name="refresh" > Refresh</ion-icon>\n  </button>\n\n  <button ion-button icon-right (click)="submit()" *ngIf="data!= null">\n    <ion-icon name="arrow-round-forward" > Confirm Bin</ion-icon>\n  </button>\n\n</ion-content>'/*ion-inline-end:"G:\MobileApp\01.Application\Ionic2MobileApp\src\pages\report-complete\report-complete.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["f" /* ReportComplete */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Common */],
        __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* Settings */]])
], ReportCompletePage);

//# sourceMappingURL=report-complete.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_client_http_helper__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Login = (function () {
    function Login(http, api, setting, httpHelper) {
        this.http = http;
        this.api = api;
        this.setting = setting;
        this.httpHelper = httpHelper;
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
        this.setting.save();
    };
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    Login.prototype.login = function (loginInfo) {
        var _this = this;
        var seq = this.api.post('LoginIRS', 'PDALogin', loginInfo).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res);
            // If the API returned a successful response, mark the user as logged in
            if (res.Message == '') {
                _this._loggedIn(loginInfo);
                _this.saveLoginInfor(loginInfo);
                _this.api._sessionId = res.Content;
            }
            else {
                console.error('ERROR', res.Message);
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
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* Settings */], __WEBPACK_IMPORTED_MODULE_4__http_client_http_helper__["a" /* HttpClientHelper */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(36);
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
            var p, k, str;
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
                str = this.url + '/' + this._controller + '/' + action;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HttpClientHelper);

//# sourceMappingURL=http-helper.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.js.map