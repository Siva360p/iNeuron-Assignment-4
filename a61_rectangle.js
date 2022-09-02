var prompt = require('prompt-sync')();

class Rectangle{
    constructor(length, width){
        this.length=length;
        this.width=width;
    }
    
    area(){
        return this.length * this.width;
    }
}

class Square extends Rectangle{
    constructor(side){
        super();
        super.length=side;
        super.width=side;
    }
}

let s = prompt("Enter side of a square : ");
let obj = new Square(s);
console.log("Area of the square is : " + obj.area());
