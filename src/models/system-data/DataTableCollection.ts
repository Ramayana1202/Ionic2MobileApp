import { DataTable } from './dataTable';
import { DataSet } from './dataSet';

export class DataTableCollection {
    constructor();
    constructor(dataSet: DataSet);
    constructor(dataSet?: DataSet) {
        this.dataSet = dataSet;
    }
    private readonly _list: DataTable[] = [];
    private readonly dataSet: DataSet = null;
    private defaultNameIndex: number = 1;

    get List(): DataTable[] {
        return this._list;
    }

    get DataSet(): DataSet {
        return this.dataSet;
    }
    getTable(index: number): DataTable;
    getTable(name: string): DataTable;
    getTable(value: any): DataTable {

        if (typeof value === "string") {
            for (var i = 0; i < this._list.length; i++) {
                let table: DataTable = this._list[i];
                if (table.TableName == name)
                    return table;
            }
            return null;
        }
        else {
            return this._list[value];
        }
    }

    add(): DataTable;
    add(tableName: string): DataTable;
    add(table: DataTable);

    add(value?: any): DataTable {
        try {
            if (value != null) {
                if (value instanceof DataTable) {
                    this.baseAdd(value);
                    this.arrayAdd(value);
                } else {
                    let table: DataTable = new DataTable(value);
                    return table;
                }
            }
            else {
                let table: DataTable = new DataTable();
                this.add(table);
                return table;
            }
        } catch (error) {
            throw (error);
        }

    }

    private arrayAdd(table: DataTable) {
        try {
            this._list.push(table);
        } catch (error) {
            throw (error);
        }
    }

    private baseAdd(table: DataTable) {
        try {
            if (table == null)
                throw "table can not be null!";
            if (table.DataSet == this.dataSet)
                throw "this table already exists in the dataset!";
            if (table.DataSet != null)
                throw "this table belong to other dataset!";

            if (table.TableName.length == 0)
                table.TableName = this.assignName();
            //else {
            // if (NamesEqual(table.TableName, dataSet.DataSetName, false, dataSet.Locale) != 0 && !table.fNestedInDataset)
            //    throw ExceptionBuilder.DatasetConflictingName(dataSet.DataSetName);
            // RegisterName(table.TableName, table.Namespace);
            //}

            table.setDataSet(this.dataSet);
        } catch (error) {
            throw (error);
        }
    }
    
    private assignName(): string {
        if (this._list.length == 0)
            return "Table";
        else
            return "Table" + this._list.length;
    }

    addRange(tables: DataTable[]) {
        try {
            if (tables != null) {
                tables.forEach(table => {
                    if (table != null) {
                        this.add(table);
                    }
                })
            }
        }
        catch (error) {
            throw error;
        }
    };

    clear() {
        try {
            this._list.splice(0, this._list.length);
        } catch (error) {
            throw (error);
        }
    }
    remove(name: string);
    remove(table: DataTable);
    remove(value: any) {
        if (value != null && value instanceof DataTable) {
            this.baseRemove(value);
        }
        else {
            try {
                let dt: DataTable = this[value];
                if (dt == null)
                    throw "table" + value + " not in the dataset";
                this.remove(dt);
            } catch (error) {
                throw (error);
            }
        }

    }

    baseRemove(table: DataTable) {
        try {
            for (var i = 0; i < this._list.length; i++) {
                if (this._list[i] == table) {
                    this._list.splice(i, 1);
                }
            }
        } catch (error) {
            throw (error);
        }
    }

    unRegisterName(name: string) {
        this.defaultNameIndex--;
    }
}