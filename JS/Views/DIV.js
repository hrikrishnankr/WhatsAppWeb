var DIV = Backbone.View.extend({
	tagName : "div",
	render : function(className){
		return this;
	},
	addClass:function(className){
		this.$el.addClass(className);
	},
	addID:function(id){
		this.$el.attr('id',id);
	}
});