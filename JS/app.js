var contacts=new contactsCollection([{
	'id':1,
	'name':'Anees',
	'phoneNumber':"9785261546",
	'imgUrl':'/'
},{
	'id':2,
	'name':'Rohit',
	'phoneNumber':"8785221537",
	'imgUrl':'/'
},{
	'id':3,
	'name':'Geethu',
	'phoneNumber':"8124281566",
	'imgUrl':'/'
},{
	'id':4,
	'name':'Dan',
	'phoneNumber':"9947111312",
	'imgUrl':'/'
}]);


var homeView=new HomeView({
	collection : contacts
});

homeView.render();