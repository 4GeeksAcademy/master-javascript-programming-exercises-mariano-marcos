function isOldEnoughToVote(age) {
  // your code here
  if (age>=18){
    return true
  } else {
    return false
  }
  
}

let availableToVote = isOldEnoughToVote(19);

console.log(availableToVote)