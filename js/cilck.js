document.addEventListener("DOMContentLoaded", () => {
  let rightarow = document.querySelector(".one_button");
  if (rightarow) {
    rightarow.addEventListener("click", () => {
      history.go(-1);
      history.pushState("", "", "index.html");
    });
  }
});
