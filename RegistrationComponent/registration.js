const roleSelect = document.getElementById("role");
const employerFields = document.getElementById("employer-fields");
const workerFields = document.getElementById("worker-fields");

roleSelect.addEventListener("change", function() {
  employerFields.classList.add("hidden");
  workerFields.classList.add("hidden");

  if (this.value === "employer") employerFields.classList.remove("hidden");
  if (this.value === "worker") workerFields.classList.remove("hidden");
});

// Skills toggle
const skillButtons = document.querySelectorAll(".skill-btn");
const skillsInput = document.getElementById("skills");

skillButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("selected");
    updateSkills();
  });
});

function updateSkills() {
  const selected = [];
  skillButtons.forEach(btn => {
    if (btn.classList.contains("selected")) {
      selected.push(btn.textContent);
    }
  });
  skillsInput.value = selected.join(", ");
}

// Password confirmation check before submit
document.getElementById("regForm").addEventListener("submit", function(e) {
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  if (pass !== confirm) {
    e.preventDefault();
    alert("Passwords do not match!");
  }
});
