// variables
let name = "Mentrum";
const age = 20;
let isstudent = true;
let favcolor = ["black", "skyblue"];

console.log("I'm", name, age, "years old", "it's", isstudent, "I'm a student", "and my fav colors are:", favcolor);

// function
function square(num){
  return num * num;
}
console.log(square(5));

// Arrow Function
const added = (n) => n + n;
console.log("4 added to 4 is:", added(4));


function calculate(num1, num2, operation){
  return eval(num1 + operation + num2);
}
console.log(calculate(5, 6, "*"));
