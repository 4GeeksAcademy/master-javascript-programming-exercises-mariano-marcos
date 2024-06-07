function transformEmployeeData(array) {
  // your code here

  let output = [];

  for(let x = 0; x < array.length; x++){
    output[x] = {};
    for (let y = 0; y < array[x].length; y++){
      output[x][array[x][y][0]] =  array[x][y][1];
    }
  }
  
  return output;
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]