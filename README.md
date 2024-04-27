# 06 Server-Side APIs: Weather Dashboard


## The Challenge:

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. 

Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.


## Technology Stacks:
- OpenWeatherMap API
    - [5 Day Weather Forecast](https://openweathermap.org/forecast5)


## Project Conduction:
As a traveler I want to see the weather outlook for multiple cities so I can plan a trip accordingly.


## Acceptance Criteria:
- When a user engages with the weather dashboard: 
    - They are prompted with form inputs to search for a city.
    - They are presented with current and future conditions for that city and that city is added to the search history. (localStorage)

- When the user views current weather conditions for that city, they are presented with:
    - City Name 
    - The Date
    - An icon representation of weather conditions
    - Temperature
    - Humidity
    - Wind speed

- When the user views future weather conditions for that city, they are presented with a 5-day forecast that displays the following: 
    - The date
    - An icon representation of weather conditions
    - Temperature
    - Wind speed
    - Humidity

- When the user clicks on a city in the search history, they are again presented with current and future conditions for that city.



## Mock-Up:
The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)



## The Deployment:

[The Repo:](https://github.com/NovaLanceBrittany/HW-04-Blog-Start-Up)

[The Deployment:](https://novalancebrittany.github.io/HW-04-Blog-Start-Up/)








 Tips: 
Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).