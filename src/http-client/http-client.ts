import { Injectable } from '@angular/core';
import { ICommonClient, CommonsClient } from './common-client';
import { PickingClient } from './picking-client';

export interface IHttpClient {
    Commons: ICommonClient;
    Picking: PickingClient;
}

@Injectable()
export class HttpClientRepository implements IHttpClient {
    constructor(public pickingClient:PickingClient) {

    }

    public get Commons() {
        return new CommonsClient();
    }

    public get Picking() {
        return this.pickingClient;
    }
}