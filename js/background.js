const images = ["0.webp", "1.webp", "2.webp","3.webp"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImageWrap = document.createElement("div");
const bgImage = document.createElement("img");

bgImageWrap.appendChild(bgImage);
bgImageWrap.classList.add("bgimg");

bgImage.src = `img/${chosenImage}`

const wrapper = document.querySelector("#wrapper")

wrapper.prepend(bgImageWrap);