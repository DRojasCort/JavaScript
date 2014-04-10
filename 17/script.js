$(document).on('ready',function(){
		
	//console.log($('#primero').next().text());
	//console.log($('#test').parent().text();
	//console.log($('#padre').children().attr('id'));
	//console.log($('#primero').siblings());
	
	$('ul li').each(function(index,elemento){
		console.log("El elemento número: "+index+" contiene este texto: "+ $(elemento).text());

	});

});