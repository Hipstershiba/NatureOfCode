let brush;

function setup() {
  createCanvas(800, 800);
  brush = new Brush(100, 10);
  noStroke();
  fill(0);
  background(220);
}

function draw() {
  background(220, 25);
  if (mouseIsPressed) {
    brush.paint();
  }
}

function keyPressed() {
  if (key === 'r') {
    background(220);
  }
}