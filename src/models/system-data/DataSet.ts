import { DataTableCollection } from './dataTableCollection';
import { DataTable } from './dataTable';
export class DataSet {
    constructor();
    constructor(dataSetName: string)
    constructor(dataSetName?: string) {
        // for (let index = 0; index < this.DataTables.items.length; index++) {
        //     obj['Table' + index] = this.DataTables.items[index];
        this.tableCollection = new DataTableCollection(this);
        if (dataSetName != null)
            this.DataSetName = dataSetName;
        // }
    }
    private readonly tableCollection: DataTableCollection;
    private dataSetName: string = "NewDataSet";

    get Tables(): DataTableCollection {
        return this.tableCollection;
    }
    get DataSetName(): string {
        return this.dataSetName;
    }

    set DataSetName(value: string) {
        if (value != this.dataSetName) {
            if (value == null || value.length == 0)
                throw "Can not set the dataSet Name to empty!";

            this.dataSetName = value;
        }
    }
    copy(): DataSet {
        try {
            //Clone() trước rồi copy
            let dsNew: DataSet = this.clone();
            this.Tables.List.forEach(table => {
                let destTable: DataTable = dsNew.Tables.getTable(table.TableName);

                table.Rows.List.forEach(row => {
                    table.copyRow(destTable, row);
                })
            })

            return dsNew;
        } catch (error) {
            throw (error);
        }
    }

    public clone(): DataSet {
        try {
            let ds: DataSet = new DataSet();

            if (ds.Tables.List.length > 0)
                ds.reset();

            //copy some original dataset properties
            ds.DataSetName = this.DataSetName;
            // ...Tables...
            let tbls: DataTableCollection = this.Tables;
            for (var i = 0; i < tbls.List.length; i++) {
                let dt: DataTable = tbls[i].clone(ds);
                //dt.tableNamespace = tbls[i].Namespace; // hardcode the namespace for a second to not mess up
                // DataRelation cloning.
                ds.Tables.add(dt);
            }
            return ds;
        } catch (error) {
            throw (error);
        }
    }

    reset() {
        this.clear();
        this.Tables.clear();
    }

    clear() {
        try {
            for (var i = 0; i < this.Tables.List.length; i++)
                this.Tables.List[i].clear();
        } catch (error) {
            throw error;
        }
    }
}