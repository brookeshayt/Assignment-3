
// // Handles loading the events for <model-viewer>'s slotted progress bar
// const onProgress = (event) => {
//   const progressBar = event.target.querySelector('.progress-bar');
//   const updatingBar = event.target.querySelector('.update-bar');
//   updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
//   if (event.detail.totalProgress === 1) {
//     progressBar.classList.add('hide');
//     event.target.removeEventListener('progress', onProgress);
//   } else {
//     progressBar.classList.remove('hide');
//   }
// };
$("#overlay").on("click", function () {
  console.log("You clicked on the screen");
  $("#overlay, #overlay-content").hide();
});

const modelViewer = document.querySelector("#model-1");
// console.log(modelViewer.availableAnimations[0]);

$(".Hotspot-1").on("click", function () {
  console.log("You clicked on a hotspot");
  $(".Hotspot-1").hide();
  $(".HotspotAnnotation-1").hide();
  modelViewer.animationName = "FrontDoorAction";
  modelViewer.play();

});
$(".Hotspot-2").on("click", function () {
  console.log("You clicked on a hotspot");
  $(".Hotspot-2, .HotspotAnnotation-2").hide();
  // $("HandleAction.001").animation.play();
  modelViewer.animationName = "board2Action";
  modelViewer.play({ repetition: 1 });
  setTimeout(() => {
    modelViewer.currentTime = 1000;
    // modelViewer.pause();
    modelViewer.animationName = "board1Action";
    modelViewer.animationTime = 0;
    modelViewer.play({ repetition: 1 });
    console.log("pauseAnimation");
  }, 2000);

});



// document.querySelector('model-viewer').addEventListener('progress', onProgress);

