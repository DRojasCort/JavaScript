$(document).on('ready',function(){

		$.getScript('http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js',function(){
			console.log("Termino");
			$('#ejemplo').slideUp(3000,'easeOutBounce');
		});
	});
