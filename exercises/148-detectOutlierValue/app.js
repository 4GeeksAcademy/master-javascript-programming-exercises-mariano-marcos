function detectOutlierValue(string) {
    // Your code here
    let evens = 0;
    let odds = 0;
    let numbers = string.split(' ').map(Number); // Split by space and convert to numbers
    let outlierIndex = -1;

    // Count evens and odds
    numbers.forEach((element) => {
        if (element % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    });

    // Find the outlier based on the counts
    if (odds === 1) {
        outlierIndex = numbers.findIndex(element => element % 2 !== 0);
    } else if (evens === 1) {
        outlierIndex = numbers.findIndex(element => element % 2 === 0);
    }

    // Return the 1-based index of the outlier
    return outlierIndex + 1;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1")); // --> 2
