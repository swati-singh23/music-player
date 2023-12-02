var audio = document.getElementById("myAudio");
var playPauseBtn = document.getElementById("playPauseBtn");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

var songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
var currentSongIndex = 0;

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play";
  }
}

function playPrevious() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadAndPlayCurrentSong();
}

function playNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadAndPlayCurrentSong();
}

function loadAndPlayCurrentSong() {
  audio.src = songs[currentSongIndex];
  audio.play();
  playPauseBtn.textContent = "Pause";
}

// Load and play the first song
loadAndPlayCurrentSong();
