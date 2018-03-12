import { DataTable } from './dataTable';
import { DataColumn } from './dataColumn';
import { DataColumnCollection } from './dataColumnCollection';

export class DataRow {
    constructor();
    constructor(builder: DataRowBuilder);
    constructor(builder?: DataRowBuilder) {
        //tempRecord = builder._record;
        this._table = builder._table;
        this._columns = this._table.Columns;
    }
    private _table: DataTable;
    private _columns: DataColumnCollection;

    get Table(): DataTable {
        return this._table;
    }


    list: any[] = [];
    assign(colName: string, val) {
        try {
            for (var j = 0; j < this._table.Columns.Count; j++) {
                var col: DataColumn = this._table.Columns.List[j];

                if (col.ColumnName == colName) {
                    this.list[j] = val;
                }
            }
        } catch (error) {
            throw (error);
        }
    }

    getRowValue(colName: string): any {
        try {
            for (var j = 0; j < this._table.Columns.Count; j++) {
                var col: DataColumn = this._table.Columns.List[j];

                if (col.ColumnName == colName) {
                    return this.list[j];
                }
            }
        } catch (error) {
            throw (error);
        }
    }
}

export class DataRowBuilder {
    _table: DataTable;
    _record: number;

    constructor(table: DataTable, record: number) {
        this._table = table;
        this._record = record;
    }
}
