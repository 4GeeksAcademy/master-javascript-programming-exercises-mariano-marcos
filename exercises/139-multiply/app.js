function multiply(num1, num2) {
    // your code here

    let result = 0 ;

    num1Abs = Math.abs(num1);
    num2Abs = Math.abs(num2);

    for (x = 0; x<num1Abs; x++){
        result += num2Abs;
    } 

    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)){
        return -result;
    } else {
        return result;
    }
    
}

let output = multiply(4, 7);
console.log(output); // --> 28
