var prompt = require('prompt-sync')();

let input = prompt("Enter number of steps in the matchstick house : ");

function countSticks(input){
return  (6 + ((input -1) * 5));

}
if(input>0){
    console.log("Total number of matchsticks in the house with " + input + " steps is : " + countSticks(input));
}
    else{
    console.log("Please enter positive integer");
    }
// countSticks() or matchHouses()
