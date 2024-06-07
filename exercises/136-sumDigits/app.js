function sumDigits(num) {
    // your code here
    let sum = 0;

    let digits = String(num).split("");

    if(num <0){
        digits.shift();
        digits[0] = "-" + digits[0];
    } 

    digits = digits.map(number => Number(number));

    for(let x = 0; x < digits.length; x++){
        sum += digits[x];
    }

    return sum;

}

let output = sumDigits(-818);
console.log(output); // --> 4
