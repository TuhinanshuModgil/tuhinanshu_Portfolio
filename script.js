// creating a variable to get all the ellements to apply paralax to
const parallaxEl = document.querySelectorAll(".parallax");
console.log(parallaxEl);

// now we will need to shift the x and y coordinate by a ceratin amount so initize
// varables for that
let xVal = 0;
let yVal = 0;

window.addEventListener("mousemove", (event) => {
  // now we get the current mouse postion inside the variables
  // we subtracted half of the windows width as we want the
  // postion of the cursor relative to the center not from the corner
  xVal = event.clientX - window.innerWidth / 2;
  yVal = event.clientY - window.innerHeight / 2;
  console.log(xVal, yVal);

  parallaxEl.forEach((e) => {
    let eSpeedx = e.dataset.speedx;
    let eSpeedy = Number(eSpeedx) + 0.08;
    console.log(eSpeedy);
    e.style.transform = `translateX(calc(-50% - ${
      xVal * eSpeedx
    }px)) translateY(calc(-50% - ${yVal * eSpeedy}px))`;
    // console.log(e.style);
  });

  
});
