
$(document).on('ready',function(){
	$('#caja1').animate({
		marginBottom:0
	},800,function(){
		$('#caja1').animate({
			backgroundColor:'green',	
			marginTop:-100,
			opacity:0.5
		});
	});

});