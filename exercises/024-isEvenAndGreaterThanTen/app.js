// Write your function here

function isEvenAndGreaterThanTen (num){

    // if(num % 2 == 0 && num > 10){
    //     return true;
    // } else {
    //     return false
    // }
    return num % 2 == 0 && num > 10;
}

let output = isEvenAndGreaterThanTen(53);
console.log(output); // --> false