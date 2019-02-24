//jshint esversion:6
function resizeApp(){
    // Width-height-ratio of game resolution
    // Replace 360 with your game width, and replace 640 with your game height
    let game_ratio = 360 / 640;

    // Make div full height of browser and keep the ratio of game resolution
    let div = document.getElementById("game-container");
    div.style.width = (window.innerHeight * game_ratio) + 'px';
    div.style.height = window.innerHeight + 'px';

    // Check if device DPI messes up the width-height-ratio
    let canvas	= document.getElementsByTagName('canvas')[0];

    let dpi_w	= parseInt(div.style.width) / canvas.width;
    let dpi_h	= parseInt(div.style.height) / canvas.height;

    let height	= window.innerHeight * (dpi_w / dpi_h);
    let width	= height * game_ratio;

    // Scale canvas
    canvas.style.width	= width + 'px';
    canvas.style.height	= height + 'px';
}

function runApp(){
  "use strict";

  //Init the Phaser game App
  let app = new App();
  app.start();

  //Scale to Device
  window.addEventListener("resize", resizeApp);
  resizeApp();
}

window.onload = function(){
    "use strict";

    //Check ES6
    try{
      eval("let i = 0");
      eval("const _dev = true");
    }
    catch (e){
      alert("This browser is not supported. Use Chrome or Firefox.");
      return false;
    }

    //Launch game
    runApp();
}
