var AppRouter = Backbone.Router.extend({
    routes: {
        "": "defaultRoute",
        "contacts/:id":"newChat"
    }
});

