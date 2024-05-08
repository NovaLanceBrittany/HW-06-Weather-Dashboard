const searchFormEl = document.querySelector('#search-form');
const apiKey = "4ff058f8032d59e163d097484807b585"
const weatherCard0 = document.querySelector("#weather-result")

// City Form Handeling
function handleSearchFormSubmit(event) {
  event.preventDefault();

  const searchInputVal = document.querySelector('#search-input-city').value;
  if (!searchInputVal) {
    console.error('You need a search a city!');
    return;
  } 
  searchApi();
  printResults();
  todayWeather();
    localStorage.setItem(`search`, JSON.stringify(searchInputVal));
    console.log(searchInputVal)
}

// API Data Calls
const resultTitleEl = document.querySelector('#result-title');

// Fetch Function
function searchApi() {
  const searchInputVal = document.querySelector('#search-input-city').value;
  
  // == City Name API Key == 
  const requestCity= `https://api.openweathermap.org/data/2.5/forecast?q=${searchInputVal}&appid=${apiKey}&units=imperial`;
  
  console.log(requestCity)
  
  fetch(requestCity)
  .then(function (response) {
    return response.json();
  })
  .then(function (citydata) {
    console.log(citydata);
    localStorage.setItem('city', JSON.stringify(citydata))
    todayWeather();
    printResults();
    // ==== ==== ==== From Lines 42-56 the 2nd API Call may not be needed due to the weather data is being called by the first one above on line 42. but it does work and is below if it were to be needed again. ==== ==== ====
    
    // == Weather Data API Key == 
    // const requestWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${citydata.city.coord.lat}&lon=${citydata.city.coord.lon}&appid=${apiKey}`;
    
    // fetch(requestWeather)
    // .then(function (response) {
      //   return response.json();
      // })
      // .then(function (weatherdata) {
        //   console.log(weatherdata);
        //   localStorage.setItem('weather', JSON.stringify(weatherdata))
        //   printResults(weatherdata.results)
        // })
      })
      
      .catch(error => console.log(error)
    );
  }
  
  
  
  
  // 'Days of the Week' Weather Cards
  function printResults() {
    const weatherdata = JSON.parse(localStorage.getItem('city'));
    weatherCard0.innerHTML = '';
    console.log("Line 70", weatherdata[0])

    for (let i = 0; i < weatherdata.list.length; i+=7) {
      console.log("Line 73")
      let forecast = document.createElement('div')
      
      let html = 
      `<h3>${weatherdata.list[i].dt_txt}</h3>
      <div style="background-repeat: no-repeat; height: 60px; width: 60px;" class="weather-icon${weatherdata.list[i].weather[0].icon}"></div>
      <p>Temp: ${weatherdata.list[i].main.temp} F</p>
      <p>Wind: ${weatherdata.list[i].wind.speed} mph</p>
      <p>Humidity: ${weatherdata.list[i].main.humidity}</p>`
      
      forecast.innerHTML = html;
      weatherCard0.appendChild(forecast);
    }
  }
  
  // The 'Today's Weather' Card
  function todayWeather() {
    const weatherCard = document.querySelector("#todayWeather")

    // setting the previous local storage item to null
    weatherCard.innerHTML = '';
    const city = JSON.parse(localStorage.getItem ("search"));
    const weatherdata = JSON.parse(localStorage.getItem('city'));

    let div = document.createElement('div')
    
    let html = 
    `<h2>Today In: ${weatherdata.city.name} ${weatherdata.list[0].dt_txt}</h2>
    <div style="background-repeat: no-repeat; height: 60px; width: 60px;" class="weather-icon${weatherdata.list[0].weather[0].icon}"></div>
    <p>Temp: ${weatherdata.list[0].main.temp} F</p>
    <p>Wind: ${weatherdata.list[0].wind.speed} mph</p>
    <p>Humidity: ${weatherdata.list[0].main.humidity}</p>`
    
    div.innerHTML = html;
    weatherCard.appendChild(div);
  }
  
  
  searchFormEl.addEventListener('submit', function(e) {
    e.preventDefault();
    searchApi();
  });