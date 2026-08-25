function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  if (hours === 0) {
    hours = 12;
  }

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  document.getElementById("time").textContent =
    `${hours}:${minutes}:${seconds} ${ampm}`;

  const date = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  document.getElementById("date").textContent = date;
}


// 🔊 Time ko voice me bolna
function speakTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;

  if (hours === 0) {
    hours = 12;
  }

  const text =
    `The time is ${hours} hours ${minutes} minutes ${ampm}`;

  const voice = new SpeechSynthesisUtterance(text);

  voice.lang = "en-US";
  voice.rate = 0.9;
  voice.pitch = 1;

  speechSynthesis.cancel();
  speechSynthesis.speak(voice);
}


// Clock start
updateClock();

// Har 1 second update
setInterval(updateClock, 1000);
