function convertDoubleSpaceToSingle(str) {
    // your code here
    let singleSpaced = str.split("  ");
    singleSpaced = singleSpaced.join(" ");
    return singleSpaced;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
