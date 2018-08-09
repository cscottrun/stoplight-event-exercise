document.addEventListener('DOMContentLoaded', () => {
//find stop button - set to vairable
//set variable for slow button
//set variable for go button

//identify the attibute that we'll be toggling (they have IDs)
//find a method to toggle color
//apply a lister to each light ('click') 
//use lister to apply toggle method when clicked

const stopButton = document.getElementById('stopButton')
const slowButton = document.getElementById('slowButton')
const goButton = document.getElementById('goButton')
  
const stopLight = document.getElementById('stopLight')
const slowLight = document.getElementById('slowLight')
const goLight = document.getElementById('goLight')


stopButton.addEventListener('click', (ev) => {
  stopLight.classList.toggle('stop');
})

slowButton.addEventListener('click', (ev) => {
  slowLight.classList.toggle('slow');
})

goButton.addEventListener('click', (ev) => {
  goLight.classList.toggle('go');
})


})

// var span = document.querySelector("span");
// var classes = span.classList;
// span.onclick = function() {
//   var result = classes.toggle("c");
//   if(result) {
//     span.textContent = "'c' added; classList is now '" + classes + "'.";
//   } else {
//     span.textContent = "'c' removed; classList is now '" + classes + "'.";
//   }
// }