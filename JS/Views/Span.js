var Span = Backbone.View.extend({
	tagName : "span",
	render : function(className){
		this.$el.addClass(className);
		return this;
	},
});