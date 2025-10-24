//back to top button behaviour
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var htmlsec = document.querySelector("html");
var navlis = document.querySelectorAll("nav li");
var home = document.getElementById("home");
var projects = document.querySelector("#projects .gallery");
var illustrations = document.querySelector("#illustrations .gallery");

for (var i = 0; i < navlis.length; i++) {
  var navli = navlis[i];
  navli.setAttribute("onclick", "myClickFunction()");
}

//onscroll viewport behavior
(function () {
  var prevScrollpos = window.pageYOffset;

  //var navactive = document.querySelector("nav active");

  function onScroll() {
    var currentScrollPos = window.pageYOffset;
    prevScrollpos = currentScrollPos;

    if (home) {
      if (!elementInViewport(home)) {
        htmlsec.classList.add("nothome");
      } else {
        htmlsec.classList.remove("nothome");
      }

      if (elementInViewport(projects)) {
        htmlsec.classList.add("projectview");
      } else {
        htmlsec.classList.remove("projectview");
      }

      if (elementInViewport(illustrations)) {
        htmlsec.classList.add("illustrationview");
      } else {
        htmlsec.classList.remove("illustrationview");
      }
    }

    for (var i = 0; i < navlis.length; i++) {
      var navli = navlis[i];

      if (home) {
        if (elementInViewport(home)) {
          navli.classList.remove("active");
          navlis[0].classList.add("active");
        }
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

var dialog = document.querySelectorAll("#home .dialog");
var dialogcancel = document.querySelectorAll("#home .dialog .cancel");

for (var i = 0; i < dialog.length; i++) {
  var dialogs = dialog[i];
  var dialogcancels = dialogcancel[i];

  dialogcancels.onclick = function () {
    this.parentElement.classList.add("close");
    if (dialog[1].classList.contains("close")) {
      htmlsec.classList.add("showsm");
    }
  };
}

function myClickFunction() {
  htmlsec.classList.remove("showsm");
  if (document.querySelector(".clicked")) {
    htmlsec.classList.remove("clicked");
  }

  dialog.forEach((element) => {
    element.classList.remove("close");
  });
}

function reAddFunction() {
  if (dialog[1].classList.contains("close")) {
    dialog[1].classList.remove("close");
    htmlsec.classList.remove("showsm");
  }
}

function navFunction() {
  if (htmlsec.classList.contains("clicked")) {
    htmlsec.classList.remove("clicked");
  } else {
    htmlsec.classList.add("clicked");
  }
}
