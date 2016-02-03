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
			bubble_pointer.render().$el.html("<img src='#'/>")
		var recordAndSend = addDiv(this , "record_and_send");
			recordAndSend.render().$el.append("<i class='material-icons md-light'>send</i>");
		componentHandler.upgradeDom();
		return this;
	},
});