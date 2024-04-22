//Credits Screen
class Scene5 extends Phaser.Scene{
    constructor() {
        super({ key : 'Scene5' });
    }
    create() {
        this.graysquare = this.add.image(50,35,'300x200')
        this.graysquare.setOrigin(0,0)
        this.graysquare.setScale(2.3)

        this.add.text(270,525,"Made with <3 by Owen P", {fill: "black"})
        this.add.text(75,100,"Music Used:", {fill: "black"})
        this.add.text(75,150,"Aloe Lite - 8 Bit / Good Kid (not actually used because it was sucking)", {fill: "black"})
        this.add.text(75,200,"Hosted on github.com", {fill: "black"})
        this.add.text(75,250,'All other assests made by me :) ', {fill: "black"})
            
        this.backbutton = this.add.image(375,400,'back')
        this.backbutton.setInteractive()

        this.backbutton.on('pointerup',function(){
            console.log("YAY")
            this.scene.start("playGame");
          },this)
  
          this.backbutton.on('pointerover',function(){
            this.backbutton.setAlpha(0.8)
          },this)
  
          this.backbutton.on('pointerout',function(){
            this.backbutton.setAlpha(1)
          },this)     


    }
}