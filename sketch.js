//Create variables here
var dog, happyDog, database, foodS, foodStock, normalDog;

function preload()
{
	//load images here
  normalDog = loadImage ("images/dogImg.png")
  happyDog = loadImage ("images/dogImg1.png")
  
  
}

function setup() {
	createCanvas(500, 500);
  background(46, 139, 87)
  dog = createSprite(250,250,10,10)
  dog.addImage(normalDog)
  dog.scale = 0.15
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readstock);
  

  
}


function draw() {  

  drawSprites();
  testSize(10)
  text("Note: Press Up_Arrow Key To Feed Drago Milk!" + foodStocks,10,20)
  
  fill("white")
  stroke(0.5)
  

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

}



