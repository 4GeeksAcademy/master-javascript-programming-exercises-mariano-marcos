function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let output = 0 ;

  if (obj[key] != undefined && Array.isArray(obj[key]) && obj[key].length > 0){

    obj[key].forEach(item => output += item);
    return output / obj[key].length;
  }

  return output;

}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2 