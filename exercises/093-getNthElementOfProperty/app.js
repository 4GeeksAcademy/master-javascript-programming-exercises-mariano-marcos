// Write your function here
function getNthElementOfProperty(obj,key,index){
    if(obj[key] != undefined && Array.isArray(obj[key]) && obj[key].length > index){
        return obj[key][index];
    } else {
        return undefined;
    }
}


let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2