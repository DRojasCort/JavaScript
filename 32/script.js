
$(document).on('ready',function(){

	var pet = $('#main form').attr('action');
	var met = $('#main form').attr('method');
	
	$('#main form').on('submit',function(e){
			e.preventDefault();
			var info = $('#main form').serialize();
		/*	$.post(pet,info,function(resp,estado,jqXHR){
				console.log(resp);
				console.log(estado);
				console.log(jqXHR);
			});
		*/

/*			pet='lol.php'
			$.post(pet,info).error(function(){console.log("Error")}).success(function(resp,estado,jqXHR){
				console.log(resp);
				console.log(estado);
				console.log(jqXHR);
			});

*/
			$.post('index.html',function(resp){
				console.log(resp);
			});
			/*
			$.ajax({
				beforeSend:function(){
						$('#status').spin({radius:3,width:2,height:2,length:4});
						nom=document.fo.nombre.value;
						m=document.fo.mail.value;
						msj=document.fo.mensaje.value;
				},
				url: pet,
				type: met,
				//data: $('#main.form').serialize()
				data:{nombre:nom, mail:m, mensaje: msj},
				success:function(resp){
							$("#status").html('<img src=\"check.jpg\"/>');
							console.log(resp);
				},
				error:function (jqXHR,estado,error){
							// jqXHR -> Configuraciones de AJAX
							// estado: timeout, error, abort, parsererror
							$("#status").html('<img src=\"error.jpg\"/>');
							console.log(estado);
							console.log(error);
				},
				complete:function (jqXHR,estado){
					//estado: success, notmodified,timeout,error, abort, parserror
							console.log(estado);
				},
				timeout: 10000
			});
			*/
	});
});

