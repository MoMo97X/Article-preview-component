const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const shareBox = document.querySelector(".share-box");

openBtn.addEventListener("click", () => {
  // Show share box smoothly
  shareBox.classList.add("active");
});

// Hide share box smoothly
closeBtn.addEventListener("click", () => {
  shareBox.classList.remove("active");
});
