//jshint esversion:6
class Preload extends Phaser.Scene {
  constructor() {
    super({
      key: "Preload",
      active: false
    })
  }

  init() {
    //Globals
    this.URL = this.sys.game.URL;
    this.CONFIG = this.sys.game.CONFIG;
  }

  preload() {
    //background
    this.bg = this.add.graphics({
      x: 0,
      y: 0
    });
    this.bg.fillStyle("0x0484d1", 1);
    this.bg.fillRect(0, 0, this.CONFIG.width, this.CONFIG.height);

    //Create Loading Bar
    this.createLoadingBar();

    //Load Spritesheets
    //...path
    this.load.setPath(this.URL + "assets/img");
    //..files
    this.load.image("sky", "sky.png");

    this.load.spritesheet("sprite-player", "turkey_spritesheet.png", {
      frameWidth: 32,
      frameHeight: 32,
      endFrame: 5,
      margin: 0,
      spacing: 0
    });

    this.load.spritesheet("tileset", "tilemap.png", {
      frameWidth: 32,
      frameHeight: 32,
      endFrame: 23,
      margin: 0,
      spacing: 0
    });


  }

  create() {
    //Go To Menu Scene
    this.time.addEvent({
      delay: 1000,
      callback:() =>{this.scene.start("Menu"); },
      callbackScope: this
    });
  }

  createLoadingBar() {
    // Title
    this.title = new Text(
      this, // ctx argument, reference to the Preload scene
      this.CONFIG.centerX, // x-coordinate
      75, // y-coordinate
      'Loading Game', // string to write
      'preload', // styling key
      0.5 // origin
    );

    // Progress text
    this.txt_progress = new Text(
      this,
      this.CONFIG.centerX,
      this.CONFIG.centerY - 25,
      'Loading...',
      'preload', {
        x: 0.5,
        y: 1
      }
    );

    //Progress Bar
    let x = 10;
    let y = this.CONFIG.centerY + 5;
    let w = this.CONFIG.width - 2 * x;
    let h = 18;
    this.progress = this.add.graphics({
      x: x,
      y: y
    });
    this.border = this.add.graphics({
      x: x,
      y: y
    });

    //Progress callback
    this.load.on("progress", this.onProgress, this);
  }

  onProgress(val) {
    // Width of progress bar
    let w = this.CONFIG.width - 2 * this.progress.x;
    let h = 36;

    this.progress.clear();
    this.progress.fillStyle('0xFFFFFF', 1);
    this.progress.fillRect(0, 0, w * val, h);

    this.border.clear();
    this.border.lineStyle(4, '0x4D6592', 1);
    this.border.strokeRect(0, 0, w * val, h);

    // Percentage in progress text
    this.txt_progress.setText(Math.round(val * 100) + '%');
  }
}
