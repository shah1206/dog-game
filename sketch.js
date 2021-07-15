
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dog, happyDog, database, foodS, foodStock, dogImg


function preload()
{
	happyDog = loadImage("happydog.png");
	dogImg=loadImage("Dog.png")
}

function setup() {
	createCanvas(500, 500);

database = firebase.database();


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
foodStock=database.ref("Food")
  foodStock.on("value",readStock)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
	  writeStock(foodS)
	  dog.addImage(happyDog)
  }
  
  drawSprites();

  Text("hit the up arrow to feed the dog",200,200)
 
}

function readStock(data){
	foodS=data.val();

}

function writeStock(x){
	database.ref('/').update({

	})
}
