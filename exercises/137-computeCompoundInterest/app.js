function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  let compoundInterest = principal * Math.pow(1 + (interestRate / compoundingFrequency), compoundingFrequency * timeInYears) - principal;
  return compoundInterest; // Return the result rounded to 2 decimal places
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
