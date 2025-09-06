// Sidebar Navigation (Dashboard only)
const buttons = document.querySelectorAll(".btn");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    sections.forEach(s => s.style.display = "none");
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    let id = btn.id.replace("btn", "section");
    document.getElementById(id).style.display = "block";
  });
});

// Load icons
lucide.createIcons();
