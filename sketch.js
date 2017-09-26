function setup() { 
	createCanvas(windowWidth, windowHeight); 
	background(235,255,100);
}
function draw() {
	if (mouseIsPressed) {
		var size = random(20, 20);
		ellipse(mouseX, mouseY, size, size); 
	}
}