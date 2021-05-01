class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        this.pointB = pointB;

    }

    fly(){
        this.chain.bodyA=null;
    }

    display(){
        if(this.chain.bodyA!==null){
            strokeWeight(5);
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.pointB.x,this.pointB.y);
        }
   
    }
}