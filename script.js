
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

  $(".Hotspot").on("click", function () {
    console.log("You clicked on a hotspot");
    $(".Hotspot").hide();
    $(".HotspotAnnotation").hide();
  });

  $("#overlay").on("click", function () {
    console.log("You clicked on the screen");
    $("#overlay").hide();
    $("#overlay-content").hide();
  });
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

