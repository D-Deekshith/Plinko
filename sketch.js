const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var up,right,left,down;
var ground;

var particles= [];
var plinkos= [];
var divisions= [];

var divisionHeight = 300;
var divisionsVar;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  //creating rightEdge
  right = createSprite(width-5, height/2, 10, height);
  right.shapeColor="brown";

  //creating rightEdge
  up = createSprite(width/2,5,width,10);
  up.shapeColor="brown";

  //creating rightEdge
  left = createSprite(5,height/2,10,height);
  left.shapeColor='brown';

  //creating rightEdge
  down = createSprite(width/2,height-5,width,10);
  down.shapeColor='brown';

  //creating ground
  ground = new Ground(240,795,460,10);

    //creating plinkos first layer
    for (var j = 50; j <=width; j+=50){ 
        plinkos.push(new Plinko(j,75)); 
      }

    //creating plinkos second layer
    for (var j = 50/2; j <=width-10; j+=50) { 
      plinkos.push(new Plinko(j,175)); 
      }

    //creating plinkos third layer
    for (var j = 75-25; j <=width; j+=50) { 
      plinkos.push(new Plinko(j,275)); 
      }

    //creating plinkos forth layer
    for (var j = 50-25; j <=width-10; j+=50) { 
        plinkos.push(new Plinko(j,375)); 
      }

    //creating divisions
    for (var k =0; k <=width; k += 80) {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }
    }

function draw() {
  background(0);
  Engine.update(engine);
 
  drawSprites();
  
  //displaying plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display(); 
    }

  //displaying divisions
  for (var s = 0; s < divisions.length; s++) { 
    divisions[s].display(); 
  }

  //particles will fall with same distance
  if(frameCount % 60 === 0){
      particles.push(new Particle(random(width/2-30, width/2+30), 10,10));  
    }

  //displaying particles 
  for (var j = 0; j < particles.length; j++) {
      particles[j].display(); 
      } 

  //displaying divisions
  for (var k = 0; k < divisions.length; k++) { 
      divisions[k].display(); 
    }

  // displaying ground
  ground.display();

}