//jshint esversion:6

class Boot extends Phaser.Scene{
  constructor(){
    super ({key: "Boot", active: true})
  }

  init(){
    this.URL = this.sys.game.URL;
    this.CONFIG = this.sys.game.CONFIG;
  }

  preload(){
    //Bitmap font for Preload scene
    //..setPath
    this.load.setPath(this.URL + "assets/fonts");
    //..files
    this.load.bitmapFont("ClickPixel", "click_0.png", "click.xml");

    //..setPath
    this.load.setPath(this.URL + "assets/img");
    this.load.image("pr_logo", "PR_logo.png");
  }

  create(){
    //show logo
    this.logo = this.add.image(this.CONFIG.centerX, this.CONFIG.centerY, "pr_logo");
    this.logo.setS

    this.time.addEvent({
      delay: 2000,
      callback:() =>{this.scene.start("Preload"); },
      callbackScope: this
    });
  }
}
