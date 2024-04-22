//Options/Credits Screen
class Scene4 extends Phaser.Scene{
    constructor() {
        super({ key : 'Scene4' });
    }
    create() {
        this.add.text(25,200,'Use the arrow keys to navigate Algernon through the maze before time runs out.')
        this.add.text(25,250,'If you collect the cheese before/nthe time runs out, you win! If not try again.')
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