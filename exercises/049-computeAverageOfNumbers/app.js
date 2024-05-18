// Write your function here
// function computeAverageOfNumbers(arr){
//     let average = 0;
//     for (let number of arr){
//         average += number;
//     }
//     if (average> 0){
//         average = average/arr.length
//     }
    
//     return average;
// }

let computeAverageOfNumbers = (arr) => {
    let average = 0;
    for (let number of arr){
        average += number;
    }
    if (average> 0){
        average = average/arr.length
    }
    
    return average;
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3