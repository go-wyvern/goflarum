var $ = require('jquery');
var Backbone = require('backbone');

var Pubsub = require('./lib/flarum');
var Router = require('./router');

var AppView = require('./views/app');

Backbone.$ = $;

var start = function() {
    new AppView();
    Router.start();
};

start();