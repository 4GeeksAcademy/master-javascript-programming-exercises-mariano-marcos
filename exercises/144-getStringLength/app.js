function getStringLength(string) {
    // Initialize a counter
    let length = 0;

    // Loop through the string using substring to count each character
    while (string.substring(length, length + 1) !== '') {
        length++;
    }

    return length;
}

let output = getStringLength('hello');
console.log(output); // --> 5

function getStringLengthSliceWay(string) {
    // Initialize a counter
    let length = 0;

    // Loop through the string using slice to count each character
    while (string.slice(length, length + 1) !== '') {
        length++;
    }

    return length;
}

let output2 = getStringLengthSliceWay('hello');
console.log(output2); // --> 5

