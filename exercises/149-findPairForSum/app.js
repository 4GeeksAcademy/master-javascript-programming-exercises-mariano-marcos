function findPairForSum(array, number) {
  // your code here
  let outputNumbers = [];
  for(let x = 0; x < array.length; x++){

    for (let y = x + 0; y < array.length; y++){
      if (array[x] + array[y] == number){
        outputNumbers.push(array[x],array[y])
        return outputNumbers;
      }
    }
  }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

function findPairForSum2(array, number) {
  let seenNumbers = new Set();

  for (let i = 0; i < array.length; i++) {
      let complement = number - array[i];

      if (seenNumbers.has(complement)) {
          return [complement, array[i]];
      }

      seenNumbers.add(array[i]);
  }

  return null; // Return null if no pair is found
}

let pair2 = findPairForSum2 ([3, 34, 4, 12, 5, 2], 9);
console.log(pair2); // --> [4, 5]
