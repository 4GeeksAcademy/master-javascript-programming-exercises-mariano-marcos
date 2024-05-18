function joinThreeArrays(arr1, arr2, arr3) {
  // your code here

  arr1 = arr1.concat(arr2,arr3);

  return arr1;
  
}

let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]