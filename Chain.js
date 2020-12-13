class Chain{
    constructor(bodyA, pointB){
        var options1 = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10
        }
        this.chain = Constraint.create(options1);
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }
    attach(){
        this.chain.bodyA = rock.body;   
    }
    display(){
        if(this.chain.bodyA != null){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}