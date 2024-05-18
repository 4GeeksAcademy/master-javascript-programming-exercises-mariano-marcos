function getAllElementsButNth(array, n) {
    // your code here

    let newArr = [];

    for (let x =0; x<array.length; x++){
        if(x == n){
           continue;
        } else {
            newArr.push(array[x]);
        }
    }
    return newArr;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
