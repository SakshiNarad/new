const mobileScreen = document.querySelector(".mobile-screen");

let startY;
let dragThreshold = 100;

mobileScreen.addEventListener("mousedown", startDrag);
mobileScreen.addEventListener("touchstart", startDrag);

function startDrag(event) {
  startY =
    event.type === "mousedown" ? event.clientY : event.touches[0].clientY;

  document.addEventListener("mousemove", dragMove);
  document.addEventListener("touchmove", dragMove);

  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchend", stopDrag);
}

function dragMove(event) {
  let currentY =
    event.type === "mousemove" ? event.clientY : event.touches[0].clientY;
  if (startY - currentY > dragThreshold) {
    navigateNextPage();
  }
}

function stopDrag() {
  document.removeEventListener("mousemove", dragMove);
  document.removeEventListener("touchmove", dragMove);
}

function navigateNextPage() {
  mobileScreen.style.transition = "transform 0.8s ease-in-out";
  mobileScreen.style.transform = "translateY(-100%)";

  setTimeout(() => {
    window.location.href = "page2.html";
  }, 800);
}
const video = document.getElementById("myVideo");

video.addEventListener("loadedmetadata", function () {
  setTimeout(() => {
    video.pause();
  }, 5000);
});
