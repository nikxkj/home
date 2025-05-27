var clrs = document.querySelectorAll(".colours span");
for (var i = 0; i < clrs.length; i++) {
  var bkg = clrs[i];
  var hex = bkg.innerHTML;
  bkg.style.backgroundColor = hex;
}
