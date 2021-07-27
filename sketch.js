var backgroundImg;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function preload() {
  backgroundImg = loadImage("snow3.jpg")
  
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  snow1 = new Snow(100,100,50,50);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  snow1.display();
}