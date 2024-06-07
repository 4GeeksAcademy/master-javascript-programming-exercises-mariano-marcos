function getLargestElement(arr) {
  // your code here

  let largest = -Infinity;

  if (arr.length == 0 ) return 0;
  else{
    for(let e of arr){
      if (e > largest){
        largest = e;
      }
    }
  }
  return largest;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;