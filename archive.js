document.querySelectorAll(".card").forEach((card,index)=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";

    setTimeout(()=>{
        card.style.transition="all .8s ease";
        card.style.opacity="1";
        card.style.transform="translateY(0)";
    },300*(index+1));
});
function toggleLetter(btn) {
  const letter = btn.nextElementSibling;

  letter.classList.toggle("show");

  if (letter.classList.contains("show")) {
    btn.innerText = "Hide";
  } else {
    btn.innerText = "Read More";
  }
