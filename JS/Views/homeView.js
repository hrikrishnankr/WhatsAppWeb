var TD=Backbone.View.extend({
	tagName:'td',
	initialize:function(options){
		this.options=options;
	},
	render:function(type){
		if (type=="img"){
			var img = new IMG();
			img.render().$el.addClass("contact_img");
			img.render().$el.attr('src',this.options.img);
			this.$el.append(img.render().el);
		} else if(type=="details"){
			var name = new addSpan(this, "name");
			name.render().$el.html(this.options.name);
			var device = new addSpan(this, "device");
			device.render().$el.html(this.options.device)
			var status = new addDiv(this, "status"); 
			if (this.options.status==null)
				status.render().$el.html("**no status **")
			else
				status.render().$el.html(this.options.status)	
		}

		return this;
	},
	addClass:function(className){
		this.$el.addClass(className);
	}
});

var TR=Backbone.View.extend({
	tagName:'tr',
	initialize:function(){
	},
	render:function(){		
		var imgTd = new TD({ img : this.model.get('imgUrl')});
		var detailsTd = new TD({
			name : this.model.get('name'),
			device : this.model.get('device'),
			status : this.model.get('status')
		});
		imgTd.addClass("imgDiv");
		detailsTd.addClass("detailsDiv")
		this.$el.append(imgTd.render("img").el);
		this.$el.append(detailsTd.render("details").el);
		return this;
	},
});



var TABLE = Backbone.View.extend({
	tagName : 'table',
	initialize : function(){

	},
	allRender:function(type){

		if(type=="contacts"){
			this.$el.empty();
			this.collection.each(function(mod) {
				var tr=new TR({model:mod});
				this.$el.append(tr.render().el);
			}, this);
		} else if(type=="chats"){

		} else if(type=="calls"){

		}else{
			//nothing
		}

		return this;
	},
	render:function(){
		this.allRender();
	}
});

var HomeView=Backbone.View.extend({
	el:'#root',
	initialize:function(options){
		this.options=options;
	},
	render:function(){
		var div1 = addDiv( this , "mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs");
			var header1 = addHeader( div1.render() , "mdl-layout__header mdl-layout__header--waterfall");
		
				var div2 = addDiv( header1.render() , "mdl-layout__header-row");
					var span1 = addSpan( div2.render(), "mdl-layout-title");
					span1.render().$el.html("WhatsApp");
				var div3 = addDiv( header1.render() , "mdl-layout__tab-bar mdl-js-ripple-effect");
					var a1 = addA( div3.render(), "mdl-layout__tab is-active");
					a1.render().$el.attr("href","#fixed-tab-1");
					a1.render().$el.html("CALLS");
					
					var a2 = addA( div3.render(), "mdl-layout__tab");
					a2.render().$el.attr("href","#fixed-tab-2");
					a2.render().$el.html("CHATS");
					
					var a3 = addA( div3.render(), "mdl-layout__tab");
					a3.render().$el.attr("href","#fixed-tab-3");
					a3.render().$el.html("CONTACTS");

		 	var main = addMain( div1.render() , "mdl-layout__content");

		 		var callSection = addSection( main.render() , "mdl-layout__tab-panel is-active");
		 		callSection.addID("fixed-tab-1");
		 			var calls = addDiv( callSection.render() , "page-content");
		 		var chatSection = addSection( main.render() , "mdl-layout__tab-panel");
		 		chatSection.addID("fixed-tab-2");
		 			var chats = addDiv( chatSection.render() , "page-content");
		 		var contactSection = addSection( main.render() , "mdl-layout__tab-panel");
		 		contactSection.addID("fixed-tab-3");
		 			var contacts = addDiv( contactSection.render() , "page-content");

		 	var contactsTable = new TABLE({
		 		collection : this.options.collections.contacts
		 	});
		 	contacts.render().$el.append(contactsTable.allRender("contacts").el);
	},
	remove : function(){
		this.$el.empty().detach();
	}
});
