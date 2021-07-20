var Engine = Matter.Engine, 
World = Matter.World, 
Events = Matter.Events, 
Bodies = Matter.Bodies;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  for(var k = 0; k <= width; k = k+80){
   divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }
  //Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  ground.display();
}