// Write your function here
// Write your function here

function removeElement(array, discarder) {
    let newArr = array.filter(element => element !== discarder);

    // let newArr = array.filter(function(element){
    //     if(element !== discarder){
    //         return element;
    //     }
    // })
    return newArr;
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]