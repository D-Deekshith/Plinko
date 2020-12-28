class Plinko{
    constructor(x,y,radius){
        var options = {
            'isStatic': true
        }

        this.body = Bodies.circle(x,y,10,options);
        this.radius = radius;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        ellipseMode(CENTER);
        fill(255);
        circle(pos.x,pos.y,20)
        pop();
    }
}