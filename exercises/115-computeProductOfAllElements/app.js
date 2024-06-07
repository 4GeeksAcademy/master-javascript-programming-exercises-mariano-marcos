function computeProductOfAllElements(arr) {
  // your code here
  if(arr.length == 0){
    return 0;
  } else {
    let product = 1;

    arr.forEach(element => {
      product *= element;
    });

    return product;
  }
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
