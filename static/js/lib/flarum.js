var _ = require('underscore');
var Backbone = require('backbone');

var Flarum = _.clone(Backbone.Events);

// making this global to more easily trigger events from the console
window.Flarum = Flarum;

module.exports = Flarum;