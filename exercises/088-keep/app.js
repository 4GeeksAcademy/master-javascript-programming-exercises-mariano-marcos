// Write your function here

function keep(array, keeper) {
    let newArr = array.filter(element => element === keeper);

    // let newArr = array.filter(function(element){
    //     if(element === keeper){
    //         return element;
    //     }
    // })
    return newArr;
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]