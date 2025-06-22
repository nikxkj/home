//back to top button behaviour
let mybutton = document.getElementById("mybtn");
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var htmlsec = document.getElementsByTagName("html")[0];
var burger = document.querySelector("nav .burger");
burger.onclick = function () {
  if (htmlsec.classList.contains("navopen")) {
    htmlsec.classList.remove("navopen");
  } else {
    htmlsec.classList.add("navopen");
  }
};

var mouseX = 520,
  mouseY = 400,
  eye = document.getElementById("eyes"),
  xp = 0,
  yp = 0;

document.onmousemove = function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
};

function scaleValue(value, from, to) {
  var scale = (to[1] - to[0]) / (from[1] - from[0]);
  var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
  return ~~(capped * scale + to[0]);
}

function animate() {
  requestAnimationFrame(animate);
  var n = scaleValue(mouseX, [0, screen.width], [-58, -42]);
  var p = scaleValue(mouseY, [0, 1200], [25, 45]);
  //eye.style.left = n;
  //eye.style.top = p;
  eye.style.transform = "translate(" + n + "%," + p + "px)";
}

animate();
