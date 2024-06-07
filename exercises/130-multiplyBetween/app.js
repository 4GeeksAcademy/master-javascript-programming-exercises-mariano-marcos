function multiplyBetween(num1, num2) {
    // your code here

    if(num2<num1) return 0;
    let multiplication = 1;
    
    for(let x=num1; x<num2; x++){
        multiplication *= x;
    }   
    return multiplication;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
