const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".end");
const SpeakeOutBtn = document.querySelector(".SpeakeOut");
const p = document.querySelector("p");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Event handler for when speech recognition starts
recognition.onstart = function() {
  console.log("Voice recognition active");
  p.innerHTML = "Listening...";
};

// Event handler for when an error occurs in speech recognition
recognition.onerror = function(event) {
  console.error("Voice recognition error:", event.error);
  p.innerHTML = `Error: ${event.error}`;
};

// Event handler for when a result is received from speech recognition
recognition.onresult = function(event) {
  console.log(event);
  let current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
  p.innerHTML = transcript;
};

// Event handler for when speech recognition ends
recognition.onend = function() {
  console.log("Voice recognition deactivated");
  p.innerHTML = "Recognition stopped.";
};

// Start speech recognition when the start button is clicked
startBtn.addEventListener("click", () => {
  recognition.start();
  console.log("Recognition started");
  p.innerHTML = "Recognition started. Please speak...";
});

// Stop speech recognition when the stop button is clicked
stopBtn.addEventListener("click", () => {
  recognition.stop();
  console.log("Recognition stopped");
  p.innerHTML = "Recognition stopped.";
});

// Enable continuous recognition if needed
recognition.continuous = true;

// Function to speak out a given message
function speakeOut(msg) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = msg;
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
  console.log("Speaking out:", msg);
}

// Speak out a predefined message when the SpeakeOut button is clicked
SpeakeOutBtn.addEventListener("click", () => {
  speakeOut("Hello sir, how can I help you?");
});
