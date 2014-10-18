$(document).on('ready',function(){
	
	$('#boton').on('click',function(){
		$('#ejemplo').slideUp('slow','easeOutBounce');	// fast swing linear -> "../js/jquery.easing.1.3.js"
		$(this).animate({
			height:['+=100','easeOutBounce'],
			width:['+=50','linear']
		})
	});

});