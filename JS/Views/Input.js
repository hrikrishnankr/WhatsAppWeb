var Input = Backbone.View.extend({
	tagName : "input",
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