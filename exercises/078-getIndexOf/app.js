// Write your function here
function getIndexOf(char, str){
    for (let x = 0; x<str.length; x++){
        if(str[x] === char){
            return x;
        } 
    }
    return -1;
}
let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
