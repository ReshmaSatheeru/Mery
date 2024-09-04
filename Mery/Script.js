
document.addEventListener(
  "DOMContentLoaded", function () 
  {
    const containers = document.querySelectorAll('.image-container');
    containers.forEach((container, index) => {
      container.style.animationDelay = $;{1 + index * 0.5}s;
    });
});