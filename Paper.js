class Paper {
    constructor(x,y,radius) {
      var options = {
          'restitution':0.5,
          'friction':0.5,
          'density':0.5,
          isStatic:false
      }

      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };
