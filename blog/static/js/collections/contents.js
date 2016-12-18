// site/js/collections/library.js
var app = app || {};

app.Contents = Backbone.Collection.extend({
	model: app.Content,
    urlRoot: '/api/contents/?cat=',
	initialize: function(props){
		this.url = this.urlRoot + props.cat_id;
	} 
});