class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color={r:random(0, 255), g:random(0, 255), b:random(0, 255)};
        World.add(world, this.body);
  this.score=0
  this.tint=true
  this.timer=500
  this.visibility=255
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
if(this.tint===true){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //imageMode(CENTER);
    noStroke();
    fill(this.color.r,this.color.g,this.color.b)
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r,this.r);
    pop();
}else{
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color.r,this.color.g,this.color.b,this.visibility)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
       
        if(this.timer>0){
            this.timer=this.timer-1
        }else{
            if(this.visibility>0){
            this.visibility=this.visibility-10
            }else{
              
                this.visibility=0
                World.remove(world,this.body)
            }
        }
}
    }

};