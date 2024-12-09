
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
    modelViewer.animationName = "board1Action";
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

    $(modelViewer).hide();

    const newModelViewer = $('<model-viewer></model-viewer>');
    newModelViewer.attr('src', 'assets/cabin-open.glb');
    newModelViewer.attr('alt', '3D model');
    newModelViewer.attr('camera-controls', true);

    // Append the new model viewer to the desired parent element
    $('model-viewer2').append(newModelViewer);  // or another container, like $('#container')

    // Show the new model viewer
    newModelViewer.show();
  });
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


//Model 2
// const modelViewer2 = document.querySelector(".model-viewer");

// $(".Hotspot-3").on("click", function () {
//   console.log("You clicked on a the front door");
//   modelViewer.animationName = "Front DoorAction";
//   modelViewer.fadeOut();
//   modelViewer2.show();
//   setTimeout(() => {
//     // Check if the animation has started
//     const playState = modelViewer2.animationPlayState;
//     console.log("Current animation play state:", playState); // Log the play state

//     if (playState === 'running') {
//       console.log("Pausing the animation manually after one playthrough.");
//       modelViewer2.animationPlayState = 'paused'; // Pause the animation manually
//     }
//   }, 5000); // Check after 5 seconds to give the animation time to complete
// });

// document.querySelector('model-viewer').addEventListener('progress', onProgress);

