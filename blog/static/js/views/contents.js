// site/js/views/library.js
var app = app || {};

app.ContentsView = Backbone.View.extend({
	el: '.mainNews',
	initialize: function( contents ) {
		this.collection = new app.Contents( contents );
		this.render();
	},
	// отображение библиотеки посредством вывода каждой книги из коллекции
	render: function() {
		this.collection.each(function( item ) {
			this.renderContent( item );
		}, this );
	},
	// отображение книги с помощью создания представления BookView
	// и добавления отображаемого элемента в элемент библиотеки
	renderContent: function( item ) {
		var contentView = new app.ContentView({
			model: item
		});

		// console.log(contentView.render().el);
		// console.log(item.fetch());
		this.$el.append( contentView.render().el );
	},

	// events:{
	// 	'click #add':'addBook'
	// },
	
	// addBook: function( e ) {
	// 	e.preventDefault();
	// 	var formData = {};
	// 	$( '#addBook div' ).children( 'input' ).each( function( i, el ) {
	// 		if( $( el ).val() != '' ){
	// 			formData[ el.id ] = $( el ).val();
	// 		}
	// 	});
	// 	this.collection.add( new app.Content( formData ) );
	// },


});