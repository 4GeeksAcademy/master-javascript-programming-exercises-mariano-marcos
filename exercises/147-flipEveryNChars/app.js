function flipEveryNChars(input, n) {
    let result = '';
  
    // Loop through the string in steps of `n`
    for (let i = 0; i < input.length; i += n) {
      // Get the next `n` characters
      let chunk = input.slice(i, i + n);
      // Reverse the chunk and add it to the result
      result += chunk.split('').reverse().join('');
    }
  
    return result;
  }
  
  let input1 = 'a short example';
  let output1 = flipEveryNChars(input1, 5);
  console.log(output1); // --> " ohs axe trelpma"
  
  let input2 = 'check out how interesting this problem is, it\'s insanely interesting!';
  let output2 = flipEveryNChars(input2, 5);
  console.log(output2); // --> "kcehc tuo woh gnitseretni siht melborp ,si 't ssenaniyl ygnitseretni!"
  