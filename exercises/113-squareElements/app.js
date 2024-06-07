function squareElements(arr) {
  // your code here
  let squaredArr = arr.map(item => Math.pow(item,2))
  
  return squaredArr;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
