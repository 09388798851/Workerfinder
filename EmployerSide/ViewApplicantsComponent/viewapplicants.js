// Example Applicants Data
const applicants = [
  { name: "Juan Dela Cruz", role: "Carpenter" },
  { name: "Maria Santos", role: "Helper" },
  { name: "Pedro Reyes", role: "Electrician" },
  { name: "Ana Lopez", role: "Painter" }
];

const list = document.getElementById("applicant-list");

// Render Applicants
function loadApplicants() {
  applicants.forEach(app => {
    const card = document.createElement("div");
    card.className = "applicant-card";

    const h3 = document.createElement("h3");
    h3.textContent = `${app.name} — ${app.role}`;

    const actions = document.createElement("div");

    const acceptBtn = document.createElement("button");
    acceptBtn.className = "accept";
    acceptBtn.textContent = "Accept";
    acceptBtn.onclick = () => handleAction(app.name, "accepted");

    const rejectBtn = document.createElement("button");
    rejectBtn.className = "reject";
    rejectBtn.textContent = "Reject";
    rejectBtn.onclick = () => handleAction(app.name, "rejected");

    actions.appendChild(acceptBtn);
    
    actions.appendChild(rejectBtn);

    card.appendChild(h3);
    card.appendChild(actions);

    list.appendChild(card);
  });
}

// Handle Accept/Reject
function handleAction(name, action) {
  alert(`${name} has been ${action}.`);
}

// Load applicants on page start
document.addEventListener("DOMContentLoaded", loadApplicants);
