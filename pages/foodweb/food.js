$(document).ready(function(){

	//menu burger
	$('.menu-icon').click(function(){
		$('.menu #nav ul').slideToggle(400,function(){
			$(this).toggleClass('active').css('display','');
		});
	});

	$('.text-intro h2,.text-intro p,.search').css({'opacity': '1','overflow': 'visible'});
	$('.text-intro p').css('margin-top','60px');

	//tabulasi
	$('.tab-menu a').click(function(x){
		$('.tab').removeClass('active');
		$('.tab-menu a').removeAttr('class');
		var target = $(this).attr('href');
		$(target).addClass('active');
		var active = $(this).addClass('active');
		$(active).addClass('active');

		x.preventDefault();
		return false;
	});

});