$(document).ready(function(){
	$('.menu-icon').click(function(){
		$('.menu #nav ul').slideToggle(400,function(){
			$(this).toggleClass('active').css('display','');
		});
	});

	$('.scroll').click(function(xx){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
	}, 1000);
		xx.preventDefault();
		return false;
	});

	$(window).scroll(function(){
		var diff = $(this).scrollTop();
		if(diff > 0){
			$('.menu').css({'height':'60px;','overflow':'visible','opacity':'1'}).addClass('fixed');
		}else{
			$('.menu').removeClass('fixed');
		}
	})

	$('.header .intro h2').css({'opacity':'1','transform':'translateY(0px)'});
	$('.header .intro p').css({'opacity':'1','transform':'translateY(0px)'});
	$('.header .intro #tombol').css({'opacity':'1','margin-left':'0px'});
	$('.header .intro #tombol2').css('opacity','1');
})