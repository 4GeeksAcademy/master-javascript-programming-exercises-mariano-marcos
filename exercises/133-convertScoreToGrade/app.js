function convertScoreToGrade(score) {
    // your code here
    if (score > 100 || score < 0) {
        return "INVALID SCORE";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let output = convertScoreToGrade(105);
console.log(output); // --> 'A'
