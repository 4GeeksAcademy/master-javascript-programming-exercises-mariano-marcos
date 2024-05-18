function countCharacter(str, char) {
    // your code here
    let counter = 0;

    for( let x = 0; x<str.length; x++){
        if (str[x].toLowerCase() === char){
            counter += 1;
        }
    }

    counter = 0;

    str = str.split('');

    for( let x = 0; x<str.length; x++){
        if (str[x].toLowerCase() === char){
            counter += 1;
        }
    }


    return counter;
    
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
