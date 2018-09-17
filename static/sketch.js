var centerX = null
var centerY = null
var radius = 10
// var turn = (Math.sqrt(5)+1)/2
var turn = 0.4;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0, 0, 0)
	centerX = windowWidth/2
	centerY = windowHeight/2
	console.log("SPIRALLLSSS")
}

function drawSpiral(t){
	background(0)
	// stroke(255)
	fill(255)
	r = radius
	console.log(t)
	curX = 	centerX
	curY = centerY
	radius_increment = 1/t
	ang = 0
	while(r<=windowWidth/1.5){
		ellipse(curX, curY, 5, 5)
		ang += 2*Math.PI*t
		curX = centerX + r*Math.sin(ang)
		curY = centerY + r*Math.cos(ang)
		r += radius_increment
	}
}

function draw(){
	drawSpiral(turn)
	turn += 0.0001
}
