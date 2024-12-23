let BigTime = document.querySelector("#time");
let BlockScreen = document.querySelector(".bac_phone_big_2");

let stopInterval = setInterval(() => {
  const hozirgiVaqt = new Date();
  const soat = hozirgiVaqt.getHours();
  const daqiqa = hozirgiVaqt.getMinutes();
  let minut = "";
  if (daqiqa < 10) {
    minut += "0" + `${daqiqa}`;
  } else {
    minut = daqiqa;
  }
  BigTime.textContent = `${soat}:${minut}`;
}, 1);

BigTime.addEventListener("click", myFunction);

function myFunction() {
  BlockScreen.setAttribute("style", " top:0px;");
}
