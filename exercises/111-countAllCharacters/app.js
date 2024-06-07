// Write your function here

function countAllCharacters(string){
    let output = {};
    let stringArray = string.split('');

    if( string.length > 0){
        stringArray.forEach(char => {
            if(!output[char]){
                output[char] = 1;
            } else {
                output[char] += 1;
            }
        });
    }

    return output;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
