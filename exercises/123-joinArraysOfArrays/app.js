function joinArrayOfArrays(arr) {
  // your code here

  let output = [];

  for (let x=0; x<arr.length; x++){

    arr[x].forEach(element => {
      output.push(element)
    });
  }
  
  return output;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
