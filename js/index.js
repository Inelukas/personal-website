const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="darkmodebutton"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("darkmode");
});