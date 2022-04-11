var nav = document.querySelector(".nav");
var logo = document.querySelector(".fwedding");
var nav_link = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  var height = window.scrollY;
  if (height >= 100) {
    nav_link.forEach((item) => (item.style.color = "#000"));
    nav.style.backgroundColor = "#f7dade";
    logo.style.color = "#000";
  } else {
    nav_link.forEach((item) => (item.style.color = "#fff"));
    nav.style.backgroundColor = "rgba(0,0,0,0)";
    logo.style.color = "#fff";
  }
});

/**************************//- navigate mobile//************************/ 

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
/**************************//-animaiton heart//************************/ 

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

/**************************//- icon music//************************/ 
let iconMusic= document.querySelector('.icon-music')
let perfectMusic= document.querySelector('.perfect-music')
let isPlay = false

iconMusic.addEventListener('click', () =>{
    // perfectMusic.play()
   isPlay =! isPlay

    isPlay ? perfectMusic.play() : perfectMusic.pause()
})


/**************************************************************/ 
const fullname = document.querySelector('#your-name')
const email = document.querySelector('#email')
const regexName = /^[a-zA-Z]+$/
const regexEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
fullname.onblur = () => {
  const valueName = fullname.value.trim()
  if (regexName.test(valueName) && valueName.length > 5) {
    document.querySelectorAll('.form-group span')[0].textContent = ''
  } else {
    document.querySelectorAll('.form-group span')[0].textContent =
      'Vui lòng nhập chữ và không nhỏ hơn 5 kí tự'
  }
}

email.onblur = () => {
  const valueEmail = email.value.trim()
  if (regexEmail.test(valueEmail)) {
    document.querySelectorAll('.form-group span')[1].textContent = ''
  } else {
    document.querySelectorAll('.form-group span')[1].textContent = 'Vui lòng nhập đúng email'
  }
}
let attendingY = document.querySelector('.attending-yes')
let attendingN = document.querySelector('.attending-no')

let submit = document.querySelector('.submit')
submit.onclick = () =>{
  fullname.value = ''
  email.value = ''

}

