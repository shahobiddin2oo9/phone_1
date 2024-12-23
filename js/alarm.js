const currentTimeDisplay = document.getElementById("current-time");
const alarmTimeInput = document.getElementById("alarm-time");
const setAlarmBtn = document.getElementById("set-alarm-btn");
const clearAlarmBtn = document.getElementById("clear-alarm-btn");
const statusMessage = document.getElementById("status-message");
const alarmSound = document.getElementById("alarm-sound");

let alarmTime = null;
let alarmSet = false;

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  currentTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

  if (alarmSet && alarmTime === `${hours}:${minutes}`) {
    triggerAlarm();
  }
}

setAlarmBtn.addEventListener("click", () => {
  if (alarmTimeInput.value) {
    alarmTime = alarmTimeInput.value;
    alarmSet = true;
    statusMessage.textContent = `Budilnik o'rnatildi: ${alarmTime}`;
  } else {
    alert("Iltimos, budilnik vaqtini kiriting!");
  }
});

clearAlarmBtn.addEventListener("click", () => {
  alarmTime = null;
  alarmSet = false;
  statusMessage.textContent = "Budilnik o'chirildi.";
  alarmSound.pause();
  alarmSound.currentTime = 0;
});

function triggerAlarm() {
  alarmSound.play();
  statusMessage.textContent = "🔔 Budilnik vaqti yetdi! 🔔";
  alarmSet = false;
}

setInterval(updateClock, 1000);
updateClock();
