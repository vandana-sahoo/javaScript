var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  // for finding location of item/rectangle.
  var rectanglelocation = rect.getBoundingClientRect();
  //  mouse location se minus --- rectangle left
  // total rectangle width 500, middle = 250 mouse = 70
  var insiderectval = details.clientX - rectanglelocation.left;

  // insiderectangle(70) total(500) half-width(250)
  if (insiderectval < rectanglelocation.width / 2) {
    var redColor = gsap.utils.mapRange(
      0,
      rectanglelocation.width / 2,
      255,
      0,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0 , 0)`,
      ease: Power4,
    });
  } else {
    var blueColor = gsap.utils.mapRange(
      // minnimum is change
      rectanglelocation.width / 2,
      // max
      rectanglelocation.width,
      //   center
      0,
      // corner
      255,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0 , 0,${blueColor})`,
      ease: Power4,
    });
  }
  // this point is mapRange function(inMIn,inMax,outMin,outMax,valueToMap) give input output and current location of mouse/item.
  // when move in initial it not should be high color intensity so 0 map with 255, and if i'm in between the colors (rectangle half location)ex 250.map with 0 so it give low intensity of color.
  //insiderectval is for current loctaion of mouse
});

// when we are not in rectangle color of rectangle is white

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "white",
  });
});
