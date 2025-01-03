let submitForm = document.querySelector("#city-form");
submitForm.addEventListener("submit", submitButton);

function submitButton(event) {
  let h1 = document.querySelector("h1");
  let cityName = document.querySelector("#city-input");
  event.preventDefault();
  h1.innerHTML = cityName.value;
  let apiKey = "4d6d3a603f2o058afbtc1e8fa6515357";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(returnTemp);
  function returnTemp(value) {
    let currentTemp = Math.round(value.data.temperature.current);
    let city = value.data.city;
    let timestamp = value.data.time;
    let description = value.data.condition.description;
    let humidity = value.data.temperature.humidity;
    let wind = value.data.wind.speed;
    console.log(wind);
  }
}
function formatDate() {
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
}
