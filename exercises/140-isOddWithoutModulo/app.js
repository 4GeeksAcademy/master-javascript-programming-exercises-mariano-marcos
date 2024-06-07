function isOddWithoutModulo(num) {
    // your code here

    return num !== Math.floor(num / 2) * 2;

    // if(typeof num / 2 == 'float'){
    //     return false;
    // } else {
    //     return true;
    // } 
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
