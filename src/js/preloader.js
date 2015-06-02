(function () {
    'use strict';

    function Preloader() {
    }

    Preloader.prototype = {

        preload: function () {
            this.load.image('bg', 'assets/background.png');
            this.load.image('imac', 'assets/imac.png');
            this.load.image('mbp', 'assets/mbp.png');
            this.load.image('apple', 'assets/apple.png');
            this.load.image('watch', 'assets/watch.png');
            this.load.image('watch-gold', 'assets/watch-gold.png');
            this.load.image('mac-pro', 'assets/macpro.png');
            this.load.image('iphone', 'assets/iphone.png');
        },

        create: function () {
        },

        update: function () {
            this.game.state.start('menu');
            //this.game.state.start('game');
        }
    };

    window['istaff'] = window['istaff'] || {};
    window['istaff'].Preloader = Preloader;

}());
