$(document).on('ready',function(){
	/*
	$.get('hola.html',function(data){
		//console.log(data);
		$('#receptor').html(data);
	});
	*/
		$.get('holaphp.php',{nombre:"Darwin"},function(data){
		//console.log(data);
		$('#receptor').html(data);
	});


});