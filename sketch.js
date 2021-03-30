
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  background("white");
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("mov",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX= -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  banana = createSprite(200,200,20,20);
  banana.addImage("e", bananaImage);
  
}


function draw() {
  background("white");
if(ground.x  < 0 ){
ground.x = 200  
}
  stroke("white");
  textSize(20);
  fill("white")
  text("score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time: "+ survivalTime,100,50)
 monkey.display(); 
  ground.display();
}

if(frameCount % 80 === 0){
  
  
  
  
}




