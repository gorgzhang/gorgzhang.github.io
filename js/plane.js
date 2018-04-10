var width = $(document).width();

// return to original position
function goRight() {
  $("#plane").css("left", "+=" + (width * 1.3).toString());
  $("#plane").animate(
    {
      left: width * 0.66
    },
    2000
  );
}

// go left and then run go right
function goLeft() {
  $("#plane").animate(
    {
      left: -600
    },
    5000,
    function() {
      setTimeout(goRight, 50);
    }
  );
  //setTimeout(goRight, 50);
}

function move(e) {
  dis();
  setTimeout(goLeft, 50);
}

// disable button
function dis() {
  document.getElementById("vroom").disabled = true;
  setTimeout(function() {
    document.getElementById("vroom").disabled = false;
  }, 7500);
}

document.getElementById("vroom").onclick = move;

$("#plane").css("left", "+=" + (width * 0.3).toString());
$("#plane").animate(
  {
    left: width * 0.66
  },
  2600
);
