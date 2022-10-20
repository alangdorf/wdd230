const dateDisplay = document.getElementById("currTime");
const todaysDate = new Date;
const options2 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateDisplay.innerText = todaysDate.toLocaleDateString('en-US', options2);

const banner = document.getElementById("banner");
if (todaysDate.getDay() === 1 || todaysDate.getDay() === 2) {
    banner.style.display = "block";
}