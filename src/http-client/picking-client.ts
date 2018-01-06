
import { Injectable } from '@angular/core';
import { HttpClientHelper } from './http-helper';

@Injectable()
export class PickingClient{
  _controller = 'Picking';
  constructor(public helper: HttpClientHelper) {
    helper._controller = this._controller;
  }

  public LoadBatchLine(docEntry: number, lineNum: number) {
    return this.helper.getAsyncDataSet('LoadBatchLine', [{ name: 'docEntry', value: docEntry }, { name: 'lineNum', value: lineNum }]);
  }

  public getItem(barcode: string) {
    //return this.helper.getDataSet('GetItemByBarcode', [{ name: 'barcode', value: barcode }]);
  }

}
