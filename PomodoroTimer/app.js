// Access the timer display element
const timmerDisplay = document.querySelector("#timmer");

// Set initial time (25 minutes for a Pomodoro session)
let timeLeft = 25 * 60; // 25 minutes in seconds
let timerInterval;
let isRunning = false;

// Function to start the timer
function startfun() {
  if (isRunning) return; // Don't start a new timer if it's already running

  console.log("start button is clicked");
  isRunning = true;

  // Update the timer display every second
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      isRunning = false;
      timmerDisplay.innerHTML = "Time's up!";
      return;
    }
    timeLeft--;
    updateTimerDisplay();
  }, 1000);
}

// Function to pause the timer
function pausfun() {
  console.log("pause button is clicked");
  clearInterval(timerInterval);
  isRunning = false;
  timmerDisplay.innerHTML = formatTime(timeLeft);
}

// Function to reset the timer
function restfun() {
  console.log("reset button is clicked");
  clearInterval(timerInterval);
  isRunning = false;
  timeLeft = 25 * 60; // Reset to 25 minutes
  updateTimerDisplay();
}

// Update the timer display (converts time to MM:SS format)
function updateTimerDisplay() {
  timmerDisplay.innerHTML = formatTime(timeLeft);
}

// Format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
