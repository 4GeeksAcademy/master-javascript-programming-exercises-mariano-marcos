function modulo(num1, num2) {
    // your code here

    let partialDivision = 0;
    let remainder = 0;
    let negative = false;

    if (num1 == 0 ){
        return 0;
    } else if (num2 == 0 || typeof(num1) != 'number' || typeof(num2) != 'number'){
        return NaN;
    } else{

        if (num1<0){
            negative = true;
        }
        num1 = Math.abs(num1);
        num2 = Math.abs(num2);

        partialDivision = Math.floor(num1/num2);
        remainder = num1 - (partialDivision*num2);
        
        if(negative){
            return -remainder;
        } else {
            return remainder;
        }
        
    }


    
}

let output = modulo(25, 4);
console.log(output); // --> 1
