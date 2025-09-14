// Global variable
let globalCounter = 0;

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to increment global counter
function incrementCounter() {
  globalCounter++;
  return globalCounter;
}

// Function to change element background color dynamically
function changeBackgroundColor(id, color) {
  const element = document.getElementById(id);
  if (element) {
    element.style.backgroundColor = color;
  }
}

// Trigger jump animation on button click
const box = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  // Remove class to restart animation
  box.classList.remove("jump");
  void box.offsetWidth; // Trigger reflow
  box.classList.add("jump");

  // Increment counter and log it
  console.log("Jump clicked! Count:", incrementCounter());
});

// Flip card function
function flipCard(cardId) {
  const card = document.getElementById(cardId);
  card.classList.toggle("flipped");
}

// Example usage of add function
console.log("Add 5 + 10 =", add(5, 10));

// Example usage of changeBackgroundColor
changeBackgroundColor("animatedBox", "#9b59b6"); // Initial color
