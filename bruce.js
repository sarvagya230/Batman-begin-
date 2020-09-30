class bruce
{
    constructor(x,y,width,height)
    {
    this.displayBody
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    this.body=Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,{restitution:0.001,isStatic:true})
    Matter.World.add(world,this.body)
    }
    display(animation)
    {
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        //fill("red")
       // rect(0,0,this.width,this.height)
        
        pop()
      // this.displayBody.addAnimation("label",animation)
        

    }
}