const API_KEY = 'cabe1bc1ceb51d9b2e24542079404486';

function onGeoOk (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then((data) => {
    const city = document.querySelector('#weather span:first-child');
    const weather = document.querySelector('#weather span:last-child');
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
  } );
}

function onGeoFail () {
  alert("Can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFail);