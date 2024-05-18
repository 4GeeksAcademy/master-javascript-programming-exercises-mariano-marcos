function filterOddLengthWords(words) {
    // your code here
    // let newWords = words.filter(word => {
    //     if(word.length % 2 != 0){
    //         return word;
    //     }
    // })

    let newWords = words.filter(word => word.length % 2 != 0);

    return newWords;
    
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
