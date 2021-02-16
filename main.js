// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeButtons = document.getElementsByClassName("like")
const error = document.getElementById("modal")
error.setAttribute("class", "hidden")


let i= 0 
for (i; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", function(e){
    mimicServerCall()
    .then(likePost(e))
    .catch(() =>{
      error.setAttribute("class", "show")
      setTimeout(() => {error.setAttribute("class", "hidden")}, 5000)
    })
 
  })}

  function likePost(e){
    let heart = e.target.parentElement
    heart.innerHTML = `<li>Like! <span class="like-glyph">${FULL_HEART}</span></li>`
    heart.firstElementChild.setAttribute("class", "activated-heart")
    heart.addEventListener("click", function(evt){
      mimicServerCall()
      .then(unlikePost(evt))
      .catch(() =>{
        error.setAttribute("class", "show")
        setTimeout(() => {error.setAttribute("class", "hidden")}, 5000)
      })
    })
  }

  function unlikePost(e){
    let heart = e.target
    heart.innerHTML = `Like! <span class="like-glyph">${EMPTY_HEART}</span>`
    heart.setAttribute("class", "like")
    heart.addEventListener("click", function(evt){
      mimicServerCall()
      .then(likePost(evt))
      .catch(() =>{
        error.setAttribute("class", "show")
        setTimeout(() => {error.setAttribute("class", "hidden")}, 5000)
      })
    })
  }

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
