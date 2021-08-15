class Player{

    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }

        this.body = bodies.rectangle(x,y,width,height,options);
        
        this.width = width;
        this.height = height;
        this.image = loadImage("player/Rocket.png");

        this.life1 = "green";
        this.life2 = "green";
        this.life3 = "green";

        
    }
}