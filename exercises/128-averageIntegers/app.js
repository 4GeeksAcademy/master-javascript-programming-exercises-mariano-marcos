function average(arr) {
  // your code here
  let average = sum(arr)/arr.length
  return average;
  
}

function sum(arr) {
  // your code here
  let total = 0;
  arr.forEach((item) => {
    if(typeof item == 'number'){
      total += item
    }
  });
  return total;
}

console.log(average([1, 2,3,10,30])); // --> 1.5
