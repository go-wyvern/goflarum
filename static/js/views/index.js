var $ = require('jquery');

window.jQuery = $;
var bootstrap = require('bootstrap'); //eslint-disable-line no-unused-vars
var bootbox = require('bootbox');

var Pubsub = require('../lib/flarum');
var AppState = require('../app_state');

var BaseView = require('./base');

var IndexView = BaseView.extend({
    className: 'App-content',

    template: require('./index.hbs'),

    initialize: function() {
        BaseView.prototype.initialize.apply(this, arguments);
    },
});

module.exports = IndexView;
