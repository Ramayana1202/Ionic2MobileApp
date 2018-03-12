import {ApzBigIntUnit} from './ApzBigInt';
import * as ApzSystem from './ApzSystem';
import * as ApzConverter from './ApzConverter';
import * as ApzCryto from './ApzCryto';
import {RsaPaddingObj} from './Enums/RsaEnum';

export class ApzRSACryptoServiceProvider
{
	KeySize = 512;
	BlockSize = 512;
	FeedbackSize = 512;
	IV = [];
	HashSize = 20 * 8; 

	rsaParams : ApzRSAParameters = null;
	rsaParamsBi = null;
	bi = new ApzBigIntUnit();
	
	constructor(rsaKeySize : number) {
		this.KeySize = rsaKeySize;
		this.BlockSize = this.KeySize;
		this.FeedbackSize = this.KeySize;
	};

	GetKeyPair() : ApzRSAParameters {
		if (this.rsaParams === null) this.rsaParams = this.NewKeyPair(true);
		return this.rsaParams;
	}
	
	NewKeyPair(truePrime : boolean) : ApzRSAParameters {
		let p : number[]; // p / Primary 1
		var q : number[]; // q / Primary 2
		var n : number[]; // n / Modulus.
		var d : number[]; // d / D / secret exponent / decryption exponent.
		let e = this.bi.FromString("10001", 16, 0); // e / Exponent / public exponent / encryption exponent.
		var pLen = this.KeySize + 1 >> 1;
		var qLen = this.KeySize - pLen;
		for (; ;) 
		{
			p = truePrime ? this.bi.NewPrime(pLen) : this.bi.NewProbPrime(pLen);
			if (!this.bi.EqualsInt(this.bi.Mod(p, e), 1)) break;
		}
		for (; ;) 
		{
			for (; ;) 
			{
				q = truePrime ? this.bi.NewPrime(qLen) : this.bi.NewProbPrime(qLen);
				if (!this.bi.Equals(p, q) && !this.bi.EqualsInt(this.bi.Mod(q, e), 1)) break;
			}
			n = this.bi.Multiply(p, q);
			if (this.bi.BitCount(n) === this.KeySize) break;
			if (this.bi.MoreThan(q, p)) p = q;
		}
		if (this.bi.MoreThan(q, p)) {
			var t = p; p = q; q = t;
		}
		var p1 = this.bi.AddInt(p, -1);
		var q1 = this.bi.AddInt(q, -1);
		var phi = this.bi.Multiply(p1, q1);
		d = this.bi.InverseMod(e, phi);
		var qInv = this.bi.InverseMod(q, p);
		var dP = this.bi.InverseMod(e, p1);
		var dQ = this.bi.InverseMod(e, q1);
		var parameters = new ApzRSAParameters();
		parameters.Exponent = this.bi.ToBytes(e);
		parameters.Modulus = this.bi.ToBytes(n);
		parameters.D = this.bi.ToBytes(d);
		parameters.P = this.bi.ToBytes(p);
		parameters.Q = this.bi.ToBytes(q);
		parameters.DP = this.bi.ToBytes(dP);
		parameters.DQ = this.bi.ToBytes(dQ);
		parameters.InverseQ = this.bi.ToBytes(qInv);
		ApzSystem.ArrayReverse(parameters.Exponent, 0, 0);
		ApzSystem.ArrayReverse(parameters.Modulus, 0, 0);
		ApzSystem.ArrayReverse(parameters.D, 0, 0);
		ApzSystem.ArrayReverse(parameters.P, 0, 0);
		ApzSystem.ArrayReverse(parameters.Q, 0, 0);
		ApzSystem.ArrayReverse(parameters.DP, 0, 0);
		ApzSystem.ArrayReverse(parameters.DQ, 0, 0);
		ApzSystem.ArrayReverse(parameters.InverseQ, 0, 0);
		return parameters;
	}
	
	getXmlValue(xmlString : string, tag : string) : any[] {
		var rx = new RegExp("<" + tag + ">(.*?)</" + tag + ">", "gi");
		var tagMatch = xmlString.match(rx);
		if (!tagMatch) return null;
		var base64 = tagMatch[0].replace(rx, "$1");
		var bytes = ApzConverter.FromBase64String(base64, false);
		return bytes;
	}
	
	ImportParameters(parameters : ApzRSAParameters) {
		this.rsaParams = parameters.Clone(true);
		this.rsaParamsBi = null;
		this.KeySize = this.rsaParams.Modulus.length * 8;
		this.BlockSize = this.KeySize;
		this.FeedbackSize = this.KeySize;
	};
	
	ExportParameters(isEncrypt : boolean) : ApzRSAParameters {
		var key = this.GetKeyPair();
		return key.Clone(!isEncrypt);
	};
	
	FromXmlString(xmlString : string, isEncryt : boolean) {
		var parameters = new ApzRSAParameters();
		var tagSpace = new RegExp("\\s", "gi");
		xmlString = xmlString.replace(tagSpace, "");
		parameters.Exponent = this.getXmlValue(xmlString, "Exponent");
		parameters.Modulus = this.getXmlValue(xmlString, "Modulus");
		if(!isEncryt)
		{
			parameters.D = this.getXmlValue(xmlString, "D");
			parameters.DP = this.getXmlValue(xmlString, "DP");
			parameters.DQ = this.getXmlValue(xmlString, "DQ");
			parameters.InverseQ = this.getXmlValue(xmlString, "InverseQ");
			parameters.P = this.getXmlValue(xmlString, "P");
			parameters.Q = this.getXmlValue(xmlString, "Q");
		}

		this.ImportParameters(parameters);
	};
	
	Padding(input : any[], fOAEP : boolean, encrypt : boolean) : any[] {
		var crypto = new ApzCryto.ICryptoTransform(this, true);
		var output = encrypt
			? (crypto._Padding(input, 0, input.length))[RsaPaddingObj.iBuffer]
			: crypto._PaddingRemove(input, 0, input.length);
		return output;
	}
	
	RsaEncryptBlock(block : any[], key : ApzRSAParameters) : any[] {
		var mBytes = block;
		ApzSystem.ArrayReverse(mBytes, 0 , mBytes.length);
		var e = this.bi.FromBytes(key.Exponent);
		var n = this.bi.FromBytes(key.Modulus);
		var m = this.bi.FromBytes(mBytes);
		// Encrypt: c = m^e mod n
		var c = this.bi.PowMod(m, e, n);
		var cBytes = this.bi.ToBytes(c);
		// Expand to block size with empty bytes.
		var bpb = this.KeySize / 8; 			// bytes per block
		for (var i = cBytes.length; i < bpb; i++) cBytes.push(0x00);
		ApzSystem.ArrayReverse(cBytes, 0, cBytes.length);
		return cBytes;
	}
	
	EncryptBytes(key : ApzRSAParameters, input : any[], fOAEP : boolean) : any[] {
		var bpb = this.KeySize / 8 - (fOAEP ? 41 : 11); // bytes per block
		var output = [];               // plaintext array
		var block : any[];                              // current block number
		for (var b = 0; b < input.length / bpb; b++) {
			block = input.slice(b * bpb, (b + 1) * bpb);
			// Reverse bytes for compatibility with RSACryptoServiceProvider.
			ApzSystem.ArrayReverse(block, 0, 0);
			// Add padding.
			var padded = this.Padding(block, fOAEP, true);
			// RSA Encrypt.
			var cBytes = this.RsaEncryptBlock(padded, key);
			// Add result to output.
			output = output.concat(cBytes);
		}
		return output;
	}
	
	Encrypt(rgb : any[], fOAEP : boolean) : any[] {
		var key = this.GetKeyPair();
		return this.EncryptBytes(key, rgb, fOAEP);
	};
	
	Decrypt(rgb : any[], fOAEP : boolean) : any[] {
		var key = this.GetKeyPair();
		return this.DecryptBytes(key, rgb, fOAEP);
	};
	
	RsaDecryptBlock(block : any[], key : ApzRSAParameters) : any[] {
		var c = this.bi.FromBytes(block);
		var dP = this.bi.FromBytes(key.DP);
		var dQ = this.bi.FromBytes(key.DQ);
		var qInv = this.bi.FromBytes(key.InverseQ);
		var p = this.bi.FromBytes(key.P);
		var q = this.bi.FromBytes(key.Q);
		var m1 = this.bi.PowMod(c, dP, p);
		var m2 = this.bi.PowMod(c, dQ, q);
		var h = this.bi.MultiplyMod(qInv, this.bi.Subtract(this.bi.Add(m1, p), m2), p);
		let m = this.bi.Add(m2, this.bi.Multiply(h, q));
		var mBytes = this.bi.ToBytes(m);
		var bpb = this.KeySize / 8; 
		for (var i = mBytes.length; i < bpb; i++) mBytes.push(0x00);
		return mBytes;
	}
	
	DecryptBytes(key : ApzRSAParameters, input : any[], fOAEP : boolean) : any[] {
		var bpb = this.KeySize / 8; 
		var output = [];
		for (var b = 0; b < input.length / bpb; b++) 
		{
			let block = input.slice(b * bpb, (b + 1) * bpb);
			block = this.RsaDecryptBlock(block, key);
			var unpadded = this.Padding(block, fOAEP, false);
			ApzSystem.ArrayReverse(unpadded, 0, unpadded.length);
			output = output.concat(unpadded);
		}
		return output;
	}
};

class ApzRSAParameters
{
	Exponent = [];
	Modulus = [];
	D = [];
	DP = [];
	DQ = [];
	InverseQ = [];
	P = [];
	Q = [];
	
	constructor(){}

	Clone = function (includePrivateParameters : boolean) : ApzRSAParameters {
		var parameters = new ApzRSAParameters();
		ApzSystem.ArrayCopy1(this.Exponent, parameters.Exponent, this.Exponent.length);
		ApzSystem.ArrayCopy1(this.Modulus, parameters.Modulus, this.Modulus.length);
		if (includePrivateParameters) {
			if (this.D) ApzSystem.ArrayCopy1(this.D, parameters.D, this.D.length);
			if (this.DP) ApzSystem.ArrayCopy1(this.DP, parameters.DP, this.DP.length);
			if (this.DQ) ApzSystem.ArrayCopy1(this.DQ, parameters.DQ, this.DQ.length);
			if (this.InverseQ) ApzSystem.ArrayCopy1(this.InverseQ, parameters.InverseQ, this.InverseQ.length);
			if (this.P) ApzSystem.ArrayCopy1(this.P, parameters.P, this.P.length);
			if (this.Q) ApzSystem.ArrayCopy1(this.Q, parameters.Q, this.Q.length);
		}
		return parameters;
	};
};