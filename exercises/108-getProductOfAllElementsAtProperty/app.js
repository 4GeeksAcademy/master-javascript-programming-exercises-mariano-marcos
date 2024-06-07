function getProductOfAllElementsAtProperty(obj, key) {
    // your code here

    let output = 0;

    if(key in obj && Array.isArray(obj[key]) && obj[key].length > 0){
      
      output = obj[key][0]

      for(let x = 1; x < obj[key].length ; x++){
        output = output * obj[key][x]
      }

    }

    return output;
    
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
