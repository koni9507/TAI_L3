"use strict";
class Complex {
    constructor(realNumber, imaginaryNumber) {
        this.real = realNumber;
        this.imaginary = imaginaryNumber;
    }
    getReal() {
        return this.real;
    }
    getImaginary() {
        return this.imaginary;
    }
    add(complexNumber) {
        this.real += complexNumber.getReal();
        this.imaginary += complexNumber.getImaginary();
    }
    subtract(complexNumber) {
        this.real -= complexNumber.getReal();
        this.imaginary -= complexNumber.getImaginary();
    }
    modulus() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    showValue() {
        let sign;
        if (this.imaginary < 0) {
            sign = "";
        }
        else {
            sign = "+";
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
