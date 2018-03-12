export class ApzStringBuilder
{
    _parts = [];
    value : string;
    
    constructor(valueText) {
		this.Append(valueText, 0);
	};

	Append(value, count) {
		var results = true;
		// if value is undefined.
		if (typeof value === 'undefined') {
			results = false;
		} else {
			var c = count > 0 ? count : 1;
            for (var i = 0; i < c; i++) 
            {
				this._parts.push(value);
			}
		}
		return results;
    };
    
	AppendLine(value) {
		return this.Append(value + '\r\n', 0);
    };
    
	Clear() {
		if (this._parts.length > 0) {
			this._parts.splice(0, this._parts.length);
		}
    };
    
	IsEmpty() {
		return this._parts.length === 0;
    };
    
	ToString(delimiter) {
		return this._parts.join(delimiter || '');
    };
    
	ToArray(delimiter) {
		return this._parts;
	};
};
