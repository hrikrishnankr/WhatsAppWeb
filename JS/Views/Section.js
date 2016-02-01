var Section = Backbone.View.extend({
	tagName : "section",
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