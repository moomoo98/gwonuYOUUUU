function setup() { 
	createCanvas(windowWidth, windowHeight); 
	background(235,255,190);
}
function draw() {
	if (mouseIsPressed) {
		var sizeX = random(0, windowWidth);
		var sizeY = random(0, windowHeight);
		fill(0,0,255);
		line(mouseX, mouseY, sizeX, sizeY); 
	}
}
