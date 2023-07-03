
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const searchbar = document.querySelector('.search-box input');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.details');

const error404 = document.querySelector('.error-not-found');

searchbar.addEventListener("keydown", function(event) {
    if(event.keyCode == 13){
        
  const APIKey = "77f4ced269974384b01224258232906"
  const city = document.querySelector('.search-box input').value;
  
  if (city == ''){ //no city
      return;
  }
  //'http://api.weatherapi.com/v1/current.json?key={APIKey}&q={city}&aqi=no'
  //var tem  = 'http://api.weatherapi.com/v1/current.json?key=77f4ced269974384b01224258232906&q=London&aqi=no'
  //alert(city)
  fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`)
  .then(response => response.json())
  .then(json => {
      
      if (json.cod === '404') {
          container.style.height = '400px';
          weatherBox.style.display = 'none';
          weatherDetails.style.display = 'none';
          error404.style.display = 'block';
          error404.classList.add('fadeIn');
          return;
      }


      error404.style.display = 'none';
      error404.classList.remove('fadeIn');
      
      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temp');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.details .humidity span');
      const wind = document.querySelector('.details .wind span');
      const feels = document.querySelector('.details .feels span');
      const pic = document.querySelector('.weather-box img');
      /*alert('pass')
      alert(json.current.temp_f)
      alert(json.current.condition.text)
      alert(json.current.temp_f)
      alert(json.current.humidity)
      alert(json.current.wind_mph)*/
      temperature.innerHTML = `${(json.current.temp_f)}<span>°F</span>`;
      pic.src = `${(json.current.condition.icon)}`;
      description.innerHTML = `${json.current.condition.text}`;
      humidity.innerHTML = `${json.current.humidity}%`;
      wind.innerHTML = `${parseInt(json.current.wind_mph)}Km/h`;
      feels.innerHTML = `${parseInt(json.current.feelslike_f)}<span>°F</span>`;
      searchbar.value = "";
      weatherBox.style.display = '';
      weatherDetails.style.display = '';
      weatherBox.classList.add('fadeIn');
      weatherDetails.classList.add('fadeIn');
      container.style.height = '590px';


  });
    }

    
      
  });
search.addEventListener('click', () => {
    //alert("Button pres")
    const APIKey = "77f4ced269974384b01224258232906"
    const city = document.querySelector('.search-box input').value;
    
    if (city == ''){ //no city
        return;
    }
    //'http://api.weatherapi.com/v1/current.json?key={APIKey}&q={city}&aqi=no'
    //var tem  = 'http://api.weatherapi.com/v1/current.json?key=77f4ced269974384b01224258232906&q=London&aqi=no'
    //alert(city)
    fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(json => {
        
        if (json.cod === '404') {
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }


        error404.style.display = 'none';
        error404.classList.remove('fadeIn');
        
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temp');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.details .humidity span');
        const wind = document.querySelector('.details .wind span');
        const feels = document.querySelector('.details .feels span');
        const pic = document.querySelector('.weather-box img');
        /*alert('pass')
        alert(json.current.temp_f)
        alert(json.current.condition.text)
        alert(json.current.temp_f)
        alert(json.current.humidity)
        alert(json.current.wind_mph)*/
        temperature.innerHTML = `${(json.current.temp_f)}<span>°F</span>`;
        pic.src = `${(json.current.condition.icon)}`;
        description.innerHTML = `${json.current.condition.text}`;
        humidity.innerHTML = `${json.current.humidity}%`;
        wind.innerHTML = `${parseInt(json.current.wind_mph)}Km/h`;
        feels.innerHTML = `${parseInt(json.current.feelslike_f)}<span>°F</span>`;
        searchbar.value = "";
        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';


    });


});