var sendTab = Backbone.View.extend({
	el : ".message_insert",
	render : function(){
		var form = new Form();
		this.$el.append(form.render().el);
		componentHandler.upgradeDom();
		return this;
	},
});