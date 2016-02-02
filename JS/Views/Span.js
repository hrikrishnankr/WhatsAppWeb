var Span = Backbone.View.extend({
	tagName : "span",
	render : function(){
		return this;
	},
	addClass:function(className){
		this.$el.addClass(className);
	},
	addID:function(id){
		this.$el.attr('id',id);
	}
});