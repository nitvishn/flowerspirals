var centerX = null
var centerY = null
var radius = 10
var image;

var turn = 0.4;
var incrValue = 0;

var actualWidth = null;
var actualHeight = null;
var hidden = false;
var paneLength = 200;
var canvas = null;
var backgroundColor = null;
var turnInput = null;
var incrInput = null;
var submitButton = null;
var inputting = false;

// function preLoad(){
// 	image = loadImage('flower1.jpg');
// }

function setup() {
	backgroundColor = color(0);
	fill(255);
	stroke(0);

	actualWidth = windowWidth;
	actualHeight = windowHeight;
	canvas = createCanvas(actualWidth, actualHeight);
	background(backgroundColor)
	centerX = actualWidth / 2
	centerY = actualHeight / 2

	hideButton = createButton('Toggle Controls')
	hideButton.position(0, 0)
	hideButton.mousePressed(toggleHide)

	turnInput = createInput('Turn Value')
	turnInput.position(0, 60)
	turnInput.mousePressed(setInputtingToTrue)

	incrInput = createInput('Increment Value')
	incrInput.position(0, 120)
	incrInput.mousePressed(setInputtingToTrue)

	submitButton = createButton('Reload with Changes')
	submitButton.position(0, 180)
	submitButton.mousePressed(updateParameters)
}

function updateParameters() {
	turn = Number(turnInput.value())
	incrValue = Number(incrInput.value())
	inputting = false;
}

function setInputtingToTrue() {
	inputting = true;
	console.log("inputting...")
}

function toggleHide() {
	if (hidden) {
		turnInput.show()
		incrInput.show()
		submitButton.show()
		// resizeCanvas(actualWidth, actualHeight)
		// centerX = canvas.width/2
		// background(backgroundColor)
		hidden = false;
	} else {
		turnInput.hide()
		incrInput.hide()
		submitButton.hide()
		// resizeCanvas(actualWidth + paneLength, actualHeight)
		// centerX = canvas.width/2
		// background(backgroundColor)
		hidden = true;
	}
}

function drawSpiral(t) {
	background(backgroundColor)
	r = radius
	curX = centerX
	curY = centerY
	radius_increment = 1 / t
	ang = 0
	while (r <= windowWidth / 1.5) {
		ellipse(curX, curY, 5, 5)
		ang += 2 * Math.PI * t
		curX = centerX + r * Math.sin(ang)
		curY = centerY + r * Math.cos(ang)
		r += radius_increment
	}
}

function drawText() {
	text("Turn Value: ", 10, turnInput.y - 10)
	text("Increment by: ", 10, incrInput.y - 10)
	console.log("Drawing text.")
}

function draw() {
	if (!hidden) {
		drawText()
	}
	if (!inputting) {
		turnInput.value(turn)
		incrInput.value(incrValue)
	}
	drawSpiral(turn)
	turn += incrValue
}
