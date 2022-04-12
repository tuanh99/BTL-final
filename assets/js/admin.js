

// ********************************************************
let logOut = document.querySelector(".log-out");
logOut.addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "flex";
  document.querySelector(".admin").style.display = "none";
  account.value = ''
  password.value = ''

});



/**********************************************/ 
const overlay = document.querySelector(".overlay");
const account = document.querySelector("#account");
const password = document.querySelector("#password");

document.querySelector(".admin_login button").onclick = function () {
  const valueA = account.value;
  const valueP = password.value;
  if (valueA === "admin" && valueP === "admin") {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".admin").style.display = "flex";
  }
};


/***********************Slide menu mobile***********************/ 

let iconArrowRight = document.querySelector('.icon-arrow-right')
let mobile = document.querySelector('.slide-menu-mobile')
let icon = false 
console.log(iconArrowRight)
console.log(mobile);
iconArrowRight.onclick = () =>{
    icon = !icon
  if(icon){
    mobile.style.transform = 'translateX(0)'
  }
  else{
    mobile.style.transform = 'translateX(-100%)'
  }
}

/*********************slide show inner dashboard*************************/ 


let table1 = document.querySelector('#table1')
let table2 = document.querySelector('#table2')
let table3 = document.querySelector('#table3')
let table = 0
setInterval( () => {
  table++
  if(table == 1){
    table1.style.display = 'block'
    table2.style.display = 'none'
    table3.style.display = 'none'
  }
  if(table == 2){
    table1.style.display = 'none'
    table2.style.display = 'block'
    table3.style.display = 'none'

  }
  if(table == 3){
    table1.style.display = 'none'
    table2.style.display = 'none'
    table3.style.display = 'block'
    table = 0
  }
  },3000)
/**********************************************/ 

let dtlElement = document.querySelectorAll('i.bx.bx-x')
dtlElement.forEach(dtl => {
  dtl.onclick = () => {
    dtl.parentElement.remove()
  }
})