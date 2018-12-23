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
	$(id).css("opacity", 1);
	moveDirection(id, direction, endPercent, width, duration);
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
