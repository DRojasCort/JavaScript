$(document).on('ready',function(){
	
	//$('#prueba').attr('class','cambielaclase');
	//$('#prueba').removeAttr('class');
/*	$('#prueba').attr('class',function(){
		var cadena = "Hapla world";
		return cadena;	
		});

	var clase = $('#prueba').attr('class');
	alert(clase);
*/
	$('#prueba').attr('class',function(){
		$('a').on('click',function(e){
			e.preventDefault();
			var link = $(this).attr('href');
			alert("Usted está saliento de nuestro sitio")
			location.href=link;
		});

	});

});