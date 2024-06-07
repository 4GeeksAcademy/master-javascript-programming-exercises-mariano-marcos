function findShortestWordAmongMixedElements(arr) {
    // your code here
    let shortestWordLength = Infinity;
    let shortestElement = '';

    arr.forEach(element => {
        if (typeof element == 'string' && element.length < shortestWordLength){
            shortestElement = element;
            shortestWordLength = element.length
        }
    });

    return shortestElement;
    
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
