var sendTab = Backbone.View.extend({
	el : ".message_insert",
	render : function(){
		var message_div = addDiv( this , "message_div");
			message_div.render().$el.append("<i class='material-icons'>mood</i>");

			var message_input = new Input();
			message_input.addClass("message_input")
			message_input.render().$el.attr("placeholder","Type a message")
			message_div.render().$el.append(message_input.render().el);

			message_div.render().$el.append("<i class='material-icons' id='camera_alt'>camera_alt</i>");

		var bubble_pointer = addDiv(this , "bubble_pointer");
		var recordAndSend = addDiv(this , "record_and_send");
			recordAndSend.render().$el.attr("onclick",'').click(new Function("app_router.navigate('send', {trigger: true, replace: true});"));
			recordAndSend.render().$el.append('<button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect ">'+
												'<i class="material-icons md-light">send</i></button>');
			componentHandler.upgradeDom();
		return this;
	},
});