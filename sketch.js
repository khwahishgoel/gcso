var car,wall;
var speed,width;
var deformation;
function setup() {
  createCanvas(1600,400);
  
  speed=random(20,40)
  weight=random(400,1500)
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2)
  car.velocityX= speed;
  wall.shapeColor="blue"
  car.shapeColor="black"
  deformation= (0.5*weight*weight*speed)/22500
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<=(wall.width+car.width)/2){
     car.velocityX=0; 
  
  if(deformation<100){
    car.shapeColor=color(0,255,0)
  }
  else if(deformation>=100&&deformation<=180){
    car.shapeColor=color(230,230,0)
  }
  else{
    car.shapeColor=color(255,0,0)
  }
  }
  
  
  

  drawSprites();
}