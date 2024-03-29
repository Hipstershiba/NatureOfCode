let brush;

function setup() {
  createCanvas(800, 800);
  brush = new Brush(150, 5);
  noStroke();
  fill(0);
  background(220);
}

function draw() {
  if (mouseIsPressed) {
    brush.paint();
  }
}

function keyPressed() {
  if (key === 'r') {
    background(220);
  }
}