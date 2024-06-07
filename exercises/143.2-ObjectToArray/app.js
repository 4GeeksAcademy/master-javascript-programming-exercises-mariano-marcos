function listAllValues(obj) {
  // your code here

  let outputArr = [];

  for(let key in obj){
    outputArr.push(obj[key]);
  }

  return outputArr;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
