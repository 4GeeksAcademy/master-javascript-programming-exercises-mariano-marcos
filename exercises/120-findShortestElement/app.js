function findShortestElement(arr) {
    // your code here

    let ShortestElementLength = Infinity;
    let  shortestElement = '';

    if(arr.length == 0){
        return '';
    } else {

        arr.forEach((item) => {
            if (item.length < ShortestElementLength){
                shortestElement = item;
                ShortestElementLength = item.length;
            }
        })
    }
    return shortestElement;

}

let output = findShortestElement(['apple', 'two', 'three','Om']);
console.log(output); // --> 'a'