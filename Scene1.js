//loads everything
class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }

    preload() {
        this.load.image("background","spritesnstuff/images/background.jpg")
        this.load.image("playbutton","spritesnstuff/images/playbutton.png")
        this.load.image("oppositionbutton","spritesnstuff/images/opposition.png")
        this.load.image("back","spritesnstuff/images/backbutton.png")
        this.load.image("placeholder","spritesnstuff/images/startplaceholder.png")
        this.load.image('credits','spritesnstuff/images/creditsbutton.png')
        this.load.image('50x100','spritesnstuff/images/50x100wall.png')
        this.load.image('sprite','spritesnstuff/images/mouse.png')
        this.load.image('400x300','spritesnstuff/images/400x300.jpg')
        this.load.image('300x200','spritesnstuff/images/300x220.jpg')
        this.load.image('trimble','spritesnstuff/images/trimble1_1.png')
        this.load.image('REID','spritesnstuff/images/REID.jpg')
        this.load.image('bottomboarder','spritesnstuff/images/bottomboarder.png') 
        this.load.image('sideboarder','spritesnstuff/images/sideboarder.png')
        this.load.image('halfwall','spritesnstuff/images/5x200.png')
        this.load.image('qwallup','spritesnstuff/images/5x100.png')
        this.load.image('cheese','spritesnstuff/images/cheese.png')
        this.load.image('qwallside','spritesnstuff/images/qwallside.png')
        this.load.image('hwallside','spritesnstuff/images/50x5.png')
        this.load.image('hwallup','spritesnstuff/images/5x50.png')
        this.load.image('okbutton','spritesnstuff/images/ok.png')
        this.load.image('trophy','spritesnstuff/images/trophy.png')
        this.load.image('howtoplay','spritesnstuff/images/howtoplay.png')

        this.load.audio('menumusic','spritesnstuff/sounds/aloelite8bit.mp3')
    }
    create() {
      this.add.text(20, 20, "Loading game...",{font: "25px Arial", fill: "yellow"});
      this.scene.start("playGame");
    }
  }