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
		"click .read": "clickShow",
		"click .delete": "deleteNews",
		"dblclick .mainNewsUnitLink b": "dbclickEvent",		
		"click .titleOk": "clickTitleOk"		
	},

	clickShow: function(e) {
		var id = $(e.currentTarget).data('read');
		var content = new app.Content({"id": id});
		content.fetch({
		    success: function (model) {
		        var contentShowView = new app.ContentShowView({
					model: model
				});
		    }
		});
	},

	deleteNews: function(e) {
		var id = $(e.currentTarget).data('delete');
		var content = new app.Content({"id": id});
		content.destroy({
		    success: function (model) {
		        // this.$el.addClass('active');
		        console.log(e.currentTarget.closest( ".mainNewsUnit" ).remove());
		    }
		});
	},

	dbclickEvent: function(e) {
		var htmlString = $( e.target ).html();
		var id = $( e.target ).parent().data('id');
		console.log(id);
		$( e.target ).empty();
		$('<input>').attr({
		    type: 'text',
		    class: 'foo',
		    id: id,
		    name: 'bar',
		    value: htmlString,
		}).appendTo($( e.target ));
		$('<input>').attr({
		    type: 'button',
		    class: 'titleOk',
		    id: id,
		    value: 'OK',
		}).appendTo($( e.target ));
	},

	clickTitleOk: function(e) {
		var htmlString = $( e.target ).html();
		var id = $( e.target ).parent().data('id');
		$( e.target ).empty();
		$('<input>').attr({
		    type: 'text',
		    class: 'foo',
		    id: id,		    
		    name: 'bar',
		    value: htmlString
		}).appendTo($( e.target ));
		$('<input>').attr({
		    type: 'button',
		    class: 'titleOk',
		    id: id,
		    value: 'OK',
		}).appendTo($( e.target ));
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
