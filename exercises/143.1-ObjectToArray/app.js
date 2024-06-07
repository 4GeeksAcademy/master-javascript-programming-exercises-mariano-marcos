function getAllKeys(obj) {
  // your code here
  let objKeys = [];

  for(let key in obj){
    objKeys.push(key);
  }
  
  return objKeys
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
