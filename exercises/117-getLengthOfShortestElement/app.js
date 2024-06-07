function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length == 0){
        return 0;
    } else {
        let shortest = Infinity;

        arr.forEach(item => {
            if(item.length < shortest){
                shortest = item.length;
            }
        });

        return shortest;
    }
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
