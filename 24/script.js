
$(document).on('ready',function(){

	var elem = $('.caja1');
	$('#btn1').click(function(){
		//elem.show();
		//elem.slideDown();
		elem.fadeIn(5000);
		//elem.slideToggle();
	});
	$('#btn2').click(function(){
		//elem.hide();		
		//elem.slideUp();
		elem.fadeOut('slow');
		//elem.slideToggle(); //lo mismo que el SLIDE Slide Down y Up
	});

});