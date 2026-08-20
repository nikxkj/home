var htmlsection = document.querySelector("html");
var projects = document.querySelector("#projects");
var illustrations = document.querySelector("#illustrations .container");
var contact = document.querySelector("#contact .container");
var htmlsection = document.querySelector("html");
var dialogboxes = document.querySelectorAll(".intro .dialog");
var dialogcancel = document.querySelectorAll(".intro .dialog .cancel");
var dialogmin = document.querySelectorAll(".intro .dialog .min");
var dialogmax = document.querySelectorAll(".intro .dialog .max");
var galleryframes = document.querySelectorAll("#portfolio .frame");
var descriptions = document.querySelectorAll(
  "#portfolio .description-wrapper .description",
);

var barmain = document.querySelector(".bar.main");
var illframes = document.querySelectorAll("#illustrations .container .frame");

var navitems = document.querySelectorAll("nav .navlink");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//START dialog min max close script
for (var i = 0; i < dialogboxes.length; i++) {
  var dialogs = dialogboxes[i];
  var dialogcancels = dialogcancel[i];
  var dialogmins = dialogmin[i];
  var dialogmaxs = dialogmax[i];
  var fordialog = document.querySelectorAll("section .intro");
  dialogboxes[i].setAttribute("data-index", i);
  navitems[i].setAttribute("data-index", i);

  var navitem = navitems[i];
  navitem.setAttribute("onclick", "reAddFunction()"); //automatically adds the onclick attribute bc i cant be arsed to do it manually

  //when nav item is clicked the dialog box should reappear
  navitem.onclick = function () {
    if (this.classList.contains("shownav")) {
      navitemnumber = this.getAttribute("data-index");
      if (dialogboxes[navitemnumber].classList.contains("close")) {
        dialogboxes[navitemnumber].classList.remove("close");
        this.classList.remove("shownav");
      }
      if (dialogboxes[navitemnumber].classList.contains("minimize")) {
        dialogboxes[navitemnumber].classList.remove("minimize");
        this.classList.remove("shownav");
      }
    }
  };

  //when clicked the dialog box will get a shownav class
  dialogcancels.onclick = function () {
    var dialogboxattr =
      this.parentElement.parentElement.getAttribute("data-index");

    if (this.parentElement.parentElement.classList.contains("close")) {
      this.parentElement.parentElement.classList.remove("close");
      navitems[dialogboxattr].classList.remove("shownav");
    } else {
      this.parentElement.parentElement.classList.add("close");
      navitems[dialogboxattr].classList.add("shownav"); //onclick adds class to menu item so it can show up
    }
  };

  dialogmins.onclick = function () {
    var dialogboxattr =
      this.parentElement.parentElement.getAttribute("data-index");

    if (this.parentElement.parentElement.classList.contains("minimize")) {
      this.parentElement.parentElement.classList.remove("minimize");
      navitems[dialogboxattr].classList.remove("shownav");
    } else {
      this.parentElement.parentElement.classList.add("minimize");
      navitems[dialogboxattr].classList.add("shownav");
    }
  };
}
//END dialog min max close script

//START onscroll behaviour
(function () {
  var prevScrollpos = window.pageYOffset;

  function onScroll() {
    var currentScrollPos = window.pageYOffset;
    prevScrollpos = currentScrollPos;

    if (!document.getElementById("projectoverview")) {
      var projectcheck = document.querySelectorAll("#projects .frame.active");
      var descriptioncheck = document.querySelectorAll(
        "#projects .description.active",
      );

      if (elementInViewport(document.getElementById("portfolio"))) {
        htmlsection.classList.add("projectview");
      } else {
        htmlsection.classList.remove("projectview");
      }

      if (elementInViewport(illustrations)) {
        htmlsection.classList.add("illustrationview");
        if (
          elementInViewport(illframes[4]) ||
          elementInViewport(illframes[illframes.length - 1])
        ) {
          setTimeout(htmlsection.classList.add("testing"), 1500);
        } else {
          htmlsection.classList.remove("testing");
        }
      } else {
        htmlsection.classList.remove("illustrationview");
      }

      if (elementInViewport(document.getElementById("contact"))) {
        htmlsection.classList.add("contactview");
      } else {
        htmlsection.classList.remove("contactview");
      }
    }

    /*
    if (
      elementInViewport(projects) ||
      elementInViewport(illustrations) ||
      elementInViewport(contact)
    ) {
      htmlsection.classList.add("nothome");
    } else {
      htmlsection.classList.remove("nothome");
    }
    */
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

//adds id name to project onload and adds 'active' class to project when project is in viewport
var list = [];
for (var i = 0; i < galleryframes.length; i++) {
  var projs = galleryframes[i];

  list.push("div" + i);

  var listindex = list.length;

  if (listindex > 0) {
    projs.setAttribute("id", "div" + i);
  }
}

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("active", entry.isIntersecting);
  });
};
let observer = new IntersectionObserver(callback, {
  threshold: [0.5], // If 50% of the element is in the screen, we count it!
});

list.forEach((d) => {
  const div = document.getElementById(d);
  if (div) observer.observe(div);
});
