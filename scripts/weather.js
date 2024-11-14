const searchButton = document.querySelector('.js-search-button');

function searchWeather() {
    const city = document.querySelector('.js-city-input').value;
    const apiKey = 'de8839c515e63c58374222f2fdefa8c2';
    let imageUrl;

    async function getWeatherData() {
        const response = await fetch (`
            https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}
        `)           
    
        const data = await response.json()

        if (data.cod === '404') {
            document.querySelector('.js-weather-display').innerHTML = `
            <h2>
                Location Not Found!
            </h2>
            `;
        }

        const weatherId = data.weather[0].id;
        if (weatherId >= 200 && weatherId <= 232) {
            imageUrl = '11d'
        } else if (weatherId >= 300 && weatherId <= 321 || weatherId >= 520 && weatherId <= 531) {
            imageUrl = '09d'
        } else if (weatherId >= 500 && weatherId <= 504) {
            imageUrl = '10d'
        } else if (weatherId >= 600 && weatherId <= 622 || weatherId === 511) {
            imageUrl = '13d'
        } else if (weatherId >= 701 && weatherId <= 781) {
            imageUrl = '50d'
        } else if (weatherId === 800) {
            imageUrl = '01d'
        } else if (weatherId === 801) {
            imageUrl = '02d'
        } else if (weatherId === 802) {
            imageUrl = '03d'
        } else if (weatherId === 803 || weatherId === 804) {
            imageUrl = '04d'
        }

        document.querySelector('.js-weather-display').innerHTML = `
            <h2 class="city">
                ${data.name}
            </h2>

            <img class="weather-image" src="https://openweathermap.org/img/wn/${imageUrl}@4x.png" alt="">

            <p class="temperature">
                ${(data.main.temp - 273.15).toFixed(2)}°C
            </p>

            <p class="details">
                ${data.weather[0].description}
            </p>

            <div class="details-container">
                <div class="details-block">
                    <p>Humidity: ${data.main.humidity}%</p>
                </div>
                <div class="details-block">
                    <p>Wind: ${data.wind.speed}km/h</p
                </div>
            </div>
        `;
    }
    getWeatherData();
}

document.querySelector('.js-search-button').addEventListener('click', searchWeather);
document.querySelector('.js-city-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWeather();
    }
});