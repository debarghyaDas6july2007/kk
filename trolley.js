class Trolley
{
  constructor(x,y,w,h)
  { var option ={
      isStatic:true
  }
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;

    this.image = loadImage("t-removebg-preview.png");
    this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,option);
    World.add(world, this.body);
  }
  display()
  {
  var pos = this.body.position;
  push()
  translate(pos.x,pos.y)
  fill(189)
  imageMode(CENTER)
  image(this.image,0,0,this.w,this.h)
  pop()
  }
}