function findSmallestElement(arr) {
    // your code here
    if(arr.length == 0){
        return 0;
    } else { 
        let smallest = Infinity;
        arr.forEach((number) =>{
            if(number < smallest){
                smallest = number;
            }
        })
        return smallest;
    } 
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1