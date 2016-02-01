var Header = Backbone.View.extend({
	tagName : "header",
	render : function(){
		return this;
	},
	addClass : function(className){
		this.$el.addClass(className);
	},
	addID:function(id){
		this.$el.attr('id',id);
	}
});