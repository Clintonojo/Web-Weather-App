// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap or WeatherAPI
const API_KEY = '7ff8cec0b8a8c074b396bd53e89bdb12';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchWeatherData(query);
    }
});

async function fetchWeatherData(query) {
    try {
        const response = await fetch(`${API_BASE_URL}?q=${query}&appid=${API_KEY}&units=metric`);
        if (response.ok) {
            const data = await response.json();
            displayWeatherData(data);
        } else {
            alert('Error: Could not fetch weather data.');
        }
    } catch (error) {
        alert('Error: Failed to fetch weather data.');
    }
}

function displayWeatherData(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherDescription.textContent = data.weather[0].description;
    temperature.textContent = `${data.main.temp.toFixed(1)}°C`;
}



