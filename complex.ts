class Complex {
    private real: number
    private imaginary: number;

    constructor(realNumber: number, imaginaryNumber: number) {
        this.real = realNumber;
        this.imaginary = imaginaryNumber;
    }

    getReal(): number {
        return this.real
    }

    getImaginary(): number {
        return this.imaginary
    }

    public add(complexNumber:Complex){
        this.real +=complexNumber.getReal();
        this.imaginary +=complexNumber.getImaginary();
    }
    public subtract(complexNumber:Complex){
        this.real -=complexNumber.getReal();
        this.imaginary -=complexNumber.getImaginary();

    }

    public modulus():number{
        return Math.sqrt(Math.pow(this.real,2)+ Math.pow(this.imaginary,2));

    }
    public showValue():string{
        let sign:string;
        if (this.imaginary < 0) {
            sign = "";
        } else {
            sign = "+"
        }
        return this.real + sign + this.imaginary + "i";
    }
}

let liczba1 = new Complex(4, 2);
let liczba2 = new Complex(18, 2);
liczba1.add(liczba2);
console.log(liczba1.showValue());
liczba1.subtract(liczba2);
liczba1.subtract(liczba2);
console.log(liczba1.showValue());
console.log(liczba2.modulus());
