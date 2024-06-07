function getLongestWordOfMixedElements(arr) {
    // your code here
    let longestLength = -Infinity;
    let longestWord = '';
    // let flag = false;
    if (arr.length === 0) return '';


    for (let x = 0; x < arr.length; x++) {
        if (typeof arr[x] === 'string') {
            // flag = true;
            if (arr[x].length > longestLength) {
                longestWord = arr[x];
                longestLength = arr[x].length;
            }
        }
    }

    return longestLength === 0 ? "" : longestWord;

    // if (flag == true){

        // return longestWord;

    // } else {
    //     return '';
    // }
    // return longestLength === 0 ? 0 : longestWord;
}

let output = getLongestWordOfMixedElements([3, 'Potential', 5, 'Mario Kart', 3, 1]);
console.log(output); // --> 'word'
