function displayForecast(response) {
    let forecast = response.data.daily;
    let forecastElement = document.querySelector(".weather-forecast");
  
    let forecastHTML = `<div class="weather-forecast-row">`; // Start a row container
    forecast.forEach(function (forecastDay, index) {
      if (index < 5) {  // Display only the first 5 days
        forecastHTML += `
          <div class="weather-forecast-day">
            <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
            <div class="weather-forecast-icon">
              <img 
                src="http://openweathermap.org/img/wn/${
                  forecastDay.weather[0].icon
                }@2x.png"
                alt="${forecastDay.weather[0].description}"
                width="42"
              />
            </div>
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max"><strong>${Math.round(forecastDay.temp.max)}°</strong></span>
              <span class="weather-forecast-temperature-min">${Math.round(forecastDay.temp.min)}°</span>
            </div>
          </div>
        `;
      }
    });
    forecastHTML += `</div>`; // Close the row container
    forecastElement.innerHTML = forecastHTML;
  }
  
  searchCity("CapeTown");S