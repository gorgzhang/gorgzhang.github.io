var night = 0;
var width = $(document).width();
var height = $(document).height();

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

function moveDirection(id, direction, endPercent, offsetSize, duration) {
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

function move(id, direction, startPercent, endPercent, duration, offsetSize) {
	start = getStartingLocation(direction);
	$(id).css(start, startPercent * offsetSize * 10);
	moveDirection(id, direction, endPercent, width, duration);
	$(id).css("opacity", 1);
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

function moveUp(id, endPercent, offsetSize, duration) {
	$(id).animate(
	  {
	    bottom: endPercent * offsetSize
	  },
	  duration
	);
}

function moveDown(id, endPercent, offsetSize, duration) {
	$(id).animate(
	  {
	    top: endPercent * offsetSize
	  },
	  duration
	);
}

function reset() {
	$("#night-on").css("opacity", 0);
	$("#night-off").css("opacity", 0);
	$(".text").css("opacity", 0);
	$(".ver-line").css("opacity", 0);
	$(".hor-line").css("opacity", 0);
}

function nightMode() {
	$(".text").css("color", "white");
	$("#my-name").css("color", "white");
	$(".ver-line").css("background-color", "white");
	$(".hor-line").css("background-color", "white");
	$(".box").animate({backgroundColor: "black"}, 1500);
}

function dayMode() {
	$(".text").css("color", "black");
	$("#my-name").css("color", "black");
	$(".ver-line").css("background-color", "black");
	$(".hor-line").css("background-color", "black");
	$(".box").animate({backgroundColor: "white"}, 1500);
}

function swapMode() {
	reset();

	if (night == 0) {
		// Turn on Night Mode
		document.getElementById("night-off").onclick = null;
		$("#night-off").css("z-index", -1);
		window.setTimeout(function () {
			$("#night-on").animate({opacity: 1}, 1500);
			$("#night-on").css("z-index", 1);
		}, 3000);

		window.setTimeout(function () {document.getElementById("night-on").onclick = swapMode;}, 4550);
		nightMode();
	} else {
		// Turn on Day Mode
		document.getElementById("night-on").onclick = null;
		$("#night-on").css("z-index", -1);
		window.setTimeout(function () {
			$("#night-off").animate({opacity: 1}, 1500);
			$("#night-off").css("z-index", 1);
		}, 3000);

		window.setTimeout(function () {document.getElementById("night-off").onclick = swapMode;}, 4550);
		dayMode();
	}

	night = 1 - night;
	loadLines();
}

function loadLines() {
	reset();

	// Make text disappear while loading lines
	window.setTimeout(function () {
		$(".text").animate({opacity: 1}, 1500);
	}, 3000);


	// Vertical Lines
	window.setTimeout(function () {move("#box1-line", "down", -.1, 0, 1500, height);} ,1000);
	window.setTimeout(function () {move("#box2-line", "up", -.1, 0, 1500, height);} , 0);
	window.setTimeout(function () {move("#box3-line", "down", -.1, 0, 1500, height);} ,500);

	// Horizonatal Lines
	window.setTimeout(function () {move("#about-line", "right", -.1, 0, 1500, width * .25);} ,1250);
	window.setTimeout(function () {move("#links-line", "right", -.1, 0, 1500, width * .215);} ,1000);
	window.setTimeout(function () {move("#more-links-line-left", "left", -.1, 0, 1500, width * .25);} ,1500);
	window.setTimeout(function () {move("#more-links-line-right", "right", -.1, 0, 1500, width * .25);} ,1500);
	window.setTimeout(function () {move("#contact-line", "left", -.1, 0, 1500, width * .25);} , 2000);
}

function loadNightBoxes() {
	var boxLength = width * .25 * .07;
	$("#night-on").css("width", boxLength);
	$("#night-on").css("height", boxLength);
	$("#night-off").css("width", boxLength);
	$("#night-off").css("height", boxLength);
}

function onLoad() {
	loadLines();
	loadNightBoxes();

	window.setTimeout(function () {
		$("#night-off").animate({opacity: 1}, 1500);
	}, 3000);
	window.setTimeout(function () {document.getElementById("night-off").onclick = swapMode;}, 4550);
}

onLoad();




