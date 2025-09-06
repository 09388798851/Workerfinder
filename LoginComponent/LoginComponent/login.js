document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if(email && pass && role){
    alert("Login successful as " + role + "! (Demo only — connect to backend API)");
    
    // Redirect demo (replace with real dashboard)
    if(role === "employer") window.location.href = "employer-dashboard.html";
    if(role === "worker") window.location.href = "worker-dashboard.html";
    if(role === "dole") window.location.href = "dole-dashboard.html";
  } else {
    alert("Please fill in all fields.");
  }
});
