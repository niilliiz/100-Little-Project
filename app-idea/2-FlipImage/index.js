const imageButton = document.querySelectorAll(".image_button");
const title = document.querySelector(".imageType");
const showCaseImage = document.querySelector(".showcase_image");

console.log(imageButton);

imageButton.forEach((button) =>
  button.addEventListener("click", handleSelectImage)
);

function handleSelectImage() {
  const type = this.dataset.imagetype;
  title.textContent = type;
  const classType = this.classList[1];
  showCaseImage.setAttribute("id", classType);
}
