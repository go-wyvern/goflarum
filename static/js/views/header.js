var _ = require('underscore');
var $ = require('jquery');

var BaseView = require('./base');

var HeaderView = BaseView.extend({
    className: 'App-drawer',

    template: require('./header.hbs'),

    initialize: function() {
        BaseView.prototype.initialize.apply(this, arguments);
    },

    onReset: function() {
        this.render();
    },
});

module.exports = HeaderView;
