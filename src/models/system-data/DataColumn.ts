import { DataTable } from './dataTable';
import { TypeCode } from '../../lib/Enums/RsaEnum';

export class DataColumn {

    constructor();
    constructor(columnName: string);
    constructor(columnName: string, dataType: TypeCode);
    constructor(columnName?: string, dataType: TypeCode = TypeCode.String) {
        if (dataType == null) {
            throw "DataType can not be null!";
        }

        this._columnName = columnName != null ? columnName : "";
        this.updateColumnType(dataType);

        // if ((null != expr) && (0 < expr.Length)) {
        //     // @perfnote: its a performance hit to set Expression to the empty str when we know it will come out null
        //     this.Expression = expr;
        // }
        //this.columnMapping = type;
    }


    private caption: string = null;
    private _columnName: string = null;
    table: DataTable = null;
    private dataType: TypeCode = null;
    private defaultValue = null;
    get Table(): DataTable {
        return this.table;
    }

    private updateColumnType(type: TypeCode) {
        this.dataType = type;
    }

    get DefaultValue(): object {
        return this.defaultValue;
    }

    set DefaultValue(value: object) {
        if (this.defaultValue == null || !(this.DefaultValue == value)) {
            let newDefaultValue: object = (value == null) ? null : value;
            let defaultValue = newDefaultValue;
        }
    }
    get Caption(): string {
        return (this.caption != null) ? this.caption : this._columnName;
    }

    set Caption(value: string) {
        if (value == null)
            value = "";

        if (this.caption == null || !this.caption.localeCompare(value)) {
            this.caption = value;
        }
    }

    get ColumnName(): string {
        return this._columnName;
    }
    set ColumnName(value: string) {
        try {
            if (value == null) {
                value = "";
            }

            if (!this._columnName.localeCompare(value)) {
                if (this.table != null) {
                    if (value.length == 0)
                        throw "Column Name is required!";

                    //this.table.Columns.RegisterColumnName(value, this);
                    //if (this._columnName.length != 0)
                    //this.table.Columns.UnregisterName(_columnName);
                }
            }
            this._columnName = value;

        }
        catch (error) {
            throw (error);
        }
    }

    get DataType(): TypeCode {
        return this.dataType;
    }

    set DataType(value: TypeCode) {
        if (this.dataType != value) {
            // if (HasData) {
            //     throw ExceptionBuilder.CantChangeDataType();
            // }
            if (value == null) {
                throw "DataType can not be null";
            }
            let typeCode = typeof (value);
            // if (DataStorage.ImplementsINullableValue(typeCode, value)) {
            //     throw ExceptionBuilder.ColumnTypeNotSupported();
            // }
            // if (table != null && IsInRelation()) {
            //     throw ExceptionBuilder.ColumnsTypeMismatch();
            // }


            this.updateColumnType(value);
        }
    }

    // private get HasData(): Boolean {
    //         return (_storage != null);
    // }

    setTable(table: DataTable) {
        if (this.table != table) {
            this.table = table;
            //_storage = null; // empty out storage for reuse.
        }
    }

    clone(): DataColumn {
        let clone: DataColumn = new DataColumn();
        // set All properties
        //            clone.columnMapping = columnMapping;

        clone.caption = this.caption;
        clone.ColumnName = this.ColumnName;
        clone.DataType = this.DataType;
        clone.defaultValue = this.defaultValue;

        return clone;
    }
}