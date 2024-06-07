function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length == 0){
        return 0;
    } else {
        let longest = 0;

        arr.forEach(element => {
            if(element.length > longest){
                longest = element.length
            }
        });
        return longest;
    }
    
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
