function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "blue"
  rect1.debug = true
  rect2 = createSprite(200, 300, 20, 20);
  rect2.debug = true
}

function draw() {
  background(255,255,255);  
  rect1.x = World.mouseX
  rect1.y = World.mouseY
  text(rect1.width/2+rect2.width/2, 400, 200);
  text(rect1.x-rect2.x, 300, 200)
  if(rect1.x-rect2.x <= rect1.width/2+rect2.width/2 && rect1.y-rect2.y <= rect1.height/2+rect2.height &&
    rect2.x-rect1.x <= rect1.width/2+rect2.width/2 && rect2.y-rect1.y <= rect1.height/2+rect2.height/2){
   rect1.shapeColor = "green"
   rect2.shpecolor = "green"
  } else {
    rect1.shapeColor = "blue"
    rect2.shapeColor = "blue"
  }

  drawSprites();
}