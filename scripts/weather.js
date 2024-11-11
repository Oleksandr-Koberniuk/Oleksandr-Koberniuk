const searchButton = document.querySelector('.js-search-button');

searchButton.addEventListener('click', () => {
    const city = document.querySelector('.js-city-input').value;
    const apiKey = 'de8839c515e63c58374222f2fdefa8c2';

    async function getWeather() {
        const response = await fetch (`
            https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}
        `)
    
        const data = await response.json()

        console.log(data);

        document.querySelector('.js-weather-form').innerHTML = `
            <h2 class="city">
                ${data.name}
            </h2>

            <img class="weather-image" src="https://openweathermap.org/img/wn/10d@4x.png" alt="">

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
    getWeather();
});