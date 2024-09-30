function zig(x, y, w, a) {
  push();
  translate(x + w / 2, y + w / 2);
  rotate(radians(a));
  translate(-w / 2, -w / 2);

  fill(255, 300, 23);
  stroke(255, 300, 23);
  triangle(w, 0, w, w, w / 2, w / 2);

  fill(0);
  stroke(0);
  triangle(0, w, 0, 0, w / 2, w / 2);

  fill(32, 200, 21);
  stroke(32, 200, 21);
  triangle(0, w, w, w / 2, x + w / 2, w);

  fill(23, 21, 222);
  stroke(23, 21, 222);
  triangle(w, 0, 0, 0, w / 2, w / 2);

  pop();
}

function setup() {
  let canvasDim = min(windowWidth, windowHeight);
  createCanvas(canvasDim, canvasDim);
  noLoop();
}
let margin = 25;
let sqPerRow = 8;
let sqPerCol = 8;

function draw() {
  background(220, 3, 20);

  let rowWidth = width - 2 * margin;
  let colHeight = height - 2 * margin;

  let sqWidth = rowWidth / sqPerRow;
  let sqHeight = colHeight / sqPerCol;

  for (let col = 0; col < sqPerRow; col += 1) {
    let xPos = col * sqWidth + margin;

    for (let row = 0; row < sqPerCol; row += 1) {
      let yPos = row * sqHeight + margin;
      let angleDeg = 0;

      if (col % 2 == row % 2) {
        angleDeg = 225;
      } else {
        angleDeg = 45;
      }

      zig(xPos, yPos, sqWidth, angleDeg);
    }
  }
}

