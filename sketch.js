
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mario;
var bg
var tree;
var apple,apple1,apple2,apple3,apple4,apple5,apple6,apple7,apple8,apple9,apple10,apple11,apple12;
var bullet;
var launch;
var score=0;
var box;

function preload(){
  mario = loadImage("j1-removebg-preview.png")
  bg = loadImage("j2.jpeg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  tree = new Tree(1200,620);
  ground = new Ground(width/2,1000,width,20);
  bullet = new Bullet(580,400);
  box = new Trolley(1100,800,30,30)

  apple1 = new Apple(1260,400,20);
  apple2 = new Apple(1270,410,20);
	apple3 = new Apple(1200,400,20);
	apple4 = new Apple(1240,310,20);
	apple5 = new Apple(1150,4500,20);
	apple6 = new Apple(1200,500,20);
	apple7 = new Apple(1100,330,30);
	apple8 = new Apple(1240,3100,30);
	apple9 = new Apple(1170,230,30);
	apple10 = new Apple(1180,220,30);
	apple11 = new Apple(1120,250,30);
	apple12 = new Apple(1200,310,30);

  Engine.run(engine);

  score = 0;
}


function draw() 
{
  background(51);
  image(bg,0,0,width,height);

  image(mario, 140, 250, 460, 460);

  Engine.update(engine);
  
  tree.display();
  ground.display();

  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();
  apple6.display();
  apple7.display();
  apple8.display();
  apple9.display();
  apple10.display();
  apple11.display();
  apple12.display();

 bullet.display();

 box.display();

 if(collide(apple,box)===true)
 {
   apple.visible = false;
   score = score+1;
 }
 
 if(collide(apple,bullet)===true)
 {
  isStatic:false
 }
}

function mouseDragged()
{
  // Set position of stone when mouse is dragged
	Matter.Body.setPosition(bullet.body, {x:mouseX, y:mouseY}) 
}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,apple);
               apple = null;
               return true; 
            }
            else{
              return false;
            }
         }
}
