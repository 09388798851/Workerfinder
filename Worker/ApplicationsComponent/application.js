// Applications Data
const applications = [
  { title: "Construction Worker — Virac", status: "pending" },
  { title: "Farm Helper — Bato", status: "review" },
  { title: "Electrician — San Andres", status: "accepted" },
  { title: "Housekeeper — Pandan", status: "rejected" }
];

// Render Applications
function renderApplications() {
  const container = document.querySelector(".applications");
  container.innerHTML = "";

  applications.forEach(app => {
    const card = document.createElement("div");
    card.className = "app-card";

    const h3 = document.createElement("h3");
    h3.textContent = app.title;

    const p = document.createElement("p");
    p.className = `status ${app.status}`;
    p.textContent = "Status: " + 
      (app.status === "pending" ? "Pending" :
       app.status === "review" ? "Under Review" :
       app.status === "accepted" ? "Accepted" : "Rejected");

    card.appendChild(h3);
    card.appendChild(p);
    container.appendChild(card);
  });
}

// Sidebar Navigation (only dashboard + applications)
const buttons = document.querySelectorAll(".btn");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    sections.forEach(s => s.style.display = "none");
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    let id = btn.id.replace("btn", "section");
    document.getElementById(id).style.display = "block";

    // Render applications only when applications section is opened
    if (id === "section-applications") {
      renderApplications();
    }
  });
});

// Load icons
lucide.createIcons();

// Initial render (if applications section is visible by default)
if (document.getElementById("section-applications").style.display !== "none") {
  renderApplications();
}
