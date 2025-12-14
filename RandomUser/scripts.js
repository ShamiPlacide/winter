const button = document.getElementById("loadUser");
const userDiv = document.getElementById("user");

async function fetchRandomUser() {
  userDiv.innerHTML = "Loading...";

  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();

    const user = data.results[0];

    userDiv.innerHTML = `
      <h2>${user.name.first} ${user.name.last}</h2>
      <p>Email: ${user.email}</p>
      <p>Country: ${user.location.country}</p>
      <img src="${user.picture.medium}" alt="User Image">
    `;
  } catch (error) {
    userDiv.innerHTML = "Failed to load user.";
    console.error(error);
  }
}

button.addEventListener("click", fetchRandomUser);
