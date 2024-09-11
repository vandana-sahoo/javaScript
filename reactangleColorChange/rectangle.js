//for doing window that why use window .event otherwise use for particular par (div)

window.addEventListener("mousemove", function (details) {
    // target rectangle 
  var rect = document.querySelector("#rect");

//   map the area so that float the rectangle left and right
  var xval = gsap.utils.mapRange(
    // mini intial
    0,
    // max length full
    window.innerWidth,
    // 200 back + rectangle width of half inner the window
    100 + rect.getBoundingClientRect().width / 2,
    // full w - 200 back and reactangle inside the window
    window.innerWidth - (200 + rect.getBoundingClientRect().width / 2),
    // mouse location
    details.clientX
  );
  gsap.to("#rect", {
    // value of x axis
    left: xval,
    // speed of rectangle
    ease: Power3,
  });
});
