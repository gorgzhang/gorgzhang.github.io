// Animations for draft with large black box at the top of the screen

var night = 0;
var width = $(document).width();
var height = $(document).height();
var scale = 200;
var currentZ = 1;

var linkedin = "#0077B5";
var spotify = "#1DB954";
var github = "#767676";
var lastfm = "#D51007";
var one = "#f4dc42";
var two = "#ffbf49";
var three = "#008930";
var four = "#75a9ff";
var five = "#aa2fa2";

function setColors() {
	$("#linkedin").css("color", linkedin);
	$("#spotify").css("color", spotify);
	$("#github").css("color", github);
	$("#lastfm").css("color", lastfm);
	$("#1").css("color", one);
	$("#2").css("color", two);
	$("#3").css("color", three);
	$("#4").css("color", four);
	$("#5").css("color", five);
}

function getColor(id) {
	if (id == "#linkedin") {
		return linkedin;
	} else if (id == "#spotify") {
		return spotify;
	} else if (id == "#github") {
		return github;
	} else if (id == "#lastfm") {
		return lastfm;
	} else if (id == "#1") {
		return one;
	} else if (id == "#2") {
		return two;
	} else if (id == "#3") {
		return three;
	} else if (id == "#4") {
		return four;
	} else if (id == "#5") {
		return five;
	} else {
		console.log("Id color error");
	}
}

function getStartingLocation(direction) {
	if (direction == "left") {
		start = "right";
	} else if (direction == "right") {
		start = "left";
	} else if (direction == "up") {
		start = "bottom";
	} else if (direction == "down") {
		start = "top";
	} else {
		console.log("direction error");
	}
	return start;
}

function moveInDirection(id, direction, endPercent, offsetSize, duration) {
	if (direction == "left") {
		moveLeft(id, endPercent, offsetSize, duration);
	} else if (direction == "right") {
		moveRight(id, endPercent, offsetSize, duration);
	} else if (direction == "up") {
		moveUp(id, endPercent, offsetSize, duration);
	} else if (direction == "down") {
		moveDown(id, endPercent, offsetSize, duration);
	} else {
		console.log("direction error");
	}
}

function moveRight(id, endPercent, offsetSize, duration) {
	$(id).animate(
	  {
	    left: endPercent * offsetSize
	  },
	  duration
	);
}

function moveLeft(id, endPercent, offsetSize, duration) {
	$(id).animate(
	  {
	    right: endPercent * offsetSize
	  },
	  duration
	);
}

function move(id, direction, startPercent, endPercent, duration, offsetSize) {
	start = getStartingLocation(direction);
	$(id).css(start, startPercent * offsetSize);
	$(id).css("opacity", 1);
	moveInDirection(id, direction, endPercent, offsetSize, duration);
}

function incrementZ(id) {
	var z = $(id).css("z-index");
	console.log("Z is ", z);
	if (z < currentZ) {
		$(id).css("z-index", currentZ + 1);
		currentZ += 1;
	}	
}

function moveColorBox(id, color, duration) {
	$(id).off("mouseenter");
	var boxId = id + "-box";
	$(boxId).css("background-color", color);
	incrementZ(boxId);
	move(boxId, "right", -1, 0, duration, width);
	window.setTimeout(function() {
		$(id).mouseenter(function() {moveColorBox(id, getColor(id), scale * 6);});
	}, duration + 50);
}


function turnOnHover() {
	$("#linkedin").mouseenter(function() {moveColorBox("#linkedin", linkedin, scale * 6);});
	$("#github").mouseenter(function() {moveColorBox("#github", github, scale * 6);});
	$("#spotify").mouseenter(function() {moveColorBox("#spotify", spotify, scale * 6);});
	$("#lastfm").mouseenter(function() {moveColorBox("#lastfm", lastfm, scale * 6);});
	$("#1").mouseenter(function() {moveColorBox("#1", one, scale * 6);});
	$("#2").mouseenter(function() {moveColorBox("#2", two, scale * 6);});
	$("#3").mouseenter(function() {moveColorBox("#3", three, scale * 6);});
	$("#4").mouseenter(function() {moveColorBox("#4", four, scale * 6);});
	$("#5").mouseenter(function() {moveColorBox("#5", five, scale * 6);});
}

setColors();
move("#black-box", "right", -1, 0, scale * 6, width);
turnOnHover();














