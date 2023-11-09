document.addEventListener("DOMContentLoaded", function () {
  // Fetch users and update the user list
  fetch("/users")
    .then((response) => response.json())
    .then((users) => displayUserList(users))
    .catch((error) => console.error("Error fetching users:", error));

  function displayUserList(users) {
    const userListElement = document.getElementById("userList");
    userListElement.innerHTML = "<h2>User List</h2>";

    if (users.length === 0) {
      userListElement.innerHTML += "<p>No users available.</p>";
    } else {
      const userList = document.createElement("ul");
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = `ID: ${user.id}, Email: ${user.email}, State: ${user.state}`;
        userList.appendChild(listItem);
      });
      userListElement.appendChild(userList);
    }
  }
});
