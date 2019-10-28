/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let time = parseInt(string)
  if (time < 12) {
    return "Good Morning"
  };
  if (time > 12 && time < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }; 
}


/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let element = document.getElementById('greeting')
  element.innerText = string
  return
}