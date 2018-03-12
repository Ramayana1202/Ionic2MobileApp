import { DataRow } from './dataRow';
import { DataTable } from './dataTable';

export class DataRowCollection {
    constructor();
    constructor(table: DataTable);
    constructor(table?: DataTable) {
        if (table != null)
            this.table = table;
    }
    private readonly table: DataTable;

    private readonly list: DataRow[] = [];
    get List(): DataRow[] {
        return this.list;
    }
    get Count(): number {
        return this.list.length;
    }

    getRow(index: number): DataRow {
        try {
            return this.list[index];
        } catch (error) {
            throw (error);
        }
    }

    add(row: DataRow): void;
    add(values: any[]): DataRow;
    add(value: any): any {
        if (value instanceof DataRow) {
            this.table.addRow(value, -1);
            return;
        }
        else {
            try {
                let newRow: DataRow;
                for (let index = 0; index < value.length; index++) {
                    newRow.list.push(value[index]);
                }
                //newRow.Table = this._table;
                this.list.push(newRow);
                return newRow;
            } catch (error) {
                throw (error);
            }
        }
    }

    arrayAdd(row: DataRow) {
        try {
        this.list.push(row);            
        } catch (error) {
            throw (error);
        }
    }

    clear() {
        try {
            this.table.clear();
        } catch (error) {
            throw (error);
        }
    }

    arrayClear() {
        try {
            this.list.splice(0, this.Count);
        } catch (error) {
            throw (error);
        }
    }

    remove(row: DataRow) {
        try {
            for (var i = 0; i < this.Count; i++) {
                if (this.list[i] == row) {
                    this.list.splice(i, 1);
                }
            }
        } catch (error) {
            throw (error);
        }
    }
}