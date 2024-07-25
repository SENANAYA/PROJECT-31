var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=200;
var score =0;
function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  wallL=new Ground(0,height/2,10,height);
  wallR=new Ground(width,height/2,10,height);
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 65; j <=width-20; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 40; j <=width-30; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 65; j <=width-20; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

    //  for (var j = 50; j <=width-10; j=j+50) 
    // {
    //    plinkos.push();
    // }

    //  for (var j = 50; j <=width-10) 
    // {
    //    plinkos.push(new Plinko(j,375));
    // }
 
    //  for (var j = 50; j=j+50) 
    // {
    //    plinkos.push(new Plinko(j,375));
    // }

     for (var j = 40; j <=width-30; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 push()
 textAlign(CENTER)
 fill(random(0,255),random(0,255),random(0,255))
 text("CLICK TO DROP BALLS",width/2,30);
 pop()
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
    
  
 
  // for (var j = 0; j < particles.length; j++) {
  //    particles[j];
  //  }

  // for (var j = 0; j < particles.length; j++) {
  //    particles[j].display;
  //  }

  // for (var j = 0; j++) {
  //    particles[j].display();
  //  }
  for (var j = 0; j < particles.length; j++) {
    
    if(particles[j].visibility===0===false){
     particles[j].display();
     if(particles[j].score===0&&(particles[j].body.position.y>height-50)){
      particles[j].score=1
      particles[j].tint=false
score++
     }
    
     
    }else{
      particles.splice(j,1)
      j=j-1
     }
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mouseReleased(){
  if(mouseX>0&&mouseX<width){


  particles.push(new Particle(mouseX, 10,10));


  }
}