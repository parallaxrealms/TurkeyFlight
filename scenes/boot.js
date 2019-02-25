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
  }

  create(){
    this.scene.start("Preload");
  }
}
