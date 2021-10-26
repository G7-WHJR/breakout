var paddle,ball,points;
var edgeT,edgeR, edgeB,edgeL;

function setup() {
  createCanvas(450, 400);

  points = 0;

  //paddle sprite
  paddle = createSprite(280, 380, 100, 5);
  paddle.shapeColor = "black";

  bricks = new Group();

  //ball sprite
  ball = createSprite(150, 250, 15, 15);
  ball.shapeColor = "orange";

  //Top edge
  edgeT = createSprite(225, 0, 450, 5);
  edgeT.shapeColor = "gray";

  //Bottom edge
  edgeB = createSprite(225, 400, 450, 5);
  edgeB.shapeColor = "gray";

  //Left edge
  edgeL = createSprite(0, 200, 5, 400);
  edgeL.shapeColor = "gray";

  //Right edge
  edgeR = createSprite(450, 200, 5, 400);
  edgeR.shapeColor = "gray";

  //draw bricks
  function createBrickRow(y) {
    for (var x = 55; x < 400; x = x + 55) {
      var brick = createSprite(x, y, 50, 20);
      brick.shapeColor = "brown";
      bricks.add(brick);
    }
  }

  //Row 1 : y : 75
  createBrickRow(75);
  //Row 2 : y : 100
  createBrickRow(100);
  //Row 3 : y : 125
  createBrickRow(125);
}

function draw() {
  background("honeydew");

  text("Score : ", 360, 30);
  text(points, 400, 30);

  paddle.x = mouseX;

  if (mouseIsPressed) {
    ball.velocityX = 4; 
    ball.velocityY = 4; 
  }

  ball.bounceOff(edgeL);
  ball.bounceOff(edgeR);
  ball.bounceOff(edgeT);
  ball.bounceOff(paddle);

  ball.bounceOff(bricks, brickHit);

  //Game end condition
  if(ball.isTouching(edgeB)){
    ball.velocityX=0;
    ball.velocityY=0;
    paddle.remove();
    edgeB.shapeColor="red";
  }
  drawSprites();
}

function brickHit(ball,brick) {
  brick.remove();
  points++; //points = points + 1;
}
