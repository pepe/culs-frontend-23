const psb = document.getElementById("previousSlide");
const nsb = document.getElementById("nextSlide");
const chv = document.querySelector(".presentation .chapter:first-child")
const pos = document.querySelector(".titles .position");
var cs = 0;

nsb.addEventListener("click", (e) => {
  if (cs < (chv.childElementCount -1)) ++cs;
  pos.innerHTML = cs + 1;
  chv.style.transform = "translateX(" + (-100 * cs) + "vw)";
})

psb.addEventListener("click", (e) => {
  if (cs != 0) --cs;
  pos.innerHTML = cs + 1;
  chv.style.transform = "translateX(" + (-100 * cs) + "vw)";
})