// site/js/views/book.js
var app = app || {};

app.ContentView = Backbone.View.extend({
	tagName: 'div',
	className: 'mainNewsUnit',
	template: _.template( $('#contentTemplate').html() ),

    initialize: function(){
      this.render();
    },

	events: {
		"click .mainNewsUnitLink": "clickShow"
	},

	clickShow: function(e) {
		var id = $(e.currentTarget).data('id');
		var content = new app.Content({"id": id});
		content.fetch({
		    success: function (model) {
		        console.log(model);
		        var contentShowView = new app.ContentShowView({
					model: model
				});
		    }
		});
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ));
		return this;
	}
});


app.ContentShowView = Backbone.View.extend({
	tagName: 'div',
	className: 'mainNewsUnit',
	template: _.template( $('#contentShow').html() ),

    initialize: function(){
      this.render();
    },

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ));
		$('.mainNews').empty().append(this.$el);
		return this;
	}
});
