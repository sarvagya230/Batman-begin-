class base
{
    constructor(x,y,width,height)
    {
        var options=
        {
            'friction':1,
            'restitution':0.3,
            'density':1.0,
            'isStatic':true
        }
        this.x=x;
        this.y=y
        this.width=width
        this.height=height
        this.body=Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        Matter.World.add(world,this.body)

    }
    display()
    {
        var pos =this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("blue")
        rect(0,0,this.width,this.height)
        pop()
    }
}