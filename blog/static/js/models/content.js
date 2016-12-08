// site/js/models/content.js
var app = app || {};

app.Content = Backbone.Model.extend({
    urlRoot : '/api/contents',
    defaults: {
        "id":     '',
        "title":  "title",
        "desc":   "desc desc desc desc desc desc desc desc desc desc desc desc desc desc",
        "img":    "/media/img/timthumb_1.jpg",
        "date":   "dd-mm-yyyy"
    },

    initialize: function(){
        console.log("Created a new Content Model");
    }
});


