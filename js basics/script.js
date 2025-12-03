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
