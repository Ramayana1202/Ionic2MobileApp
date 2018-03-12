export enum TypeCode 
{
	Empty = 0,
	Object = 1,
	DBNull = 2,
	Boolean = 3,
	Char = 4,
	SByte = 5,
	Byte = 6,
	Int16 = 7,
	UInt16 = 8,
	Int32 = 9,
	UInt32 = 10,
	Int64 = 11,
	UInt64 = 12,
	Single = 13,
	Double = 14,
	Decimal = 15,
	DateTime = 16,
	String = 18
};

export enum PaddingMode
{
	None = 1,
	PKCS7 = 2,
	Zeros = 3,
	ANSIX923 = 4,
	ISO10126 = 5,
	RsaEsPkcs = 6,
	RsaEsOaep = 7
};

export enum CipherMode
{
	CBC = 1,
	ECB = 2,
	OFB = 3,
	CFB = 4,
	CTS = 5
};

export enum RsaPaddingObj
{
	blocksCount = 0,
	iBuffer = 1,
	oBuffer = 2
}