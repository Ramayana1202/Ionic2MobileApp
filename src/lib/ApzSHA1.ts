import * as ApzSystem from './ApzSystem'

export class ApzSHA1
{
	Name = "SHA1";
	chrsz = 8;

	// Fields
	_buffer = ApzSystem.ApzByte(0);
	_count = 0;
	_expandedBuffer = [];
    _stateSHA1 = [];
    HashSizeValue = 160;
    HashSize = 160;

    constructor() {
		var base = new HashAlgorithm();
		for (var property in base) {
			if (typeof this[property] === "undefined") {
				//alert(property);
				this[property] = base[property];
			}
		}
		this.HashSizeValue = 160;
		this.HashSize = 160;
		this._stateSHA1 = ApzSystem.ApzByte(5); // uint[]
		this._buffer = ApzSystem.ApzByte(0x40); // byte[]
		this._expandedBuffer = ApzSystem.ApzByte(80); // uint[]
		this.InitializeState();
	};
    
    _HashData(partIn, ibStart, cbSize) {
		var count = cbSize;
		var srcOffset = ibStart;
		var dstOffset = this._count & 0x3f;
		this._count += count;
		if (dstOffset > 0 && dstOffset + count >= 0x40) {
			ApzSystem.BufferBlockCopy(partIn, srcOffset, this._buffer, dstOffset, 0x40 - dstOffset);
			srcOffset += 0x40 - dstOffset;
			count -= 0x40 - dstOffset;
			this.SHATransform(this._expandedBuffer, this._stateSHA1, this._buffer);
			dstOffset = 0;
		}
		while (count >= 0x40) {
			ApzSystem.BufferBlockCopy(partIn, srcOffset, this._buffer, 0, 0x40);
			srcOffset += 0x40;
			count -= 0x40;
			this.SHATransform(this._expandedBuffer, this._stateSHA1, this._buffer);
		}
		if (count > 0) {
			ApzSystem.BufferBlockCopy(partIn, srcOffset, this._buffer, dstOffset, count);
		}
    };
    
    HashCore(rgb, ibStart, cbSize) {
		this._HashData(rgb, ibStart, cbSize);
    };
    
    _EndHash() {
		var block = ApzSystem.ApzByte(20);
		var num = 0x40 - this._count & 0x3f;
		if (num <= 8) num += 0x40;
		var partIn = ApzSystem.ApzByte(num);
		partIn[0] = 0x80;
		var num2 = this._count * 0x8;
		var n = num2;
		for (var i = 1; i <= 8; i++) {
			partIn[num - i] = n & 0xff;
			n = n >> 0x08;
		}
		this._HashData(partIn, 0, partIn.length);
		this.DWORDToBigEndian(block, this._stateSHA1, 5);
		//this.HashValue = block;
		return block;
    };
    
    HashFinal() {
		return this._EndHash();
    };
    
    SHATransform(expandedBuffer, state, block) {
		this.DWORDFromBigEndian(expandedBuffer, 0x10, block);
		this.SHAExpand(expandedBuffer);
		var v = new Array(5);
		var i = 0;
		for (i = 0; i < 5; i++) v[4 - i] = state[i];
		for (i = 0; i < 80; i += 5) {
			for (var j = 0; j < 5; j++) {
				var x0 = this._tf(i, v[(j + 3) % 5], v[(j + 2) % 5], v[(j + 1) % 5]);
				var x1 = this.as(this.rl(v[(j + 4) % 5], 5), x0);
				var x2 = expandedBuffer[i + (j + 0) % 5];
				var x3 = this.as(x1, x2);
				var x4 = this.as(x3, this._ac(i));
				var x5 = v[(j + 0) % 5];
				var x6 = this.as(x4, x5);
				v[(j + 0) % 5] = x6;
				v[(j + 3) % 5] = this.rl(v[(j + 3) % 5], 30);
			}
		}
		for (i = 0; i < 5; i++) state[i] = this.as(state[i], v[4 - i]);
    };
    
    DWORDToBigEndian(block, x, digits) {
		return DWORDToBigEndian(block, x, digits);
	}

	rl(x, y) {
		return RotateLeft(x, y);
	}

	as(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return msw << 16 | lsw & 0xFFFF;
	}

	_tf(i, b, c, d) {
		return i < 20 ? d ^ b & (c ^ d)
			: i < 40 ? b ^ c ^ d
				: i < 60 ? b & c | d & (b | c)
					: b ^ c ^ d;
	}
	_ac(i) {
		return i < 20 ? 0x5A827999
			: i < 40 ? 0x6ED9EBA1
				: i < 60 ? 0x8F1BBCDC
					: 0xCA62C1D6;
    }
    
	SHAExpand(x) {
		for (var i = 0x10; i < 80; i++) {
			x[i] = this.rl(x[i - 3] ^ x[i - 8] ^ x[i - 14] ^ x[i - 16], 1);
		}
    };
    
    DWORDFromBigEndian(x, digits, block) {
		var index = 0;
		for (var i = 0; index < digits; i += 4) {
			var n = block[i] << 0x18 | block[i + 1] << 0x10 | block[i + 2] << 8 | block[i + 3];
			x[index] = n >>> 0;
			index++;
		}
    };
    
    Initialize() {
		this.InitializeState();
		ApzSystem.ArrayClear(this._buffer, 0, this._buffer.length);
		ApzSystem.ArrayClear(this._expandedBuffer, 0, this._expandedBuffer.length);
    };
    
    InitializeState = function () {
		this._count = 0;
		this._stateSHA1[0] = 0x67452301;
		this._stateSHA1[1] = 0xefcdab89;
		this._stateSHA1[2] = 0x98badcfe;
		this._stateSHA1[3] = 0x10325476;
		this._stateSHA1[4] = 0xc3d2e1f0;
    };
};

var DWORDToBigEndian = function(block, x, digits) {
	var index = 0;
	for (var i = 0; index < digits; i += 4) {
		block[i] = x[index] >> 0x18 & 0xff;
		block[i + 1] = x[index] >> 0x10 & 0xff;
		block[i + 2] = x[index] >> 8 & 0xff;
		block[i + 3] = x[index] & 0xff;
		index++;
	}
};

var RotateLeft = function (num, cnt) {
	return num << cnt | num >>> 32 - cnt;
};

class HashAlgorithm
{
	CanReuseTransform = true;
	CanTransformMultipleBlocks = true;
	InputBlockSize = 1;
	OutputBlockSize = 1;

	HashSizeValue = 0;
	HashValue = ApzSystem.ApzByte(0);
	State = 0;
	HashSize = this.HashSizeValue;

    constructor(){};

	_ComputeHash1 = function (buffer) {
		return this._ComputeHash2(buffer, 0, buffer.length);
	};

	_ComputeHash2 = function (buffer, offset, count) {
		this.HashCore(buffer, offset, count);
		this.HashValue = this.HashFinal();
		var buffer2 = this.Hash();
		this.Initialize();
		return buffer2;
	};

	ComputeHash = function () {
		if (arguments.length === 1) {
			var value = arguments[0];
			if (typeof value === "string") value = ApzSystem.UnicodeEncoderGetBytes(value);
			var args = new Array(0);
			args[0] = value;
			return this._ComputeHash1.apply(this, args);
		}
		if (arguments.length === 3) return this._ComputeHash2.apply(this, arguments);
	};

	HashCore(array, ibStart, cbSize) { };
	HashFinal() { };

	TransformBlock(inputBuffer, inputOffset, inputCount, outputBuffer, outputOffset) {
		this.State = 1;
		this.HashCore(inputBuffer, inputOffset, inputCount);
		if (outputBuffer !== null && (inputBuffer !== outputBuffer || inputOffset !== outputOffset)) {
			ApzSystem.BufferBlockCopy(inputBuffer, inputOffset, outputBuffer, outputOffset, inputCount);
		}
		return inputCount;
	};

	TransformFinalBlock(inputBuffer, inputOffset, inputCount) {
		this.HashCore(inputBuffer, inputOffset, inputCount);
		//this.HashValue = this.HashFinal();
		var dst = ApzSystem.ApzByte(inputCount);
		if (inputCount !== 0) {
			ApzSystem.BufferBlockCopy(inputBuffer, inputOffset, dst, 0, inputCount);
		}
		this.State = 0;
		return dst;
	};

	Hash() {
		return this.HashValue;
	};

};