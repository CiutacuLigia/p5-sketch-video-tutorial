function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(124, 220, 130);
  circle(200, 200, 100);
  stroke('blue');
  strokeWeight(10);
  point(180, 175);
  point(215, 175);
  arc(200, 225, 60, 60, PI, TWO_PI);
}
