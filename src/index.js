//Display city in Label and pass the city to the api
function displayUsersCity(event) {
  event.preventDefault();
  let readSearchedForCityName = document
    .querySelector("#searching-city-input")
    .value.toString();

  let cityNameDisplay = document.querySelector("#city-Name");
  cityNameDisplay.innerHTML = readSearchedForCityName;
  getCityWeatherFromApi(readSearchedForCityName);
}
//connect to the api and get the weather data
function getCityWeatherFromApi(readSearchedForCityName) {
  console.log(readSearchedForCityName);
  let city = readSearchedForCityName;
  let unit = "metric";
  let key = "ab10edc1d32f1dd18832060f89f088c3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`;
  axios.get(apiUrl).then(getWeatherData);
}

function getWeatherData(response) {
  city = response.data.main.name;
  let temperature = Math.round(response.data.main.temp);
  let feelsLike = Math.round(response.data.main.feels_like);

  let humidity = Math.round(response.data.main.humidity);
  let maxTemperature = Math.round(response.data.main.temp_max);
  let minTemperature = Math.round(response.data.main.temp_min);
  let windspeed = response.data.wind.speed;

  let showTemperatureDisplay = document.querySelector("#temperature-display");
  let showFeelsLikeDisplay = document.querySelector("#weatherFeelDetails");
  let showWindSpeedDisplay = document.querySelector("#windSpeedDetails");
  let showHighLowTempDisplay = document.querySelector("#temp-high-low");

  showTemperatureDisplay.innerHTML = `${temperature} °C`;
  showFeelsLikeDisplay.innerHTML = `Feels like ${feelsLike} °C`;
  showWindSpeedDisplay.innerHTML = `${windspeed} km/hr`;
  showHighLowTempDisplay.innerHTML = `${maxTemperature}°C / ${minTemperature} °C`;

  console.log(
    `${temperature}\n${humidity}\n${maxTemperature}\n${minTemperature}\n${windspeed}`
  );
}

let runWeatherSearch = document.querySelector("#searching-city");
runWeatherSearch.addEventListener("submit", displayUsersCity);
