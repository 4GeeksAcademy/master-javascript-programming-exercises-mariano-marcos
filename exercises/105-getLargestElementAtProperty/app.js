function getLargestElementAtProperty(obj, key) {
    // your code here
    let largest = - Infinity;
    let output = [];

    if(obj[key] != undefined && Array.isArray(obj[key]) && obj[key].length){

      obj[key].forEach(element => {
        if(element > largest){
          largest = element;
        }
        
        output  = largest;
      });
    }
    return output;
    
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
