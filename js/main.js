const btn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");
const openBtn = document.querySelector(".open-icon");
const closeBtn = document.querySelector(".close-icon");

btn.addEventListener("click", function () {
  if (sideMenu.classList.contains("slide")) {
    sideMenu.classList.remove("slide");
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  } else {
    sideMenu.classList.add("slide");
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
  }
});

