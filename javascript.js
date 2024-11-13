
function showMusicLinks() {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("music-section").style.display = "block";
}

function hideMusicLinks(){
    document.getElementById("main-content").style.display = "block";
    document.getElementById("music-section").style.display = "none";
}


let audio = document.getElementById("songs-teaser");

function playAudio() {
    audio.play();
    document.getElementById("pause-button").style.display ="block";
    document.getElementById("pause-button").style.transition =".s";
    document.getElementById("pause-image").style.display ="block";
    document.getElementById("play-image").style.display ="none";
}

function pauseAudio() {
    audio.pause();
    document.getElementById("pause-button").style.display ="none";
    document.getElementById("play-image").style.display ="block";
}


audio.addEventListener("ended", (event) => {
    document.getElementById("pause-button").style.display ="none";
    document.getElementById("play-image").style.display ="block"; 
});

