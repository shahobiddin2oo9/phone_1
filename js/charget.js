let charget = document.querySelector(".charget");
let charget_in = document.querySelector(".charget_in");
let battery = navigator.getBattery();
battery.then((batary) => {
  charget.innerHTML += batary.level * 100;
  charget_in.innerHTML += batary.charget;
  if (batary.charging) {
    charget_in.style.display = "block";
  }
});
