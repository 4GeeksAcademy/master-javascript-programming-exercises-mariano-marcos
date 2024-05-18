function getOddElementsAtProperty(obj, key) {
    // your code here
    let output = [];
    if (obj[key] != undefined && Array.isArray(obj[key])){
      output = obj[key].filter(element => typeof element === 'number' && element % 2 !== 0);
    }   
    return output;
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
