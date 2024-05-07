// const weatherdata = JSON.parse(localStorage.getItem('city')) || [];
// const searchForm = document.querySelector('#search-form');

// // 'Days of the Week' Weather Cards
// function printResults() {
//   const weatherCard = document.querySelector("#weather-results")

//   for (let i = 0; i < weatherdata.length; i+=8) {
    
//     let div = document.createElement('div')

//     let html = 
//     `<h3>${weatherdata.list[i].dt_txt}</h3>
//     <div class="weather-icon${weatherdata.list[i].weather[0].icon}icon"></div>
//     <p>Temp: ${weatherdata.list[i].main.temp}</p>
//     <p>Wind: ${weatherdata.list[i].wind.speed}</p>
//     <p>Humidity: ${weatherdata.list[i].main.humidity}</p>`

//     div.innerHTML = html;
//     weatherCard.appendChild(div);
//   }
// }

// // The 'Today's Weather' Card
// function todayWeather() {
//   const weatherCard = document.querySelector("#todayWeather")

//   let div = document.createElement('div')

//   let html = 
//   `<h2>${weatherdata.city.name} ${weatherdata.list[0].dt_txt}</h2>
//   <span class="weather-icon${weatherdata.list[0].weather[0].icon}icon"></span>
//   <p>Temp: ${weatherdata.list[0].main.temp}</p>
//   <p>Wind: ${weatherdata.list[0].wind.speed}</p>
//   <p>Humidity: ${weatherdata.list[0].main.humidity}</p>`

//   div.innerHTML = html;
//   weatherCard.appendChild(div);
// }

// // Event Listener == button
// searchForm.addEventListener('click', function(event) {
//   event.preventDefault();
//   printResults();
//   todayWeather();
// })