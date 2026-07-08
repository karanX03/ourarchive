const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

function moveButton() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

if (noBtn) {
    noBtn.addEventListener("mouseover", moveButton);
    noBtn.addEventListener("touchstart", moveButton);
}

if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        window.location.href = "yes.html";
    });
}
