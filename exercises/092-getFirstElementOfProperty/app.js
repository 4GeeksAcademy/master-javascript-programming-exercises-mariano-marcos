// Write your function here

function getFirstElementOfProperty(obj, key){

    if (obj[key] == undefined){
        return undefined;
    } else {
        return obj[key][0];
    }
   
}

let obj = {
    key: [1, 2, 4]
  };
let output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
