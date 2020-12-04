var bananaImage;
var obstacleImage;
var obstacleGroup;
var backGround;
var score = 0;
var monkeyRunning
var backImage;
var ground;
var banana;
var obstacle;
var bananaGroup;

function preload(){
  monkeyRunning = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  backImage = loadImage("jungle.jpg");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);

  
  backGround = createSprite(200,200,10,10);
  backGround.addImage("jungle",backImage);
  backGround.velocityX = -5;
  backGround.x = background.width/2;
  
  ground = createSprite(200,250,400,10);
  ground.visible = false;
    
  monkey = createSprite(70,240,10,10);
  monkey.addAnimation("run",monkeyRunning);
  monkey.scale = 0.09;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();

}

function draw() {
  background(220);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,350,50);
  
  if(keyDown("space")&&monkey.y>=150){
    monkey.velocityY = -10;
  }
  
  if(bananaGroup.isTouching(monkey)){
    score = score+2;
    bananaGroup.destroyEach();
  }
  
  if(obstacleGroup.isTouching(monkey)){
    score = 0;
    obstacleGroup.destroyEach;
    monkey.scale = 0.09;
  }
  
  spawnBanana();
  spawnObstacles();
  drawSprites();
}

function spawnBanana(){
  if(World.frameCount%200===0){
    banana = createSprite(390,240,10,10);
    banana.addImage("bananaPicture",bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -2;
    
    bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if(World.frameCount%60===0){
    obstacle = createSprite(380,240,10,10);
    obstacle.addImage("obstaclePicture",obstacleImage);
    obstacle.scale = 0.05;
    obstacle.velocityX = -3;
    
    obstacleGroup.add(obstacle);
  }
}