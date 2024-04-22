class Scene7 extends Phaser.Scene{
    constructor(){
        super({ key : "Scene7"})
    }
    create(){
        this.startbutton = this.add.image(250,300,'playbutton')
        this.startbutton.setOrigin(0,0)
        this.startbutton.setInteractive()
        this.add.text(275,275,'Try again v')

        this.startbutton.on('pointerup',function(){
            console.log("YAY")
            this.scene.start('Scene3');
          },this)
  
          this.startbutton.on('pointerover',function(){
            this.startbutton.setAlpha(0.8)
          },this)
  
          this.startbutton.on('pointerout',function(){
            this.startbutton.setAlpha(1)
          },this)
    }
}