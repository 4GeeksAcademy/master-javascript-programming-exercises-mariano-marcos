function computeFactorialOfN(n) {
    // your code here
    let factorial = 1;

    if (n>1){
        for(let x = 2; x <= n; x++){
            factorial *= x;
        }
    }

    return factorial;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
