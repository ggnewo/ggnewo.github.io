var config = {
    type : Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#5b615d",
    autoResize: true,
    scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7],
    physics : {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 },
          fps: 144
      }
  },
    fps: {
      target: 144,
      forceSetTimeOut: true
  },
}

var gameSettings = {
  playerSpeed : 1
}
var game = new Phaser.Game(config,gameSettings);