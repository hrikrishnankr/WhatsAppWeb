var contacts=new contactsCollection([{
	'id':1,
	'imgUrl':'images/anees.jpeg',
	'name':'Anees',
	'device': 'MOBILE',
	'status' : null,
	'phoneNumber':"9785261546",
},{
	'id':2,
	'imgUrl':'images/rohit.jpeg',
	'name':'Rohit',
	'device': 'MOBILE',
	'status' : null,
	'phoneNumber':"8785221537",
},{
	'id':3,
	'imgUrl':'images/geethu.jpeg',
	'name':'Geethu',
	'device': 'MOBILE',
	'status' : null,
	'phoneNumber':"8124281566",
},{
	'id':4,
	'imgUrl':'images/dan.jpeg',
	'name':'Dan',
	'device': 'MOBILE',
	'status' : null,
	'phoneNumber':"9947111312",
},{
	'id':5,
	'imgUrl':'images/hawari.jpeg',
	'name':'Hawari',
	'device': 'MOBILE',
	'status' : null,
	'phoneNumber':"9656811208",
},{
	'id':6,
	'imgUrl':'images/akshaya.jpeg',
	'name':'akshaya',
	'device': 'MOBILE',
	'status' : null,
	'phoneNumber':"9447161189",
},{
	'id':7,
	'imgUrl':'images/mahima.jpeg',
	'name':'mahima',
	'device': 'MOBILE',
	'status' : null,
	'phoneNumber':"9646116312",
}]);


var homeView=new HomeView({
	collections :{ 
		contacts: contacts
	}
});

homeView.render();