var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaf;
var appleImg;
var leafImage;
var ran;
var score=0;
var org;
var orgImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImage=loadImage("redImage.png");
  orgImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);

  text("Score: "+score,50,50);
  
  // Moving background
  garden=createSprite(200,200,400,400);
  garden.addImage(gardenImg);
  garden.scale=1;
  
 

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  

  

  //Making the rabbit move along the mouse
  rabbit.x=World.mouseX;

  

  garden.velocityX=-3;

  if (garden.x < 200){
   garden.x = garden.width/2;
  }

  //createApple();
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var selectSprite=Math.round(random(1,3));

  if(frameCount % 80===0){
    if(selectSprite===1){
      createApple();
    }
    else if(selectSprite===2){
      spawnLeaves();
    }
    else{
      createLeaves();
    }
  }
  
  //if(apple.isTouching(rabbit)){
    //apple.destroy();
  //}
  //createApple();

  //createLeaves();

  //select();

  drawSprites();
}
function createApple(){
  
  apple=createSprite(200,200,15,15);
  apple.addImage(appleImg);
  apple.scale=0.05;
  apple.velocityY=5;
  apple.lifetime=170;
  apple.x=Math.round(random(1,1000));
}

function createLeaves(){
  
  leaf=createSprite(200,200,15,15);
  leaf.addImage(leafImage);
  leaf.scale=0.05;
  leaf.velocityY=5;
  leaf.lifetime=170;
  leaf.x=Math.round(random(1,1000));
}

function spawnLeaves(){
  org=createSprite(200,200,15,15);
  org.addImage(orgImg);
  org.scale=0.05;
  org.velocityY=5;
  org.lifetime=170;
  org.x=Math.round(random(1,1000));
}

//function select(){




//}