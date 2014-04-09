$(document).on("ready",function(){
	$(document).on("click",function(){
			$("#test").toggleClass("test");
			//$("#test2").removeClass("test");
			if($('#test').hasClass("test"))
				$('#test').text("Hello ... soy ROJO");
			else
				$('#test').text("Hello ... NO soy ROJO");
		});
	});

