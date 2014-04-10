$(document).on('ready',function(){
	
	$('a').on('click',function(evento){
		//evento.preventDefault();
		//evento.pageX;
		console.log($(this).attr('id'));
	});

});