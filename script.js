var submitButton = document.querySelector(".Submit");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".place-name");
var desc = document.querySelector(".description");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".hum-res");
var uvi = document.querySelector(".uvi-res");
var windspeed = document.querySelector(".windspeed-res");

submitButton.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid={API_key}"
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(() => alert("Wrong city!"));
});
