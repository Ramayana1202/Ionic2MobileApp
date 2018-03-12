import * as ApzSystem from './ApzSystem';
import { ApzRSACryptoServiceProvider } from './ApzRSACryptoServiceProvider';
import * as RsaEmun from './Enums/RsaEnum';

export class ICryptoTransform {
	iv = [];
	algo : ApzRSACryptoServiceProvider = null;
	encrypt = false;
	blockSizeByte = 0;
	temp = [];
	temp2 = [];
	workBuff = [];
	workout = [];
	feedBackByte = 0;
	feedBackIter = 0;
	m_disposed = false;
	lastBlock = false;
    _rng : RNGCryptoServiceProvider = null;
    
	InputBlockSize = 0;
	OutputBlockSize = 0;
	CanTransformMultipleBlocks = true;
    CanReuseTransform = false;
    
    constructor(algorithm : ApzRSACryptoServiceProvider, encryption : boolean) {
		this.algo = algorithm;
		this.encrypt = encryption;
		if (this.algo) 
		{
			this.blockSizeByte = this.algo.BlockSize >> 3;
			this.InputBlockSize = this.blockSizeByte;
			this.OutputBlockSize = this.blockSizeByte;
			// Mode buffers
			this.temp = ApzSystem.ApzByte(this.blockSizeByte);
			ApzSystem.BufferBlockCopy(this.algo.IV, 0, this.temp, 0, Math.min(this.blockSizeByte, this.algo.IV.length));
			this.temp2 = ApzSystem.ApzByte(this.blockSizeByte);
			this.feedBackByte = this.algo.FeedbackSize >> 3;
			if (this.feedBackByte !== 0)
                this.feedBackIter = this.blockSizeByte / this.feedBackByte;
			// Transform buffers
			this.workBuff = ApzSystem.ApzByte(this.blockSizeByte);
			this.workout = ApzSystem.ApzByte(this.blockSizeByte);
		}
	};

	Random(buffer : any[], start : number, length : number, zeroBytes : boolean) {
		if (!this._rng) {
			this._rng = new RNGCryptoServiceProvider();
		}
		var random = ApzSystem.ApzByte(length);
		if (zeroBytes) {
			this._rng.GetBytes(random);
		} else {
			this._rng.GetNonZeroBytes(random);
		}
		ApzSystem.BufferBlockCopy(random, 0, buffer, start, length);
    }
    
	_Padding(inputBuffer : any[], inputOffset : number, inputCount : number) : any[] {
		var rem = this.blockSizeByte - inputCount;
		var paddingSize = rem > 0 ? rem : this.blockSizeByte;
		var paddedInput = ApzSystem.ApzByte(paddingSize);
		var blocksCount = 1;
		var newBlock = [];
		this.Random(paddedInput, 1, paddedInput.length - 2, false);
		paddedInput[0] = 0;
		paddedInput[paddedInput.length - 2] = 2;
		paddedInput[paddedInput.length - 1] = 0;
		if (rem === 0) blocksCount = 2;

		var iBuffer = ApzSystem.ApzByte(this.blockSizeByte * blocksCount);
		var oBuffer = ApzSystem.ApzByte(this.blockSizeByte * blocksCount);
		if (newBlock.length === 0) {
			// Copy data to temp input buffer.
			ApzSystem.BufferBlockCopy(inputBuffer, inputOffset, iBuffer, 0, inputCount);
			// Copy padding to temp input buffer.
			if (rem > 0 || rem === 0 && blocksCount === 2) {
				ApzSystem.BufferBlockCopy(paddedInput, 0, iBuffer, inputCount, paddingSize);
			}
		} else {
			ApzSystem.BufferBlockCopy(newBlock, inputOffset, iBuffer, 0, inputCount + paddingSize);
		}
		var result = new Array<any>(3);
		result[RsaEmun.RsaPaddingObj.blocksCount] = blocksCount;
		result[RsaEmun.RsaPaddingObj.iBuffer] = iBuffer;
		result[RsaEmun.RsaPaddingObj.oBuffer] = oBuffer;
		return result;
	};
	
    _PaddingRemove(res : any[], inputOffset : number, inputCount : number) : any[] {
		var total = res.length;
		var i = 0;
		for (i = total - 1 - 2; i > 0; i--) 
		{
			if (res[i] === 0x00) 
			{
				total = i;
				break;
			}
		}
		if (total > 0) {
			var data = ApzSystem.ApzByte(total);
			ApzSystem.BufferBlockCopy(res, 0, data, 0, total);
			ApzSystem.ArrayClear(res, 0, res.length);
			return data;
		} else 
		{
			return ApzSystem.ApzByte(0);
		}
    };
};

class RNGCryptoServiceProvider
{
    rnd : ApzSystem.ApzRandom;

    constructor() {
		this.rnd = new ApzSystem.ApzRandom();
	};
    
	GetBytes(data : any[]) {
		var length = data.length;
		for (var i = 0; i < length; i++) {
			data[i] = this.rnd.Next(0, 256);
		}
    };
    
	GetNonZeroBytes(data : any[]) {
		var length = data.length;
		for (var i = 0; i < length; i++) {
			data[i] = this.rnd.Next(1, 256);
		}
    };
};