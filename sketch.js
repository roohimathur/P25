
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myGround,paperObj,dustbinObj;
var log1,log2,log3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    

	engine = Engine.create();
	world = engine.world;
	myGround = new Ground(width/2,670,width,20);
	///log1 = new Log(400,600,20,100);
	///log2 = new Log(485,650,150,20);
	///log3 = new Log(570,600,20,100);
	paperObj = new paper(200,450,70);
	dustbinObj=new dustbin(1200,650);
	//Create the Bodies Here.




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  myGround.display();
  //log1.display();
  //log2.display();
  //log3.display();
  dustbinObj.display();
  paperObj.display();
  Engine.update(engine);
 //
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-145});
	}
}



