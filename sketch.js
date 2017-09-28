function setup() { 
	createCanvas(windowWidth, windowHeight); 
	background(235,255,190);
}
function draw() {
	if (mouseIsPressed) {
		var size = random(20, 30);
		ellipse(mouseX, mouseY, size, size); 
	}
}
