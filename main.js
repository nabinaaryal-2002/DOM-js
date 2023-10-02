// let a = document.querySelector("h1")
// a.innerHTML = "Change vako xa ni haina?"
// a.style.backgroundColor = "blue"
// a.style.color = "red"
// a.addEventListener("click", function(){
//   a.innerHTML ="kasto lagyo jadu?"
//   a.style.backgroundColor = "blue"
//   a.style.color = "red"
// })



//BULB

var bulb= document.querySelector(".bulb")
var btn = document.querySelector("button")

var change =0

btn.addEventListener("click", function(){
  if(change == 0){
    bulb.style.backgroundColor = "yellow"
    btn.style.backgroundColor = "red"
    btn.innerHTML = "ON"
    console.log("yes")
    change = 1
  }else{
    bulb.style.backgroundColor = "transparent"
    btn.style.backgroundColor = "blue"
    btn.innerHTML = "OFF"
    console.log("No")
    change = 0
  }
})


