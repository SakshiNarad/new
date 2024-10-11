document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector(".image-container");
  const mainImage = document.getElementById("mainImage");

  let isDragging = false;
  let startY = 0;

  imageContainer.addEventListener("dblclick", function () {
    isDragging = true;
    imageContainer.style.transition = "transform 1s ease-in-out";
  });

  imageContainer.addEventListener("mousedown", function (event) {
    if (isDragging) {
      startY = event.clientY;
    }
  });

  document.addEventListener("mousemove", function (event) {
    if (isDragging) {
      const dragAmount = startY - event.clientY;
      if (dragAmount > 100) {
        imageContainer.style.transform = "translateY(-300px)";
      }
    }
  });

  document.addEventListener("mouseup", function () {
    if (isDragging) {
      setTimeout(() => {
        window.location.href = "page6.html";
      }, 1000);
      isDragging = false;
    }
  });
});
