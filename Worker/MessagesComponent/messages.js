// Chat functionality
const chatHeader = document.getElementById("chat-header");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

const chats = {
  "Employer A": [{ from: "them", text: "Hi, your application is under review." }],
  "Employer B": [{ from: "them", text: "Interview scheduled tomorrow." }]
};

let currentChat = null;

function openChat(name) {
  currentChat = name;
  chatHeader.textContent = name;
  chatBody.innerHTML = "";
  chats[name].forEach(m => {
    const div = document.createElement("div");
    div.className = "msg-bubble " + (m.from === "me" ? "from-me" : "from-them");
    div.textContent = m.text;
    chatBody.appendChild(div);
  });
  chatInput.disabled = false;
  chatSend.disabled = false;
  chatBody.scrollTop = chatBody.scrollHeight;
}

function sendMessage() {
  const text = chatInput.value.trim();
  if (text === "" || !currentChat) return;
  chats[currentChat].push({ from: "me", text });
  const div = document.createElement("div");
  div.className = "msg-bubble from-me";
  div.textContent = text;
  chatBody.appendChild(div);
  chatInput.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Logout
function logout() {
  alert("You have been logged out.");
  window.location.href = "login.html"; // back to login page
}

// Load lucide icons
lucide.createIcons();
