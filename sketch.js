var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(width/2,height,width,20);

  for(var d=0; d<=width; d=d+80){
    divisions.push(new Division(d,height-divisionHeight/2,10,divisionHeight));
  }

  for(var l=65-20;l<=width;l+=50){
    plinkos.push(new Plinko(l,75));
  }

  for(var l=40-20;l<=width;l+=50){
    plinkos.push(new Plinko(l,175));
  }

  for(var l=65-20;l<=width;l+=50){
    plinkos.push(new Plinko(l,275));
  }

  for(var l=40-20;l<=width;l+=50){
    plinkos.push(new Plinko(l,375));
  }
}

function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
  ground.display();

  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }

  for(var a=0;a<plinkos.length;a+=1){
    plinkos[a].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(mouseX,10,10));
  }
  for(var s=0;s<particles.length;s+=1){
    particles[s].display();
  }
}