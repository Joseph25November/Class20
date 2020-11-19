var movingRect;
var fixedRect;

function setup() {

  createCanvas(800,400);
  movingRect = createSprite(200,100,80,50);
  fixedRect = createSprite(300,100,50,80);

  movingRect.shapeColor = ("blue");
  fixedRect.shapeColor = ("blue");
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor = ("red");
    movingRect.shapeColor = ("red");
  }
 else{
  fixedRect.shapeColor = ("blue");
  movingRect.shapeColor = ("blue");
 }
 drawSprites();
}