var Backbone = require('backbone');
var _ = require('underscore');

var AppState = Backbone.Model.extend({
    defaults: function() {
        return {
            'VERSION': '1.0.0',
        };
    },

    url: function(url) {
        return '/api' + url;
    }
});

var appState = new AppState();

window.AppState = appState;

module.exports = appState;