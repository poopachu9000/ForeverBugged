//class to create the numerous blocks that is resting in the holder.
class Box{
    constructor(x,y){



    this.body = Bodies.rectangle(x,y);
    World.add(world,this.body);
}

display(){

        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
       rotate(angle);
       rect(0,0,10,10);
    pop()
    
}
}