const btn = document.getElementById("myButton");
const img = document.getElementById("anim-image");
const text = document.getElementById("anim-text");

let opened = false;
let audio = null;

function showText() {
    text.classList.add("visible");
}

function hideText() {
    text.classList.remove("visible");
}

function playMusic() {
    if (!audio) {
        audio = new Audio("pag-ibig.mp3");
        audio.loop = false;
    }
    audio.currentTime = 0;
    audio.play();
}

function stopMusic() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

btn.addEventListener("click", () => {
    img.style.opacity = "0";
    setTimeout(() => {
        if (!opened) {
            img.src = "openletter.png";
            showText();
            btn.textContent = "Close";
            playMusic();
        } else {
            img.src = "closeletter.png";
            hideText();
            btn.textContent = "Open";
            stopMusic();
        }
        opened = !opened;
        img.style.opacity = "1";
    }, 300);
});
