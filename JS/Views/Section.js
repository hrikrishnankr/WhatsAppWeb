var Section = Backbone.View.extend({
	tagName : "section",
	render : function(className){
		this.$el.addClass(className);
		return this;
	},
});