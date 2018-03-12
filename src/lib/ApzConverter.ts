import * as RsaEmun from './Enums/RsaEnum';

class Base64Array
{
	S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	CA = [];
    IA = [];
    
	constructor() {
		var c = "";
		for (var i = 0; i < this.S.length; i++) {
			c = this.S.charAt(i);
			this.CA[i] = c;
			this.IA[c] = i;
		}
	};
};

export function FromBase64String(s : string, fix : boolean) : any[] {
	var B64 = new Base64Array();
	if (fix) {
		var regex = new RegExp("[^" + B64.S + "]", "g");
		s = s.replace(regex, "");
	}
	var sLen = s.length;
	if (sLen === 0) return new Array(0);
	var sIx = 0, eIx = sLen - 1;
	var pad = s.charAt(eIx) === '=' ? s.charAt(eIx - 1) === '=' ? 2 : 1 : 0;  // Count '=' at end.
	var cCnt = eIx - sIx + 1;
	var sepLn = s.charAt(76) === '\r' ? cCnt / 78 : 0;
	var sepCnt = sLen > 76 ? sepLn << 1 : 0;
	var len = ((cCnt - sepCnt) * 6 >> 3) - pad;
	var bytes = new Array(len);
	var d = 0;
	var eLen = Math.floor(len / 3) * 3;
	var i;
	for (var cc = 0; d < eLen;) {
		i = B64.IA[s.charAt(sIx++)] << 18 |
			B64.IA[s.charAt(sIx++)] << 12 |
			B64.IA[s.charAt(sIx++)] << 6 |
			B64.IA[s.charAt(sIx++)];
		bytes[d++] = i >> 16;
		bytes[d++] = (i & 0xFFFF) >> 8;
		bytes[d++] = i & 0xFF;
		if (sepCnt > 0 && ++cc === 19) {
			sIx += 2;
			cc = 0;
		}
	}
	if (d < len) {
		i = 0;
		for (var j = 0; sIx <= eIx - pad; j++) {
			i |= B64.IA[s.charAt(sIx++)] << 18 - j * 6;
		}
		for (var r = 16; d < len; r -= 8) {
			var cropBits = Math.pow(2, r + 8) - 1;
			bytes[d++] = (i & cropBits) >> r;
		}
	}
	return bytes;
};

export function ToBase64String(b : any[], wrap : boolean) : string {
	var B64 = new Base64Array();
	var bLen = b ? b.length : 0;
	if (bLen === 0) return "";
	var eLen = Math.floor(bLen / 3) * 3;
	var cCnt = (bLen - 1) / 3 + 1 << 2;
	var dLen = cCnt + (wrap ? (cCnt - 1) / 76 << 1 : 0); // Length of returned array
	var dArr = new Array(dLen);
	for (var s = 0, d = 0, cc = 0; s < eLen;) {
		var i = (b[s++] & 0xff) << 16 | (b[s++] & 0xff) << 8 | b[s++] & 0xff;
		dArr[d++] = B64.CA[i >>> 18 & 0x3f];
		dArr[d++] = B64.CA[i >>> 12 & 0x3f];
		dArr[d++] = B64.CA[i >>> 6 & 0x3f];
		dArr[d++] = B64.CA[i & 0x3f];
		if (wrap && ++cc === 19 && d < dLen - 2) {
			dArr[d++] = '\r';
			dArr[d++] = '\n';
			cc = 0;
		}
	}
	var left = bLen - eLen; // 0 - 2.
	if (left > 0) {
		var j = (b[eLen] & 0xff) << 10 | (left === 2 ? (b[bLen - 1] & 0xff) << 2 : 0);
		dArr[dLen - 4] = B64.CA[j >> 12];
		dArr[dLen - 3] = B64.CA[j >>> 6 & 0x3f];
		dArr[dLen - 2] = left === 2 ? B64.CA[j & 0x3f] : '=';
		dArr[dLen - 1] = '=';
	}
	return dArr.join("");
};

export class BitConverter
{
	IsLittleEndian;
	me = this;
    cMask = {};
    sBits = {};
    
    constructor() {
        this.cMask[RsaEmun.TypeCode.Boolean] = 0x1;
        this.cMask[RsaEmun.TypeCode.Byte] = 0xFF;
        this.cMask[RsaEmun.TypeCode.SByte] = 0x7F;
        this.cMask[RsaEmun.TypeCode.Int16] = 0x7FFF;
        this.cMask[RsaEmun.TypeCode.Int32] = 0x7FFFFFFF;
        this.cMask[RsaEmun.TypeCode.UInt16] = 0xFFFF;
        this.cMask[RsaEmun.TypeCode.UInt32] = 0xFFFFFFFF;
        
        this.sBits[RsaEmun.TypeCode.Boolean] = 1;
        this.sBits[RsaEmun.TypeCode.Byte] = 8;
        this.sBits[RsaEmun.TypeCode.SByte] = 8;
        this.sBits[RsaEmun.TypeCode.Int16] = 16;
        this.sBits[RsaEmun.TypeCode.Int32] = 32;
        this.sBits[RsaEmun.TypeCode.UInt16] = 16;
        this.sBits[RsaEmun.TypeCode.UInt32] = 32;
		this.IsLittleEndian = this._isLittleEndian();
    };
    
	GetBytes(value, typeCode) {
		switch (typeof value) {
			case "boolean":
				return value ? [1] : [0];
			case "number":
				switch (typeCode) {
					case RsaEmun.TypeCode.Single: return this.GetBytesFromNumber(value, 32);
					case RsaEmun.TypeCode.Double: return this.GetBytesFromNumber(value, 64);
					case RsaEmun.TypeCode.Int16:
					case RsaEmun.TypeCode.UInt16: return this.GetBytesFromInt16Le(value);
					case RsaEmun.TypeCode.Int32:
					case RsaEmun.TypeCode.UInt32: return this.GetBytesFromInt32Le(value);
					default: return this.GetBytesFromInt32Le(value);
				}
			case "object":
				// Value is array of numbers.
				switch (typeCode) {
					case RsaEmun.TypeCode.Single: return this.GetBytesFromNumber(value, 32);
					case RsaEmun.TypeCode.Double: return this.GetBytesFromNumber(value, 64);
					case RsaEmun.TypeCode.Int16:
					case RsaEmun.TypeCode.UInt16:
					case RsaEmun.TypeCode.Int32:
					case RsaEmun.TypeCode.UInt32: return this.GetBytesFromInt32ArrayLe(value, 0, 0);
					default: return this.GetBytesFromInt32ArrayLe(value, 0, 0);
				}
			default:
				// Unknown type.
				break;
		}
    };
    
	ToSingle(value, startIndex) {
		var bytes = value.slice(startIndex, startIndex + 4);
		return this.ToNumber(bytes);
    };
    
	ToDouble(value, startIndex) {
		var bytes = value.slice(startIndex, startIndex + 8);
		return this.ToNumber(bytes);
    };
    
	ToBoolean(value, startIndex) {
		return value[startIndex] & 0x1 ? true : false;
    };
    
	ToInt16Le(value, startIndex) {
		return this.GetSigned(this.ToInt16ArrayLe(value, startIndex, 2)[0], RsaEmun.TypeCode.Int16);
    };
    
	ToInt16Be(value, startIndex) {
		return this.GetSigned(this.ToInt16ArrayBe(value, startIndex, 2)[0], RsaEmun.TypeCode.Int16);
    };
    
	ToUInt16Le(value, startIndex) {
		return this.GetUnsigned(this.ToInt16Le(value, startIndex), RsaEmun.TypeCode.Int16);
    };
    
	ToUInt16Be(value, startIndex) {
		return this.GetUnsigned(this.ToInt16Be(value, startIndex), RsaEmun.TypeCode.Int16);
    };
    
	ToInt32Le(value, startIndex) {
		return this.ToInt32ArrayLe(value, startIndex, 4)[0];
    };
    
	ToInt32Be(value, startIndex) {
		return this.ToInt32ArrayBe(value, startIndex, 4)[0];
    };

	ToUInt32Le(value, startIndex) {
		return this.GetUnsigned(this.ToInt32Le(value, startIndex), RsaEmun.TypeCode.Int32);
    };
    
	ToUInt32Be(value, startIndex) {
		return this.GetUnsigned(this.ToInt32Be(value, startIndex), RsaEmun.TypeCode.Int32);
    };
    
	_GetBytesFromInt(value, typeCode, bigEndian) {
        var b,m;
		var sizeBits = this.sBits[typeCode];
		var sizeBytes = (sizeBits ? sizeBits : 32) / 8;
		var bytes = new Array(sizeBytes);
		for (b = 0; b < sizeBytes; b++) {
			m = bigEndian
				? sizeBytes - 1 - b
				: b;
			bytes[m] = value >> b * 8 & 0xff;
		}
		return bytes;
    };
    
	GetBytesFromInt16Le(value) {
		return this._GetBytesFromInt(value, RsaEmun.TypeCode.Int16, false);
    };
    
	GetBytesFromInt16Be(value) {
		return this._GetBytesFromInt(value, RsaEmun.TypeCode.Int16, true);
    };
    
	GetBytesFromInt32Le(value) {
		return this._GetBytesFromInt(value, RsaEmun.TypeCode.Int32, false);
    };
    
	GetBytesFromInt32Be(value) {
		return this._GetBytesFromInt(value, RsaEmun.TypeCode.Int32, true);
    };
    
	GetBitsLe(array, typeCode) {
		var length = array.length;
		var bpn = this.sBits[typeCode];
		bpn = bpn ? bpn : 32;
		var bits = new Array(length * bpn);
		for (var i = 0; i < length; i++) {
			var value = array[i];
			for (var b = 0; b < bpn; b++) {
				bits[i * bpn + b] = value & 0x1;
				value = value >> 1;
			}
		}
		return bits;
    };
    
	GetBitsBe(array, typeCode) {
		var length = array.length;
		var bpn = this.sBits[typeCode];
		// Treat array as Int32[].
		bpn = bpn ? bpn : 32;
		var bits = new Array(length * bpn);
		for (var i = 0; i < length; i++) {
			var value = array[i];
			for (var b = 0; b < bpn; b++) {
				bits[i * bpn + bpn - 1 - b] = value & 0x1;
				value = value >> 1;
			}
		}
		return bits;
    };
    
	GetUnsigned(value, typeCode) {
		var results;
		var umask = this.cMask[typeCode + 1];
		// If value is number.
		if (typeof value === "number") {
			results = (value & umask) << 0 >>> 0;
		} else {
			// Value is array of numbers.
			umask = this.cMask[typeCode + 1];
			var length = value.length;
			results = new Array(length);
			for (var i = 0; i < length; i++) {
				var n = value[i];
				results[i] = n & umask << 0 >>> 0;
			}
		}
		return results;
    };
    
	GetSigned(value, typeCode) {
		var results;
		var umask = this.cMask[typeCode];
		var smask = this.cMask[typeCode - 1];
		// If value is number.
		if (typeof value === "number") {
			results = value > smask ? -(-value & umask) : value;
		} else {
			// Value is array of numbers.
			var length = value.length;
			results = new Array(length);
			for (var i = 0; i < length; i++) {
				var n = value[i];
				results[i] = n > smask ? -(-n & umask) : n;
			}
		}
		return results;
    };
    
    _GetBytesFromIntArray(array, startIndex, count, typeCode, bigEndian) {
		var sizeBits = this.sBits[typeCode];
		var sizeBytes = (sizeBits ? sizeBits : 32) / 8;
		startIndex = startIndex ? startIndex : 0;
		count = count > 0  ? count : array.length - startIndex;
		var bytes = new Array(count * sizeBytes);
		var i, b, m;
		var length = startIndex + count;
		for (i = startIndex; i < length; i++) {
			for (b = 0; b < sizeBytes; b++) {
				m = bigEndian
					? i * sizeBytes + sizeBytes - 1 - b
					: i * sizeBytes + b;
				bytes[m] = array[i] >> b * 8 & 0xff;
			}
		}
		return bytes;
    }
    
    GetBytesFromInt16ArrayLe(value, startIndex, count) {
		return this._GetBytesFromIntArray(value, startIndex, count, RsaEmun.TypeCode.Int16, false);
    };
    
	GetBytesFromInt16ArrayBe(value, startIndex, count) {
		return this._GetBytesFromIntArray(value, startIndex, count, RsaEmun.TypeCode.Int16, true);
    };
    
	GetBytesFromInt32ArrayLe(value, startIndex, count) {
		return this._GetBytesFromIntArray(value, startIndex, count, RsaEmun.TypeCode.Int32, false);
    };
    
	GetBytesFromInt32ArrayBe(value, startIndex, count) {
		return this._GetBytesFromIntArray(value, startIndex, count, RsaEmun.TypeCode.Int32, true);
    };
    
	_ToIntArray(bytes, startIndex, count, typeCode, bigEndian) {
		// Convert bytes to Int<Bits> array. 
		var sizeBits = this.sBits[typeCode];
		var sizeBytes = (sizeBits ? sizeBits : 32) / 8;
		startIndex = startIndex ? startIndex : 0;
		count = count ? count : bytes.length - startIndex;
		var mask = (1 << 8) - 1;
		var array = Array();
		var v, m;
		for (var i = 0; i < count; i++) {
			var bi = (i - i % sizeBytes) / sizeBytes;
			v = bytes[startIndex + i] & mask;
			m = i % sizeBytes * 8;
			if (bigEndian) m = sizeBits - 8 - m;
			array[bi] |= v << m;
		}
		return array;
    }
    
	ToInt16ArrayLe(value, startIndex, count) {
		return this._ToIntArray(value, startIndex, count, RsaEmun.TypeCode.Int16, false);
    };
    
	ToInt16ArrayBe(value, startIndex, count) {
		return this._ToIntArray(value, startIndex, count, RsaEmun.TypeCode.Int16, true);
    };
    
	ToInt32ArrayLe(value, startIndex, count) {
		return this._ToIntArray(value, startIndex, count, RsaEmun.TypeCode.Int32, false);
    };
    
	ToInt32ArrayBe(value, startIndex, count) {
		return this._ToIntArray(value, startIndex, count, RsaEmun.TypeCode.Int32, true);
    };
    
	Int16EndianSwap(x) {
		x = x >> 8 |
			x << 8;
		return x;
    };
    
	Int32EndianSwap(x) {
		x = x >> 24 |
			x << 8 & 0x00FF0000 |
			x >> 8 & 0x0000FF00 |
			x << 24;
		return x;
    };
    
	Int64EndianSwap(x) {
		// Swap number bytes.
		x = x >> 56 |
			x << 40 & 0x00FF000000000000 |
			x << 24 & 0x0000FF0000000000 |
			x << 8 & 0x000000FF00000000 |
			x >> 8 & 0x00000000FF000000 |
			x >> 24 & 0x0000000000FF0000 |
			x >> 40 & 0x000000000000FF00 |
			x << 56;
		return x;
    };
    
	ToString(bytes, separator, format) {
		var sb = [];
		if (!bytes) return;
		// Formats: X[1-N];
		format = format ? format : "X2";
		var len = parseInt(format.substr(1));
		var pfx = "";
		var i;
		for (i = 0; i < len; i++) pfx += "0";
		for (i = 0; i < bytes.length; i++) {
			// If number is negative (sByte: -127; 127) makes it byte.
			var b = bytes[i] & 0xFF;
			var hex = b.toString(16).toUpperCase();
			sb.push(pfx.substr(0, len - hex.length) + hex);
		}
		var sep = typeof separator === "undefined" ? '-' : separator;
		return sb.join(sep);
    };
    
    SemSingleToBytes = function (sign, exponent, mantissa) {
		var B = new Array(4);
		// Round.
		mantissa = Math.pow(2, 23) * mantissa + 0.5;
		B[3] = 0xFF & mantissa;
		B[2] = 0xFF & mantissa >> 8;
		B[1] = 0x7F & mantissa >> 16 | (exponent & 1) << 7;
		B[0] = sign << 7 | exponent >> 1;
		return B;
    };
    
    SemDoubleToBytes = function (sign, exponent, mantissa) {
		var B = new Array(4);
		mantissa = Math.pow(2, 52) * mantissa;
		B[3] = 0xFFFF & mantissa;
		B[2] = 0xFFFF & mantissa >> 16;
		// Integers are only 32-bit.
		mantissa /= Math.pow(2, 32);
		B[1] = 0xFFFF & mantissa;
		B[0] = sign << 15 | exponent << 4 | 0x000F & mantissa >> 16;
		// Convert Int16[] to bytes[];
		return this.GetBytesFromInt16ArrayBe(B, 0, B.length);
    };
    
    GetBytesFromNumber = function (Qty, NumW) {
		this.Number = Qty;
		var Bin;
		this.nb01 = "";  // , OutW = NumW/4
		var Inf = { 32: { d: 0x7F, c: 0x80, b: 0, a: 0 }, 64: { d: 0x7FF0, c: 0, b: 0, a: 0 } };
		var ExW = { 32: 8, 64: 11 }[NumW];
		var MtW = NumW - ExW - 1;
		var sign;
		var exponent;
		var mantissa;
		if (isNaN(Qty)) {
			Bin = Inf[NumW];
			Bin.a = 1;
			sign = false;
			exponent = Math.pow(2, ExW) - 1;
			mantissa = Math.pow(2, -MtW);
		}
		if (!Bin) {
			sign = Qty < 0 || 1 / Qty < 0; // OK for +-0
			if (!isFinite(Qty)) {
				Bin = Inf[NumW];
				if (this.Sign) Bin.d += 1 << NumW / 4 - 1;
				exponent = Math.pow(2, ExW) - 1;
				mantissa = 0;
			}
		}
		if (!Bin) {
			exponent = { 32: 127, 64: 1023 }[NumW];
			mantissa = Math.abs(Qty);
			while (mantissa >= 2) {
				exponent++;
				mantissa /= 2;
			}
			while (mantissa < 1 && this.Exponent > 0) {
				exponent--;
				mantissa *= 2;
			}
			if (exponent <= 0) {
				mantissa /= 2;
				// "Zero or Denormal";
			}
			if (NumW === 32 && this.Exponent > 254) {
				// "Too big for Single";
				Bin = { d: sign ? 0xFF : 0x7F, c: 0x80, b: 0, a: 0 };
				exponent = Math.pow(2, ExW) - 1;
				mantissa = 0;
			}
		}
		var array;
		if (!Bin) {
			if (NumW === 32) array = this.SemSingleToBytes(sign, exponent, mantissa);
			if (NumW === 64) array = this.SemDoubleToBytes(sign, exponent, mantissa);
		} else {
			array = [Bin.a, Bin.b, Bin.c, Bin.d];
			// Convert Int16[] to bytes[];
			if (NumW === 64) array = this.GetBytesFromInt16ArrayBe(array, 0, array.length);
		}
		// Reverse from big-endian to little-endian;
		return array.reverse();
    };
    
	ToNumber(value) {
		// Reverse from little-endian to big-endian;
		var bytes = value.reverse();
		var bits = this.GetBitsBe(bytes, RsaEmun.TypeCode.Byte);
		var BinStr = this.GetBitsBe(bytes, RsaEmun.TypeCode.Byte).join('');
		var ExW = { 32: 8, 64: 11 }[BinStr.length];
		var M = BinStr.match(new RegExp("^(.)(.{" + ExW + "})(.*)$"));
		// M[1] sign, M[2] exponent, M[3] mantissa.
		var sign = bits[0] === 1 ? "-" : "+";
		var denorm = +M[2] === 0;
		var expo = parseInt(M[2], 2) - Math.pow(2, ExW - 1) + 1;
		var array = this.DecimalDigits(bits, ExW);
		// Prepend digit point.
		array.unshift(+!denorm);
		if (denorm) expo++;
		while (expo < 0) {
			expo++;
			this.Halve(array);
		}
		while (expo > 0) {
			expo--;
			this.Twice(array);
		}
		var value1 = sign + array.join("").replace(/(\d)0+$/, "$1");
		return +eval(value1);
    };
    
    Add(A, P) {
		var C = 0;
		var K = P.length;
		var T;
		while (K--) {
			T = (A[K] | 0) + P[K] + C;
			A[K] = T % 10;
			C = T > 9 ? 1 : 0;
		}
    }
    
    Halve(P) {
		var C = 0;
		var L = P.length;
		var T;
		for (var K = 0; K < L; K++) {
			if ((T = P[K]) !== ".") {
				T += 10 * C;
				C = T & 1;
				P[K] = T >> 1;
			}
		}
		if (C) P[K] = 5;
    }
    
    DecimalDigits(bits, ExW) {
		var A = [0];
		var P = [10];
		// Route througth mantisa bits.
		var index = ExW + 1;
		var length = bits.length;
		for (var i = index; i < length; i++) {
			this.Halve(P);
			if (bits[i] === 1) this.Add(A, P);
		}
		// A, P decimal fraction parts.
		return A;
	}
    
    Twice(A) {
		var K = A.length;
		let C = 0;
		let T;
		while (K--) {
			if ((T = A[K]) !== ".") {
				T = 2 * T + C;
				A[K] = T % 10;
				C = T > 9 ? 1 : 0;
			}
		}
		// Prepend.
		if (C) A.unshift(1);
    }
    
    _isLittleEndian() {
		var bytes = this.GetBytes(-1.5, RsaEmun.TypeCode.Double);
		return bytes[0] === 0;
	};
};