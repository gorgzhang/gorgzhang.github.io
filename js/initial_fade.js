$("#top").fadeIn(2000);
$("#bottom").fadeIn(4000);
$("#contact").fadeIn(2000);

function unfade(element) {
  var op = 0.01; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function() {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 50);
}

unfade(document.getElementById("vroom"));
