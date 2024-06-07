function getAllButLastElementOfProperty(obj, key) {
    // your code here

    let output = [];

    // if(obj[key] != undefined && Array.isArray(obj[key]) && obj[key].length > 0){
    //   output = obj[key].filter(function(item,index){
    //     if(index < obj[key].length -1){
    //       return item;
    //     }
    //   });
    // }

    if(obj[key] != undefined && Array.isArray(obj[key]) && obj[key].length > 0){
      output = obj[key].filter((item,index) => index < obj[key].length -1);
    }

    return output;
    
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
