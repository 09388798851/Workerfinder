// Load Lucide icons
lucide.createIcons();

// Simple placeholder interactivity
document.querySelectorAll(".chat-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".chat-header").textContent = item.textContent;
  });
});
