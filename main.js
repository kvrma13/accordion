$(document).ready(function(){
	$("h2").on('click', function(e){
		$(".content").removeClass("show") 
		$(this).find("+ .content").addClass("show")
	})
}) 
	
