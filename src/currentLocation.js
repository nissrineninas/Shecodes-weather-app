function mapLocationForUv(event) {
  event.preventDefault();
  getGeoCoords();
}

function getGeoCoords() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let lat = position.coords.latitude.toFixed(2);
  let lon = position.coords.longitude.toFixed(2);
  let coordinates;
  coordinates = `lat=${lat}&lon=${lon}`;

  let key = "ab10edc1d32f1dd18832060f89f088c3";

  let apiUrlCoord = `https://api.openweathermap.org/data/2.5/onecall?${coordinates}&exclude=minutely,hourly,daily,alerts&appid=${key}`;
  let coordString = `your coordinates are: latitude ${lat}, longitude ${lon}`;
  axios.get(`${apiUrlCoord}`).then(showUvIndex);

  displayCurrentLocation(coordString);
}
// //Display current location coordinates
function displayCurrentLocation(coordString) {
  let currentCoordLocation = document.querySelector("#current-coordinates");
  currentCoordLocation.innerHTML = coordString;
}

function showUvIndex(response) {
  let uvIndex = response.data.current.uvi;
  let showUVIndexDisplay = document.querySelector("#uvDetails");
  showUVIndexDisplay.innerHTML = `UV Index: ${uvIndex}`;
}

let runCurrentLocationSearch = document.querySelector(
  "#searching-current-location"
);
runCurrentLocationSearch.addEventListener("submit", mapLocationForUv);
