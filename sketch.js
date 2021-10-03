let x = 450;
let y = 225;
let extraCanvas;
let r, g, b, size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();
  background(0);
  noStroke();
}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  size = random(20);
  opacity = random(255)
  fill(r, g, b, opacity);
  x = random(width);
  y = random(height);
  ellipse(x, y, size);

  image(extraCanvas, 0, 0);
  fill(242, 237, 0, 150);
  ellipse(1100, 400, 200);
}
