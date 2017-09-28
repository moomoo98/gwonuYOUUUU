var cx = []; 
var cy = []; 
var N, i;

function setup() { 
	createCanvas(windowWidth, windowHeight);
	N = 10;
	for (i=0; i<N; i++) {
		cx[i] = random(0, width);
	cy[i] = random(0, height); 
	}
}

function draw() { 
	background(255,0,0); 
	noFill(); 
	stroke(0, 50);

	for (i=0; i<N; i++) {
		cx[i] + random(-10, 10); 
		cy[i] + random(-10, 10);
		ellipse(cx[i], cy[i], 80, 80); 
	}
}
