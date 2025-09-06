// Save Changes functionality
document.querySelector(".save").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("⚠️ Please fill in all fields before saving.");
    return;
  }

  // Save to localStorage (so changes persist after refresh)
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("✅ Settings saved successfully!");
});

// Load saved settings on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("userName");
  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");

  if (savedName) document.getElementById("name").value = savedName;
  if (savedEmail) document.getElementById("email").value = savedEmail;
  if (savedPassword) document.getElementById("password").value = savedPassword;
});

// Logout functionality
function logout() {
  alert("🚪 You have been logged out.");
  localStorage.clear(); // optional: clear saved data
  window.location.href = "login.html"; // back to login page
}

// Load Lucide icons
lucide.createIcons();
