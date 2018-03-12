import { Injectable } from '@angular/core';
import { ICommonClient, CommonsClient } from './common-client';
import { PickingClient } from './picking-client';
import { TaskProvider } from '../providers/task/task';
import { EventProvider } from '../providers/event/event';
import { Common } from '../providers/common';
import { ProjectProvider } from '../providers/project/project';
import { CflProvider } from '../providers/cfl/cfl';
import { CommentProvider } from '../providers/comment/comment';
import { CalendarProvider } from '../providers/calendar/calendar';


@Injectable()
export class HttpClient {
    constructor(private pickingClient:PickingClient,
        private taskClient: TaskProvider,
        private eventClient: EventProvider,
        private commonClient: CommonsClient,
        private projectClient: ProjectProvider,
        private cflClient: CflProvider,
        private commentClient:CommentProvider,
        private calendarClient: CalendarProvider
      ) {

    }


    public get Picking() {
        return this.pickingClient;
    }

    public get Task(){
        return this.taskClient;
    }

    public get Event()
    {
      return this.eventClient;
    }

    public get Common()
    {
        return this.commonClient;
    }

    public get Project()
    {
        return this.projectClient;
    }

    public get CFL() {
        return this.cflClient;
    }

    public get Comment() {
        return this.commentClient;
    }

    public get Calendar() {
        return this.calendarClient;
    }
}

export class HttpResult {

    constructor(message: string = "", content: any = "") {
        this.Message = message;
        this.Content = content;
    }
    Content: any;
    Message: string;
}
  

