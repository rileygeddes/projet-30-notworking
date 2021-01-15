const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var p1,p2
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16
var block1,block2,block3,block4,block5,block6,block7,block8,block9
var ball
var slingShot
function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground(450,390,900,10)
  p1 = new Stand(390,300,250,10);
  p2 = new Stand(700,200,200,10);
  b1 = new Block(300,275,30,40);
  b2 = new Block(330,275,30,40);
  b3 = new Block(360,275,30,40);
  b4 = new Block(390,275,30,40);
  b5 = new Block(420,275,30,40);
  b6 = new Block(450,275,30,40);
  b7 = new Block(480,275,30,40);
  //lvl 2
  b8 = new Block(330,235,30,40);
  b9 = new Block(360,235,30,40);
  b10 = new Block(390,235,30,40);
  b11 = new Block(420,235,30,40);
  b12 = new Block(450,235,30,40);
  //lvl3
  b13 = new Block(360,195,30,40);
  b14 = new Block(390,195,30,40);
  b15 = new Block(420,195,30,40);
  //top
  b16 = new Block(390,155,30,40);
//tower2
  block1 = new Block(640,175,30,40)
  block2 = new Block(670,175,30,40)
  block3 = new Block(700,175,30,40)
  block4 = new Block(730,175,30,40)
  block5 = new Block(760,175,30,40)
  //lvl2
  block6 = new Block(670,145,30,40)
  block7 = new Block(700,145,30,40)
  block8 = new Block(730,145,30,40)
  //lvl3
  block9 = new Block(700,115,30,40)
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot = new Slingshot(this.ball,{x:100,y:200});
  
}
function draw() {
  background(56,44,44); 
  textSize(20)
  fill("yellow")
  text("drag the hexagon and release twoards the blocks",90,40)
 ground.display()
  p1.display()
  p2.display()
  fill("lightblue")
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
fill("red")
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
fill("purple")
  b13.display()
  b14.display()
  b15.display()
  fill("gold")
  b16.display()
  
  fill("gold")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  fill("purple")
  block6.display()
  block7.display()
  block8.display()
  fill("red")
  block9.display()

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
  slingShot.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(ball.body);
  }
}