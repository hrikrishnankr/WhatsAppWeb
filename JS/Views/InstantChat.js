var InstantChat = Backbone.View.extend({
	el:'#root',
	render : function(){
		this.remove();
		componentHandler.upgradeDom();
		var div1 = addDiv( this , "mdl-layout mdl-js-layout mdl-layout--fixed-header");
			var header1 = addHeader( div1.render() , "mdl-layout__header");
		
				var div2 = addDiv( header1.render() , "mdl-layout__header-row");
					var backdiv = addDiv( div2.render() , "back_div");
					backdiv.render().$el.attr("onclick",'').click(new Function("app_router.navigate('', {trigger: true, replace: true});"));
					backdiv.render().$el.html("<i class='material-icons md-36'>keyboard_backspace</i>")

				var img = new IMG();
				img.render().$el.addClass("instant_chat_img");
				img.render().$el.attr('src',this.model.get('imgUrl'));
				div2.render().$el.append(img.render().el);
					
				var name = addSpan( div2.render(), "mdl-layout-title");
				name.render().$el.html(this.model.get('name'));
			var messgeShowingDiv = addDiv( div1.render(), "meassge_show");
			var messageInsertDiv = addDiv( div1.render(), "message_insert");
				var sendtab = new sendTab();
				messageInsertDiv.render().$el.append(sendtab.render().el);
		componentHandler.upgradeDom();
	},
	remove : function(){
		this.$el.empty();
	}
});