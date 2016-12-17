// site/js/views/book.js
var app = app || {};

app.HeaderView = Backbone.View.extend({
	el: '#header',
	template: _.template( $('#headerShow').html() ),

    initialize: function(){
      this.render();
    },


	events: {
		"click .menu a": "clickShow"
	},

	clickShow: function(e) {
		var cat_id = $(e.currentTarget).data('cat');
		var contents = new app.Contents();
		contents.fetch({
		    success: function (collection) {
				new app.ContentsView({collection:collection})
		    }
		});
	},


	render: function() {
		this.$el.html( this.template( {} ));
		return this;
	}
});

console.log(5);


