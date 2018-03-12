
export function ArrayReverse(array : any[], index : number, length : number) {
	index = index ? index : 0;
	length = length ? length : array.length;
	var iArray = array.slice(index, index + length).reverse();
	for (var i = 0; i < length; i++) array[i + index] = iArray[i];
};

export function ArrayCopy1(sourceArray, destinationArray, length) {
	for (var i = 0; i < length; i++) {
		destinationArray[i] = sourceArray[i];
	}
};

export function ArrayCopy2(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
	for (var i = 0; i < length; i++) {
		destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
	}
};

export function ArrayFillMultiDimensional(array, dimensions, value) : any[] {
	var x;
	if (dimensions.length > 0) {
		for (x = 0; x < array.length; x++) {
			var ar = new Array(dimensions[0]);
			var dims = dimensions.slice(1);
			ArrayFillMultiDimensional(ar, dims, value);
			array[x] = ar;
		}
	} else {
		// if this array is placed at last level.
		for (x = 0; x < array.length; x++) {
			// set default value.
			array[x] = value;
		}
	}
	return array;
};

export function ArrayGetMultiDimensional(dimensions : any[], value) : any[] {
	var array = new Array(dimensions[0]);
	return ArrayFillMultiDimensional(array, dimensions.slice(1), value);
};

export function ArrayClear(array : any[], index : number, length : number) {
	for (var i = 0; i < length; i++) array[i + index] = 0;
};

export function BufferBlockCopy(src : any[], srcOffset : number, dst : any[], dstOffset : number, count : number) {
	for (var i = 0; i < count; i++) {
		dst[dstOffset + i] = src[srcOffset + i];
	}
};

/*
export function UTF8GetBytes(s : string) {
    var bytes = [];
    var c = 0;
    for (var i = 0; i < s.length; i++) {
        c = s.charCodeAt(i);
        // Convert char code to bytes.
        if (c < 0x80) {
            bytes.push(c);
        } else if (c < 0x800) {
            bytes.push(0xC0 | c >> 6);
            bytes.push(0x80 | c & 0x3F);
        } else if (c < 0x10000) {
            bytes.push(0xE0 | c >> 12);
            bytes.push(0x80 | c >> 6 & 0x3F);
            bytes.push(0x80 | c & 0x3F);
        } else if (c < 0x200000) {
            bytes.push(0xF0 | c >> 18);
            bytes.push(0x80 | c >> 12 & 0x3F);
            bytes.push(0x80 | c >> 6 & 0x3F);
            bytes.push(0x80 | c & 0x3F);
        } else {
            // If char is unknown then push "?".
            bytes.push(0x3F);
        }
    }
    return bytes;
};
*/

export function UnicodeEncoderGetBytes(s : string) : any[] {
	var bytes = [];
	var c = 0;
	for (var i = 0; i < s.length; i++) {
		c = s.charCodeAt(i);
		if (c > 0xFFFF) {
			bytes.push(0xDC00 | c & 0x3FF);
			bytes.push(0xD7C0 + (c >> 10));
		} else {
			bytes.push(c & 0xFF);
			bytes.push(c >> 8);
		}
	}
	return bytes;
};

export function UnicodeEncoderGetString(bytes : any[]) : string {
	var s = "";
	var b1 = 0;
	var b2 = 0;
	for (var i = 0; i < bytes.length; i++) {
		b1 = bytes[i]; i++;
		b2 = bytes[i];
		s += String.fromCharCode(b2 << 8 | b1);
	}
	return s;
};

export class ApzRandom
{
	constructor() {
	};

	Next(minValue, maxValue) {
		switch (arguments.length) {
			case 0:
				maxValue = Math.pow(2, 31);
				minValue = 0;
				break;
			case 1:
				maxValue = arguments[0];
				minValue = 0;
				break;
			case 2:
				break;
			default:
				return 0;
		}
		var number = minValue;
		if (maxValue > minValue) {
			number = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
		}
		return number;
	};
	
	NextBytes(buffer) {
		var length = buffer.length;
		for (var i = 0; i < length; i++) {
			buffer[i] = this.Next(0, 256);
		}
		return buffer;
	};
};

export function ApzByte(para : number) : any[]
{
	let dims = [];
	dims.push(para);
	// Return multi-dimensional array filled with zero.
	return ArrayGetMultiDimensional(dims, 0);
};
