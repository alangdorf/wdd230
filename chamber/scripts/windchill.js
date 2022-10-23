const windSpeed = document.getElementById("windSpeed").innerText;
const temp = document.getElementById("temp").innerText;
const windChill = document.getElementById("windChill");

windChill.innerText = (35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temp * (windSpeed ** 0.16))).toFixed(2);