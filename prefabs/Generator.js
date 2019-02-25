// jshint esversion:6

class Generator {
  constructor(ctx) {
    this.CONFIG = ctx.CONFIG;
    this.DEPTH = ctx.DEPTH;

    this.ctx = ctx;

    this.cols = 20;
    this.rows = 1;

    this.layers = {
      floor:[],
      clouds:[],
      obstacles:[],
      planes:[],
      pickups:[],
      overlay: false
    };
  }

  setup() {
    this.createFloor();
  }

  //Update
  update(){
    this.scrollFloor();
  }

  //Floor Layer
  createFloor(){
    let x;
    let y;
    let spr;

    //Draw  bigger than camer view height
    let cols = this.cols + 1;
    let rows = this.rows;

    //Save tiles in array
    let floor = [];

    //Loop col and rows
    for(let ty = 0 ; ty < rows ; ty++){
      floor[ty] = [];

      for (let tx = 0 ; tx < cols ; tx++){
        x = (tx * this.CONFIG.tile);
        y = (ty * this.CONFIG.tile);

        spr = this.ctx.add.sprite(x,y,"tileset");
        spr.setOrigin(0, -10);
        spr.setDepth(this.DEPTH.floor);

        floor[ty][tx] = spr;
      }
    }

    //Save Floor array in generator layers
    this.layers.floor = floor;
  }

  scrollFloor(){

  }

  destroyFloorCol(){

  }

  appendFloorCol(){

  }

}
