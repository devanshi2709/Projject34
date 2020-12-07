//Create variables here

var dog, happyDog;
var database;
var food, foodStock,readStock;

var dogImg,happyDogImg;

function preload(){
  //load images here
  
  dogImg= loadImage("images/dogImg.png");
  happyDog= loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog= createSprite(250,250,20,20);
  dog.addImage("dog",dogImg);
  dog.scale= 0.1
  

    database= firebase.database();

  foodStock= database.ref("food");
  foodStock.on("value",readStock);

}


function draw() {  
    background(46,139,87);


    if(keyWentDown(UP_ARROW)){

      writeStock(food);
      food-=1;
      //dog.addImage("Happy Dog",happyDogImg);

    }

  drawSprites();
  //add styles here

  textSize(20);
  stroke("cyan");
  fill("blue");
  text("Press Up Arrow Key to Feed the dog!",10,30);

  if(food===undefined){
    text("Food Remaining :20",200,450);
  }else{

    text("Food Remaining :"+food,200,450);
 
}


}

function readStock(data){
  food= data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{

    x=x-1;
  }
  database.ref('/').update({food:x})

}


