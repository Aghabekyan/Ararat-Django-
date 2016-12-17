// site/js/collections/library.js
var app = app || {};

app.Contents = Backbone.Collection.extend({
	model: app.Content,
    url: '/api/contents/',
});