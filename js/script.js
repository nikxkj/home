const tiles = document.getElementsByClassName("tile");
const sparks = document.getElementById("sparks");

for (var i = 0; i < tiles.length; i++) {
  var tile = tiles[i];
  tile.addEventListener(
    "mouseenter",
    (tile) => {
      // highlight the mouseover target
      sparks.style.opacity = "1";

      // reset the color after a short delay
      setTimeout(() => {
        sparks.style.opacity = "0";
      }, 300);
    },
    false
  );
}

var htmlsec = document.getElementsByTagName("html")[0];
var home = document.getElementById("home");
var headings = document.getElementById("headings");
var tttiles = document.getElementsByClassName("tiles")[0];

var navbuttons = document.querySelectorAll("nav li");
var navbuttons2 = document.querySelectorAll(".tile a");
const burger = document.getElementById("burger");
var homeli = document.querySelector("nav li a");

document.getElementById("spacing").style.minHeight =
  tttiles.offsetHeight + "px";

document.getElementById("viewprojects").style.height =
  headings.offsetHeight + "px";

for (var i = 0; i < navbuttons.length; i++) {
  var navbutton = navbuttons[i];
  //var navbutton2 = navbuttons2[i];
  //navbutton2.setAttribute("onclick", "myClickFunction()");
  //navbutton.setAttribute("onclick", "myClickFunction()");
  /*navbutton.addEventListener("click", (event) => {
    navbutton.classList.add("clicked");
  });*/
}

burger.setAttribute("onclick", "myOpenFunction()");
homeli.setAttribute("onclick", "myHomeFunction()");

function myClickFunction() {
  document.getElementById("spacing").style.height = "500px";
}
function myOpenFunction() {
  if (document.querySelector(".clicked")) {
    htmlsec.classList.remove("clicked");
  } else {
    htmlsec.classList.add("clicked");
  }
}
function myHomeFunction() {
  /*htmlsec.removeAttribute("class");
  if (document.querySelector(".clicked")) {
    htmlsec.classList.remove("clicked");
  } else {
    htmlsec.classList.add("clicked");
  }
  htmlsec.classList.add("homeview");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  home.style.height = "100vh";*/
  window.location.reload();
}

var navlis = document.querySelectorAll("nav li");
var tilelinks = document.querySelectorAll(".tile a");

var a = document.getElementById("spacing").offsetWidth;
var x = +a;

//onscroll viewport behavior
(function () {
  var prevScrollpos = window.pageYOffset;

  //var scroll = document.getElementById("scroll");
  var projects = document.getElementById("viewprojects");
  var illustrations = document.getElementById("viewillustrations"); /*
  var section = document.querySelectorAll("section");
  var projectswrapper = document.querySelector("#projects .container");
  var projects = document.getElementsByClassName("project");
  var galleryview = document.getElementsByClassName("gallery-view");*/

  var navactive = document.querySelector("nav active");

  console.log("HEIGHT: " + tttiles.offsetHeight);
  a = document.getElementById("spacing").offsetWidth;

  function onScroll() {
    var currentScrollPos = window.pageYOffset;
    prevScrollpos = currentScrollPos;

    home.style.height = "15px";

    if (document.getElementsByClassName("projectview")[0]) {
      document.getElementById("spacing").style.minHeight =
        tttiles.offsetHeight + "px";
      document.getElementById("viewprojects").style.height =
        headings.offsetHeight + "px";
    }
    /*
    if (document.getElementsByClassName("projectview")[0]) {
      home.style.height = headings.offsetHeight + "px";
    }
    /*
    if (elementInViewport(projects)) {
      htmlsec.classList.add("scroll");
    }
*/
    if (elementInViewport(projects)) {
      htmlsec.classList.add("projectview");
    }

    if (elementInViewport(projects)) {
      htmlsec.classList.add("projectfix");
    } else {
      htmlsec.classList.remove("projectfix");
    }

    if (elementInViewport(illustrations)) {
      htmlsec.classList.add("illustrationview");
    } else {
      htmlsec.classList.remove("illustrationview");
    }

    if (window.location.href.includes("projects")) {
      htmlsec.classList.add("projselected");
    } else {
      htmlsec.classList.remove("projselected");
    }

    if (window.location.href.includes("illustrations")) {
      htmlsec.classList.add("illselected");
    } else {
      htmlsec.classList.remove("illselected");
    }

    for (var i = 0; i < navlis.length; i++) {
      var navli = navlis[i];
      if (elementInViewport(projects)) {
        navli.classList.remove("active");
        navlis[1].classList.add("active");
      }
      if (elementInViewport(illustrations)) {
        navli.classList.remove("active");
        navlis[2].classList.add("active");
      }
    }
  }

  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  }
  window.onscroll = onScroll;
})();
//END onscroll viewport behaviour

if (x < 500) {
  //mobile screens
  document.getElementById("spacing").style.height = "56vh";
}

for (var i = 0; i < navbuttons.length; i++) {
  var navli = navlis[i];
  navli.onclick = function () {
    if (x < 500) {
      document.getElementById("spacing").style.height = "56vh"; //mobile screens
    } else {
      document.getElementById("spacing").style.height = "480px";
    }
    /*if (document.getElementById("spacing").offsetWidth < "500") {
      document.getElementById("spacing").style.background = "red";
    }*/
    if (document.querySelector(".clicked")) {
      htmlsec.classList.remove("clicked");
    } else {
      htmlsec.classList.add("clicked");
    }
  };
}

for (var i = 0; i < tilelinks.length; i++) {
  var tilelink = tilelinks[i];
  if (x < 500) {
    document.getElementById("spacing").style.height = "56vh"; //mobile screens
  } else {
    document.getElementById("spacing").style.height = "480px";
  }
}

console.log("other height: " + x);
