var HomeView=Backbone.View.extend({
	el:'#root',
	initialize:function(){
	},
	render:function(){
		var div=new DIV();
		this.$el.append(div.render().el);
	}
});