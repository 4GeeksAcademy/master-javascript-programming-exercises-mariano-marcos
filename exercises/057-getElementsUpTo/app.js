function getElementsUpTo(array, n) {
  // your code here
  array = array.splice(0,n);
  return array;
  
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
