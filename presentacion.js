const infoBtn = document.querySelector(".info-btn");
const caja = document.querySelector(".caja");
const clickSound = document.getElementById("clickSound");

infoBtn.addEventListener("click", function() {
  clickSound.currentTime = 0;
  clickSound.play();
  
  if (caja.style.display === "none" || caja.style.display === "") {
    caja.style.display = "block";
  } else {
    caja.style.display = "none";
  }

});