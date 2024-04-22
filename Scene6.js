class Scene6 extends Phaser.Scene{
    constructor(){
        super({ key : "Scene6"})
    }
    create(){
        this.add.image(300,300,'trophy')
        this.add.text(400,400,'Press to play again ^')
        this.add.text(400,420,'Press to go back to the homescreen v')
        this.startbutton = this.add.image(500,350,'playbutton')
        this.startbutton.setInteractive()
        this.backbutton = this.add.image(700,475,'back')
        this.backbutton.setInteractive()

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