var prompt = require('prompt-sync')();

let output ='';
function computeDash(input){
    let array = [], i=0, j=0, k=0;

    // Check starting Zeros

    for(k=0; k<input.length; k++){
        if((input.charAt(k) == 0) && (input.charAt(k+1) == 0)){
            output = output + '0-';
        }
        else {
            if(input.charAt(k+1) % 2 != 0)
            output = output + '0';
            break;
        }
    }
    input = parseInt(input);

    // Get the remainning digits

    while(input>1){
        array[i] = input % 10;
        input = parseInt(input/10);
        i++;
    }

    array.reverse();
    
    for(j=0; j<array.length; j++){
        if((array[j] % 2 == 0) && (array[j+1] % 2 == 0)){
                output = output + array[j].toString() + '-';
        }
        else{
            output = output + array[j];
        }
    }
    return output;
}
let input = prompt("Enter a number to insert Dash between even numbers : ");
console.log("Expexted output : " + computeDash(input));
