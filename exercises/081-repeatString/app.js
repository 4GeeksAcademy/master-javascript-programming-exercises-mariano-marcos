function repeatString(string, num) {
    // your code here
    let repeatedString = '';
    for(let x = 0; x<num; x++){
        repeatedString = repeatedString.concat(string)
    }
    return repeatedString;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
