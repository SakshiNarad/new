// const imageContainer = document.querySelector('.image-container img');
// const centerText = document.querySelector('.center-text');
// const verticalLine = document.querySelector('.vertical-line');
// let isDragging = false;
// let startY;
// let dragThreshold = 100; // Sensitivity for drag

// // Function to faint the center text and vertical line on drag
// function faintUIElements() {
//     centerText.classList.add('text-moved');
//     verticalLine.classList.add('vertical-line-moved');
// }

// // Function to reset UI elements when drag is finished
// function resetUIElements() {
//     centerText.classList.remove('text-moved');
//     verticalLine.classList.remove('vertical-line-moved');
// }

// // Double-tap event listener to enable dragging
//   imageContainer.addEventListener('dblclick', () => {
//        isDragging = true;
//   });

//  // Listen for drag events (touch or mouse)
//   imageContainer.addEventListener('mousedown', startDrag);
//   imageContainer.addEventListener('touchstart', startDrag);

//  function startDrag(event) {
//        if (!isDragging) return; // Only allow drag after double-tap

//   startY = event.type === 'mousedown' ? event.clientY : event.touches[0].clientY;

//      document.addEventListener('mousemove', dragMove);
//           document.addEventListener('touchmove', dragMove);

// document.addEventListener('mouseup', stopDrag);
//           document.addEventListener('touchend', stopDrag);
//      }

//      function dragMove(event) {
//        let currentY = event.type === 'mousemove' ? event.clientY : event.touches[0].clientY;
//        if (startY - currentY > dragThreshold) {
//            // Move the image upwards and change dimensions

//   document.querySelector('.image-container').classList.add('image-moved');
//                  faintUIElements(); // Change center text and vertical line colors
//              }
//          }

//         function stopDrag() {
//        isDragging = false;
//        document.removeEventListener('mousemove', dragMove);
//        document.removeEventListener('touchmove', dragMove);

const imageContainer = document.querySelector(".image-container");
const centerText = document.querySelector(".center-text");
const verticalLine = document.querySelector(".vertical-line");
let isDragging = false;
let startY;
let dragThreshold = 100;
let isImageMoved = false;
let isImageMovedTwice = false;

function faintUIElements() {
  centerText.classList.add("text-moved");
  verticalLine.classList.add("vertical-line-moved");
}

function resetUIElements() {
  centerText.classList.remove("text-moved");
  verticalLine.classList.remove("vertical-line-moved");
}

imageContainer.addEventListener("dblclick", () => {
  if (isImageMovedTwice) {
    scrollToTopAndRedirect();
  } else if (isImageMoved) {
    scrollToTop();
    isImageMovedTwice = true;
  } else {
    isDragging = true;
  }
});

imageContainer.addEventListener("mousedown", startDrag);
imageContainer.addEventListener("touchstart", startDrag);

function startDrag(event) {
  if (!isDragging) return;

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
    imageContainer.classList.add("image-moved");
    isImageMoved = true;
    faintUIElements();
    stopDrag();
  }
}

function stopDrag() {
  isDragging = false;
  resetUIElements();
  document.removeEventListener("mousemove", dragMove);
  document.removeEventListener("touchmove", dragMove);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToTopAndRedirect() {
  scrollToTop();
  setTimeout(() => {
    window.location.href = "page3.html";
  }, 1000);
}
