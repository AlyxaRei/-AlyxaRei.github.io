let ballX = 300;
let ballY = 200;

let ballSize = 50;

let speedX = 3;
let speedY = 2;

let directionX = 1;
let directionY = 1;

let isPaused = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240, 245, 255);

  if (isPaused === false) {
    speedX = map(mouseX, 0, width, 1, 8);
    speedY = map(mouseY, 0, height, 1, 8);

    ballX = ballX + speedX * directionX;
    ballY = ballY + speedY * directionY;

    if (ballX + ballSize / 2 >= width) {
      ballX = width - ballSize / 2;
      directionX = -1;
    }

    if (ballX - ballSize / 2 <= 0) {
      ballX = ballSize / 2;
      directionX = 1;
    }

    if (ballY + ballSize / 2 >= height) {
      ballY = height - ballSize / 2;
      directionY = -1;
    }

    if (ballY - ballSize / 2 <= 0) {
      ballY = ballSize / 2;
      directionY = 1;
    }
  }

  noStroke();
  fill(100, 150, 255);
  circle(ballX, ballY, ballSize);

  fill(30);
  textSize(14);
  textAlign(CENTER);
  text("MOVE MOUSE TO CONTROL BALL SPEED", width / 2, 25);
  text("CLICK CANVAS TO PAUSE / RESUME", width / 2, 45);

  if (isPaused === true) {
    textSize(20);
    text("PAUSED", width / 2, height - 25);
  }
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    isPaused = !isPaused;
  }
}
