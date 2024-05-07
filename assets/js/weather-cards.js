const searchFormEl = document.querySelector('#search-form');
const resultTitleEl = document.querySelector('#result-title');
const resultContentEl = document.querySelector('#weather-result');

function getParams() {

  // Get the query and format values from storage
  const searchVal = localStorage.getItem('search')

  // Pass these values to fetch
  searchApi(searchVal)
}



// Fetch Function
function searchApi(query) {

  // == City Name API Key == 
  const requestCity= `api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`;

  
  
  
  fetch(requestCity)

  .then(function (response) {
    return response.json();
  })
  .then(function (citydata) {
    console.log(citydata);
    
    // == Weather Data API Key == 
    const requestWeather = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;

    fetch(requestWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (weatherdata) {
      console.log(weatherdata);
      printResults(weatherdata.results)
    })
  })

  .catch(error => console.log(error)
  );
}


// Weather Cards
function printResults(data) {
  for (let i = 0; i < data.length; i++) {
    
    const weather = data[i]


    const calanderDateEl = document.createElement('h3')
    calanderDateEl.setAttribute('class', 'calander-date')
    titleEl.textContent = article.title

    
    const descEl = document.createElement("p")
    descEl.textContent = article.description
    
    const card = document.createElement("div")







    card.appendChild(titleEl)
    card.appendChild(descEl)
    resultContentEl.appendChild(card)
  }
}


function getParams2() {
  const readEl = document.createElement('button')
  readEl.textContent = 'Read More'
  readEl.setAttribute('href', article.url)
}

getParams();