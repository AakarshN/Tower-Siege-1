class Sling{
    constructor(bodyA, pointB){
       var options= {
        'bodyA': bodyA,
        'pointB': pointB,
        'stiffness': 0.04,
        'length': 10
       }
       this.pointB= pointB
       this.sling = Constraint.create(options);

       World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA !== null){
            var A = this.sling.bodyA.position;
            var B= this.pointB
            push();
            stroke("#24FAE0")
            line(A.x,A.y,B.x,B.y)
            pop();
        }
    }

    fly(){
        this.sling.bodyA= null
    }

}