const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const shareBox = document.querySelector(".share-box");

// Show share box smoothly
openBtn.addEventListener("click", () => {
  shareBox.classList.toggle("active");
});

// Hide share box smoothly
closeBtn.addEventListener("click", () => {
  shareBox.classList.remove("active");
});
