

document.getElementById('player').style.top = '50px';
  document.getElementById('player').style.left = '50px';

/*var input = document.querySelector('input[name=input]');
input.addEventListener('keyup', function(e) {
  console.log(e.keyCode);
})
*/

document.body.onkeydown = function (e) {
	var el = document.getElementById('player');  
  
  var KEYCODE_LEFT = 37;
  var KEYCODE_RIGHT = 39;
  var KEYCODE_UP = 38;
  var KEYCODE_DOWN = 40;
  var KEYCODE_SPACE = 32;
  
  if (e.keyCode == KEYCODE_LEFT) {
  	el.style.left = (parseInt(el.style.left) - 10) + 'px';
    if (parseInt(el.style.left) < 10) el.style.left = 10 + 'px'; 
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
  	el.style.left = (parseInt(el.style.left) + 10) + 'px';
    if (parseInt(el.style.left) > document.documentElement.clientWidth - 20) el.style.left = document.documentElement.clientWidth - 20 + 'px';
  }
  else if (e.keyCode == KEYCODE_UP) {
    el.style.top = (parseInt(el.style.top) - 10) + 'px';
    if (parseInt(el.style.top) < 10) el.style.top = 10 + 'px'; 
  }
  else if (e.keyCode == KEYCODE_DOWN) {
    el.style.top = (parseInt(el.style.top) + 10) + 'px';
    if (parseInt(el.style.top) > document.documentElement.clientHeight - 20) el.style.top = document.documentElement.clientHeight - 20 + 'px';
  }
  
  else if (e.keyCode == KEYCODE_SPACE) {
      var rocket = document.createElement('div');
      //document.body.appendChild(fire);
      rocket.classList.add('fire');
      rocket.style.position = 'absolute';
      rocket.style.top = parseInt(el.style.top) - 20 + 'px';
      rocket.style.left = parseInt(el.style.left) + 5 + 'px';
      setTimeout(function() {
        document.body.appendChild(rocket);
      },200);
  
      setTimeout(function fire() {
        rocket.style.top = parseInt(rocket.style.top) - 50 + 'px';
        if (parseInt(rocket.style.top) > -20) setTimeout(fire, 500);
        else rocket.remove();
      }, 500);
  }
}