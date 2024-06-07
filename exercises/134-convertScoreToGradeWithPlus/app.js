function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here

    if(score  < 0 || score > 100){
        return "INVALID SCORE";
    } else if (score >= 90){
        return "A" + plusOrMinusSign(score);
    } else if (score >= 80){
        return "B" + plusOrMinusSign(score);
    } else if (score >= 70){
        return "C" + plusOrMinusSign(score);
    } else if (score >= 60){
        return "D" + plusOrMinusSign(score);
    } else {
        return "F"
    }
}

function plusOrMinusSign (score){

    const lastDigit = score % 10;

    if (score == 100 || lastDigit >= 8) {
        return "+";
    } else if (lastDigit < 3) {
        return "-";
    } else {
        return "";
    }
}

let output = convertScoreToGradeWithPlusAndMinus(100);
console.log(output); // --> 'A-'
