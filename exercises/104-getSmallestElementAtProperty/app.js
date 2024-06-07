function getSmallestElementAtProperty(obj, key) {
    // your code here
    let smallest = Infinity;
    let output = [];

    if(obj[key] != undefined && Array.isArray(obj[key]) && obj[key].length > 0){

      obj[key].forEach(element => {
        if(element < smallest){
          smallest = element;
        }
      });

      return smallest;
    }

    return output;
  
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
