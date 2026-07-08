// Continue Reading

function togglePoem(button){

    const poem = button.previousElementSibling;

    poem.classList.toggle("open");

    if(poem.classList.contains("open")){
        button.innerHTML="Hide ❤️";
    }else{
        button.innerHTML="Continue Reading ❤️";
    }

}


// Playlist Player

function playSong(videoId, card){

    // Update YouTube Player
    document.getElementById("ytplayer").src =
    "https://www.youtube.com/embed/" +
    videoId +
    "?autoplay=1";

    // Remove active class
    document.querySelectorAll(".song")
    .forEach(song=>song.classList.remove("active"));

    // Add active class
    card.classList.add("active");

}


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.15
});


document.querySelectorAll(".card,.letter-card,.playlist-card,.player-section")
.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition=".8s";

    observer.observe(el);

});
