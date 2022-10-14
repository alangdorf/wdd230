const dateDisplay = document.getElementById("currTime");
const todaysDate = new Date;
const options2 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateDisplay.innerText = todaysDate.toLocaleDateString('en-US', options2);