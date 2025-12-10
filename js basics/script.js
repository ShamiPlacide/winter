let button = document.querySelector("button");
let body = document.querySelector("body");
let isLightMode = true; // Start with light mode (#eee)

button.addEventListener("click", function changeColor() {
  if (isLightMode) {
    body.style.backgroundColor = "#353935";
  } else {
    body.style.backgroundColor = "#eee";
  }
  isLightMode = !isLightMode; // Toggle the state
});

const head1 = document.querySelector("h1");
head1.textContent = "Just Do It!";
head1.innerHTML = "<em>Just Do It!</em>";
head1.style.color = "teal";
head1.classList.add("heading");
button.style.borderRadius = "10px";

let btn = document.querySelector("#event");
btn.addEventListener("click", function() {
  alert("you clicked it");
});

let isHovering = true;
btn.addEventListener("mouseover", function() {
  if (isHovering) {
    btn.style.backgroundColor = "teal";
  } else {
    btn.style.backgroundColor = "cornflowerblue";
  }
  isHovering = !isHovering;
})

const input = document.querySelector("#input");
const display = document.querySelector("#display");
input.addEventListener("input", function(e) {
  display.textContent = input.value;
});
