var Header = Backbone.View.extend({
	tagName : "header",
	render : function(){
		return this;
	},
	addClass : function(className){
		this.$el.addClass(className);
	},
});