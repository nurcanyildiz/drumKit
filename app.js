window.addEventListener('keydown', function(e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);

  if (!audio) {
    return; // stop the funtion.
  }

  audio.currentTime = 0;
  audio.play();
});


