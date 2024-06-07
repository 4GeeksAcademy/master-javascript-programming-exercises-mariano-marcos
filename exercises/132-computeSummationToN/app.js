function computeSummationToN(n) {
  // your code here
  let total = 0;

  for (let x = 0; x <= n; x++) {
    total += x;
  }
  
  return total;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

