const btn = document.querySelector(".magnifier");
const inputContainer = document.querySelector(".input-container");
const input = document.querySelector("input");
const mic = document.querySelector(".microphone");

btn.addEventListener("click",()=>{
  inputContainer.classList.toggle("class")
 
    input.classList.toggle("input-text");
    mic.classList.toggle("mic")
    console.log(mic)
})