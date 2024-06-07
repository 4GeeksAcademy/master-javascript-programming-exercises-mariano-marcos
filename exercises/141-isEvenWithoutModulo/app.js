function isEvenWithoutModulo(num) {
    // your code here
    return Math.floor(num / 2) * 2 == num;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
