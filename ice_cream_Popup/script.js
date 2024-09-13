// hamara mouse jab chal raha hai, to bar chal rha hai so that many more cards are created and that i'dont want.

// I want- number of times mouse move but card cretaed limited like 8. ---> it is possible through Throttling.

// Throttling - kisi particular code ke number of execution ko kam kar dena.

// Throttling Function
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
};

document.querySelector("#heading").addEventListener(
  "mousemove",
  throttleFunction((info) => {
    // less repetation code
    // using this we create everything..here is div
    var div = document.createElement("div");

    //    adding class for imagediv
    div.classList.add("imagediv");

    // for x and y axis location
    div.style.left = info.clientX + "px";
    div.style.top = info.clientY + "px";

    // for creating image
    var img = document.createElement("img");
     img.setAttribute("src", "https://i.pinimg.com/236x/c4/53/74/c45374a1831220592b3bf90cd9a5aa2e.jpg")
    div.appendChild(img);

    // for adding somthing in page we need to write inside body so ...and appendchild adding somthing to any element.
    document.body.appendChild(div);

    gsap.to(img,{
       y: "0",
       ease: Power1,
       duration: .6
    })

    gsap.to(img,{
        y: "100%",
        delay: .6,
        ease: Power2,
        duration: .2
     })
 

    // for removing after sometime that div
    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 300)
);
