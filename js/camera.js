const videoElement = document.getElementById("camera");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const captureButton = document.getElementById("captureButton");
const canvas = document.getElementById("photo");
let stream;

async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;

    startButton.disabled = true;
    stopButton.disabled = false;
    captureButton.disabled = false;
  } catch (error) {
    console.error("Kameraga ulanishda xatolik:", error);
    alert("Kameraga ulanish imkoni yo‘q.");
  }
}

function stopCamera() {
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    videoElement.srcObject = null;

    startButton.disabled = false;
    stopButton.disabled = true;
    captureButton.disabled = true;
  }
}

function capturePhoto() {
  const context = canvas.getContext("2d");
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

  const imageDataUrl = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = imageDataUrl;
  link.download = `photo-${Date.now()}.png`;
  link.click();
}

window.addEventListener("DOMContentLoaded", startCamera);

startButton.addEventListener("click", startCamera);
stopButton.addEventListener("click", stopCamera);
captureButton.addEventListener("click", capturePhoto);
