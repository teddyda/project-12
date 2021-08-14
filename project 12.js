var1 ;

function preload(){
  pathiImg = loadImage("path.png");
  boyImg 
  loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")
}

function setup(){
createCanvas(400,400);

//moving background 
path=createSprie(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//create boy running
boy = createSprie(180,340,30,30);
boy.addAnimation("JakeRunning",boyImg);

//createing right boundary
leftBoundary = createSprie(0,0,100,800);
leftBoundary.visible = false; 

//creating right boundary
rightBoundary=createSprie(410,0,100,800);
rightBoundary.visible = false
}

function draw(){
  background(0);
  path.velocityY = 4;

  //boy moving on Xaxis with mouse
  boy.x = World.mouseX;

  edges=createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //code to reset the background 
  if(path.y > 400){
    path.y = height/2;
  }
  
  drawSprites();
}