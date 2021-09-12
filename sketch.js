var form;
var hallway,hallwayIMG
var gameState=0
var play,startButton;
var rules, rulesIMG;
var next,nextIMG;
var paper,paperIMG;
var paper1,paperIMG1;
var paper2,paperIMG2;
var paper3,paperIMG3;
var paper4,paperIMG4;
var question1;

function preload(){

  hallwayIMG = loadImage("hallway.jpg")
  startButton=loadAnimation("button1.gif", "button2.gif","button3.gif","button4.gif","button5.gif","button6.gif");
  rulesIMG = loadImage("Rules.png");
  nextIMG = loadImage("next.png")
  paperIMG = loadImage("questionBlock.jpg")
  paperIMG1 = loadImage("questionBlock.jpg")
  paperIMG2 = loadImage("questionBlock.jpg")
  paperIMG3 = loadImage("questionBlock.jpg")
  paperIMG4 = loadImage("questionBlock.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);

  hallway = createSprite(windowWidth/2, windowHeight/2);
  hallway.addImage(hallwayIMG)
  hallway.scale = 3.0

  play=createSprite(windowWidth/2 - 620,windowHeight/2 + 150)
  play.addAnimation("playing",startButton)
  play.scale=0.4
  input=createInput('Hello')
  input.position(windowWidth/2 - 680,windowHeight/2 + 50)
  
  rules = createSprite(windowWidth/2,windowHeight/2);
  rules.addImage(rulesIMG);
  rules.visible = false;

  paper = createSprite(windowWidth/2-25,windowHeight/2-200,400);
  paper.addImage(paperIMG);
  paper.visible = false;
  paper.scale = 0.9;

  paper1 = createSprite(windowWidth/2 - 525,windowHeight/2+150,400);
  paper1.addImage(paperIMG1);
  paper1.visible = false;
  paper1.scale = 0.5;

  paper2 = createSprite(windowWidth/2 - 100,windowHeight/2+150,400);
  paper2.addImage(paperIMG1);
  paper2.visible = false;
  paper2.scale = 0.5;

  
  paper3 = createSprite(windowWidth/2 + 325,windowHeight/2+150,400);
  paper3.addImage(paperIMG1);
  paper3.visible = false;
  paper3.scale = 0.5;
//title=createElement("h1")
//title.html("Treacherous Trivia")


next = createSprite(windowWidth/2 + 450, windowHeight-100);
next.addImage(nextIMG);
next.scale = 0.65;
next.visible = false;

question1 = new QuestionOne()

}

function draw() {
 background("black"); 





  if(mousePressedOver(play)&&gameState===0){
    input.hide();
    play.visible=false;
    rules.visible = true;
    next.visible = true;
    gameState=1
   
   
  }

if(mousePressedOver(next)&&gameState===1){
  rules.visible = false;
  next.visible = false;
  hallway.visible = false;
  gameState = 2;
  paper.visible = true;
  paper1.visible = true;
  paper2.visible = true;
  paper3.visible = true;

}

if(gameState === 2){
  question1.display();
}



  drawSprites();
if(gameState===0){
  

  textSize(175);
 textFont("chiller")
 fill("Red");
 text("Treacherous Trivia",windowWidth/2 - 700,windowHeight/2- 250);
  //form.display();

}
 



}