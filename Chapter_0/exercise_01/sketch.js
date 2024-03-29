let binho;

function setup() {
  createCanvas(windowHeight, windowHeight);
  binho = new Walker(width / 2, height / 2);
}

function draw() {
  background(0, 25);
  binho.step();
  binho.show();
}
