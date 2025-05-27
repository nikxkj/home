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
