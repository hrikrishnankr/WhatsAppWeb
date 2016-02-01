$(document).ready(function(){
  $("main").scroll({
        	    previousTop: 0
    		}, 
		function() {
		var currentTop = $("main").scrollTop();
		if (currentTop <this.previousTop) {
			$(".mdl-layout__header-row").show();
			$(".mdl-layout__header").css("min-height","56px");
			$(".mdl-layout__tab-bar-container").show();
			console.log("up");
   		 } else {
			$(".mdl-layout__header-row").hide();
			$(".mdl-layout__header").css("min-height","48px");
			console.log("down");
   		 }   
		this.previousTop = currentTop;   		
  });
   
  $("main").on("mousewheel", function() {
    if($("main").scrollTop() > 10){
	$(".mdl-layout__header-row").hide();
	$(".mdl-layout__header").css("min-height","48px");
    } else {
	$(".mdl-layout__header-row").show();
	$(".mdl-layout__header").css("min-height","56px");
    }

  });
});