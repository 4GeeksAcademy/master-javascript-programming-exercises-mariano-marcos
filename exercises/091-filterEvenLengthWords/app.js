function filterEvenLengthWords(words) {
    // your code here
    let evenWords = words.filter(word => word.length % 2 == 0);

    return evenWords;
    
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
