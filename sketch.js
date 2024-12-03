
// Position variables
let circlePositionX = 200;
let circlePositionY = 200;

// Speed variables
let circleSpeedX = 2;
let circleSpeedY = 3;

// Radius variable
let circleRadius = 25;

// Hue variable
let circleHue = 0;

// Variables for badges and favorable ratio
let favorableRatio = 0;
let badgesEarned = 0;

function setup() {
  let canvas = createCanvas(windowWidth, 400);
  canvas.parent("wrap-it-up-feature");
  background(255);
  ellipseMode(RADIUS);
  noStroke();
  fill(128);
  rect(0, 0, 100, height); // Static rectangles
  rect(width - 100, 0, 100, height); // Static rectangles
  colorMode(HSB);
  strokeWeight(4);
}

function draw() {
  stroke(circleHue, 80, 90);
  fill(circlePositionX >= 100 && circlePositionX <= width - 100 ? 0 : 255);
  circle(circlePositionX, circlePositionY, circleRadius);

  if (mouseIsPressed) {
    circlePositionX += circleSpeedX;
    circlePositionY += circleSpeedY;
    circleHue = (circleHue + 1) % 360;

    if (circlePositionX > width / 2) {
      favorableRatio += 0.01;
      if (favorableRatio >= badgesEarned + 1) {
        badgesEarned++;
      }
    }
  }

  if (circlePositionX < circleRadius || circlePositionX > width - circleRadius) {
    circleSpeedX = -circleSpeedX;
  }
  if (circlePositionY < circleRadius || circlePositionY > height - circleRadius) {
    circleSpeedY = -circleSpeedY;
  }

  fill(0);
  noStroke();
  textSize(16);
  textAlign(LEFT, TOP);
  text(`Favorable Ratio: ${favorableRatio.toFixed(2)}`, 10, 10);
  text(`Badges Earned: ${badgesEarned}`, 10, 30);
}
