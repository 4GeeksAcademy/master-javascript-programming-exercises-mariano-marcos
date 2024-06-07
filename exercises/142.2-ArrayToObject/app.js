
function fromListToObject(array) {
  // your code here
  let outputObject = {};

  for (let x = 0; x < array.length; x++){
    outputObject[array[x][0]] = array[x][1]
  }

  return outputObject
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
