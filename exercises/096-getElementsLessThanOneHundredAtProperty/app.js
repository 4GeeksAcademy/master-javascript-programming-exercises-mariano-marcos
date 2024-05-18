// Write your function here
function getElementsLessThan100AtProperty(obj,key){
    
    let output = [];
    if (obj[key] != undefined && Array.isArray(obj[key])){
        output = obj[key].filter(element => element < 100);
    }
    return output;
    
}

let obj = {
    key: [1000, 20, 50, 500]
  };
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]