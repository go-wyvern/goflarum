var $ = require('jquery');

window.jQuery = $;
var bootstrap = require('bootstrap'); //eslint-disable-line no-unused-vars
var bootbox = require('bootbox');

var Flarum = require('../lib/flarum');
var Router = require('../router');

var BaseView = require('./base');
var HeaderView = require('./header');
var IndexView = require('./index');

var AppView = BaseView.extend({
    // not a fan of setting a view's el to an existing element on the page
    // for the top-level AppView, it seems appropriate, however
    el: '#container',

    initialize: function() {
        BaseView.prototype.initialize.apply(this, arguments);

        this.listenTo(Flarum, 'index:show', this.showIndex);

        this.render();
    },

    postRender: function() {
        this.appendSubview(new HeaderView());
    },

    showView: function(f) {
        window.scrollTo(0, 0);
        if (this.currentView) {
            this.currentView.remove();
        }
        this.currentView = f();
        this.appendSubview(this.currentView);
    },

    showIndex: function() {
        this.showView(function() {
            return new IndexView();
        });
    }
});

module.exports = AppView;
