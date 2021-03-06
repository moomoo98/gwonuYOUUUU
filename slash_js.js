function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}
function draw() {
  background(255, 0, 0);
  randomSeed(0);
  strokeWeight(3);
  var x, y;
  var delta = map(mouseX, 0, windowWidth, 10, 100);
  for (y=0; y<windowHeight; y+=delta) {
    for (x=0; x<windowWidth; x+=delta) {
      var r = random(0, 1);
      if (r < 0.8) {
        line(x, y, x+delta, y+delta);
      } else {
        line(x+delta, y, x, y+delta);
      }
    }
  }
}
