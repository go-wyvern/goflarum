var Backbone = require('backbone');

var Flarum = require('./lib/flarum');


var Router = Backbone.Router.extend({
    routes: {
        '': 'index'
    },

    defaultRoute: 'index',

    initialize: function() {
        this.currentRoute = this.defaultRoute;
        this.listenTo(this, 'route', function(route, params) {
            this.currentRoute = route || this.defaultRoute;
            console.log('Route: %o; params: %o', route, params);
        });
    },

    start: function() {
        Backbone.history.start({
            'pushState': true
        });
    },

    index: function() {
        Flarum.trigger('index:show');
    }
});


module.exports = new Router();