var isIdentity = document.querySelector("h3")

var addFriend = document.querySelector(".add")
var removeFriend = document.querySelector(".remove")

var change = 0



addFriend.addEventListener("click", function(){
  if(change ==0){
    isIdentity.innerHTML = "Friends"
    isIdentity.style.color = "green"
    addFriend.innerHTML = "Remove Friend"
    addFriend.style.backgroundColor = "red"
    addFriend.style.color = "white"
    console.log("yes")
    change = 1

  }else{
    isIdentity.innerHTML = "Stranger"
    isIdentity.style.color = "red"
    addFriend.innerHTML = "Add Friend"
    addFriend.style.color = "white"
    addFriend.style.backgroundColor = "blue"
    change = 0
  }
})