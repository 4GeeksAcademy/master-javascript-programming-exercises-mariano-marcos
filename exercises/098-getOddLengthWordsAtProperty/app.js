// Write your function here
function getOddLengthWordsAtProperty(obj,key){

    let output = [];
    if (obj[key] != undefined && Array.isArray(obj[key])){
        output = obj[key].filter(word => word.length % 2 != 0);
    }
    return output;
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']