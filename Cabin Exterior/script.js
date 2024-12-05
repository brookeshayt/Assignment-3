
// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }

  $(".hotspot-2").on("click", function () {
  });

  $(".hotspot-1").on("click", function () {
  });

  $("#overlay", "#overlay-content").on("click", function () {
    ("#overlay").fadeToggle();
    ("#overlay-content").fadeToggle();
  });
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);