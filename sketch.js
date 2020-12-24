//Create variables here
var dogimage,dog1image;
var dog
var food
var database,mypos;
function preload()
{
  //load images here
  dogimage=loadImage("Dog.png");
  dog1image=loadImage("happydog.png");
}

function setup() {
	createCanvas(900, 600);
  dog=createSprite(500,300,50,50)
  dog.addImage("d",dogimage);
  dog.scale=0.3
  database=firebase.database();
     //var l=database.ref("Food");
    // l.on("value",read,showerr)
}


function draw() {  
  background("green")
  if(keyWentDown(UP_ARROW)){
    writeStock(mypos);
    dog.addImage(dog1image);
  }
  drawSprites();
  textSize(23)
  stroke("yellow")
  fill("red");
  text("Note: press UP_ARROW key to feed drago milk!",200,50);
  //add styles here

}




