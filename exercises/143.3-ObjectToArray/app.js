function convertObjectToList(obj) {
  // your code here
  let outputArr = [];

  for (let key in obj) {
    // Push a new array containing the key and value
    outputArr.push([key, obj[key]]);
  }

  return outputArr;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
