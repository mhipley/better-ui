$( document ).ready(function() {

	$(".button-bar .button").click(function(){
	 $(this).parent().children().removeClass("active");
	 $(this).addClass("active");
	});

})