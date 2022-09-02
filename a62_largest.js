var prompt = require('prompt-sync')();

let array = [3,45,6,7,23,5,7,8];

function find_largest(l){
    array.sort(function(a,b) {return b-a});
    return array[l-1];
}

let n = prompt("Enter which largest number required : ");
console.log(" The " + n + "th largest number in the array is : "+ find_largest(n));

