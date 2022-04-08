var nav = document.querySelector(".nav");
var logo = document.querySelector(".fwedding");
var nav_link = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  var kcach = window.scrollY;
  if (kcach >= 100) {
    nav_link.forEach((item) => (item.style.color = "#000"));
    nav.style.backgroundColor = "#f7dade";
    logo.style.color = "#000";
  } else {
    nav_link.forEach((item) => (item.style.color = "#fff"));
    nav.style.backgroundColor = "rgba(0,0,0,0)";
    logo.style.color = "#fff";
  }
});

// ******************/
let iconToggle = document.querySelector('.icon-toggle')
let moblie = document.querySelector('.navigate-mobile')
let icon = false

iconToggle.onclick = () => {
  icon=!icon
  if(icon){
    moblie.style.transform = 'translateX(0)'
  }
  else{
    moblie.style.transform = 'translateX(150px)'
  }
}




/**************************************************/ 

let header = document.querySelector("#header");

header.addEventListener("mousemove", (e) => {
  let heart = document.createElement("span-heart");
  let x = e.offsetX;
  let y = e.offsetY;
  heart.style.left = x + "px";
  heart.style.top = y + "px";

  let size = Math.random() * 40;
  heart.style.width = 20 + size + "px";
  heart.style.height = 20 + size + "px";

  let tranform = Math.random() * 360;
  heart.style.transform = "rotate(" + tranform + "deg)";

  header.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});

/**************************************************/ 
let iconMusic= document.querySelector('.icon-music')
let perfectMusic= document.querySelector('.perfect-music')
let isPlay = false

iconMusic.addEventListener('click', () =>{
    // perfectMusic.play()
   isPlay =! isPlay

    isPlay ? perfectMusic.play() : perfectMusic.pause()
})



