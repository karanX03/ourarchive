const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 80);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background:linear-gradient(135deg,#ff5fa2,#ffd6e8);
      color:white;
      text-align:center;
      font-family:Arial,sans-serif;
      padding:20px;
    ">
      <h1 style="font-size:42px;">❤️ Yay! ❤️</h1>
      <h2>You made Karan the happiest person alive.</h2>
      <p style="font-size:20px;margin-top:20px;">
        Thank you for choosing my heart. 🌹<br><br>
        I promise to love you, respect you,<br>
        and always stand beside you. ❤️
      </p>
      <h1 style="margin-top:30px;">Karan ❤️ Shristi</h1>
    </div>
  `;
});
