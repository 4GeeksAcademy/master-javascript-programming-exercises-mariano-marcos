// Write your function here
function getElementsThatEqual10AtProperty(obj,key){
    if (obj[key] != undefined && Array.isArray(obj[key])){
        let output = obj[key].filter(element => element === 10);
        return output;
    } else {
        return [];
    }
}


let obj = {
    key: [1000, 10, 50, 10]
  };
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]