class Scene3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene3' });
    }

    create = () => {
        // Defining keyboard keys or whatever idk
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // Define walls and sprite as class properties
        this.walls = this.physics.add.staticGroup();


        this.walls.create(400,500,'bottomboarder');
        this.walls.create(400,100,"bottomboarder");
        this.walls.create(750,300,'sideboarder');
        this.walls.create(50,300,'sideboarder');
        this.walls.create(300,400,'halfwall')
        this.walls.create(100,300,'qwallside')
        this.walls.create(350,300,'qwallside')
        this.walls.create(350,149,'qwallside')
        this.walls.create(450,149,'qwallside')
        this.walls.create(300,125,'hwallup')
        this.walls.create(100,150,'qwallside')
        this.walls.create(500,175,'hwallup')
        this.walls.create(450,425,'hwallup')
        this.walls.create(450,475,'hwallup')
        this.walls.create(400,300,'qwallside')
        this.walls.create(500,300,'qwallside')
        this.walls.create(500,400,'qwallside')
        this.walls.create(550,377,'hwallup')
        this.walls.create(550,425,'hwallup')
        this.walls.create(700,400,'qwallside')

        this.sprite = this.physics.add.sprite(150, 400, 'sprite');

        this.cheese = this.physics.add.sprite(400,400, 'cheese')
        
        // Adding collision
        this.physics.add.collider(this.sprite, this.walls, function(){
        });

        this.physics.add.overlap(this.sprite, this.cheese, function(){
            this.scene.start('Scene6')
        }.bind(this))
        this.time1 = 3;
        
        
        this.timer = this.add.text(250, 50, `You have ${this.time1} seconds left`, { font: "25px Arial", fill: "black", stroke: "white", strokeThickness: 2 });

        
        this.timerEvent = this.time.addEvent({
                delay: 1000,
                callback: this.updateTimer,
                callbackScope: this,
                loop: true
        });
    }

    updateTimer = () => {
        this.time1 = Math.max(0, this.time1 - 1);
        this.timer.setText(`You have ${this.time1} seconds left`);

        if (this.time1 === 0) {
            this.timerEvent.destroy(); // Stop the timer event
            this.scene.start('Scene7');
        }
    }

    update = () => {
        // Movement
        if (this.cursors.right.isDown) {
            this.sprite.setVelocityX(200);
            this.sprite.setRotation(Math.PI / 2); // Rotate 90 degrees clockwise
        } else if (this.cursors.left.isDown) {
            this.sprite.setVelocityX(-200);
            this.sprite.setRotation(-Math.PI / 2); // Rotate 90 degrees counterclockwise
        } else {
            this.sprite.setVelocityX(0);
        }
    
        if (this.cursors.up.isDown) {
            this.sprite.setVelocityY(-200);
            this.sprite.setRotation(0); // Reset rotation when moving up
        } else if (this.cursors.down.isDown) {
            this.sprite.setVelocityY(200);
            this.sprite.setRotation(Math.PI); // Rotate 180 degrees when moving down
        } else {
            this.sprite.setVelocityY(0);
        }
    }
}    
