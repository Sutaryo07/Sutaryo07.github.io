$(document).ready(function(){

	//menu burger
	$('.menu-icon').click(function(){
		$('.menu #nav ul').slideToggle(400,function(){
			$(this).toggleClass('active').css('display','');
		});
	});

	$('#header,.text-intro h2,.text-intro p,.text-intro .tombol').css({'opacity': '1','visibility': 'visible'});
	$('.text-intro h2,.text-intro .tombol').css('transform','translateY(0)');
	$('.text-intro p').css('transform','translateX(0)');


	var satu = $('.feature').offset().top/2;
	var dua = $('#produk').offset().top/1.5;
	console.log(satu,dua);

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if (top > satu ) {
			$('.col').css({'opacity': '1','visibility': 'visible'});
			$('.col').css('transform','translateX(0)');
		}
		if(top > dua) {
			$('.col-product').css({'opacity': '1','visibility': 'visible'});
		}
	});

	//tabulasi
	/*$('.tab-menu a').click(function(x){
		$('.tab').removeClass('active');
		$('.tab-menu a').removeAttr('class');
		var target = $(this).attr('href');
		$(target).addClass('active');
		var active = $(this).addClass('active');
		$(active).addClass('active');

		x.preventDefault();
		return false;
	});*/

});