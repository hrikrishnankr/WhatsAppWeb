var messageModel=Backbone.Model.extend({
	defaults:{
		'id':1,
		'message':"meassage text",
		'to':1,
		'from':0,//from=0 means sent message
		'timeStamp':Date.now()
	}
});

var messageCollection=Backbone.Collection.extend({
	model:messageModel
});