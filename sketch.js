
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var paper1;
var side1, side2, side3;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400, 700, 800, 20)
	side1 = new Dustbin(600, 645, 100, 10)
	side2 = new Dustbin(650, 600, 10, 100)
	side3 = new Dustbin(550, 600, 10, 100)
	paper1 = new Paper(200, 200, 25)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  console.log(paper1)
  side1.display();
  side2.display();
  side3.display();
  ground1.display();
  paper1.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:7,y:-13})

	}
}