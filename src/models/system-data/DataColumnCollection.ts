import { DataColumn } from './dataColumn';
import { DataTable } from './dataTable';
import { Type } from '@angular/compiler/src/output/output_ast';
import { TypeCode } from '../../lib/Enums/RsaEnum';

export class DataColumnCollection {
    constructor();
    constructor(table: DataTable);
    constructor(table?: DataTable) {
        this.table = table;
        this.columnFromName = {};
    }

    private readonly columnFromName: { [name: string]: DataColumn; };
    get List(): DataColumn[] {
        return this._list;
    }

    get Count(): number {
        return this._list.length;
    }

    private readonly _list: DataColumn[] = [];
    getColumn(index: number): DataColumn;
    getColumn(name: string): DataColumn;
    getColumn(value: any): DataColumn {
        try {
            if (typeof value === "number") {
                return this._list[value];
            }
            else {
                if (null == value) {
                    "Column Name can not be null!"
                }
                let column: DataColumn;
                if ((!(this.columnFromName.hasOwnProperty(value))) || (column == null)) {
                    for (var i = 0; i < this.Count; i++) {
                        column = this._list[i];
                        if (column.ColumnName == value) {
                            return column;
                        }
                    }
                }
                return null;
            }
        } catch (error) {
            throw (error);
        }
    }

    private table: DataTable;

    addColumn(column: DataColumn) {
        this.addAt(-1, column);
    }

    addAt(index: number, column: DataColumn) {
        try {
            if (column != null) {
                // if (table.XmlText != null && table.XmlText != column)
                //     throw ExceptionBuilder.CannotAddColumn3();
                // if (table.ElementColumnCount > 0)
                //     throw ExceptionBuilder.CannotAddColumn4(column.ColumnName);
                this.baseAdd(column);
                if (index != -1)
                    this.arrayAdd(column, index);
                else
                    this.arrayAdd(column);

                //this.table.XmlText = column;
            }
        } catch (error) {
            throw (error);
        }
    }

    private baseAdd(column: DataColumn) {
        if (column == null)
            throw "Can not add null!";
        if (column.table == this.table)
            throw "This column is existed in the table!";
        if (column.table != null)
            throw "This column has belong to other table";

        if (column.ColumnName.length == 0) {
            column.ColumnName = this.assignName();
        }
        this.registerColumnName(column.ColumnName, column);
        try {
            column.setTable(this.table);
            // if (!table.fInitInProgress && column.Computed) {
            //     if (column.DataExpression.DependsOn(column)) {
            //         throw ExceptionBuilder.ExpressionCircular();
            //     }
            // }

            // if (0 < table.RecordCapacity) {
            //     // adding a column to table with existing rows
            //     column.SetCapacity(table.RecordCapacity);
            // }

            // fill column with default value.
            // for (int record = 0; record < table.RecordCapacity; record++) {
            //     column.InitializeRecord(record);
            // }

            if (this.table.DataSet != null) {
                //column.OnSetDataSet();
            }
        }
        catch (error) {
            throw error;
        }
    }

    private assignName(): string {
        if (this._list.length == 0)
            return "Column";
        else
            return "Column" + this._list.length;
    }
    registerColumnName(name: string, column: DataColumn) {
        this.columnFromName[name] = column;
    }

    unRegisterName(name: string) {
        delete this.columnFromName.name;
    }

    add(columnName: string, type: TypeCode): DataColumn;
    add(columnName: string): DataColumn;
    add(): DataColumn;

    add(columnName?: string, type?: TypeCode): any {
        let column: DataColumn
        if (type != null && columnName != null) {
            column = new DataColumn(columnName, type);
        }
        else
            if (columnName != null && type == null) {
                column = new DataColumn(columnName);
            }
            else {
                column = new DataColumn();
            }
        this.addColumn(column);
        return column;
    }

    arrayAdd(column: DataColumn): void;
    arrayAdd(column: DataColumn, index: number): void;
    arrayAdd(column: DataColumn, index?: number): void {
        try {
            if (index != null) {
                this._list.splice(index, 0, column);
            }
            else
                this._list.push(column);
            //column.SetOrdinalInternal(_list.Count - 1);
        } catch (error) {

        }
    }

    addRange(columns: DataColumn[]) {
        try {
            if (columns != null) {
                columns.forEach(column => {
                    if (column != null) {
                        this.addColumn(column);
                    }
                });
            }
        } catch (error) {
            throw (error);
        }
    }

    clear() {
        try {
            let oldLength: number = this._list.length;

            let columns: DataColumn[] = new DataColumn[oldLength];
            //this._list.CopyTo(columns, 0);

            //OnCollectionChanging(RefreshEventArgs);

            //    if (table.fInitInProgress && delayedAddRangeColumns != null) {
            //        delayedAddRangeColumns = null;
            //    }

            this._list.splice(0, oldLength);
            //this.table.ElementColumnCount = 0;
            //OnCollectionChanged(RefreshEventArgs);
        } catch (error) {
            throw (error);
        }
    }

    remove(column: DataColumn) {


        //OnCollectionChanging(new CollectionChangeEventArgs(CollectionChangeAction.Remove, column));
        this.baseRemove(column);
        this.arrayRemove(column);
        //OnCollectionChanged(new CollectionChangeEventArgs(CollectionChangeAction.Remove, column));
        // if the column is an element decrease the internal dataTable counter
        // if (column.ColumnMapping == MappingType.Element)
        //     table.ElementColumnCount --;
    }

    private baseRemove(column: DataColumn) {
        // remove
        //if (column.errors > 0) {
        for (var i = 0; i < this.table.Rows.Count; i++) {
            //this.table.Rows[i].ClearError(column);
        }
        //}
        this.unRegisterName(column.ColumnName);
        column.setTable(null);
    }

    private arrayRemove(column: DataColumn) {
        //column.SetOrdinalInternal(-1);
        try {
            for (var i = 0; i < this.Count; i++) {
                if (this._list[i] == column) {
                    this._list.splice(i, 1);
                }
            }
        } catch (error) {
            throw (error);
        }

        // let count: number = this._list.length;
        // for (var i =0; i < count; i++) {
        //     (this._list[i]).SetOrdinalInternal(i);
        // }
    }

}