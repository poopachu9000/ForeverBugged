
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball,wreck;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ball = Bodies.circle(100,100,10,{isStatic:false})
	box = new Box(200,200)
//wreck = new Wreck(ball,100,200);
console.log(ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20)
console.log(ball.position.x);

  box.display();
  drawSprites();
 
}



