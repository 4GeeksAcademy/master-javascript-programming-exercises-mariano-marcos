function getLargestNumberAmongMixedElements(arr) {
    // your code here

    let output = -Infinity;

    if (arr.length == 0) return 0;
    for(let x = 0; x< arr.length; x++){
        let item = arr[x];

        if (typeof item == 'number' && item > output){
            output = item;
        }
    }

    return output === -Infinity ? 0 : output;

    
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
