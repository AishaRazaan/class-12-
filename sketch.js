var garden,rabbit;
var gardenImg,rabbitImg;
var Apple,appleImg;
var Leaf,leafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApple()
  spawnLeaf()

  drawSprites();

  rabbit.x = World.mouseX

  function spawnApple(){
    if(frameCount%80==0){ 
  Apple = createSprite(random(50,350),40,20,20);
  Apple.addImage("red",appleImg);
  Apple.velocityY=2;
  Apple.scale=0.07
  }
  }
  function spawnLeaf(){
    if(frameCount%100==0){ 
  Leaf = createSprite(random(50,350),40,20,20);
  Leaf.addImage("fall",leafImg);
  Leaf.velocityY=2
  Leaf.scale=0.07;
  } 
}

}