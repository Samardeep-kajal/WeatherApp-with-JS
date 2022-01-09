var submitButton = document.querySelector(".Submit");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".place-name");
var desc = document.querySelector(".description");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".hum-res");
var uvi = document.querySelector(".uvi-res");
var windspeed = document.querySelector(".windspeed-res");
let countryName = document.querySelector(".country-name");
submitButton.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid={API_key}"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let nameValue = data["name"];
      let tempValue = data["main"]["temp"];
      let descValue = data["weather"][0]["description"];
      let humidityValue = data["main"]["humidity"];
      let windspeedValue = data["wind"]["speed"];
      let countryValue = data["sys"]["country"];

      main.innerHTML = nameValue;
      temp.innerHTML = tempValue + "°C";
      desc.innerHTML = descValue;
      humidity.innerHTML = "Humidity : " + humidityValue + " %";
      windspeed.innerHTML = "Wind Speed : " + windspeedValue + "m/s";
      countryName.innerHTML = countryValue;
    })
    .catch(() => alert("Wrong city!"));
});
