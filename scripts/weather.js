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
            <h2>
                ${city}
            </h2>
            <p class="details">
                ${data.weather[0].description}
            </p>
            <p class="temperature">
                ${(data.main.temp - 273.15).toFixed(2)}°C
            </p>
        `;
    }
    getWeather();
});