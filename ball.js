var ball = document.getElementById('ball');
var clock = document.getElementById('clock');
// var velocity = 1;
// var positionX = 0;

var today;
var time;

// function moveBall() {
//   today = new Date();
//   time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
//   positionX = positionX + velocity;
//   ball.style.left = positionX+'px';
//   console.log(time);
// }

// setInterval(moveBall, 1000);

x = document.documentElement.offsetWidth; // center
y = document.documentElement.offsetHeight; // center
r = document.documentElement.offsetWidth/2;  // radius
a = 0    // angle (from 0 to Math.PI * 2)

function rotate(a) {
  
  var px = x + r * Math.cos(a); // <-- that's the maths you need
  var py = y + r * Math.sin(a);
  
  ball.style.left = px + "px";
  ball.style.top = py + "px";  
}


setInterval(function() {
  a = (a + Math.PI / (360/12)) % (Math.PI * 2);
  rotate(a);
}, 1000);
