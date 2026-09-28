// users → All registered users
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// currentUser → Currently logged-in user
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

// Create Admin account
let users = getUsers();
if (!users.some((u) => u.role === "admin")) {
  users.push({
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin123",
    role: "admin",
  });
  localStorage.setItem("users", JSON.stringify(users));
}

// Register
function register() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (name === "" || email === "" || password === "") {
    alert("All fields are required");
    return;
  }

  let users = getUsers();
  users.push({ name: name, email: email, password: password, role: "user" });
  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "login.html";
}

// Login
function login() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("All fields are required");
    return;
  }

  let user = getUsers().find(
    (u) => u.email === email && u.password === password,
  );

  if (!user) {
    alert("Wrong email or password");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  if (user.role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "dashboard.html";
  }
}

// Logout
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// Dashboard
if (document.getElementById("userInfo")) {
  let user = getCurrentUser();
  if (!user) {
    window.location.href = "login.html";
  } else {
    document.getElementById("userInfo").innerHTML =
      "<p>Name: " + user.name + "</p><p>Email: " + user.email + "</p>";
  }
}

// Admin Dashboard
if (document.getElementById("usersTable")) {
  let user = getCurrentUser();
  if (!user) {
    window.location.href = "login.html";
  } else if (user.role !== "admin") {
    window.location.href = "dashboard.html";
  } else {
    let rows = "";
    getUsers().forEach((u) => {
      rows +=
        "<tr><td>" +
        u.name +
        "</td><td>" +
        u.email +
        "</td><td>" +
        u.role +
        "</td></tr>";
    });
    document.getElementById("usersTable").innerHTML = rows;
  }
}
