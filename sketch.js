const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var bg;
var form;
var spaceship,spaceshipImg;
var earth, earthImg;
var mars, marsImg;
var jupiter, jupiterImg;
var saturn, saturnImg;
var uranus, uranusImg;
var neptune, neptuneImg;
var rect1;

var gameState=0;

function preload() {
  bg = loadImage("night sky.jpg");
  spaceshipImg = loadImage("spaceship.png");
  earthImg = loadImage("earth.png");
  marsImg = loadImage('mars.png');
  jupiterImg = loadImage('jupiter.png');
  saturnImg = loadImage('saturn.png');
  uranusImg = loadImage('uranus.png');
  neptuneImg = loadImage('neptune.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  earth = createSprite(width/2-590, height/2, 10, 10);
  earth.addImage(earthImg);
  earth.scale = 0.10;

  mars = createSprite(width/2-390, height/2, 10, 10);
  mars.addImage(marsImg);
  mars.scale = 0.10;
  mars.debug = true;

  jupiter = createSprite(width/2-170, height/2, 10, 10);
  jupiter.addImage(jupiterImg);
  jupiter.scale = 0.5;

  saturn = createSprite(width/2+100, height/2, 10, 10);
  saturn.addImage(saturnImg);
  saturn.scale = 0.5

  uranus = createSprite(width/2+390, height/2, 10, 10);
  uranus.addImage(uranusImg);
  uranus.scale = 0.5

  neptune = createSprite(width/2+590, height/2, 10, 10);
  neptune.addImage(neptuneImg);
  neptune.scale = 0.05+0.10;

  spaceship = createSprite(width/2-550, height/2-100, 10, 10);
  spaceship.addImage(spaceshipImg);   
  spaceship.scale = 0.5;
  spaceship.debug = true;
  spaceship.setCollider("rectangle",0,0,200,200);

  engine = Engine.create();
  world = engine.world;

  form = new Form;
}


function draw() {
  background(bg);
  Engine.update(engine);

  drawSprites();

  form.display();
  console.log(gameState)
  if(gameState == 1){

    if(keyDown(RIGHT_ARROW)){
       
      spaceship.x = spaceship.x+2;
     }

     if(spaceship.isTouching(mars)){
         console.log("touching");
         mars1();
     }

  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mars1(){
  prompt("How many moons do I have?");
}