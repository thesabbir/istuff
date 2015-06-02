(function () {
    'use strict';

    function Menu() {
        this.titleTxt = null;
        this.startTxt = null;
    }

    Menu.prototype = {

        create: function () {
            this.titleTxt = this.add.text(20, 20, 'iStuff', {fontSize: '20px', fill: '#fff'});
            this.startTxt = this.add.text(this.world.centerX, this.world.centerY, 'Press SPACE BAR to Start!!', {
                fontSize: '20px',
                fill: '#eee'
            });
        },

        update: function () {
            if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                this.onDown();
            }
        },

        onDown: function () {
            this.game.state.start('game');
        }
    };

    window['istaff'] = window['istaff'] || {};
    window['istaff'].Menu = Menu;

}());
