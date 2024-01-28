// selectors
const head = document.querySelector("head");
const styleSheets = document.styleSheets;
const img = document.querySelector("img");
const figure = document.querySelector("figure");

// factor a new HTML link element to the light.css stylesheet.
const lightSheet = document.createElement("link");
lightSheet.setAttribute("rel", "stylesheet");
lightSheet.setAttribute("href", "/light.css");

// handlers
function handleTheme() {
  if (styleSheets.length !== 1) {
    img.setAttribute("src", "/light.svg");
    lightSheet.remove();
  } else {
    img.setAttribute("src", "/dark.svg");
    head.append(lightSheet);
  }
}

// eventListeners
figure.addEventListener("click", handleTheme);
