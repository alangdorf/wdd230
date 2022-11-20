const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weathericon');
const captionDesc = document.querySelector('#weatherdesc');
const windSpeed = document.querySelector('#windSpeed');
const windChill = document.getElementById("windChill");
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=263a6a26fc04509e8d63843aff79cd48&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    
    const temp = weatherData.main.temp;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = sentenceCase(weatherData.weather[0].description);
    const speed = weatherData.wind.speed;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    currentTemp.textContent = temp.toFixed(0);
    windSpeed.textContent = speed.toFixed(0);
    windChill.innerText = (35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16))).toFixed(0);
}

function sentenceCase(message) {
    let alpha = false;
    for(let i = 0; i < message.length; ++i) {
        if (!alpha) {
            message = message.substr(0, i) + message.at(i).toUpperCase() + message.substr(i + 1, message.length);
        }
        if (message.at(i) != ' ') {
            alpha = true;
        } else {
            alpha = false;
        }
    }
    return message;
}