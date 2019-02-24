//jshint esversion:6
const App = function(){
  'use strict';

  this.VERSION = '0.0.1';
  this.IS_DEV = true;
};

App.prototype.start = function(){
    'use strict';

    //Scenes
    let scenes = [];

    scenes.push(Boot);
    scenes.push(Preload);
    scenes.push(Menu);

    //Game configuration
    const config = {
      type: Phaser.AUTO, //Phaser will decide how to render our game (WebGL or Canvas)
      width: 360/2, // game width
      height: 640/2, // game height
      parent: "game-container",
      title: "Turkey 'flight'",
      url: "http://christiancassara.com/turkeyflight/",
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
      zoom: 1,
      scene: scenes,
    };

    //Create Game
    let game = new Phaser.Game(config);

    //Globals
    game.IS_DEV = this.IS_DEV;
    game.VERSION = this.VERSION;

    game.URL = "";
    game.CONFIG = {
      width: config.width,
      height: config.height,
      centerX: Math.round(0.5 * config.width),
      centerY: Math.round(0.5 * config.height),
      tile: 16
    };

    //Sound
    game.sound_on = true;
};
