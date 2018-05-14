var width = $(document).width();

// return to original position
function goRight() {
  $("#plane").css("left", width * 0.7);
  // $("#plane").animate(
  //   {
  //     left: width
  //   },
  //   2000
  // );
}

// go left and then run go right
function goLeft() {
  $("#plane").animate(
    {
      left: -(width * 0.8)
    },
    7000,
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
  setTimeout(fadeBack, 7200);
}

function fadeBack() {
  unfade(document.getElementById("vroom"));
  setTimeout(function() {
    document.getElementById("vroom").disabled = false;
  }, 100);
}

document.getElementById("vroom").onclick = move;

$("#plane").css("left", width * 0.7);
// $("#plane").animate(
//   {
//     left: width * 0.01
//   },
//   2600
// );
