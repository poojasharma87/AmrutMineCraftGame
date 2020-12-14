
class Grass {
  constructor(x,y){
    
    this.body = Bodies.rectangle(x, y, 60,60);
    this.width = 60;

    this.height = 60;
    this.image=loadImage('grassblock.jpeg')
    World.add(world, this.body);
  }
  display(){
   var pos=this.body.position;
   var angle=this.body.angle;
    push();
    translate(pos.x, pos.y);
    
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}
  
