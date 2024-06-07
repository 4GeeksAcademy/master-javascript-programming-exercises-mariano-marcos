function transformFirstAndLast(array) {
  // your code here
  let outputObject = {}
outputObject[array[0]] = array[array.length - 1];
return outputObject;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }

let output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
console.log(output); // --> { Kevin: "Spacey" }