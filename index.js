/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let hour = parseInt(time.split(":")[0])
    if((12<=hour) && (hour <=17)){
    return "Good Afternoon"
  }else if((0 <= hour )&& (hour < 12)){
    return "Good Morning"
  } else{
    return "Good Evening"
  }
}

function displayMessage(message){
  document.getElementById("greeting").innerText = message
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
