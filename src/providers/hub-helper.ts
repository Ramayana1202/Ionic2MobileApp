import { hubConnection } from 'signalr-no-jquery';
import { HttpClientHelper } from '../http-client/http-helper';
import { Injectable } from '@angular/core';

@Injectable()
export class HubHelper {
    hubName: string;
  
  
    domain: string;
  
    private hubEvent: string;
    private clientCallback: (...data: any[]) => void;
  
    //hubProxy: SignalR.Hub.Proxy;

    hubProxy: any;
    //private connection: SignalR.Hub.Connection;

  private connection: any;
  
  hubConnection;
  
  
    constructor() {
     
      this.hubConnection = hubConnection;
    }
  
    addEvent(eventName: string, method: (...data: any[]) => void) {
      this.hubEvent = eventName;
      this.clientCallback = method;
  
      // if(this.hubProxy){     
      // this.hubProxy.on(this.hubEvent, this.clientCallback);
      // }
    }
  
    start() {
  
      this.connection = hubConnection(this.domain, { useDefaultPath: false });
      //this.taskHub=this.connection.createHubProxy('notificationHub');
      this.hubProxy = this.connection.createHubProxy(this.hubName);
      // this.taskHub.on("UpdateNotification", (content) => {console.log(content.Detail);});
      this.hubProxy.on(this.hubEvent, this.clientCallback);
      // this.taskHub.on("broadcastMessage", (content,name) => {console.log(content);});
  
      return this.connection.start();
  
    }
  
  }