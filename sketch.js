var dog,sadDog,happyDog, milks, emilk;
var gameState = "s";
bottles = 10;
foodstock = 0;

var feed, add;

function preload(){
  sadDog=loadAnimation("Images/Dog.png");
  happyDog=loadAnimation("Images/happy dog.png");
  milks = loadAnimation("Images/Milk.png");
  emilk = loadAnimation("Images/milkimage.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addAnimation("s",sadDog);
  dog.addAnimation("h", happyDog);
  dog.scale=0.15;

   feed = createButton("Feed the dog");
  feed.position(650, 150);

 add = createButton("add food");
  add.position(550, 150);

  milk = createSprite(450, 150);
  milk.addAnimation("m",milks);
  milk.addAnimation("me",emilk);
  milk.scale = 0.05;

  feeds = createSprite(500, 80, 60, 10)

}

function draw() {
  background(46,139,87);

  fill(255);
  textSize(30);
   textAlign(CENTER);
  text("last fed : 7:00 p.m", 400, 50);

if(mousePressedOver(feeds)){
  gameState = "e";
}

if(gameState === "e"){
  milk.x = 730;
  milk.y=200;
  milk.changeAnimation("me", emilk);
  dog.changeAnimation("h", happyDog)
}

text("Tommy", dog.x, dog.y-100)
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
