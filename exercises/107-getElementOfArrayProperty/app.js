function getElementOfArrayProperty(obj, key, index) {
    // your code here

    if(obj[key] != undefined && Array.isArray(obj[key]) && obj[key].length > 0 && index < obj[key].length){
        return obj[key][index]
    } else {
        return undefined;
    }
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
