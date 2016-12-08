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
		        // console.log(JSON.stringify(model));
		        console.log(model);
		        var contentShowView = new app.ContentShowView({
					model: model
				});
		    }
		});
	},

	render: function() {
		// tmpl – это функция, которая принимает JSON-объект и возвращает html
		// мы определили this.el в tagName. Используйте $el для доступа
		// к jQuery-функции html()
		// console.log(this.model)
		// console.log(this.model.toJSON())
		this.$el.html( this.template( this.model.toJSON() ));
		// console.log(this.$el);
		// $('.mainNews').empty().append(this.$el);
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
		// tmpl – это функция, которая принимает JSON-объект и возвращает html
		// мы определили this.el в tagName. Используйте $el для доступа
		// к jQuery-функции html()
		// console.log(this.model)
		// console.log(this.model.toJSON())
		this.$el.html( this.template( this.model.toJSON() ));
		// console.log(this.$el);
		$('.mainLeft').empty().append(this.$el);
		return this;
	}
});
