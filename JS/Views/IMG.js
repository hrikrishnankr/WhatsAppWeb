var IMG=Backbone.View.extend({
	tagName : "img",
	render : function(className){
		this.$el.addClass(className);
		return this;
	},

});