console.log("index.js");

console.log(new Date());

// Calculate and display year progress
function calculateYearProgress() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1); // January 1st of current year
  const end = new Date(now.getFullYear() + 1, 0, 1); // January 1st of next year

  const totalMs = end - start;
  const elapsedMs = now - start;

  const progress = (elapsedMs / totalMs) * 100;
  const progressFormatted = progress.toFixed(2);

  // Update DOM elements
  document.getElementById("progress-bar").style.width = `${progressFormatted}%`;
  document.getElementById(
    "progress-text",
  ).textContent = `${now.getFullYear()} is ${progressFormatted}% complete`;
}

// Update year progress initially and every second
calculateYearProgress();
setInterval(calculateYearProgress, 1000);
