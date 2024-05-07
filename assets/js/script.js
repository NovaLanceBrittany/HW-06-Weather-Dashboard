const searchFormEl = document.querySelector('#search-form');
const apiKey = "4ff058f8032d59e163d097484807b585"
// const searchVal = localStorage.getItem('search')
// const city = JSON.parse(localStorage.getItem ("search"));

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
const resultContentEl = document.querySelector('#weather-result');

// Fetch Function
function searchApi() {
  const city = JSON.parse(localStorage.getItem ("search"));
  
  // == City Name API Key == 
  const requestCity= `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
  
  console.log(requestCity)
  
  fetch(requestCity)
  .then(function (response) {
    return response.json();
  })
  .then(function (citydata) {
    console.log(citydata);
    localStorage.setItem('city', JSON.stringify(citydata))
    
    // ==== ==== ==== From Lines 56-67 the 2nd API Call may not be needed due to the weather data is being called by the first one above on line 42. but it does work and is below if it were to be needed again. ==== ==== ====
    
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
  
  
  const weatherdata = JSON.parse(localStorage.getItem('city'));
  
  
  // 'Days of the Week' Weather Cards
  function printResults() {
    const weatherCard = document.querySelector("#weather-results")
    
    for (let i = 0; i < weatherdata.length; i+=8) {
      
      let div = document.createElement('div')
      
      let html = 
      `<h3>${weatherdata.list[i].dt_txt}</h3>
      <div class="weather-icon${weatherdata.list[i].weather[0].icon}icon"></div>
      <p>Temp: ${weatherdata.list[i].main.temp}</p>
      <p>Wind: ${weatherdata.list[i].wind.speed}</p>
      <p>Humidity: ${weatherdata.list[i].main.humidity}</p>`
      
      div.innerHTML = html;
      weatherCard.appendChild(div);
    }
  }
  
  // The 'Today's Weather' Card
  function todayWeather() {
    const weatherCard = document.querySelector("#todayWeather")
    const city = JSON.parse(localStorage.getItem ("search"));
    
    let div = document.createElement('div')
    
    let html = 
    `<h2>${city} ${weatherdata.list[0].dt_txt}</h2>
    <span class="weather-icon${weatherdata.list[0].weather[0].icon}icon"></span>
    <p>Temp: ${weatherdata.list[0].main.temp}</p>
    <p>Wind: ${weatherdata.list[0].wind.speed}</p>
    <p>Humidity: ${weatherdata.list[0].main.humidity}</p>`
    
    div.innerHTML = html;
    weatherCard.appendChild(div);
  }
  
  
  searchFormEl.addEventListener('submit', handleSearchFormSubmit);