// let progressBar = document.querySelector(".circular-progress");
// let valueContainer = document.querySelector(".value-container");

// let progressValue = 0;
// let progressEndValue = 75;
// let speed = 70;

// let progress = setInterval(() => {
//   progressValue++;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar.style.background = `conic-gradient(
//       #BE5F9F ${progressValue * 3.6}deg,
//       #FDEEF4 ${progressValue * 3.6}deg
//   )`;
//   if (progressValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);

function animateCircularProgress(progressEndValue, progressBar, valueContainer,title) {
    let progressValue = 0;
    let speed = 10;
  
    let progress = setInterval(() => {
      progressValue++;
      valueContainer.textContent = `${progressValue}%`;
      progressBar.style.background = `conic-gradient(
          #BE5F9F ${progressValue * 3.6}deg,
          #FDEEF4 ${progressValue * 3.6}deg
      )`;
      if (progressValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
    progressBar.setAttribute('title', title);
  }
// First circular progress bar
let progressBar = document.querySelector(".container-1 .circular-progress");
let valueContainer = document.querySelector(".container-1 .value-container");
let titleElement = document.querySelector(".container-1 .text");
titleElement.textContent = "Self-awareness";
animateCircularProgress(75, progressBar, valueContainer, titleElement);

let progressBar_1 = document.querySelector(".container-2 .circular-progress");
let valueContainer_1 = document.querySelector(".container-2 .value-container");
let titleElement_1 = document.querySelector(".container-2 .text");
titleElement_1.textContent = "Self-regulation";
animateCircularProgress(50, progressBar_1, valueContainer_1,titleElement_1);

let progressBar_2 = document.querySelector(".container-3 .circular-progress");
let valueContainer_2 = document.querySelector(".container-3 .value-container");
let titleElement_2 = document.querySelector(".container-3 .text");
titleElement_2.textContent = "Motivation";
animateCircularProgress(85, progressBar_2, valueContainer_2,titleElement_2);

let progressBar_3 = document.querySelector(".container-4 .circular-progress");
let valueContainer_3 = document.querySelector(".container-4 .value-container");
let titleElement_3 = document.querySelector(".container-4 .text");
titleElement_3.textContent = "Empathy";
animateCircularProgress(55, progressBar_3, valueContainer_3,titleElement_3);

let progressBar_4 = document.querySelector(".container-5 .circular-progress");
let valueContainer_4 = document.querySelector(".container-5 .value-container");
let titleElement_4 = document.querySelector(".container-5 .text");
titleElement_4.textContent = "Social Skills";
animateCircularProgress(30, progressBar_4, valueContainer_4,titleElement_4);

