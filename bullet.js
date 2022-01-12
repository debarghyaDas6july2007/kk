class Bullet
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true,
        }
     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;
     this.image = loadImage("j6-removebg-preview.png");
     this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
     World.add(world, this.body);
    }
    display()
    {
    var bulletPos = this.body.position;
    push();
    translate(bulletPos.x,bulletPos.y);
    imageMode(CENTER);
    image(this.image,0,0,25,25 );
    pop();
    }


}