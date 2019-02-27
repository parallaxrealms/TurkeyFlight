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

    //camera
    this.cam_speed = {
      base : 1,
      current: 1,
      max: 1
    };
  }

  create() {
    this.bgSky = this.add.image(320, 180, "sky");

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
    // Scroll camera
    this.cameras.main.setScroll(
        this.cameras.main.scrollX + this.cam_speed.current,
        0
	);
  // Scroll sky
    this.bgSky.setScrollFactor(0);
  }
  setCamSpeed(speed){
    this.cam_speed.base = speed;
    this.cam_speed.current = speed;

    this.cam_speed.current = Math.min(
        this.cam_speed.current,
        this.cam_speed.max
    );

    this.cam_speed.current = Math.max(
        this.cam_speed.current,
        0
    );
  }
}
