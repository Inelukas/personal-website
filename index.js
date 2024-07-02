const bodyElement = document.querySelector('[data-js="body"]');
const mainElement = document.querySelector('[data-js="main"]');

const darkModeButton = bodyElement.querySelector('[data-js="darkmodebutton"]');

darkModeButton.addEventListener("click", () => {
  mainElement.classList.toggle("darkmode");
});
