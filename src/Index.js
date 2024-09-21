document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let city = document.getElementById("search-form-input").value;
    fetchWeatherData(city);
  });
  
  const apiKey = "YOUR_API_KEY";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  
  function fetchWeatherData(city) {
    axios
      .get(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => {
        let data = response.data;
        updateUI(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }
  
  function updateUI(data) {
    const city = document.getElementById("city");
    const windSpeed = document.getElementById("wind-speed");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const humidity = document.getElementById("humidity");
    const icon = document.getElementById("icon");
  
    city.innerText = data.name;
    windSpeed.innerText = `${data.wind.speed} km/h`;
    temperature.innerText = `${Math.round(data.main.temp)}°C`;
    description.innerText = data.weather[0].description;
    humidity.innerText = `${data.main.humidity}%`;
  
    const iconCode = data.weather[0].icon;
    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" alt="Weather icon" />`;
  }
  
  searchCity("CapeTown");S