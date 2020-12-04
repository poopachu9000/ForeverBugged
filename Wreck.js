class Wreck{
constructor(bodyA,pointB){
    var options = {
bodyA:bodyA,
pointB:pointB,
stiffness:1,
length:20
    }

    this.wreck = Constraint.create(options);
    World.add(world,this.wreck);

}

display(){
var posA = this.wreck.bodyA.position;
var posB = this.wreck.pointB

line(posA.x,posA.y,pointB.x,pointB.y);
}
}