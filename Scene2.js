//main menu
class Scene2 extends Phaser.Scene{
    constructor(){
      super("playGame", {key : 'Scene2'});

    }
  
    create() {
        var oppornot = false
        this.cursors = this.input.keyboard.createCursorKeys()
        this.startbutton = this.add.image(250,250,"playbutton")
        this.startbutton.setOrigin(0,0)
        this.startbutton.setInteractive()

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
        /////////////////////////////////////////////////////////

        /////////////////////////////////////////////////////////
        this.credits = this.add.image(250,350,"credits")
        this.credits.setOrigin(0,0)
        this.credits.setInteractive()
        
        this.credits.on('pointerup',function(){
          console.log("YAY")
          this.scene.start('Scene5');
        },this)

        this.credits.on('pointerover',function(){
          this.credits.setAlpha(0.8)
        },this)

        this.credits.on('pointerout',function(){
          this.credits.setAlpha(1)
        },this)     
        /////////////////////////////////////////////////////////
        this.howtoplay = this.add.image(250,450,'howtoplay')
        this.howtoplay.setOrigin(0,0)
        this.howtoplay.setInteractive()

        this.howtoplay.on('pointerup',function(){
          console.log("YAY")
          this.scene.start('Scene4');
        },this)

        this.howtoplay.on('pointerover',function(){
          this.howtoplay.setAlpha(0.8)
        },this)

        this.howtoplay.on('pointerout',function(){
          this.howtoplay.setAlpha(1)
        },this)     
        ////////////////


    }
}