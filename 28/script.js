
$(document).on('ready',function(){
	/*
	var to = setTimeout('pararAnim()',2000);*/

	$.fx.off=true; // desactiva las animaciones, pero establecelas caracteristicas finales

	$('#caja1').animate({
		marginBottom:0
	},5000,function(){
		$('#caja1').animate({
			backgroundColor:'green',	
			marginTop:-100,
			opacity:0.5
		});
	});//.delay(2000).slideUp();

	//$('#caja1').slideUp().delay(2000).slideDown();
	

});

/*
function pararAnim(){
	$('#caja1').stop();

}*/