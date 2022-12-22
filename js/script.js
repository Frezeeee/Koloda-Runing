const random = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
};

let img = document.querySelector(".koloda");
let btn = document.querySelector(".demo");
let sound1 = new Audio("https://frezeeee.github.io/Koloda-Runing/audio/1.mp3");
let sound2 = new Audio("https://frezeeee.github.io/Koloda-Runing/audio/2.mp3");
let sound3 = new Audio("https://frezeeee.github.io/Koloda-Runing/audio/3.mp3");
let sound4 = new Audio("https://frezeeee.github.io/Koloda-Runing/audio/4.mp3");
let sound5 = new Audio("https://frezeeee.github.io/Koloda-Runing/audio/5.mp3");
img.addEventListener("mouseenter", moveImg);
img.addEventListener("click", alertWin);
btn.addEventListener("click", alertWin);

function moveImg() {
  img.style.left = `${random(0, 90)}%`;
  img.style.top = `${random(0, 90)}%`;
}
function alertWin() {
  const sounds = [sound1, sound2, sound3, sound4, sound5];
  const index = Math.floor(Math.random() * sounds.length);
  sounds[index].play();
  alert("Молодець! У тебе вийшло спіймати нашу Колоду!");
}
if (window.matchMedia("(max-width: 991px)").matches) {
  setInterval(moveImg, 350);
}
