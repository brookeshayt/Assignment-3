
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

$(".Hotspot-3, .HotspotAnnotation-3").hide();
$('.model-2').hide();

const modelViewer = document.querySelector("model-viewer");

// console.log(modelViewer.availableAnimations[0]);
$(".Hotspot-1").on("click", function () {
  console.log("You clicked on a hotspot");
  $(".Hotspot-1, .HotspotAnnotation-1").hide();
  modelViewer.animationName = "Axe";
  modelViewer.play({ repetitions: 1 });
});

// modelViewer.addEventListener("animation-finish", () => {
//   console.log("Animation finished");
//   modelViewer.animationPlayState = 'paused';
// });
modelViewer.addEventListener('load', () => {
  console.log("Model has fully loaded.");

  $(".Hotspot-2").on("click", function () {
    console.log("You clicked on the boards");
    $(".Hotspot-2, .HotspotAnnotation-2").hide();
    modelViewer.animationName = "Boards";
    console.log("Animation name set to:", modelViewer.animationName);
    modelViewer.play({ repetitions: 1 });

    setTimeout(() => {
      // Check if the animation has started
      const playState = modelViewer.animationPlayState;
      console.log("Current animation play state:", playState); // Log the play state

      modelViewer.addEventListener('animation-finish', () => {
        console.log("Animation finished.");
        if (playState === 'running') {
          console.log("Pausing the animation manually after one playthrough.");
          modelViewer.animationPlayState = 'paused'; // Pause the animation manually
        }
      });
      $(".Hotspot-3, .HotspotAnnotation-3").show();
    });
  });

  $(".Hotspot-3").on("click", function () {
    console.log("You clicked on a the front door");
    $(".Hotspot-3, .HotspotAnnotation-3").hide();
    modelViewer.animationName = "Front DoorAction";
    modelViewer.play({ repetitions: 1 });

    $(".model-1, .HotspotAnnotation-4, .HotspotAnnotation-5, .HotspotAnnotation-6, .HotspotAnnotation-7, .HotspotAnnotation-8").hide();
    $(".model-2").show();
  });
});

$(".Hotspot-4").on("click", function () {
  console.log("You clicked on a the Bow");
  $(".HotspotAnnotation-5, .HotspotAnnotation-6, .HotspotAnnotation-7, .HotspotAnnotation-8").hide();
  $(".HotspotAnnotation-4").show();
});

$(".Hotspot-5").on("click", function () {
  console.log("You clicked on a the Backpack");
  $(".HotspotAnnotation-4, .HotspotAnnotation-6, .HotspotAnnotation-7, .HotspotAnnotation-8").hide();
  $(".HotspotAnnotation-5").show();
});

$(".Hotspot-6").on("click", function () {
  console.log("You clicked on a the Matches");
  $(".HotspotAnnotation-4, .HotspotAnnotation-5, .HotspotAnnotation-7, .HotspotAnnotation-8").hide();
  $(".HotspotAnnotation-6").show();
});

$(".Hotspot-7").on("click", function () {
  console.log("You clicked on a the Book");
  $(".HotspotAnnotation-4, .HotspotAnnotation-5, .HotspotAnnotation-6, .HotspotAnnotation-8").hide();
  $(".HotspotAnnotation-7").show();
});

$(".Hotspot-8").on("click", function () {
  console.log("You clicked on a the Flashlight");
  $(".HotspotAnnotation-4, .HotspotAnnotation-5, .HotspotAnnotation-6, .HotspotAnnotation-7").hide();
  $(".HotspotAnnotation-8").show();
});

//   modelViewer.addEventListener('animation-finish', () => {
//     console.log("Animation finished.");
//     modelViewer.animationPlayState = 'paused'; // Pause the animation after one playthrough
//   });
//   setTimeout(() => {
//     console.log("Checking if animation is still playing...");
//     console.log("Current play state:", modelViewer.animationPlayState);
//     if (modelViewer.animationPlayState === 'running') {
//       console.log("Pausing the animation manually after one playthrough.");
//       modelViewer.animationPlayState = 'paused';  }
//   }, 5000); // Check animation state after 5 seconds (you can adjust this)
// });

// document.querySelector('model-viewer').addEventListener('progress', onProgress);

