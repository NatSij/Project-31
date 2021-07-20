class Plinko{
constructor(x, y){
    var options = {
        isStatic: true,
        restitution:1
    }
    this.body = Bodies.circle(x,y,this.r,options);
    this.r = 10;
    World.add(world, this.body);
}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
ellipseMode(RADIUS);
fill("white");
ellispe(0, 0, this.r, this.r);
pop();
}
}