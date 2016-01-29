var A = Backbone.View.extend({
	tagName : "a",
	render : function(className){
		this.$el.addClass(className);
		return this;
	},
});