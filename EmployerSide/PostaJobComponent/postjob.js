// Highlight active sidebar button
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Handle job posting form
const jobForm = document.getElementById("jobForm");

jobForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const title = document.getElementById("title").value.trim();
  const location = document.getElementById("location").value.trim();
  const desc = document.getElementById("desc").value.trim();

  if (title && location && desc) {
    alert(`Job Posted!\n\nTitle: ${title}\nLocation: ${location}\nDescription: ${desc}`);
    jobForm.reset();
  } else {
    alert("Please fill in all fields before posting.");
  }
});
