const $screen = document.querySelector(".screen-text");

function setScreen (value) {
  $screen.textContent = value;
}

function getScreen () {
  return $screen.textContent;
}
