// Write your function here

function areValidCredentials(name, password){
    return (name.length >3 && password.length > 8);
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true