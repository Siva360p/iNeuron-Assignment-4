var prompt = require('prompt-sync')();

const pi = 22/7;

class Cylinder{

    constructor(r , h){
        this.r = r, this.h = h;
    }
    
    getVolume(){
        return (pi * this.r * this.r / this.h);
    }
}

class Sphere{
    constructor(r){
        this.r = r;
    }

    getVolume(){
        return ((4/3) * pi * this.r * this.r * this.r);
    }
}

class Cone{
    constructor(r , h){
        this.r = r, this.h = h;
    }
    
    getVolume(){
        return (pi * this.r * this.r / (3 * this.h));
    }
   
}

console.log("List of shapes to find out volume : 1. Cylinder, 2. Sphere, 3. Cone ");
let shape = prompt("Select shape (1/2/3) ?: ");

let radius, height, obj;

switch(shape){
    case '1':
        radius = prompt("Enter radius of the Cylinder : ");
        height = prompt("Enter height of the Cylinder : ");
        obj = new Cylinder(radius, height);
        console.log("The volume of the Cylinder is : " + obj.getVolume().toFixed(4));
        break;

    case '2':
        radius = prompt("Enter radius of the Sphere : ");
        obj = new Sphere(radius);
        console.log("The volume of the Sphere is : " + obj.getVolume().toFixed(4));
        break;

    case '3':
        radius = prompt("Enter radius of the Cone : ");
        height = prompt("Enter height of the Cone : ");
        obj = new Cone(radius, height);
        console.log("The volume of the Cone is : " + obj.getVolume().toFixed(4));
        break;

    default:
        console.log("Invalid Shape");
}