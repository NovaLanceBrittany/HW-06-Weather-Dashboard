const searchFormEl = document.querySelector('#search-form');
const apiKey = "4ff058f8032d59e163d097484807b585"
const searchVal = localStorage.getItem('search')

// City Form Handeling
function handleSearchFormSubmit(event) {
  event.preventDefault();

  const searchInputVal = document.querySelector('#search-input-city').value;
  

  if (!searchInputVal) {
    console.error('You need a search a city!');
    return;
  } 
    localStorage.setItem(`search`, searchInputVal);
    console.log(searchInputVal)
    document.location.href='index.html';
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);




// API Data Calls
const resultTitleEl = document.querySelector('#result-title');
const resultContentEl = document.querySelector('#weather-result');

function getParams() {
  
  // Pass these values to fetch
  searchApi(searchVal)
}



// Fetch Function
function searchApi() {
  
  // == City Name API Key == 
  const requestCity= `https://api.openweathermap.org/data/2.5/forecast?q=${searchVal}&appid=${apiKey}`;
  
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

searchApi();