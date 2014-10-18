var caja1bg,v=0;
$(document).on('ready',function(){
/*
	$('.caja1').mouseover(function(){
		caja1bg = $(this).css('background');
		$(this).css('background','red');
		$(this).html('SOY ROJO :)');
	});

	$('.caja1').mouseout(function(){
		$(this).css('background',caja1bg);
		$(this).html('No soy rojo :(');
	});

*//*
	$('.caja1').on('mouseover',function(){
		caja1bg=$(this).css('background');
		$(this).css('background','red');
		$(this).html('SOY ROJO :)');
	});
	$('.caja1').on('mouseout',function(){
		caja1bg=$(this).css('background');
		$(this).css('background',caja1bg);
		$(this).html('No soy rojo :(');
	});*/
	
	/*
	var f1 =function(){console.log('Pasaste el cursor')};
	var f2 =function(){
		v++;
		caja1bg = $(this).css('background');
		$(this).css('background','red');
		$(this).html('SOY ROJO :)');
		};
	$('.caja1').on({
		'mouseover':f2,
		'mouseout':function(){
		$(this).css('background',caja1bg);
		$(this).html('No soy rojo :(');
		if(v >= 3)
			$('.caja1').off('mouseover',f2);
		}
		
	});
	$('.caja1').on('mouseover',f1);
	*/

	$('.caja1').on('mouseover',function(){
		caja1bg=$(this).css('background');
		$(this).css('background','red');
		$(this).html('SOY ROJO :)');
	});
	$('.caja1').on('mouseout',function(){
		caja1bg=$(this).css('background');
		$(this).css('background',caja1bg);
		$(this).html('No soy rojo :(');
	});

});