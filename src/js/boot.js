(function () {
    'use strict';

    function Boot() {
    }

    Boot.prototype = {

        preload: function () {
        },

        create: function () {
            this.game.state.start('preloader');
        }
    };

    window['istaff'] = window['istaff'] || {};
    window['istaff'].Boot = Boot;

}());

