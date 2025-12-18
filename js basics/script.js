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

// Changed selector from "#input" to "#names" to match index.html
const input = document.querySelector("#names");
const display = document.querySelector("#display");

if (input) {
  input.addEventListener("input", function(e) {
    display.textContent = input.value;
  });
}

// Fetching data from GitHub API
fetch("https://api.github.com/users/u-kevine")
  .then(response => {
    if (!response.ok) {
      throw new Error("User not found or API error");
    }
    return response.json();
  })
  .then(data => {
    // Some GitHub users might not have a 'name' set, so fallback to 'login'
    display.textContent = data.name || data.login;
  })
  .catch(error => {
    console.error("Fetch error:", error);
    display.textContent = "Error loading profile";
  });


// calculator
import { multiply } from "./math.js";

export function calculateTotal(price, qty) {
  return multiply(price, qty);
}
console.log(calculateTotal(10, 2));
