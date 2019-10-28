/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(currentTime) {
  let formatTime = parseInt(currentTime.split(":")[0]);
  if (formatTime < 12) {
    return "Good Morning";
  } else if (formatTime < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.querySelector("#greeting").innerText = message;
}
