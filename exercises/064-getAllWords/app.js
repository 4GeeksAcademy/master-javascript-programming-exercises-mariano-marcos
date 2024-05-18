function getAllWords(str) {
    // your code here
    let wordsArray = str.split(" ");

    return wordsArray;
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
