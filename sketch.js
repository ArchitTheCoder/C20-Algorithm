var fixedRectangle, movingRectangle;



function setup() {
  createCanvas(800,800);

  
  fixedRectangle = createSprite(300,300,80,40);
  fixedRectangle.shapeColor = "blue";
  //fixedRectangle.velocityY = 4;
  fixedRectangle.velocityX = 4;
  movingRectangle = createSprite(500,300,80,40);
  movingRectangle.shapeColor = "green";
  //movingRectangle.velocityY = -4;
  movingRectangle.velocityX = -4;
}

function draw() {
  background(0);  

  //movingRectangle.y = mouseY;
  //movingRectangle.x = mouseX;

  if (movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2
    && fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2
    && movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2
    && fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2) {
    fixedRectangle.shapeColor = "white";
    movingRectangle.shapeColor = "white";
  } else {
    movingRectangle.shapeColor = "green";
    fixedRectangle.shapeColor = "blue";
  }

  /*if (movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2
    && fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2) {
      movingRectangle.velocityY = 4;
      fixedRectangle.velocityY = -4;
    }*/

  if (movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2
    && fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2) {
      movingRectangle.velocityX = 4;
      fixedRectangle.velocityX = -4;
    }
 
  drawSprites();
}

