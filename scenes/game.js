//jshint esversion:6
class Game extends Phaser.Scene
{
  constructor(){
    super({key: "Game", active: false});
  }

  init(){
    this.CONFIG = this.sys.game.CONFIG;

    this.DEPTH = {
      floor: 1
    };

    this.generator = new Generator(this);

    //Main Flags
    this.allow_input = false;
    this.is_paused = false;
    this.is_gameover = false;
  }

  create() {
    //create sky
    this.add.image(320, 180, "sky");

    //create floor
    this.generator.setup();
  }

  update(time, delta) {
      //camera moves right
      this.updateCamera();

      //Draw new floor tiles

      //Delete passed tiles
      this.generator.update();


  }

  //camera
  updateCamera(){

  }
  setCamSpeed(){

  }
}
