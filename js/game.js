//jshint esversion:6

// our game's configuration
const config = {
  type: Phaser.AUTO, //Phaser will decide how to render our game (WebGL or Canvas)
  width: 512, // game width
  height: 256, // game height
  parent: "game-container",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300
      },
      debug: true
    }
  },
  pixelArt: true,
  zoom: 2,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

// create the game, and pass it the configuration
const game = new Phaser.Game(config);

var sky;
var player;
let cursors;
let showDebug = true;

function preload() {
    this.load.image("sky","assets/sprites/sky.png");
    this.load.image("player","assets/sprites/turkey1.png");
    this.load.image("tiles", "resources/tilemap.png");
    this.load.tilemapTiledJSON("map", "/assets/tilemaps/tilemap.json");
}

function create() {
  const map = this.make.tilemap({key: "map"});

  this.add.image(0, 0, 'sky').setOrigin(0,0);

  const tileset = map.addTilesetImage("tilemap", "tiles");

  const backgroundLayer = map.createStaticLayer("Background", tileset, 0, 0);
  const foregroundLayer = map.createStaticLayer("Foreground", tileset, 0, 0);

  foregroundLayer.setCollisionByProperty({ collides: true });

  player = this.physics.add.sprite(100, 45, "player");
  player.setCollideWorldBounds(true);

  // Watch the player and worldLayer for collisions, for the duration of the scene:
    this.physics.add.collider(player, foregroundLayer);

    cursors = this.input.keyboard.createCursorKeys();
    // Debug graphics
      this.input.keyboard.once("keydown_D", event => {
        // Turn on physics debugging to show player's hitbox
        this.physics.world.createDebugGraphic();

        // Create worldLayer collision graphic above the player, but below the help text
        const graphics = this.add
          .graphics()
          .setAlpha(0.75)
          .setDepth(20);
        foregroundLayer.renderDebug(graphics, {
          tileColor: null, // Color of non-colliding tiles
          collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
          faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        });
      });
}

function update(time, delta) {
  if (cursors.left.isDown)
  {
      player.setVelocityX(-160);
  }
  else if (cursors.right.isDown)
  {
      player.setVelocityX(160);
  }
  else
  {
      player.setVelocityX(0);
  }

  if (cursors.up.isDown && player.body.touching.down)
  {
      player.setVelocityY(-330);
  }

}
