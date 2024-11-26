document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-box");
  
    images.forEach((image, index) => {
      image.addEventListener("click", () => {
        alert(`You clicked on Image ${index + 1}`);
      });
    });
  });
  