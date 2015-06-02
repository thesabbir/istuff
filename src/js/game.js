(function () {
    'use strict';

    function Game() {
        this.gadgets = null;
        this.gadgetsChoice = ['imac', 'mbp', 'watch', 'watch-gold', 'mac-pro', 'iphone'];

    }

    Game.prototype = {

        create: function () {
            this.physics.startSystem(Phaser.Physics.ARCADE);

            this.add.image(0, 0, 'bg');
            this.gadgets = this.add.group();
            this.gadgets.enableBody = true;
            var self = this;
            setInterval(function () {
                self.gadget = self.gadgets.create(self.world.randomX, 0, self.rnd.pick(self.gadgetsChoice));
                self.gadget.body.velocity.y = 200;
            }, 900);
        },

        update: function () {
        },

        onInputDown: function () {
        }

    };

    window['istaff'] = window['istaff'] || {};
    window['istaff'].Game = Game;

}());
