function computeSumOfAllElements(arr) {
  // your code here

  let output = 0;

  arr.forEach((element) => output += element)
  
  return output;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
