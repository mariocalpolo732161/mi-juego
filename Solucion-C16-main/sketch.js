//Estados del juego
var PLAY=1;
var END=0;
var gameState=1;
var aro
var knife,fruit ,monster,fruitGroup,monsterGroup, score,r,randomFruit, position;
var knifeImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage, gameOverImage;
var gameOverSound ,knifeSwoosh; 
var vidas=3
var rallo, ralloImg, gato, gatoImg, backgroundV, backgroundVImg, pz, pzImg
function preload(){
  gatoImg = loadImage ("gato.png")
  backgroundVImg = loadImage ("fondo.jpeg")
  ralloImg = loadImage ("rallo.png")
  knifeImage = loadImage("knife.png");
  monsterImage = loadImage("alien1.png")
  //fruit1 = loadImage("fruit1.png");
  //fruit2 = loadImage("fruit2.png");
  //fruit3 = loadImage("fruit3.png");
  //fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png")
  aroImage= loadImage("circulo-removebg-preview.png")
  gameOverSound = loadSound("gameover.mp3")
  pzImg = loadImage ("pz.png")
  knifeSwooshSound = loadSound("knifeSwoosh.mp3")
}



function setup() {
  createCanvas(600, 600);
  
  //Creando espada
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.15
gato=createSprite(120,200,20,20)
gato.addImage(gatoImg)
pz=createSprite(gato.x,gato.y,30,40)
pz.addImage(pzImg)
pz.scale=.2
backgroundV=createSprite(backgroundVImg);
gato.scale=.359129567849999033
   aro=creteSprite(40,200,);
   aro.addImage(aroImage);
   aro.scale=0.15
  
  
  
  //Establecer colisionador para la espada
  knife.setCollider("rectangle",0,0,40,40);

  // Puntuación de las variables y Grupos
  score=0;
  //fruitGroup=createGroup();
  monsterGroup=createGroup();
  
} 

function draw() {
  background(backgroundVImg);
  
  if(gameState===PLAY){
    
    //Llamar a las frutas y la función Monstruo
    //fruits();
    Monster();
    
    // Mueve la espada con el mouse
    if (keyIsDown(right__arrow)){
    pz.x=pz.x-5;
  }
    /*if (keyIsDown(83)){
      knife.y=knife.y+5;
  
      }*/
      knife.y=500
      if (keyIsDown(68)){
        knife.x=knife.x+5;
   
        }
        if (keyIsDown(65)){
          knife.x=knife.x-5;
          }
          
    aro.x=knife.x
  aro.y=knife.y
  aro.scale=.5
if(keyIsDown(87)){
  Rallo()
        }
  
    // Aumentar la puntuación si la espada toca la fruta
  /*  if(fruitGroup.isTouching(knife)){
      fruitGroup.destroyEach();
      
      knifeSwooshSound.play();
      score=score+2;
    }*/
    
  
      // Ir al estado End si la espada toca al enemigo
      if(monsterGroup.isTouching(knife)){
        gameState=END;
        //sonido de game over
        gameOverSound.play()
        
        //fruitGroup.destroyEach();
        monsterGroup.destroyEach();
      //  fruitGroup.setVelocityXEach(0);
        monsterGroup.setVelocityXEach(0);
        aro.visible=false
        // Cambia la animación de la espada a gameover y restablece su posición
        knife.addImage(gameOverImage);
        knife.scale=2;
        knife.x=300;
        knife.y=300;
      }
    
  }
  
  drawSprites();
  //Mostrar la puntuación
  textSize(25);
  text("Puntuación : "+ score,250,50);
}

function Rallo (){
  if(frameCount % 50 === 0){
  rallo =createSprite(knife.x,knife.y-50);
    rallo.addImage(ralloImg);
    rallo.scale=0.25
    rallo.velocityY=-4
 }

    //monster.setLifetime=50;
    
}

function Monster(){
  if(World.frameCount%27===0){
    monster=createSprite(400,50,20,20);
    monster.addImage(monsterImage);
    monster.x=Math.round(random(10,550));
    monster.velocityY=-(-8+(score/10));
    monster.setLifetime=50;
    monster.scale=.2
    monsterGroup.add(monster);
  }
}

/*function fruits(){
  if(World.frameCount%80===0){
    position = Math.round(random(1,2));
    fruit=createSprite(400,200,20,20);
    console.log(position)
     //usando una variable aleatoria, cambia la posición de la fruta para hacerlo más desafiante
    
    if(position==1)
    {
    fruit.x=600;
    fruit.velocityX=-(7+(score/4));
    }
    else
    {
      if(position==2){
      fruit.x=0;
      
  //Aumentar la velocidad de la fruta después de la puntuación 4 o 10
      fruit.velocityX= (7+(score/4));
      }
    }
    
    fruit.scale=0.2;
     //fruit.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    
    fruit.y=Math.round(random(50,550));
   
    
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}*/
