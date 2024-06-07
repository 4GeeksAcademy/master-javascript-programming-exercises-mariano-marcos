function getProperty(obj, key) {
  // your code here
  return obj[key];
}

let car = {
  model: 'Toyota',
  year: 1988,
  color: "Dark Grey",
  version: 'Rav4'
};
let output = getProperty(car, 'model');

for(let key in car){
  console.log(key +": " + car[key])
}
console.log(output); // --> 'Toyota'