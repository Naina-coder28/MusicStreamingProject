console.log("Music Player Loaded");

// Select elements
let audioElement = new Audio("songs/1.mp3");
let progressBar = document.getElementById("myProgressBar");
let playButton = document.getElementById("masterPlay");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("previous");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songIndex = 0;

// Playlist data
let songs = [
    { songName: "Song 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Song 2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Song 3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Song 4", filePath: "songs/4.jpg", coverPath: "covers/4.jpg" },
    { songName: "Song 5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
];

// Validate file exists before playing
function validateAudio(filePath) {
    fetch(filePath)
        .then((res) => {
            if (!res.ok) {
                alert("Audio file missing: " + filePath);
            }
        })
        .catch(() => {
            alert("Error loading: " + filePath);
        });
}

// Load song
function loadSong(index) {
    audioElement.src = songs[index].filePath;
    validateAudio(audioElement.src);
    audioElement.currentTime = 0;
}

// Play/Pause functionality
playButton.addEventListener("click", () => {
    if (audioElement.paused) {
        audioElement.play().catch(() => {
            alert("Audio cannot be played.");
        });
        playButton.classList.remove("fa-play-circle");
        playButton.classList.add("fa-pause-circle");
    } else {
        audioElement.pause();
        playButton.classList.remove("fa-pause-circle");
        playButton.classList.add("fa-play-circle");
    }
});

// Playlist click event
songItems.forEach((element, i) => {
    element.addEventListener("click", () => {
        songIndex = i;
        loadSong(songIndex);
        audioElement.play();
    });
});

// Update progress bar
audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
});

// Seek functionality
progressBar.addEventListener("change", () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
});

// Next song
nextButton.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audioElement.play();
});

// Previous song
prevButton.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audioElement.play();
});

// Error handling for audio load failure
audioElement.addEventListener("error", () => {
    alert("Cannot load audio. Please check file path.");
});
