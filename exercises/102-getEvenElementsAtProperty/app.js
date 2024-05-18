function getEvenElementsAtProperty(obj, key) {
    // your code here
    
    let output = [];

    if (obj[key] != undefined && Array.isArray(obj[key])){

      output = obj[key].filter(item => typeof item === 'number' && item % 2 === 0 );
    }
    return output;
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
