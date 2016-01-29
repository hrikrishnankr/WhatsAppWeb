var Main = Backbone.View.extend({
	tagName : "main",
	render : function(className){
		this.$el.addClass(className);
		return this;
	},
});