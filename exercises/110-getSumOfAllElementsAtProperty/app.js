function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let output = 0;
    
    if (key in obj && Array.isArray(obj[key]) && obj[key].length > 0){
        obj[key].forEach((item) => output += item);
    }

    return output
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13



