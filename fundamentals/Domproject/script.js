var istatus = document.querySelector("h5");

var btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friend";
    istatus.style.color = "green";
    btn.innerHTML = "Remove friend";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});

// secondary use
// var removefriend = document.querySelector("#remove")

// removefriend.addEventListener("click",function(){
//     istatus.innerHTML ="Stranger"
//     istatus.style.color = "red"
// })
