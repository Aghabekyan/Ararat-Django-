// site/js/views/library.js
var app = app || {};

app.ContentsView = Backbone.View.extend({
	el: '.mainNews',

	initialize: function( contents ) {
		this.$el.empty();
		this.render();
	},
	// отображение библиотеки посредством вывода каждой книги из коллекции
	render: function() {
		self = this;
		this.collection.each(function( item ) {
			var contentView = new app.ContentView({ model: item	});
			self.$el.append( contentView.render().el );
		});
	},
	

});