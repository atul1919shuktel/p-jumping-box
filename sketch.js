var canvas;
var music;
var platform1;
var platform2;
var platform3;
var platform4;
var box;

function preload(){

    music = loadSound("music.mp3");

}


function setup(){

    canvas = createCanvas(800,600);

    platform1 = createSprite(100,580,180,20);

    platform1.shapeColor = "blue";


    platform2 = createSprite(300,580,180,20);

    platform2.shapeColor = "orange";

    platform3 = createSprite(500,580,180,20);

    platform3.shapeColor = "red"

    platform4 = createSprite(700,580,180,20);

    platform4.shapeColor = "green";

    box = createSprite(Math.round(random(100,700)),50,50,50);

    box.velocityX = Math.round(random(-8,6));

    box.velocityY = Math.round(random(2,8));

}

function draw() {
    background(rgb(169,169,169));
   createEdgeSprites()
    if(box.x > 775 || box.x < 25 ) {
        box.velocityX = box.velocityX * -1;

    }
    if(box.y < 0){box.velocityY = box.velocityY * -1}

    if(platform1.y - box.y <= 35 && box.x < 190) {

        box.velocityX = box.velocityX*-1
        box.velocityY = box.velocityY*-1

        box.shapeColor = platform1.shapeColor;
        music.play();

    }


    if(platform2.y - box.y <= 35 && box.x < 390 && box.x > 210) {

        box.velocityX = box.velocityX*-1
        box.velocityY = box.velocityY*-1
        box.shapeColor = platform2.shapeColor;

    }


    if(platform3.y - box.y <= 35 && box.x > 410 && box.x < 590) {

        box.velocityX = box.velocityX*-1
        box.velocityY = box.velocityY*-1
        box.shapeColor = platform3.shapeColor;
        

    }


    if(platform4.y - box.y <= 35 && box.x > 610 && box.x < 790) {

        box.velocityX = box.velocityX*-1
        box.velocityY = box.velocityY*-1
        box.shapeColor = platform4.shapeColor;

    }






    drawSprites();

}
