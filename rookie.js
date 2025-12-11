// let shirt = "black";
// shirt = "blue";
// console.log(shirt);
//
// const person = { age: 20};
// person.height = 180;
// console.log(person);
//
// function add(a, b, c){
//   return console.log(a + b + c);
// }
// add(1, 5, 3);
//
// const divide = (a, b) => a / b;
// console.log(divide(10, 2));
//
// function test(){
//   let a = 56
//   console.log(a);
// }
// test();
//
// console.log(b);
// var b = 10;

// var name = "Mentrum";
// var age = 20;
// var isstudent = true;
// var favcolor = [ "black", "skyblue"];
//
// console.log(name , age, isstudent, favcolor);
//
// function square(num){
//   return num * num;
// }
// console.log(square(5));
//
// function calculate(num1, num2, operation){
//   return eval(num1 + operation + num2);
// }
// console.log(calculate(5, 6, "*"));


// arrays

const cars = ["BMW", "Audi", "Toyota"];
cars[0] = "Mercedes";
cars.push("Volvo");
cars.unshift("Honda");
// console.log(cars);
// console.log(cars.length)

//objects
const car = {
  name: "DBX 707",
  model: ["2025 S", 2024],
  brand: "Aston Martin",
  horsepower: 707
}
car.country = "England"
// console.log(car.model);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 }
];

//loop
for (let i = 0; i < cars.length; i++) {
  // console.log("brand:", cars[i]);
}
for (const key in car) {
  // console.log(key, car[key]);
}

let n = 3;
while (n > 0) {
  // console.log("Countdown:", n);
  n--;
}

const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
let over = 0
// for (const n of numbers){
//   if (n % 2 === 0){
//       console.log(n);
//   }
// }
for (const n of numbers){
  if(n > 50){
    over += 1;
  }
}
console.log(over);

// Fake async API (returns data after 1 second)
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ message: "Hello async world!", time: Date.now() });
    }, 1000);
  });
}

// Main async function
async function run() {
  console.log("Fetching data...");

  const data = await fetchData();

  console.log("Data received:");
  console.log(data);
}

run();
