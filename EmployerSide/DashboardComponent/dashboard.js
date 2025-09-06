// Highlight active sidebar button when clicked
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Logout function (if you want to use it later)
function logout() {
  alert("You have been logged out.");
}
