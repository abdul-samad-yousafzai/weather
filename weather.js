$(document).ready(function () {

  console.log("JS Connected ✅");

  $("#getWeatherBtn").click(function () {

    let city = $("#cityInput").val();

    if (city === "") {
      alert("Please enter a city name");
      return;
    }

    let apiKey = "1c58d7bfcacca1b5013800e3f5e33a32";

    let url = "https://api.openweathermap.org/data/2.5/weather?q="
          + city + "&appid=" + apiKey + "&units=metric";

    $.ajax({
      url: url,
      type: "GET",
      success: function (data) {

        console.log(data);

        let output = `
          <h2>${data.name}</h2>
          <p> Temperature: ${data.main.temp} °C</p>
          <p> Condition: ${data.weather[0].description}</p>
          <p> Humidity: ${data.main.humidity}%</p>
          <p> Wind: ${data.wind.speed} m/s</p>
        `;

        $("#result").html(output);
      },
      error: function () {
        alert("City not found or API issue");
      }
    });

  });

});