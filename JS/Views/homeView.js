var HomeView=Backbone.View.extend({
	el:'#root',
	initialize:function(){
	},
	render:function(){
		var div1 = new DIV();
		div1.addClass("mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs")
		this.$el.append(div1.render().el);

		var header1 = new Header();
		header1.addClass("mdl-layout__header mdl-layout__header--waterfall");
		div1.render().$el.append(header1.render().el)

		
	}
});