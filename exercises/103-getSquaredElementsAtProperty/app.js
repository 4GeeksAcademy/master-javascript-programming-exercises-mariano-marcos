function getSquaredElementsAtProperty(obj, key) {
    // your code here

    let output = [];

    if(obj[key] != undefined && Array.isArray(obj[key])){

      output = obj[key].map(item => Math.pow(item,2));
    }

    return output;
    
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
