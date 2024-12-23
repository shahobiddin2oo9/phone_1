async function translateText() {
  const text = document.getElementById("inputText").value;
  const language = document.getElementById("language").value;

  if (!text) {
    alert("Please enter text to translate!");
    return;
  }

  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=en|${language}`
  );
  const data = await response.json();

  if (data.responseData.translatedText) {
    document.getElementById("output").innerText =
      data.responseData.translatedText;
  } else {
    document.getElementById("output").innerText =
      "Translation failed. Please try again.";
  }
}
