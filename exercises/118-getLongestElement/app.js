function getLongestElement(arr) {
    // your code here

    if (arr.length == 0){
        return "";
    } else {
        let longest = '';

        arr.forEach(element => {

            if(element.length > longest.length){
                longest = element
            }
        });
        return longest;
    }
    
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
