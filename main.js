const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const error = document.getElementById("modal")
error.setAttribute("class", "hidden")

document.addEventListener("DOMContentLoaded", () =>{
  const error = document.getElementById("modal")
  error.setAttribute("class", "hidden")

  const likeButtons = document.getElementsByClassName("like-glyph")

  likePost(likeButtons)
  
})

const likePost = (likeButtons) => {
  for (const heart of likeButtons){
    heart.addEventListener("click", (e)=> {
      mimicServerCall()
      .then(()=> {
        if (heart.innerHTML == EMPTY_HEART){
          heart.innerHTML = FULL_HEART
          heart.className = "activated-heart"
        } else {
          heart.innerHTML = EMPTY_HEART
          heart.className = "like-glyph"
        }
      })
      .catch(e =>{
                error.setAttribute("class", "show")
                const errorMessage = document.querySelector("#modal-message")
                errorMessage.innerText = e 
                setTimeout(() => {error.setAttribute("class", "hidden")}, 5000)
              })
    })
  }
}
// let glyphStates = {
//   "♡": "♥",
//   "♥": "♡"
// };

// let colorStates = {
//   "activated-heart" : "like-glyph",
//   "like-glyph": "activated-heart"
// };



// let i= 0 
// for (i; i < likeButtons.length; i++) {
//   likeButtons[i].addEventListener("click", function(e){
//     mimicServerCall()
//     .then(likePost(e))
//     .catch(() =>{
//       console.log("your in first")
//       error.setAttribute("class", "show")
//       setTimeout(() => {error.setAttribute("class", "hidden")}, 5000)
//     })
 
//   })}

  // function likePost(e){
  //   let heart = e.target;
  //   mimicServerCall()
  //   .then(function(){
  //      heart.innerText = glyphStates[heart.innerText];
  //      heart.setAttribute("class", colorStates[heart.classList.value])
  //      debugger
  //   })
  //   .catch(function() {
  //     error.setAttribute("class", "show")
  //     setTimeout(() => {error.setAttribute("class", "hidden")}, 5000)
  //     })
  // }

  // function unlikePost(e){
  //   let heart = e.target
  //   heart.innerHTML = `Like! <span class="like-glyph">${EMPTY_HEART}</span>`
  //   heart.setAttribute("class", "like")
  //   heart.addEventListener("click", function(evt){
  //     mimicServerCall()
  //     .then(likePost(evt))
  //     .catch(() =>{
  //       console.log("your in unlike")
  //       error.setAttribute("class", "show")
  //       setTimeout(() => {error.setAttribute("class", "hidden")}, 5000)
  //     })
  //   })
  // }

  // likeButtons.forEach(glyph => {
  //   glyph.addEventListener("click", likePost)
  // })

  // for (let glyph of likeButtons) {
  //   glyph.addEventListener("click", likePost);
  // }


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
