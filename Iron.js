class Iron{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':3,
            'density':30
        }
        this.body = Bodies.rectangle(x, y, 20, 50, options);
        this.width =20;
        this.height = 50;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill("grey");
        rect(0, 0, this.width, this.height);
        pop();
      }
}