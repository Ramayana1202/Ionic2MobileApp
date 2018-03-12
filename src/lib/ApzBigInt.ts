export class ApzBigIntUnit
{
    //globals
    bpe = 0;         //bits stored per array element
    mask = 0;        //AND this with an array element to chop it down to bpe bits
    radix = 0;
    digitsStr = "";
    one = [];

    t = new Array<number>(0);
    ss = this.t;       //used in mult_()
    s0 = this.t;       //used in multMod_(), squareMod_() 
    s1 = this.t;       //used in powMod_(), multMod_(), squareMod_() 
    s2 = this.t;       //used in powMod_(), multMod_()
    s3 = this.t;       //used in powMod_()
    s4 = this.t; s5 = this.t; //used in mod_()
    s6 = this.t;       //used in bigInt2str()
    s7 = this.t;       //used in powMod_()
    T = this.t;        //used in GCD_()
    sa = this.t;       //used in mont_()
    mr_x1 = this.t; mr_r = this.t; mr_a = this.t;                                      //used in millerRabin()
    eg_v = this.t; eg_u = this.t; eg_A = this.t; eg_B = this.t; eg_C = this.t; eg_D = this.t;               //used in eGCD_(), inverseMod_()
    md_q1 = this.t; md_q2 = this.t; md_q3 = this.t; md_r = this.t; md_r1 = this.t; md_r2 = this.t; md_tt = this.t; //used in mod_()

    primes = this.t; pows = this.t; s_i = this.t; s_i2 = this.t; s_R = this.t; s_rm = this.t; s_q = this.t; s_n1 = this.t;
    s_a = this.t; s_r2 = this.t; s_n = this.t; s_b = this.t; s_d = this.t; s_x1 = this.t; s_x2 = this.t;
    s_aa = this.t; //used in randTruePrime_()

    rpprb = this.t; //used in randProbPrimeRounds() (which also uses "primes")

    constructor() {
        this.radix = this.mask + 1;
        this.digitsStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\\'\"+-';
        
        for (this.bpe = 0; (1 << (this.bpe + 1)) > (1 << this.bpe); this.bpe++);  //bpe=number of bits in the mantissa on this platform
        this.bpe >>= 1;                   //bpe=number of bits in one element of the array representing the bigInt
        this.mask = (1 << this.bpe) - 1;           //AND the mask with an integer to get its bpe least significant bits
        this.radix = this.mask + 1;              //2^bpe.  a single 1 bit to the left of the first bit of mask
        this.one = this.FromInt(1, 1, 1);     //constant used in powMod_()

    }

    GetPrimes(n : number) : number[] {
        var i;
        let s = new Array(n);
        for (i = 0; i < n; i++)
            s[i] = 0;
        s[0] = 2;
        let p = 0;    //first p elements of s are primes, the rest are a sieve
        for (; s[p] < n;) 
        {                  //s[p] is the pth prime
            for (i = s[p] * s[p]; i < n; i += s[p]) //mark multiples of s[p]
                s[i] = 1;
            p++;
            s[p] = s[p - 1] + 1;
            for (; s[p] < n && s[s[p]]; s[p]++); //find next prime (where s[p]==0)
        }
        let ans = new Array(p);
        for (i = 0; i < p; i++)
            ans[i] = s[i];
        return ans;
    }

    IsPronPrimeInt(x : number[], b : number) {
        if (this.mr_x1.length != x.length) 
        {
            this.mr_x1 = this.Clone(x);
            this.mr_r = this.Clone(x);
            this.mr_a = this.Clone(x);
        }

        this.CloneInt_(this.mr_a, b);
        return this.IsProbPrime(x, this.mr_a);
    }

    IsProbPrime(x : number[], b : number[]) {
        var i, j, k, s;

        if (this.mr_x1.length != x.length) 
        {
            this.mr_x1 = this.Clone(x);
            this.mr_r = this.Clone(x);
            this.mr_a = this.Clone(x);
        }

        this.Clone_(this.mr_a, b);
        this.Clone_(this.mr_r, x);
        this.Clone_(this.mr_x1, x);

        this.AddInt_(this.mr_r, -1);
        this.AddInt_(this.mr_x1, -1);

        //s=the highest power of two that divides mr_r
        k = 0;
        for (i = 0; i < this.mr_r.length; i++)
            for (j = 1; j < this.mask; j <<= 1)
                if (x[i] & j) 
                {
                    s = (k < this.mr_r.length + this.bpe ? k : 0);
                    i = this.mr_r.length;
                    j = this.mask;
                } 
                else
                    k++;

        if (s)
        this.RightShift_(this.mr_r, s);

        this.PowMod_(this.mr_a, this.mr_r, x);

        if (!this.EqualsInt(this.mr_a, 1) && !this.Equals(this.mr_a, this.mr_x1)) {
            j = 1;
            while (j <= s - 1 && !this.Equals(this.mr_a, this.mr_x1)) {
                this.SquareMod_(this.mr_a, x);
                if (this.EqualsInt(this.mr_a, 1)) {
                    return 0;
                }
                j++;
            }
            if (!this.Equals(this.mr_a, this.mr_x1)) {
                return 0;
            }
        }
        return 1;
    }

    BitCount(x : number[]) : number {
        var j, z, w;
        for (j = x.length - 1; (x[j] == 0) && (j > 0); j--);
        for (z = 0, w = x[j]; w; (w >>= 1), z++);
        z += this.bpe * j;
        return z;
    }

    Expand(x : number[], n : number) : number[] {
        var ans = this.FromInt(0, (x.length > n ? x.length : n) * this.bpe, 0);
        this.Clone_(ans, x);
        return ans;
    }

    NewPrime(k : number) {
        var ans = this.FromInt(0, k, 0);
        this.NewPrime_(ans, k);
        return this.Trim(ans, 1);
    }

    NewProbPrime(k : number) : number[] {
        if (k >= 600) return this.randProbPrimeRounds(k, 2); //numbers from HAC table 4.3
        if (k >= 550) return this.randProbPrimeRounds(k, 4);
        if (k >= 500) return this.randProbPrimeRounds(k, 5);
        if (k >= 400) return this.randProbPrimeRounds(k, 6);
        if (k >= 350) return this.randProbPrimeRounds(k, 7);
        if (k >= 300) return this.randProbPrimeRounds(k, 9);
        if (k >= 250) return this.randProbPrimeRounds(k, 12); //numbers from HAC table 4.4
        if (k >= 200) return this.randProbPrimeRounds(k, 15);
        if (k >= 150) return this.randProbPrimeRounds(k, 18);
        if (k >= 100) return this.randProbPrimeRounds(k, 27);
        return this.randProbPrimeRounds(k, 40); //number from HAC remark 4.26 (only an estimate)
    }

    randProbPrimeRounds(k : number, n : number) : number[] {
        var i, divisible;
        let B = 30000;  //B is largest prime to use in trial division
        let ans = this.FromInt(0, k, 0);
        if (this.primes.length == 0)
        this.primes = this.GetPrimes(30000);  //check for divisibility by primes <=30000

        if (this.rpprb.length != ans.length)
        this.rpprb = this.Clone(ans);

        for (; ;) { 
            this.NewBigInt_(ans, k, 0); //ans = a random odd number to check
            ans[0] |= 1;
            divisible = 0;
            
            for (i = 0; (i < this.primes.length) && (this.primes[i] <= B); i++)
                if (this.ModInt(ans, this.primes[i]) == 0 && !this.EqualsInt(ans, this.primes[i])) 
                {
                    divisible = 1;
                    break;
                }
                
            for (i = 0; i < n && !divisible; i++) 
            {
                this.NewBigInt_(this.rpprb, k, 0);
                while (!this.MoreThan(ans, this.rpprb)) //pick a random rpprb that's < ans
                this.NewBigInt_(this.rpprb, k, 0);
                if (!this.IsProbPrime(ans, this.rpprb))
                    divisible = 1;
            }

            if (!divisible)
                return ans;
        }
    }

    Mod(x : number[], n : number[]) : number[] {
        var ans = this.Clone(x);
        this.Mod_(ans, n);
        return this.Trim(ans, 1);
    }
    
    AddInt(x : number[], n : number) : number[] {
        var ans = this.Expand(x, x.length + 1);
        this.AddInt_(ans, n);
        return this.Trim(ans, 1);
    }

    Multiply(x : number[], y : number[]) : number[] {
        var ans = this.Expand(x, x.length + y.length);
        this.Multiply_(ans, y);
        return this.Trim(ans, 1);
    }
    
    PowMod(x : number[], y : number[], n : number[]) : number[] {
        var ans = this.Expand(x, n.length);
        this.PowMod_(ans, this.Trim(y, 2), this.Trim(n, 2)); 
        return this.Trim(ans, 1);
    }
    
    Subtract(x : number[], y : number[]) : number[] {
        var xN = this.IsNegative(x);
        var yN = this.IsNegative(y);
        var x1 = x;
        var y1 = y;
        var z;
        // Make positive.
        if (xN) x1 = this.Negate(x);
        if (yN) y1 = this.Negate(y);
        if (xN) 
        {
            if (yN) {
                if (this.MoreThan(x1, y1)) 
                {
                    z = this.Subtract(x1, y1);
                    this.Negate_(z);
                    return z;
                } 
                else 
                {
                    return this.Subtract(y1, x1);
                }
            } 
            else 
            {
                z = this.Add(x1, y);
                this.Negate_(z);
                return z;
            }
        } 
        else 
        {
            if (yN) 
            {
                return this.Add(x, y1);
            } 
            else 
            {
                if (!this.MoreThan(x1, y1)) {
                    z = this.Subtract(y1, x);
                    this.Negate_(z);
                    return z
                }
            }
        }

        var ans = this.Expand(x, (x.length > y.length ? x.length + 1 : y.length + 1));
        this.Subtract_(ans, y);
        return this.Trim(ans, 1);
    }
    
    Add(x : number[], y : number[]) : number[] {
        var xN = this.IsNegative(x);
        var yN = this.IsNegative(y);
        var x1 = x;
        var y1 = y;
        var z;
        // Make positive.
        if (xN) x1 = this.Negate(x);
        if (yN) y1 = this.Negate(y);
        if (xN) 
        {
            if (yN) 
            {
                z = this.Add(x1, y1);
                this.Negate_(z);
                return z;
            } 
            else 
            {
                if (this.MoreThan(y1, x1)) 
                {
                    return this.Subtract(y1, x1);
                } 
                else 
                {
                    z = this.Subtract(x1, y1);
                    this.Negate_(z);
                    return z;
                }
            }
        } 
        else 
        {
            if (yN) 
            {
                if (this.MoreThan(x1, y1)) 
                {
                    return this.Subtract(x1, y1);
                } 
                else 
                {
                    z = this.Subtract(y1, x1);
                    this.Negate_(z);
                    return z;
                }
            }
        }
        
        var ans = this.Expand(x, (x.length > y.length ? x.length + 1 : y.length + 1));
        this.Add_(ans, y);
        return this.Trim(ans, 1);
    }
    
    InverseMod(x : number[], n : number[]) : number[] {
        var ans = this.Expand(x, n.length);
        var s;
        s = this.InverseMod_(ans, n);
        return s ? this.Trim(ans, 1) : null;
    }
    
    MultiplyMod(x : number[], y : number[], n : number[]) : number[] {
        var ans = this.Expand(x, n.length);
        this.MultiplyMod_(ans, y, n);
        return this.Trim(ans, 1);
    }
    
    NewPrime_(ans : number[], k : number) {
        var divisible, zz, recLimit, w, r, j;

        if (this.primes.length == 0)
        this.primes = this.GetPrimes(30000);  //check for divisibility by primes <=30000

        if (this.pows.length == 0) {
            this.pows = new Array(512);
            for (j = 0; j < 512; j++) {
                this.pows[j] = Math.pow(2, j / 511. - 1.);
            }
        }
        
        let c = 0.1;  //c=0.1 in HAC
        let m = 20;   //generate this k-bit number by first recursively generating a number that has between k/2 and k-m bits
        recLimit = 20; //stop recursion when k <=recLimit.  Must have recLimit >= 2

        if (this.s_i2.length != ans.length) {
            this.s_i2 = this.Clone(ans);
            this.s_R = this.Clone(ans);
            this.s_n1 = this.Clone(ans);
            this.s_r2 = this.Clone(ans);
            this.s_d = this.Clone(ans);
            this.s_x1 = this.Clone(ans);
            this.s_x2 = this.Clone(ans);
            this.s_b = this.Clone(ans);
            this.s_n = this.Clone(ans);
            this.s_i = this.Clone(ans);
            this.s_rm = this.Clone(ans);
            this.s_q = this.Clone(ans);
            this.s_a = this.Clone(ans);
            this.s_aa = this.Clone(ans);
        }

        if (k <= recLimit) 
        {
            let pm = (1 << ((k + 2) >> 1)) - 1; //pm is binary number with all ones, just over sqrt(2^k)
            this.CloneInt_(ans, 0);
            for (let dd = 1; dd;) 
            {
                dd = 0;
                ans[0] = 1 | (1 << (k - 1)) | Math.floor(Math.random() * (1 << k));  //random, k-bit, odd integer, with msb 1
                for (j = 1; (j < this.primes.length) && ((this.primes[j] & pm) == this.primes[j]); j++) 
                {
                    if (0 == (ans[0] % this.primes[j])) 
                    {
                        dd = 1;
                        break;
                    }
                }
            }
            this.Carry_(ans);
            return;
        }

        let B = c * k * k;    //try small primes up to B (or all the primes[] array if the largest is less than B).
        if (k > 2 * m)  //generate this k-bit number by first recursively generating a number that has between k/2 and k-m bits
            for (r = 1; k - k * r <= m;)
                r = this.pows[Math.floor(Math.random() * 512)];   //r=Math.pow(2,Math.random()-1);
        else
            r = .5;
            
        let recSize = Math.floor(r * k) + 1;

        this.NewPrime_(this.s_q, recSize);
        this.CloneInt_(this.s_i2, 0);
        this.s_i2[Math.floor((k - 2) / this.bpe)] |= (1 << ((k - 2) % this.bpe));   //s_i2=2^(k-2)
        this.Divide_(this.s_i2, this.s_q, this.s_i, this.s_rm);                        //s_i=floor((2^(k-1))/(2q))

        let z = this.BitCount(this.s_i);

        for (; ;) {
            for (; ;) {  //generate z-bit numbers until one falls in the range [0,s_i-1]
                this.NewBigInt_(this.s_R, z, 0);
                if (this.MoreThan(this.s_i, this.s_R))
                    break;
            }                //now s_R is in the range [0,s_i-1]
            this.AddInt_(this.s_R, 1);  //now s_R is in the range [1,s_i]
            this.Add_(this.s_R, this.s_i);   //now s_R is in the range [s_i+1,2*s_i]

            this.Clone_(this.s_n, this.s_q);
            this.Multiply_(this.s_n, this.s_R);
            this.MultiplyInt_(this.s_n, 2);
            this.AddInt_(this.s_n, 1);    //s_n=2*s_R*s_q+1

            this.Clone_(this.s_r2, this.s_R);
            this.MultiplyInt_(this.s_r2, 2);  //s_r2=2*s_R

            //check s_n for divisibility by small primes up to B
            for (divisible = 0, j = 0; (j < this.primes.length) && (this.primes[j] < B); j++)
                if (this.ModInt(this.s_n, this.primes[j]) == 0 && !this.EqualsInt(this.s_n, this.primes[j])) 
                {
                    divisible = 1;
                    break;
                }

            if (!divisible)    //if it passes small primes check, then try a single Miller-Rabin base 2
                if (!this.IsPronPrimeInt(this.s_n, 2)) //this line represents 75% of the total runtime for randTruePrime_ 
                    divisible = 1;

            if (!divisible) {  //if it passes that test, continue checking s_n
                this.AddInt_(this.s_n, -3);
                for (j = this.s_n.length - 1; (this.s_n[j] == 0) && (j > 0); j--);  //strip leading zeros
                for (zz = 0, w = this.s_n[j]; w; (w >>= 1), zz++);
                zz += this.bpe * j;                             //zz=number of bits in s_n, ignoring leading zeros
                for (; ;) {  //generate z-bit numbers until one falls in the range [0,s_n-1]
                    this.NewBigInt_(this.s_a, zz, 0);
                    if (this.MoreThan(this.s_n, this.s_a))
                        break;
                }
                this.AddInt_(this.s_n, 3);  //now s_a is in the range [0,s_n-4]
                this.AddInt_(this.s_a, 2);  //now s_a is in the range [2,s_n-2]
                this.Clone_(this.s_b, this.s_a);
                this.Clone_(this.s_n1, this.s_n);
                this.AddInt_(this.s_n1, -1);
                this.PowMod_(this.s_b, this.s_n1, this.s_n);   //s_b=s_a^(s_n-1) modulo s_n
                this.AddInt_(this.s_b, -1);
                if (this.IsZero(this.s_b)) {
                    this.Clone_(this.s_b, this.s_a);
                    this.PowMod_(this.s_b, this.s_r2, this.s_n);
                    this.AddInt_(this.s_b, -1);
                    this.Clone_(this.s_aa, this.s_n);
                    this.Clone_(this.s_d, this.s_b);
                    this.GCD_(this.s_d, this.s_n);  //if s_b and s_n are relatively prime, then s_n is a prime
                    if (this.EqualsInt(this.s_d, 1)) {
                        this.Clone_(ans, this.s_aa);
                        return;     //if we've made it this far, then s_n is absolutely guaranteed to be prime
                    }
                }
            }
        }
    }
    
    NewBigInt_(b : number[], n : number, s : number) {
        var i;
        for (i = 0; i < b.length; i++)
            b[i] = 0;
        let a = Math.floor((n - 1) / this.bpe) + 1; //# array elements to hold the BigInt
        for (i = 0; i < a; i++) {
            b[i] = Math.floor(Math.random() * (1 << (this.bpe - 1)));
        }
        b[a - 1] &= (2 << ((n - 1) % this.bpe)) - 1;
        if (s == 1)
            b[a - 1] |= (1 << ((n - 1) % this.bpe));
    }
    
    GCD_(x : number[], y : number[]) {
        var i, xp, yp, q, sing, qp, t1;
        if (this.T.length != x.length)
        this.T = this.Clone(x);

        sing = 1;
        while (sing) 
        {
            sing = 0;
            for (i = 1; i < y.length; i++) //check if y has nonzero elements other than 0
                if (y[i]) 
                {
                    sing = 1;
                    break;
                }
            if (!sing) break; //quit when y all zero elements except possibly y[0]

            for (i = x.length; !x[i] && i >= 0; i--);  //find most significant element of x
            xp = x[i];
            yp = y[i];
            let A = 1, B = 0, C = 0, D = 1;
            while ((yp + C) && (yp + D)) 
            {
                q = Math.floor((xp + A) / (yp + C));
                qp = Math.floor((xp + B) / (yp + D));
                if (q != qp)
                    break;
                t1 = A - q * C; A = C; C = t1;    //  do (A,B,xp, C,D,yp) = (C,D,yp, A,B,xp) - q*(0,0,0, C,D,yp)      
                t1 = B - q * D; B = D; D = t1;
                t1 = xp - q * yp; xp = yp; yp = t1;
            }
            if (B) 
            {
                this.Clone_(this.T, x);
                this.LinComb_(x, y, A, B); //x=A*x+B*y
                this.LinComb_(y, this.T, D, C); //y=D*y+C*T
            } 
            else 
            {
                this.Mod_(x, y);
                this.Clone_(this.T, x);
                this.Clone_(x, y);
                this.Clone_(y, this.T);
            }
        }
        if (y[0] == 0)
            return;
        t1 = this.ModInt(x, y[0]);
        this.CloneInt_(x, y[0]);
        y[0] = t1;
        while (y[0]) 
        {
            x[0] %= y[0];
            t1 = x[0]; 
            x[0] = y[0]; 
            y[0] = t1;
        }
    }
    
    InverseMod_(x : number[], n : number[]) : number {
        var k = 1 + 2 * Math.max(x.length, n.length);

        if (!(x[0] & 1) && !(n[0] & 1)) {  //if both inputs are even, then inverse doesn't exist
            this.CloneInt_(x, 0);
            return 0;
        }

        if (this.eg_u.length != k) {
            this.eg_u = new Array<number>(k);
            this.eg_v = new Array<number>(k);
            this.eg_A = new Array<number>(k);
            this.eg_B = new Array<number>(k);
            this.eg_C = new Array<number>(k);
            this.eg_D = new Array<number>(k);
        }

        this.Clone_(this.eg_u, x);
        this.Clone_(this.eg_v, n);
        this.CloneInt_(this.eg_A, 1);
        this.CloneInt_(this.eg_B, 0);
        this.CloneInt_(this.eg_C, 0);
        this.CloneInt_(this.eg_D, 1);
        for (; ;) {
            while (!(this.eg_u[0] & 1)) 
            {
                this.Halve_(this.eg_u);
                if (!(this.eg_A[0] & 1) && !(this.eg_B[0] & 1)) { //if eg_A==eg_B==0 mod 2
                    this.Halve_(this.eg_A);
                    this.Halve_(this.eg_B);
                } 
                else 
                {
                    this.Add_(this.eg_A, n); this.Halve_(this.eg_A);
                    this.Subtract_(this.eg_B, x); this.Halve_(this.eg_B);
                }
            }

            while (!(this.eg_v[0] & 1)) {  //while eg_v is even
                this.Halve_(this.eg_v);
                if (!(this.eg_C[0] & 1) && !(this.eg_D[0] & 1)) 
                {
                    this.Halve_(this.eg_C);
                    this.Halve_(this.eg_D);
                } 
                else 
                {
                    this.Add_(this.eg_C, n); this.Halve_(this.eg_C);
                    this.Subtract_(this.eg_D, x); this.Halve_(this.eg_D);
                }
            }

            if (!this.MoreThan(this.eg_v, this.eg_u)) { //eg_v <= eg_u
                this.Subtract_(this.eg_u, this.eg_v);
                this.Subtract_(this.eg_A, this.eg_C);
                this.Subtract_(this.eg_B, this.eg_D);
            } 
            else 
            {                   //eg_v > eg_u
                this.Subtract_(this.eg_v, this.eg_u);
                this.Subtract_(this.eg_C, this.eg_A);
                this.Subtract_(this.eg_D, this.eg_B);
            }

            if (this.EqualsInt(this.eg_u, 0)) 
            {
                if (this.IsNegative(this.eg_C)) //make sure answer is nonnegative
                    this.Add_(this.eg_C, n);
                this.Clone_(x, this.eg_C);

                if (!this.EqualsInt(this.eg_v, 1)) { //if GCD_(x,n)!=1, then there is no inverse
                    this.CloneInt_(x, 0);
                    return 0;
                }
                return 1;
            }
        }
    }
    
    InverseModInt(x : number, n : number) : number {
        var a = 1, b = 0;
        for (; ;) 
        {
            if (x == 1) return a;
            if (x == 0) return 0;
            b -= a * Math.floor(n / x);
            n %= x;

            if (n == 1) return b; //to avoid negatives, change this b to n-b, and each -= to +=
            if (n == 0) return 0;
            a -= b * Math.floor(x / n);
            x %= n;
        }
    }
    
    IsNegative(x : number[]) : number {
        return ((x[x.length - 1] >> (this.bpe - 1)) & 1);
    }

    MoreThanShitf(x : number[], y : number[], shift : number) : number {
        var i, kx = x.length, ky = y.length;
        let k = ((kx + shift) < ky) ? (kx + shift) : ky;
        for (i = ky - 1 - shift; i < kx && i >= 0; i++)
            if (x[i] > 0)
                return 1; //if there are nonzeros in x to the left of the first column of y, then x is bigger
        for (i = kx - 1 + shift; i < ky; i++)
            if (y[i] > 0)
                return 0; //if there are nonzeros in y to the left of the first column of x, then x is not bigger
        for (i = k - 1; i >= shift; i--)
            if (x[i - shift] > y[i]) return 1;
            else if (x[i - shift] < y[i]) return 0;
        return 0;
    }
    
    MoreThan(x : number[], y : number[]) : number {
        var i;
        var k = (x.length < y.length) ? x.length : y.length;

        for (i = x.length; i < y.length; i++)
            if (y[i])
                return 0;  //y has more digits

        for (i = y.length; i < x.length; i++)
            if (x[i])
                return 1;  //x has more digits

        for (i = k - 1; i >= 0; i--)
            if (x[i] > y[i])
                return 1;
            else if (x[i] < y[i])
                return 0;
        return 0;
    }
    
    Divide_(x : number[], y : number[], q : number[], r : number[]) {
        var kx, ky;
        var i, y1, y2, c, a;
        this.Clone_(r, x);
        for (ky = y.length; y[ky - 1] == 0; ky--); 
        
        let b = y[ky - 1];
        for (a = 0; b; a++)
            b >>= 1;
        a = this.bpe - a;  //a is how many bits to shift so that the high order bit of y is leftmost in its array element
        this.LeftShift_(y, a);  //multiply both by 1<<a now, then divide both by that at the end
        this.LeftShift_(r, a);
        
        for (kx = r.length; r[kx - 1] == 0 && kx > ky; kx--); //kx is number of elements in normalized x, not including leading zeros

        this.CloneInt_(q, 0);                      // q=0
        while (!this.MoreThanShitf(y, r, kx - ky)) {  // while (leftShift_(y,kx-ky) <= r) {
            this.SubtractShift_(r, y, kx - ky);             //   r=r-leftShift_(y,kx-ky)
            q[kx - ky]++;                       //   q[kx-ky]++;
        }                                   // }

        for (i = kx - 1; i >= ky; i--) {
            if (r[i] == y[ky - 1])
                q[i - ky] = this.mask;
            else
                q[i - ky] = Math.floor((r[i] * this.radix + r[i - 1]) / y[ky - 1]);
                
            for (; ;) {
                y2 = (ky > 1 ? y[ky - 2] : 0) * q[i - ky];
                c = y2 >> this.bpe;
                y2 = y2 & this.mask;
                y1 = c + q[i - ky] * y[ky - 1];
                c = y1 >> this.bpe;
                y1 = y1 & this.mask;

                if (c == r[i] ? y1 == r[i - 1] ? y2 > (i > 1 ? r[i - 2] : 0) : y1 > r[i - 1] : c > r[i])
                    q[i - ky]--;
                else
                    break;
            }

            this.LinCombShift_(r, y, -q[i - ky], i - ky);    //r=r-q[i-ky]*leftShift_(y,i-ky)
            if (this.IsNegative(r)) 
            {
                this.AddShift_(r, y, i - ky);         //r=r+leftShift_(y,i-ky)
                q[i - ky]--;
            }
        }

        this.RightShift_(y, a);  //undo the normalization step
        this.RightShift_(r, a);  //undo the normalization step
    }
    
    Carry_(x : number[]) {
        let k = x.length;
        let c = 0;
        for (let i = 0; i < k; i++) {
            c += x[i];
            let b = 0;
            if (c < 0) 
            {
                b = -(c >> this.bpe);
                c += b * this.radix;
            }
            x[i] = c & this.mask;
            c = (c >> this.bpe) - b;
        }
    }
    
    ModInt(x : number[], n : number) : number {
        var i, c = 0;
        for (i = x.length - 1; i >= 0; i--)
            c = (c * this.radix + x[i]) % n;
        return c;
    }
    
    FromInt(t : number, bits : number, minSize : number) : number[] {
        let k = Math.ceil(bits / this.bpe) + 1;
        k = minSize > k ? minSize : k;
        let buff = new Array(k);
        this.CloneInt_(buff, t);
        return buff;
    }
    
    FromString(s : string, base : number, minSize : number) : number[] {
        var d, i, x, y, kk;
        var k = s.length;
        if (base == -1) { //comma-separated list of array elements in decimal
            x = new Array(0);
            for (; ;) {
                y = new Array(x.length + 1);
                for (i = 0; i < x.length; i++)
                    y[i + 1] = x[i];
                y[0] = parseInt(s, 10);
                x = y;
                d = s.indexOf(',', 0);
                if (d < 1)
                    break;
                s = s.substring(d + 1);
                if (s.length == 0)
                    break;
            }
            if (x.length < minSize) {
                y = new Array(minSize);
                this.Clone_(y, x);
                return y;
            }
            return x;
        }

        x = this.FromInt(0, base * k, 0);
        for (i = 0; i < k; i++) {
            d = this.digitsStr.indexOf(s.substring(i, i + 1), 0);
            if (base <= 36 && d >= 36)  //convert lowercase to uppercase if base<=36
                d -= 26;
            if (d >= base || d < 0) {   //stop at first illegal character
                break;
            }
            this.MultiplyInt_(x, base);
            this.AddInt_(x, d);
        }

        for (k = x.length; k > 0 && !x[k - 1]; k--); //strip off leading zeros
        k = minSize > k + 1 ? minSize : k + 1;
        y = new Array(k);
        kk = k < x.length ? k : x.length;
        for (i = 0; i < kk; i++)
            y[i] = x[i];
        for (; i < k; i++)
            y[i] = 0;
        return y;
    }

    EqualsInt(x : number[], y : number) : number {
        var i;
        if (x[0] != y)
            return 0;
        for (i = 1; i < x.length; i++)
            if (x[i])
                return 0;
        return 1;
    }
    
    Equals(x : number[], y : number[]) : number {
        var i;
        var k = x.length < y.length ? x.length : y.length;
        for (i = 0; i < k; i++)
            if (x[i] != y[i])
                return 0;
        if (x.length > y.length) {
            for (; i < x.length; i++)
                if (x[i])
                    return 0;
        } else {
            for (; i < y.length; i++)
                if (y[i])
                    return 0;
        }
        return 1;
    }

    IsZero(x : number[]) : number {
        var i;
        for (i = 0; i < x.length; i++)
            if (x[i])
                return 0;
        return 1;
    }
    
    ToString(x : any[], base : number) : string {
        var i, t, s = "";

        if (this.s6.length != x.length)
        this.s6 = this.Clone(x);
        else
            this.Clone_(this.s6, x);

        if (base == -1) { //return the list of array contents
            for (i = x.length - 1; i > 0; i--)
                s += x[i] + ',';
            s += x[0];
        }
        else { //return it in the given base
            while (!this.IsZero(this.s6)) {
                t = this.DivideInt_(this.s6, base);  //t=s6 % base; s6=floor(s6/base);
                s = this.digitsStr.substring(t, t + 1) + s;
            }
        }
        if (s.length == 0)
            s = "0";
        return s;
    }
    
    Clone(x : number[]) : number[] {
        let buff = new Array<number>(x.length);
        this.Clone_(buff, x);
        return buff;
    }
    
    Clone_(x : number[], y : number[]) {
        var i;
        var k = x.length < y.length ? x.length : y.length;
        for (i = 0; i < k; i++)
            x[i] = y[i];
        for (i = k; i < x.length; i++)
            x[i] = 0;
    }
    
    CloneInt_(x : number[], n : number) {
        var i, c;
        for (c = n, i = 0; i < x.length; i++) 
        {
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    }

    AddInt_(x : number[], n : number) {
        var i, k, c, b;
        x[0] += n;
        k = x.length;
        c = 0;
        for (i = 0; i < k; i++) 
        {
            c += x[i];
            b = 0;
            if (c < 0) {
                b = -(c >> this.bpe);
                c += b * this.radix;
            }
            x[i] = c & this.mask;
            c = (c >> this.bpe) - b;
            if (!c) return; //stop carrying as soon as the carry is zero
        }
    }
    
    RightShift_(x : number[], n : number) {
        var i;
        var k = Math.floor(n / this.bpe);
        if (k) 
        {
            for (i = 0; i < x.length - k; i++) //right shift x by k elements
                x[i] = x[i + k];
            for (; i < x.length; i++)
                x[i] = 0;
            n %= this.bpe;
        }
        for (i = 0; i < x.length - 1; i++) {
            x[i] = this.mask & ((x[i + 1] << (this.bpe - n)) | (x[i] >> n));
        }
        x[i] >>= n;
    }
    
    Halve_(x : number[]) {
        var i;
        for (i = 0; i < x.length - 1; i++) {
            x[i] = this.mask & ((x[i + 1] << (this.bpe - 1)) | (x[i] >> 1));
        }
        x[i] = (x[i] >> 1) | (x[i] & (this.radix >> 1));  //most significant bit stays the same
    }
    
    LeftShift_(x : number[], n : number) {
        var i;
        var k = Math.floor(n / this.bpe);
        if (k) {
            for (i = x.length; i >= k; i--) //left shift x by k elements
                x[i] = x[i - k];
            for (; i >= 0; i--)
                x[i] = 0;
            n %= this.bpe;
        }
        if (!n)
            return;
        for (i = x.length - 1; i > 0; i--) {
            x[i] = this.mask & ((x[i] << n) | (x[i - 1] >> (this.bpe - n)));
        }
        x[i] = this.mask & (x[i] << n);
    }
    
    MultiplyInt_(x : number[], n : number) {
        var i, k, c, b;
		if (!n)
			return;
		k = x.length;
		c = 0;
        for (i = 0; i < k; i++) 
        {
			c += x[i] * n;
			b = 0;
            if (c < 0) 
            {
				b = -(c >> this.bpe);
				c += b * this.radix;
			}
			x[i] = c & this.mask;
			c = (c >> this.bpe) - b;
		}
    }
    
    DivideInt_(x : number[], n : number) : number {
        var i, r = 0, s;
        for (i = x.length - 1; i >= 0; i--) {
            s = r * this.radix + x[i];
            x[i] = Math.floor(s / n);
            r = s % n;
        }
        return r;
    }
    
    LinComb_(x : number[], y : number[], a : number, b : number) {
        var i, c;
        let k = x.length < y.length ? x.length : y.length;
        let kk = x.length;
        for (c = 0, i = 0; i < k; i++) 
        {
            c += a * x[i] + b * y[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; i < kk; i++) {
            c += a * x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    }
    
    LinCombShift_(x : number[], y : number[], b : number, ys : number) {
        var i, c;
        let k = x.length < ys + y.length ? x.length : ys + y.length;
        let kk = x.length;
        for (c = 0, i = ys; i < k; i++) 
        {
            c += x[i] + b * y[i - ys];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; c && i < kk; i++) 
        {
            c += x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    }
    
    AddShift_(x : number[], y : number[], ys : number) {
        var i, c;
        let k = x.length < ys + y.length ? x.length : ys + y.length;
        let kk = x.length;
        for (c = 0, i = ys; i < k; i++) {
            c += x[i] + y[i - ys];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; c && i < kk; i++) {
            c += x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    }
    
    SubtractShift_(x : number[], y : number[], ys : number) {
        var i, c;
        let k = x.length < ys + y.length ? x.length : ys + y.length;
        let kk = x.length;
        for (c = 0, i = ys; i < k; i++) 
        {
            c += x[i] - y[i - ys];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; c && i < kk; i++) 
        {
            c += x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    }

    Subtract_(x : number[], y : number[]) {
        var i, c, k;
        k = x.length < y.length ? x.length : y.length;
        for (c = 0, i = 0; i < k; i++) 
        {
            c += x[i] - y[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; c && i < x.length; i++) 
        {
            c += x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    }
    
    Add_(x : number[], y : number[]) {
        var xN = this.IsNegative(x);
        var yN = this.IsNegative(y);
        var z, y1;
        if (yN) y1 = this.Negate(y);
        if (!xN) 
        {
            if (yN) 
            {
                if (this.MoreThan(x, y1)) 
                {
                    this.Subtract_(x, y1);
                    return;
                } else {
                    z = this.Subtract(y1, x);
                    this.Clone_(x, z);
                    this.Negate_(x);
                    return;
                }
            }
        }

        var i, c, k;
        k = x.length < y.length ? x.length : y.length;
        for (c = 0, i = 0; i < k; i++) {
            c += x[i] + y[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
        for (i = k; c && i < x.length; i++) {
            c += x[i];
            x[i] = c & this.mask;
            c >>= this.bpe;
        }
    }
    
    Multiply_(x : number[], y : number[]) {
        var i;
        if (this.ss.length != 2 * x.length)
        this.ss = new Array(2 * x.length);
        this.CloneInt_(this.ss, 0);
        for (i = 0; i < y.length; i++)
            if (y[i])
            this.LinCombShift_(this.ss, x, y[i], i);   //ss=1*ss+y[i]*(x<<(i*bpe))
        this.Clone_(x, this.ss);
    }
    
    Mod_(x : number[], n : number[]) {
        if (this.s4.length != x.length)
            this.s4 = this.Clone(x);
        else
            this.Clone_(this.s4, x);
        if (this.s5.length != x.length)
            this.s5 = this.Clone(x);
        this.Divide_(this.s4, n, this.s5, x);  //x = remainder of s4 / n
    }
    
    MultiplyMod_(x : number[], y : number[], n : number[]) {
        var i;
        if (this.s0.length != 2 * x.length)
        this.s0 = new Array<number>(2 * x.length);
        this.CloneInt_(this.s0, 0);
        for (i = 0; i < y.length; i++)
            if (y[i])
                this.LinCombShift_(this.s0, x, y[i], i);   //s0=1*s0+y[i]*(x<<(i*bpe))
        this.Mod_(this.s0, n);
        this.Clone_(x, this.s0);
    }
    
    SquareMod_(x : number[], n : number[]) {
        var i, j, c, kx, k;
        for (kx = x.length; kx > 0 && !x[kx - 1]; kx--);  //ignore leading zeros in x
        k = kx > n.length ? 2 * kx : 2 * n.length; //k=# elements in the product, which is twice the elements in the larger of x and n
        if (this.s0.length != k)
        this.s0 = new Array(k);
        this.CloneInt_(this.s0, 0);
        for (i = 0; i < kx; i++) {
            c = this.s0[2 * i] + x[i] * x[i];
            this.s0[2 * i] = c & this.mask;
            c >>= this.bpe;
            for (j = i + 1; j < kx; j++) {
                c = this.s0[i + j] + 2 * x[i] * x[j] + c;
                this.s0[i + j] = (c & this.mask);
                c >>= this.bpe;
            }
            this.s0[i + kx] = c;
        }
        this.Mod_(this.s0, n);
        this.Clone_(x, this.s0);
    }
    
    Trim(x : number[], k : number) : number[] {
        var i;
        for (i = x.length; i > 0 && !x[i - 1]; i--);
        let y = new Array<number>(i + k);
        this.Clone_(y, x);
        return y;
    }
    
    PowMod_(x: number[], y : number[], n : number[]) {
        var k1, k2, kn, np;
        if (this.s7.length != n.length)
        this.s7 = this.Clone(n);

        if ((n[0] & 1) == 0) 
        {
            this.Clone_(this.s7, x);
            this.CloneInt_(x, 1);
            while (!this.EqualsInt(y, 0)) 
            {
                if (y[0] & 1)
                this.MultiplyMod_(x, this.s7, n);
                this.DivideInt_(y, 2);
                this.SquareMod_(this.s7, n);
            }
            return;
        }
        this.CloneInt_(this.s7, 0);
        for (kn = n.length; kn > 0 && !n[kn - 1]; kn--);
        np = this.radix - this.InverseModInt(this.ModInt(n, this.radix), this.radix);
        this.s7[kn] = 1;
        this.MultiplyMod_(x, this.s7, n);   // x = x * 2**(kn*bp) mod n

        if (this.s3.length != x.length)
        this.s3 = this.Clone(x);
        else
        this.Clone_(this.s3, x);

        for (k1 = y.length - 1; (k1 > 0 ? 1 : 0) & (!y[k1] ? 1 : 0); k1--);  //k1=first nonzero element of y
        if (y[k1] == 0) {  //anything to the 0th power is 1
            this.CloneInt_(x, 1);
            return;
        }
        for (k2 = 1 << (this.bpe - 1); k2 && !(y[k1] & k2); k2 >>= 1);  //k2=position of first 1 bit in y[k1]
        for (; ;) {
            if (!(k2 >>= 1)) {  //look at next bit of y
                k1--;
                if (k1 < 0) {
                    this.MontMultiply_(x, this.one, n, np);
                    return;
                }
                k2 = 1 << (this.bpe - 1);
            }
            this.MontMultiply_(x, x, n, np);

            if (k2 & y[k1]) //if next bit is a 1
            this.MontMultiply_(x, this.s3, n, np);
        }
    }
    
    MontMultiply_(x : number[], y : number[], n : number[], np : number) {
        var i, j, c, ui, t, ks;
        var kn = n.length;
        var ky = y.length;

        if (this.sa.length != kn)
        this.sa = new Array(kn);
        this.CloneInt_(this.sa, 0);
        for (; kn > 0 && n[kn - 1] == 0; kn--); //ignore leading zeros of n
        for (; ky > 0 && y[ky - 1] == 0; ky--); //ignore leading zeros of y
        ks = this.sa.length - 1;
        
        for (i = 0; i < kn; i++) {
            t = this.sa[0] + x[i] * y[0];
            ui = ((t & this.mask) * np) & this.mask;  //the inner "& mask" was needed on Safari (but not MSIE) at one time
            c = (t + ui * n[0]) >> this.bpe;
            t = x[i];
            
            j = 1;
            for (; j < ky - 4;) {
                c += this.sa[j] + ui * n[j] + t * y[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++;
                c += this.sa[j] + ui * n[j] + t * y[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++;
                c += this.sa[j] + ui * n[j] + t * y[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++;
                c += this.sa[j] + ui * n[j] + t * y[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++;
                c += this.sa[j] + ui * n[j] + t * y[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++;
            }
            for (; j < ky;) { c += this.sa[j] + ui * n[j] + t * y[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++; }
            for (; j < kn - 4;) {
                c += this.sa[j] + ui * n[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++;
                c += this.sa[j] + ui * n[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++;
                c += this.sa[j] + ui * n[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++;
                c += this.sa[j] + ui * n[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++;
                c += this.sa[j] + ui * n[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++;
            }
            for (; j < kn;) { c += this.sa[j] + ui * n[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++; }
            for (; j < ks;) { c += this.sa[j]; this.sa[j - 1] = c & this.mask; c >>= this.bpe; j++; }
            this.sa[j - 1] = c & this.mask;
        }

        if (!this.MoreThan(n, this.sa))
        this.Subtract_(this.sa, n);
        this.Clone_(x, this.sa);
    }
    
    Negate(x : number[]) : number[] {
        var y = this.Clone(x);
        this.MultiplyInt_(y, -1);
        return y;
    }

    Negate_(x : number[]) {
        this.MultiplyInt_(x, -1);
    }

    ToArray(x : number[], base : number) : any[] {
        var i, t;
        var s = [];
        if (this.s6.length != x.length)
        this.s6 = this.Clone(x);
        else
        this.Clone_(this.s6, x);

        if (base == -1)
        {
            for (i = 0; i < x.length; i++) s.push(x[i]);
        }
        else 
        {
            while (!this.IsZero(this.s6)) 
            {
                t = this.DivideInt_(this.s6, base);  //t=s6 % base; s6=floor(s6/base);
                s.push(t);
            }
        }
        if (s.length == 0) s.push(0);
        return s;
    }

    FromArray(s : any[], base : number, minSize : number) : any[]  {
        var d, i, x, kk;

        var k = s.length;
        x = this.FromInt(0, base * k, 0);
        for (i = 0; i < k; i++) {
            d = s[i];
            if (d >= base || d < 0) 
            {
                break;
            }
            this.MultiplyInt_(x, base);
            this.AddInt_(x, d);
        }

        for (k = x.length; k > 0 && !x[k - 1]; k--); //strip off leading zeros
        k = minSize > k + 1 ? minSize : k + 1;
        let y = new Array(k);
        kk = k < x.length ? k : x.length;
        for (i = 0; i < kk; i++)
            y[i] = x[i];
        for (; i < k; i++)
            y[i] = 0;
        return y;
    }

    ToBytes(x : number[]) : any[] { return this.ToArray(x, 256); }

    FromBytes(bytes : any[]) : any[] { return this.FromArray(bytes, 256, 0); }
}
