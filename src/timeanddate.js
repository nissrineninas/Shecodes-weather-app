let currentDayAndTime = new Date();

//this function shows the time and day
function currentTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes().toString().padStart(2, "0");
  let displayDayAndTimeString = `${day}, ${currentHour}:${currentMinute}`;
  let displayDayAndTime = document.querySelector("#currentDate");
  displayDayAndTime.innerHTML = displayDayAndTimeString;
}
currentTime(currentDayAndTime);
