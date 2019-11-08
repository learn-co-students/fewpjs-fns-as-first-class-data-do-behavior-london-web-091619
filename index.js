function handleClick(e) {
  const timeString = document.getElementById("time").value
  displayMessage(greet(timeString))
}

function greet(timeString) {
  const hour = timeString.split(":")[0]
  return hour < 12 ? "Good Morning"
    : hour < 17 ? "Good Afternoon"
      : "Good Evening"
}

function displayMessage(message) {
  document.querySelector("#greeting").innerText = message
}
