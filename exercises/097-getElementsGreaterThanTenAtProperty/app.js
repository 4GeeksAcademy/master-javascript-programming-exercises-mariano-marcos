// Write your function here
function getElementsGreaterThan10AtProperty(obj,key){
 
  let output = [];

  if (obj[key] != undefined && Array.isArray(obj[key])){
    output = obj[key].filter(element => element > 10);
  }

  return output;

}

let obj = {
    key: [1, 20, 30]
  };
let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]