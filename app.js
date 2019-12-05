// Weight Converter

function weightConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputPounds = document.getElementById("inputPounds");
    var inputKilograms = document.getElementById("inputKilograms");
    var inputOunces = document.getElementById("inputOunces");
    var inputGrams = document.getElementById("inputGrams");

    if (source == "inputPounds") {
      inputKilograms.value = (valNum / 2.2046).toFixed(2);
      inputGrams.value = (valNum / 0.0022046).toFixed();
      inputOunces.value = (valNum * 0.071429).toFixed(3);
    }
    if (source == "inputKilograms") {
      inputPounds.value = (valNum * 2.2046).toFixed(2);
      inputOunces.value = (valNum * 35.274).toFixed(2);
      inputGrams.value = (valNum * 1000).toFixed();
    }
    if (source == "inputOunces") {
      inputPounds.value = (valNum * 0.062500).toFixed(4);
      inputKilograms.value = (valNum / 35.274).toFixed(4);
      inputGrams.value = (valNum / 0.035274).toFixed(1);
    }
    if (source == "inputGrams") {
      inputPounds.value = (valNum * 0.0022046).toFixed(4);
      inputKilograms.value = (valNum / 1000).toFixed(4);
      inputOunces.value = (valNum * 0.035274).toFixed(3);
    }

  }

  // Length Converter

  function lengthConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputKilometers = document.getElementById("inputKilometers");
    var inputMiles = document.getElementById("inputMiles");
    var inputMeters = document.getElementById("inputMeters");
    var inputFoot = document.getElementById("inputFoot");

    if (source == "inputMiles") {
      inputKilometers.value = (valNum * 1.60934).toFixed(2);
      inputFoot.value = (valNum * 5280).toFixed();
      inputMeters.value = (valNum * 1609.34).toFixed(3);
    }
    if (source == "inputKilometers") {
      inputMiles.value = (valNum * 0.621371).toFixed(2);
      inputMeters.value = (valNum * 1000).toFixed(2);
      inputFoot.value = (valNum * 3280.84).toFixed();
    }
    if (source == "inputMeters") {
      inputMiles.value = (valNum * 0.000621371).toFixed(4);
      inputKilometers.value = (valNum * 0.001).toFixed(4);
      inputFoot.value = (valNum * 3.28084).toFixed(1);
    }
    if (source == "inputFoot") {
      inputMiles.value = (valNum * 0.000189394).toFixed(4);
      inputKilometers.value = (valNum * 0.0003048).toFixed(4);
      inputMeters.value = (valNum * 0.3048).toFixed(3);
    }

  }

  // Temperature Converter

  function temperatureConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputCelsius = document.getElementById("inputCelsius");
    var inputFahrenheit = document.getElementById("inputFahrenheit");

    if (source == "inputFahrenheit") {
      inputCelsius.value = ((valNum - 32) * 1.8).toFixed();
    }
    if (source == "inputCelsius") {
      inputFahrenheit.value = (valNum * 1.8 + 32).toFixed(1);
    }
  }

  // Speed Converter

  function speedConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputKph = document.getElementById("inputKph");
    var inputMph = document.getElementById("inputMph");

    if (source == "inputMph") {
      inputKph.value = (valNum * 0.621371).toFixed();
    }
    if (source == "inputKph") {
      inputMph.value = (valNum / 1.60934).toFixed(1);
    }
  }

  // Weather API

  $(document).ready(function(){

    $("#SearchCity").on("click", function() {
    
      // event.preventDefault();
    
      var cityName = $("#cityName").val();
    
      console.log(cityName);
    
      var apiKey = "5386d7b4ea6f9bbb33b4ef81e382c057"
      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey;
                    
      
                    
    
      $.ajax({
          url: queryURL,
          method: "GET"
      })
        .then(function(response) {
    
          // Log the queryURL
          console.log(queryURL);
    
          // Log the resulting object
          console.log(response);
    
          $(".city").html(response.name + " Weather Details");
          $(".icon").html(response.weather[0].icon + ".png");
    
          $(".wind").text("Wind Speed: " + response.wind.speed);
          $(".humidity").text("Humidity: " + response.main.humidity);
          $(".temp").text("Temperature (F) " + Math.floor(response.main.temp));
    
        });
    }); });