const apiKey = '3045dd712ffe6e702e3245525ac7fa38'; // Replace with your OpenWeatherMap API key


const weatherInfo = document.getElementById('weatherInfo');

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    if (!cityInput) {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherInfo.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${iconUrl}" alt="${data.weather[0].description}">
    <p>Date and Time: ${new Date(data.dt * 1000).toLocaleString()}</p>
    <p>Temperature: ${data.main.temp} &#8451;</p>
    <p>Feels Like: ${data.main.feels_like} &#8451;</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    <p>Weather Conditions: ${data.weather[0].description}</p>
  `;
}