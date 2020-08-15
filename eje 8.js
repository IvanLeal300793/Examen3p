let naruto
let sasuke
let laruto
let gusuke

function preload(){
  naruto = loadImage('naruto.png')
  sasuke = loadImage('sasuke.png')
}

function setup() {
  createCanvas(400, 400);
  naruto = new l()
  sasuke = new g()
}

function draw() {
  background(220);
  naruto.show()
  naruto.move()
  naruto.salir()
  sasuke.show()
  sasuke.move()
  sasuke.salir()
  console.log(keyCode)
}
class l {
  constructor(x,y,xv,yv){
    this.x=200
    this.y=200
    this.xv=2
    this.yv=2
  }
  show(){
    image(laruto,this.x,this.y,75,75)
  }
  move(){
    if (keyIsPressed){
      if (keyCode==39){
      this.x=this.x+this.xv
      } else if(keyCode==37){
        this.x=this.x-this.xv
      } else if(keyCode==40){
        this.y=this.y+this.yv
      } else if(keyCode==38){
        this.y=this.y-this.yv
      }
    }
  }
  salir(){
    if(this.x>400){
      this.x = 1
    } else if (this.x<0){
      this.x = 400
    }
    if (this.y>400){
      this.y=0
    } else if (this.y<0){
      this.y=400
    }
    }
}
class g {
  constructor(x,y,xv,yv){
    this.x=200
    this.y=200
    this.xv=2
    this.yv=2
  }
  show(){
    image(gusuke,this.x,this.y,70,70)
  }
  move(){
    if (keyIsPressed){
      if (keyCode==68){
        this.x=this.x+this.xv
      } else if(keyCode==65){
        this.x=this.x-this.xv
      } else if(keyCode==83){
        this.y=this.y+this.yv
      } else if(keyCode==87){
        this.y=this.y-this.yv
      }
    }
  }
  salir(){
    if(this.x>400){
      this.x = 1
    } else if (this.x<0){
      this.x = 400
    }
    if (this.y>400){
      this.y=0
    } else if (this.y<0){
      this.y=400
    }
    }
}
