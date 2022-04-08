//     const overlay = document.querySelector(".overlay");
//       const account = document.querySelector("#account");
//       const password = document.querySelector("#password");
//       document.querySelector(".admin_login button").onclick = function () {
//         const valueA = account.value;
//         const valueP = password.value;
//         if (valueA === "admin" && valueP === "admin") {
//           document.querySelector(".overlay").style.display = "none";
//           document.querySelector(".admin").style.display = "flex";
//         }
//       };
// /***************************************8****************/
// let iconArrowRight = document.querySelector('.icon-arrow-right')
// let mobile = document.querySelector('.slide-menu-moblie')
// let icon = false 
// console.log(iconArrowRight)
// console.log(mobile);
// iconArrowRight.onclick = () =>{
//     icon = !icon
//   if(icon){
//     mobile.style.transform = 'translateX(0)'
//   }
//   else{
//     mobile.style.transform = 'translateX(calc(-20vw - 3px))'
//   }
// }

// /********************************************************/ 
//       let logOut = document.querySelector(".log-out");
//       logOut.addEventListener("click", () => {
//         document.querySelector(".overlay").style.display = "flex";
//         document.querySelector(".admin").style.display = "none";
//         account.value = ''
//         password.value = ''

//       });




let table1 = document.querySelector('#table1')
let table2 = document.querySelector('#table2')
let table3 = document.querySelector('#table3')
let table = false
setInterval( () => {
  table = !table
  if(table){
    table1.style.display = 'block'
    table2.style.display = 'none'
  // table3.style.display = 'none'
  }
  else{
    table1.style.display = 'none'
  table2.style.display = 'block'
  }
  

},2000)
