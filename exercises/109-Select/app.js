// Write your function here

function select (arr,obj){
    let output = {}

    for (let x = 0; x < arr.length; x++){
        if (arr[x] in obj){
            output[arr[x]] = obj[arr[x]];
        }
    }

    return output;

}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
