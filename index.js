document.addEventListener('DOMContentLoaded', () => {
//find stop button - set to vairable
//set variable for slow button
//set variable for go button

//identify the attibute that we'll be toggling (they have IDs)
//find a method to toggle color
//apply a lister to each light ('click') 
//use lister to apply toggle method when clicked

const stopButton = document.getElementById('stopButton')
const stopButtonText = document.getElementById('stopButton').innerText
const slowButton = document.getElementById('slowButton')
const slowButtonText = document.getElementById('slowButton').innerText
const goButton = document.getElementById('goButton')
const goButtonText = document.getElementById('goButton').innerText
  
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

stopButton.addEventListener('mouseenter', (ev) => {
  console.log (`Entered ${stopButtonText} button`)
})
stopButton.addEventListener('mouseleave', (ev) => {
  console.log (`Left ${stopButtonText} button`)
})

slowButton.addEventListener('mouseenter', (ev) => {
  console.log (`Entered ${slowButtonText} button`)
})
slowButton.addEventListener('mouseleave', (ev) => {
  console.log (`Left ${slowButtonText} button`)
})

goButton.addEventListener('mouseenter', (ev) => {
  console.log (`Entered ${goButtonText} button`)
})
goButton.addEventListener('mouseleave', (ev) => {
  console.log (`Left ${goButtonText} button`)
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