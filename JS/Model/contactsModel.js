var contactsModel=Backbone.Model.extend({
	defaults:{
		'id':1,
		'name':"name",
		'phoneNumber':"999999999",
		'imgUrl':"",
	},
	urlRoot : '/Users'
});

var contactsCollection=Backbone.Collection.extend({
	model:contactsModel
});