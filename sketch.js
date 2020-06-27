      //Global Variables
      var backImage, banana, r,G,R;
      var monkey,ground,GameOver,Restart,backGround,score;
      var bananaGroup;
      var obstacleGroup ;
      var gameState;

 function preload(){
  
  //loading backImage
  backImage = loadImage("jungle.jpg");
  

  //setting Animation
  player_running =loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  //setting bananaImage
  bananaa =loadImage("Banana.png");
  
      //setting stoneImage
      r=loadImage("stone.png");

  //setting gameOver and Restart
  G =loadImage("gameOver.png");
  R =loadImage("restart.png");
}


function setup() {
  createCanvas(500,400);
  
      //creating backGround Sprite
        backGround = createSprite(10,10,400,400);
      backGround.addImage(backImage);
      backGround.velocityX =-5;

  //creating monkey sprite
 
  monkey = createSprite(60,306,40,40);
  monkey.addAnimation("running",player_running);
  monkey .scale =0.1;
  
       
  monkey.setCollider("circle",0,0,60);

  
      //CREATING GROUND SPRITE
      ground =createSprite(10,340,900,10);
      ground.visible=false;

        GameOver =createSprite(280,202,30,340);
    GameOver.addImage(G);
    GameOver.visible =false;
  
   Restart =createSprite(280,280,20,450);
    Restart.addImage(R);
    Restart.visible =false;
  
       //CREATING GROUP
      bananaGroup = new Group();
      obstacleGroup = new Group ();

      //GIVING GAMESTATE
      gameState="play";
  
  //MAKING SCORING SYSTEM
  score =0;
}


function draw(){

  
  
    //IF GAME STATE =PLAY THESE FOLLOWING FUNCTION SHOUL BE IN ACTION
    if(gameState=="play") {

      if(keyDown("space") && monkey.y >= 305){
        monkey.velocityY =-13;
         }

    

       monkey.velocityY = monkey.velocityY+0.5;

      if(bananaGroup.isTouching(monkey)) {

        score=score+10
          bananaGroup.destroyEach();
      }

        if(ground.x <-500) {
        ground.x = ground.width/2;
        }


        if(backGround.x < 0) {
        backGround.x = backGround.width/2;
        }

          monkey.collide(ground);
      
      if(obstacleGroup.isTouching(monkey)){
    monkey.scale =0.1;
  }
  
   if(monkey.scale == 0.1) {
      if(obstacleGroup.isTouching(monkey)){
        gameState="end"

      }
        }
  
      
      //Chaning gameState
       
    }
  //IF GAMESTATE = END THESE FOLLOWING FUNCTION SHOULD BE IN ACTION
  if(gameState =="end") {
   
    
    ground.velocityX = 0;
  monkey.removed=true;
  
  
     obstacleGroup.destroyEach();
     bananaGroup.destroyEach();
    
    backGround.velocityX =0;
    
    GameOver.visible =true;
    
   Restart.visible =true;
    
 
    if(keyDown("space")) {
      reset();
      }
    
  }
  
    //CALLING FOOD AND STONE FUNCTION
   Food();
    STONE();

 drawSprites();
  
   stroke("red");
    textSize(20);
    fill("red");
  text("target score = 100",200,20);
  
  
    //COMPLETEING SCORING SYSTEM
    stroke("yellow");
    textSize(20);
    fill("yellow");
    text("score: "+ score,400,20);
  
  switch (score) {
    
  
    case 10: monkey.scale=0.10;
      console.log(monkey.y);
      
        if(keyDown("space") && monkey.y >= 274){
        monkey.velocityY =-20;
         }

    

       monkey.velocityY = monkey.velocityY+0.5;
      break;
      
      case 20:monkey.scale=0.12;
      console.log(monkey.y);
      
       if(keyDown("space") && monkey.y >= 268){
        monkey.velocityY =-20;
         }

    

       monkey.velocityY = monkey.velocityY+0.5;
      break;
      
      case 30:monkey.scale=0.14;
      console.log(monkey.y);
      
       if(keyDown("space") && monkey.y >= 264){
        monkey.velocityY =-20;
         }

    

       monkey.velocityY = monkey.velocityY+0.5;
      break;
      
      case 40:monkey.scale=0.16;
      console.log(monkey.y);
      
       if(keyDown("space") && monkey.y >= 264){
        monkey.velocityY =-20;
         }

    

       monkey.velocityY = monkey.velocityY+0.5;
      break;
      
      case 50:monkey.scale=0.18;
      console.log(monkey.y);
      
       if(keyDown("space") && monkey.y >= 264){
        monkey.velocityY =-20;
         }

    

       monkey.velocityY = monkey.velocityY+0.5;
      break;
      
      case 60:monkey.scale=0.22;
      console.log(monkey.y);
      
       if(keyDown("space") && monkey.y >= 264){
        monkey.velocityY =-20;
         }

    

       monkey.velocityY = monkey.velocityY+0.5;
      break;
      
      case 70:monkey.scale=0.22;
      console.log(monkey.y);
      
       if(keyDown("space") && monkey.y >= 264){
        monkey.velocityY =-20;
         }

    

       monkey.velocityY = monkey.velocityY+0.5;
      break;
      
      case 80:monkey.scale=0.22;
      console.log(monkey.y);
      
       if(keyDown("space") && monkey.y >= 264){
        monkey.velocityY =-20;
         }

    

       monkey.velocityY = monkey.velocityY+0.5;
      break;
      
      case 90:monkey.scale=0.22;
      console.log(monkey.y);
      
       if(keyDown("space") && monkey.y >= 264){
        monkey.velocityY =-20;
         }

    

       monkey.velocityY = monkey.velocityY+0.5;
      break;
      
      
      case 100: text("you win",200,200);
      
    ground.velocityX = 0;
  monkey.removed=true;
  
  
     obstacleGroup.destroyEach();
     bananaGroup.destroyEach();
    
    backGround.velocityX =0;
  
      
    break;
      default: break;
  }

}

function reset() {
  
  gameState="play";
  backGround.velocityX =-5;
  monkey.removed=false;
  GameOver.visible =false
  Restart.visible =false
  score=0;
  monkey.scale=0.1;
}
 

  //MAKING FOOD FUNCTION
function Food() {

  if(frameCount % 140==0){
    
    var banana =createSprite(620,200,40,40);
    banana.scale =0.06;
    banana.addImage(bananaa);
    banana.y =Math.round(random(120,200));

    banana.velocityX =-5;
    banana.lifetime = 155;
    bananaGroup.add(banana);
    
}
}

    //MAKING STONE FUNCTION
    function STONE() {

      if(frameCount % 300 ==0){

      var stone =createSprite(620,300,40,40);
      stone.addImage(r);
      stone.scale =0.2;

      stone.velocityX =-5;
      stone.lifetime =155;
        obstacleGroup.add(stone);
      }
    }