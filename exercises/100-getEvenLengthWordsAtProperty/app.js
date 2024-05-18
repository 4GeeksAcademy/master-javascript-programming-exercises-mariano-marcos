function getEvenLengthWordsAtProperty(obj, key) {
    // your code here

    let output = [];

    if (obj[key] != undefined && Array.isArray(obj[key])){

      output = obj[key].filter(element => element.length % 2 == 0)
    }

    return output;
    
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
