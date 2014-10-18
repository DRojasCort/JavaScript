
$(document).on('ready',function(){

	var pet = $('#main form').attr('action');
	var met = $('#main form').attr('method');
	
	$('#main form').on('submit',function(e){
			
			e.preventDefault();
			var info = $('#main form').serialize();

			$.getJSON('json.php',info,function(resp){
				//console.log(resp);
				$.each(resp,function(c,v){
					console.log(c+ "=>"+v);
				});
			});
	});
});

