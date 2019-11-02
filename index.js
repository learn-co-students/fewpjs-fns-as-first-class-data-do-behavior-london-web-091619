/* Given Code, don't edit */

function handleClick(e) {
 
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

function greet(t) {
  
  const hour = parseInt(t);

  let element = document.createElement('div')
  document.body.appendChild(element)
  element.innerText=hour
 
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"

  
}




/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
