var Main = Backbone.View.extend({
	tagName : "main",
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