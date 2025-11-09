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

/*
for (var i = 0; i < navlis.length; i++) {
  var navli = navlis[i];
  navli.setAttribute("onclick", "reAddFunction()");
}
*/

htmlsec.classList.add("home");

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
        if (document.getElementsByClassName("home")) {
          htmlsec.classList.remove("home");
        }
      } else {
        htmlsec.classList.remove("nothome");
        htmlsec.classList.add("home");
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

//home button function - burger behaviour and dialog popup reset
function myClickFunction() {
  if (document.querySelector(".clicked")) {
    htmlsec.classList.remove("clicked");
  }

  dialog.forEach((element) => {
    element.classList.remove("close");
  });

  navlis.forEach((element) => {
    element.classList.remove("shownav");
  });
}
//END home button function - burger behaviour and dialog popup reset

function reAddFunction() {
  if (document.getElementsByClassName("shownav")) {
    this.classList.remove("shownav");
  }
}
/*
let allnavs = document.querySelectorAll("nav li");

// For each button, register an event listener
allnavs.forEach(function (elem) {
  elem.addEventListener("click", function (e) {
    // Add or remove the class on clicked one
    e.target.classList.remove("shownav");
  });
});
*/

let allnavs = document.querySelectorAll("nav li");
let alldialogs = document.querySelectorAll("#home .dialog .cancel");
for (var i = 0; i < dialog.length; i++) {
  var dialoglist = dialog[i];
  var navlist = allnavs[i];
  dialoglist.setAttribute("data-index", i);
  navlist.setAttribute("data-index", i);

  var shownav = document.querySelectorAll("nav .shownav");

  allnavs.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      // Add or remove the class on clicked one
      if (document.querySelector(".clicked")) {
        htmlsec.classList.remove("clicked");
      }
      e.target.classList.remove("shownav");
      var navtesting = this.getAttribute("data-index");
      console.log("the navi value is: " + navtesting);
      dialog[navtesting].classList.remove("close");
      if (navtesting == "3") {
        //this.style.transform = "scale(0)";
        navlis[3].classList.remove("shownav");
      }
    });
  });

  alldialogs.forEach(function (elem2) {
    elem2.addEventListener("click", function (e2) {
      var testing = this.closest(".dialog").getAttribute("data-index");
      this.parentElement.classList.add("close");
      navlis[testing].classList.add("shownav");
    });
  });
}

function navFunction() {
  if (htmlsec.classList.contains("clicked")) {
    htmlsec.classList.remove("clicked");
  } else {
    htmlsec.classList.add("clicked");
  }
}

var classcheck = document.querySelectorAll(".wrapper > h2");
if (classcheck.length > 0) {
  htmlsec.classList.remove("home");
  htmlsec.classList.add("casestudy");
} else {
  console.log("this is NOT a case study page");
}
