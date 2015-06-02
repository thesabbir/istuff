window.onload = function () {
  'use strict';

  var game
    , ns = window['istaff'];

  game = new Phaser.Game(1000, 625, Phaser.AUTO, 'istaff-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);
  /* yo phaser:state new-state-files-put-here */

  game.state.start('boot');
};
