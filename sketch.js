var bruce_img1,bruce_img2,bruce_img3,bruce_img4,bruce_animation
var engine,world,basse,Bruce,Brucea;
var rain=[]
maxlenght=100
no=0
var Random;
var thunder1,thunder2,thunder3,thundery4,thunder_sprite

function preload(){
    bruce_img1=loadImage("walking_1.png")
    bruce_img1.resize(100,100);
    bruce_img2=loadImage("walking_2.png")
    bruce_img3=loadImage("walking_3.png")
    bruce_img4=loadImage("walking_1.png")
    thunder1=loadImage("1.png")
    thunder2=loadImage("2.png")
    thunder3=loadImage("3.png")
    thundery4=loadImage("4.png")
    thunder_sprite=createSprites()
    
   // bruce_animation=loadAnimation(bruce_img1,bruce_img2,bruce_img3,bruce_img4)
    
}

function setup(){
    createCanvas(800,600)
    engine = Matter.Engine.create();
    world = engine.world;
    basse=new base(300,590,1000,10)
    Bruce=new bruce(200,500,100,170)
    
   
    
    

    
    
   
    
   
    
}

function draw(){
    background(0);
    Matter.Engine.update(engine);
    image(bruce_img1,100,400,200,200)
    basse.display()
    Bruce.display()

    if(frameCount%5===0&&no<maxlenght)
    {
    rain.push(new Rain(random(0, 700), 10,5))
    no=no+1
    }
    for (var j = 0; j < rain.length; j++) {
   
        rain[j].display();
      }
      Random=Math.round(random(1,4))
      if(frameCount%12===0)
      {
          switch(Random)
          {
              case 1:
                image(thunder1,100,50)
                break
              case 2:
                  image(thunder2,100,50)
                  break
                  case 3:
                      image(thunder3,100,50)
                      break
                      case 4:
                          image(thundery4,100,50)

          }
      }

   
    
}   

