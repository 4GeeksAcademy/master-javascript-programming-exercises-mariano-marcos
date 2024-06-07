let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
  
  if (!(firstName in customerData)) {
    greeting = 'Welcome! Is this your first time?';
    customerData[firstName] = { visits: 1 };
  } else if (customerData[firstName].visits === 1) {
    greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    customerData[firstName].visits++;
  } else if (customerData[firstName].visits > 1) {
    greeting = `Welcome back, ${firstName}! So glad to see you again!`;
    customerData[firstName].visits++;
  }

  return greeting;
}

function takeOrder(food,firstname){
  customerData[firstName] = {favoriteFood: food}
  console.log(`${firstName}, we are adding your favorite food to your profile, ${customerData[firstName].favoriteFood}`)
  return 'Order Taken'
}

let firstName = 'Artemis';
console.log(greetCustomer(firstName)); // --> 'Welcome! Is this your first time?'
console.log(`Artemis, your visits number has increased to ${customerData[firstName].visits}`);

firstName = 'Joe';
console.log(greetCustomer(firstName)); // --> 'Welcome back, Joe! So glad to see you again!'
console.log(`Joe, your visits number has increased to ${customerData[firstName].visits}`);

console.log(takeOrder('lasagna',firstName))