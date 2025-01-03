let submitForm = document.querySelector("#city-form");
submitForm.addEventListener("submit", submitButton);

function searchCity(city) {
  let apiKey = "4d6d3a603f2o058afbtc1e8fa6515357";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(returnTemp);
}

function submitButton(event) {
  let cityName = document.querySelector("#city-input");
  event.preventDefault();
  searchCity(cityName.value);
}

function returnTemp(value) {
  let currentTemp = Math.round(value.data.temperature.current);
  let city = value.data.city;
  let h1 = document.querySelector("h1");
  h1.innerHTML = city;
  let timestamp = value.data.time * 1000;
  let today = new Date(timestamp);
  let description = value.data.condition.description;
  let humidity = value.data.temperature.humidity;
  let wind = value.data.wind.speed;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = description;
  let windElement = document.querySelector("#windspeed");
  windElement.innerHTML = `${wind} km/h`;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;
  let currentTempElement = document.querySelector("#current-temp");
  currentTempElement.innerHTML = currentTemp;
  let icon = document.querySelector("#icon");
  let weatherIcon = value.data.condition.icon_url;
  icon.innerHTML = `<img src="${weatherIcon}" >`;
  let day = document.querySelector("#date-time");
  day.innerHTML = formatDate(today);
}
function formatDate(values) {
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let minutes = values.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = values.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let weekday = days[values.getDay()];
  return `${weekday} ${hours}:${minutes}, `;
}
