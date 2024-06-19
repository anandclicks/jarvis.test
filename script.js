const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".end")
const SpeakeOutBtn = document.querySelector(".SpeakeOut")
const p = document.querySelector("p")

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
  console.log("vr active")
}

recognition.onerror = function(event) {
  console.error("Voice recognition error:", event.error);
  p.innerHTML = event.error
};

recognition.onresult = function(event){
  console.log(event)
  let current = event.resultIndex
  let transcript = current.result[current][0].transcript
  p.innerHTML = transcript
}
recognition.onend = function(){
  console.log("vr deactivete")
}

startBtn.addEventListener("click",()=> {
  recognition.start()
})
stopBtn.addEventListener("click",()=> {
  recognition.stop()
})
recognition.continuous = true;





function speakeOut (msg){
  const speech = new SpeechSynthesisUtterance()
  speech.text = msg;
  speech.volume = 1;
  window.speechSynthesis.speak(speech)
  console.log("speaking out")
}

SpeakeOutBtn.addEventListener("click",()=> {
  speakeOut("Hello sir, how can i help you?")
})

