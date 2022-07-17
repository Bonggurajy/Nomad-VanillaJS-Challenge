const $clock = document.querySelector('#clock');

function paintClock () {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,'0');
  const minute = String(date.getMinutes()).padStart(2,'0');

  $clock.innerText = `${hour}:${minute}`;
}

paintClock();
setInterval(paintClock, 1000);
