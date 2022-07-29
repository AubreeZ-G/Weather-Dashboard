//var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={03d87a1a5b965f66c1c3fa162d5b5f87}';
var ApiKey = "03d87a1a5b965f66c1c3fa162d5b5f87";
var CityInput = document.getElementById("CityName");
var issueContainer = document.getElementById('#repos-container');
var H3 = document.getElementById('localWeather');
var submitButton = document.getElementById("submit");





// var userName = document.createElement('h3');
// var issueTitle = document.createElement('p');
// userName.textContent = data[i].user.login;
// issueTitle.textContent = data[i].title;

// issueContainer.append(issueTitle);
// }
//});
//}

https://openwhyd.org/adrien/playlist/10?format=links&limit=10000

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  var city = CityInput.value;
  var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + ApiKey;
  fetch(requestUrl)
    .then(
      function (response) {
        return response.json();
      })
    .then(function (data) {
      console.log(data);
      return data
    })
      .then(function (data){
        H3.textContent = "Feels Like " + data.main.feels_like + ", Humidity " + data.main.humidity + ", Temp in Kelvin " + data.main.temp + ", Weather Description " + data.weather[0].description + ", Wind Speed " + data.wind.speed;

        

      // H3.textContent 
    });
});



// 03d87a1a5b965f66c1c3fa162d5b5f87