$(document).on('ready',function(){
	
	$.fx.speeds.lento = 3000;
	$.fx.speeds.muyrapido = 100;
	$('#boton').on('click',function(){
		$('#ejemplo').fadeOut('lento',function(){
			//$('body').append('El elemento se ha borrado')
			$(this).remove();
			$(this).fadeIn();
		});
	});
});