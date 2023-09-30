let cDiam = 25;

let xOffset = 50;
let xSpacing = 100;

let yOffset = 50;
let ySpacing = 100;

let c2Diam = 10;

let x2Offset = 50;
let x2Spacing = 50;

let y2Offset = 50;
let y2Spacing = 50;

let c3Diam = 25;

let x3Offset = 100;
let x3Spacing = 100;

let y3Offset = 100;
let y3Spacing = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(234, 215, 0)

  fill(0)

  for (let xPos = xOffset; xPos <= width - xOffset; xPos += xSpacing) {
    for (let yPos = yOffset; yPos <= height - yOffset; yPos += ySpacing) {
      ellipse(xPos, yPos, cDiam);
    }
  }

  for (let x2Pos = x2Offset; x2Pos <= width - x2Offset; x2Pos += x2Spacing) {
    for (let y2Pos = y2Offset; y2Pos <= height - y2Offset; y2Pos += y2Spacing) {
      ellipse(x2Pos, y2Pos, c2Diam);
    }
  }

  for (let x3Pos = x3Offset; x3Pos <= width - x3Offset+50; x3Pos += x3Spacing) {
    for (let y3Pos = y3Offset; y3Pos <= height - y3Offset; y3Pos += y3Spacing) {
      ellipse(x3Pos, y3Pos, c3Diam);
    }
  }
}



//professor Thiago's solution

let diamSmall = 10;
let diamLarge = 3 * diamSmall;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("gold");
  stroke(0);

  fill(0);
  for (let x = 0; x < width; x += 5 * diamSmall) {
    for (let y = 0; y < height; y += 5 * diamSmall) {
      ellipse(x, y, diamSmall, diamSmall);
    }
  }

  for (let x = 0; x < width; x += 2 * 5 * diamSmall) {
    for (let y = 0; y < height; y += 2 * 5 * diamSmall) {
      ellipse(x, y, diamLarge, diamLarge);
    }
  }

  translate(5 * diamSmall, 5 * diamSmall);
  for (let x = 0; x < width; x += 2 * 5 * diamSmall) {
    for (let y = 0; y < height; y += 2 * 5 * diamSmall) {
      ellipse(x, y, diamLarge, diamLarge);
    }
  }
}