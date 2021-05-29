var background,backgroundImg;

function preload(){
backgroundImg=loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 
}

function draw() {
  background(backgroundImg);  
 
  drawSprites(); 
}


