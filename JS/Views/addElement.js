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
