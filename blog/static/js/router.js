// site/js/router.js

var AppRouter = Backbone.Router.extend({
    routes: {
        "posts/:id": "articleShow",
        // matches http://example.com/#anything-here
    }
});
// Initiate the router
var app_router = new AppRouter;

app_router.on('route:articleShow', function(id) {
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
});

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();