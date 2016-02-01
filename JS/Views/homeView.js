//parent = elemetObj.render() because in addfunction parent.$el is calling

function addDiv(parent,_class){
	var div = new DIV();
	div.addClass(_class);
	parent.$el.append(div.render().el);
	return div;
}

function addHeader(parent,_class){
	var header = new Header();
	header.addClass(_class);
	parent.$el.append(header.render().el)
	return header;
}

function addSpan(parent,_class){
	var span = new Span();
	span.addClass(_class);
	parent.$el.append(span.render().el);
	return span;
}

function addA(parent,_class){
	var a = new A();
	a.addClass(_class);
	parent.$el.append(a.render().el);
	return a;
}

function addMain(parent,_class){
	var main = new Main();
	main.addClass(_class);
	parent.$el.append(main.render().el);
	return main;
}

function addSection(parent,_class){
	var section = new Section();
	section.addClass(_class);
	parent.$el.append(section.render().el);
	return section;
}

var HomeView=Backbone.View.extend({
	el:'#root',
	initialize:function(){
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
	}
});
