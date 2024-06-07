function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let smallest = Infinity;
  if (arr.length == 0){
    return 0;
  } else {
    for(let e of arr){
      if(e < smallest && typeof e == 'number') smallest = e;
    }
  }
  if (smallest != Infinity){
    return smallest;
  } else {
    return 0;
  }
  
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
