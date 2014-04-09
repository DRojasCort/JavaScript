$(document).on('ready',function(){
	//console.log($('header img').width());
	//console.log($('header img').width(100));
	//console.log($('header img').css('width'));
	//console.log	($('#e1').height(50));
	var pos = $("#e2 p").position();
	var pos2 = $("#e2 p").offset();
	console.log('Posicion left: ' + pos.left + ' Posicion top: ' + pos.top);
	console.log('Posicion left: ' + pos2.left + ' Posicion top: ' + pos2.top);


});