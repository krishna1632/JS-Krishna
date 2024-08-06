// function addTwoNo(num1,num2) { // num1 and num2 are called parameters
//   return num1 + num2;
// }


// const result = addTwoNo(3, 3);
// console.log(result); // here it will be called as arguments



function calculateCartPrice(val1,val2,...num1) {
  return num1;
}
// console.log(calculateCartPrice(200,300,500,1000));

const user = {
  username: 'Krish',
  price: 999,
  
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  
}

// handleObject(user);


const myArr = [200, 300, 400, 500];

function returnValue(getValue) {
  return getValue[1];
}

console.log(returnValue(myArr));