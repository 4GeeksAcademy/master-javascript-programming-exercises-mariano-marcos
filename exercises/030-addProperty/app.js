function addProperty(obj, key) {
  // your code here

  let values = ['Coca-Cola', 'TV', 'BMW', 'Videogames'];

  let x = Math.floor(Math.random() * values.length);
  
  obj[key] = true;

  return obj;
  
}

let myObj = {
  car: 'Toyota',
  fruits: 'Banana',
  number: 150,
  room: 'kitchen',
};

let myObj2 = {
  car: true,
  typeOfFuel: 93
}
addProperty(myObj, 'FavoriteSoda');
addProperty(myObj, 'fruit');
console.log(myObj.FavoriteSoda); // --> true
console.log(myObj['fruit'])

addProperty(myObj2, 'year')

for (let key in myObj2){
  console.log(key + ": " + myObj2[key]);
}
