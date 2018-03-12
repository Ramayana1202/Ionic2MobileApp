import { DataRow, DataRowBuilder } from './dataRow';
import { DataRowCollection } from './dataRowCollection';
import { DataColumnCollection } from './dataColumnCollection';
import { DataSet } from './dataSet';
export class DataTable {
    constructor();
    constructor(tableName: string);
    constructor(tableName?: string) {
        // this.obj = {
        //     'Apz-Columns': this._columns,
        //     'Apz-Rows': this._rows
        // }
        this.tableName = tableName == null ? "" : tableName;
        this.rowCollection = new DataRowCollection(this);
        this.columnCollection = new DataColumnCollection(this);
        this.rowBuilder = new DataRowBuilder(this, -1);
    }

    private dataSet: DataSet;
    private defaultView: DataView = null;
    readonly rowCollection: DataRowCollection;

    // columns
    readonly columnCollection: DataColumnCollection;

    // index mgmt
    //internal readonly List<Index> indexes;

    // props
    private tableName: string = "";
    //internal string tableNamespace = null;
    //private string tablePrefix = "";
    //internal DataExpression displayExpression;
    //internal bool fNestedInDataset = true;
    private readonly rowBuilder: DataRowBuilder;
    //private obj: {};

    get Columns() {
        return this.columnCollection;
    }

    get Rows() {
        return this.rowCollection;
    }

    get DataSet(): DataSet {
        return this.dataSet;
    }

    get TableName(): string {
        return this.tableName;
    }

    set TableName(value: string) {
        if (value == null) {
            value = "";
        }
        if (!this.tableName.localeCompare(value)) {
            if (this.dataSet != null) {
                if (value.length == 0)
                    throw "Table Name can not be empty!";
                if (this.dataSet.DataSetName.localeCompare(value))
                    throw "Confict DataSet Name";

                if (this.tableName.length != 0) {
                    this.dataSet.Tables.unRegisterName(value);
                }
            }
            this.tableName = value;
        }
    }

    newRow(): DataRow {
        // try {
        //     let row: DataRow = new DataRow();
        //     for (var j = 0; j < this._columns.items.length; j++) {
        //         var col = this._columns.items[j];
        //         row.items.push(null);
        //     }
        //     row.Table = this;
        //     return row;
        // } catch (error) {
        //     console.log(error);
        // }
        let row: DataRow = this.NewRowFromBuilder(this.rowBuilder);

        return row;
    }
    protected NewRowFromBuilder(builder: DataRowBuilder): DataRow {
        return new DataRow(builder);
    }

    addRow(row: DataRow, proposedID?: number) {
        this.insertRow(row);
    }

    insertRow(row: DataRow) {
        this.Rows.arrayAdd(row);
    };

    copyRow(table: DataTable, row: DataRow) {
        try {
            if (row == null)
                return;
            table.Rows.add(row);
        } catch (error) {
            throw (error);
        }
    }

    clone();
    clone(cloneDS: DataSet);
    clone(cloneDS?: DataSet): DataTable {
        if (cloneDS instanceof DataSet) {
            try {
                if (cloneDS != null) {
                    let clone: DataTable = new DataTable();
                    if (clone.Columns.Count > 0) // Microsoft : To clean up all the schema in strong typed dataset.
                        clone.reset();
                    return this.cloneTo(clone, cloneDS);
                }
            } catch (error) {
                throw error;
            }
        }
        else
            return this.clone(null);
    }

    reset() {
        try {
            this.clear();
            this.Columns.clear();
            //indexes.Clear();
        }
        catch (error) {
            throw (error);
        }
    }

    private cloneTo(clone: DataTable, cloneDS: DataSet): DataTable {
        try {
            clone.tableName = this.tableName;
            let clmns: DataColumnCollection = this.Columns;
            for (var i = 0; i < clmns.Count; i++) {
                clone.Columns.addColumn(clmns.List[i].clone());
            }
            return clone;
        } catch (error) {
            throw (error);
        }

    }
    copy(): DataTable {
        try {
            //Clone()
            let copyTable: DataTable = this.clone();

            this.Rows.List.forEach(row => {
                this.copyRow(copyTable, row);
            })
            return copyTable;
        } catch (error) {
            throw (error);
        }
    }

    clear() {
        try {
            this.Rows.arrayClear();
        } catch (error) {
            throw (error);
        }
    }

    setDataSet(dataSet: DataSet) {
        if (this.dataSet != dataSet) {
            this.dataSet = dataSet;
        }
    }

    hasRows(): boolean{
        return this.Rows.Count >0;
    }

    hasColumns(): boolean{
        return this.Columns.Count >0;
    }

    hasData(): boolean{
        return this.hasColumns() && this.hasRows();
    }
}