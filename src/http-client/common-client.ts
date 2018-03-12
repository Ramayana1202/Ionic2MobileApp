
export interface ICommonClient {
    getAllEmployee(): any;
}

import { Injectable } from '@angular/core';
import { Api } from '../providers/api';

@Injectable()
export class CommonsClient implements ICommonClient {
    
    constructor(private api: Api) {
        
    }
    public  getAllEmployee() {
        console.log('get all employee');
    }

     async getTableStructure(tableName: string)
    {
        var params: Array<{ name: string, value: string }> = [];
        params.push( {name : "table", value : tableName});
         var result = await this.api.getDataSet("BusinessMasterData", "GetBPTableStructure", params);
         var dtStructure = (result as Array<any>)[0] as Array<{ Name: string, Type: String, dflt:any }>; 
        //dt is array contains column property with property [Name] [Type] and [dflt]
        //=>loop through dt
         var obj = {};
         for (var i = 0; i <dtStructure.length; i++){
             //foreach column property
             
             var colInfo = dtStructure[i];
             //add to dtData a element
             //with name = colInfo.Name
             //and type = colInfo.type
             obj[colInfo.Name] = null;
         } 
         var dtData = [obj];
        // 
         return dtData; 
    }

    async getTableColumns(tableName:string){
        var params: Array<{ name: string, value: string }> = [];
        params.push( {name : "table", value : tableName});
         var result = await this.api.getAsyncDataSet("BusinessMasterData", "GetBPTableStructure", params);
         return result;
    }

    async getUserList() {
        try
        {
          var result = await this.api.getDataSet("CFL", "GetUserList");
          return result;
        }
        catch (error) {
          console.log(error.message);
        }
        return null;
    }
    
    async loadAttachment(absEntry:number) {
        try {
            if (!absEntry) return null;
          var params: Array<{ name: string, value: string }> = [];
        
          params.push({ name: "absEntry", value: absEntry.toString() });
    
            var result = await this.api.getDataTable("IssueForProduction", "LoadAttachFiles", params);
            return result;
          }  
          
        catch (error) {
          console.log(error.message);
        
        }

    }
    
    async getUserLoginInfo(userName: string) {
        try {
            if (!userName) return null;
          var params: Array<{ name: string, value: string }> = [];
        
          params.push({ name: "madk", value: userName.toString() });
    
            var result = await this.api.getDataTable("Users", "GetUserLogin", params);
            return result;
          }  
          
        catch (error) {
          console.log(error.message);
        
        }

        
    }
    
}
