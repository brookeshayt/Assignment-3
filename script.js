
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

  $(".Hotspot-1").on("click", function () {
    console.log("You clicked on a hotspot");
    $(".Hotspot-1").hide();
    $(".HotspotAnnotation-1").hide();
    Animation.play();
  });
  $(".Hotspot-2").on("click", function () {
    console.log("You clicked on a hotspot");
    $(".Hotspot-2").hide();
    $(".HotspotAnnotation-2").hide();
  });

  $("#overlay").on("click", function () {
    console.log("You clicked on the screen");
    $("#overlay").hide();
    $("#overlay-content").hide();
  });
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

