$(document).on('ready',function(){
		
	$('ul li').each(function(index,elemento){
		$.data(elemento,'posicion',index);
	});
	$('ul li').each(function(index,elemento){
		console.log($.data(elemento,'posicion'));
	});

});