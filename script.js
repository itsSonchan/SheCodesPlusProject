function submitButton(event) {
  let h1 = document.querySelector("h1");
  let cityName = document.querySelector("#city-input");
  event.preventDefault();
  h1.innerHTML = cityName.value;
}
let submitForm = document.querySelector("#city-form");
submitForm.addEventListener("submit", submitButton);
