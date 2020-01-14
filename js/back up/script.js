$('.lang__text').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('active');
	$('.lang-switch').toggleClass('active');
});

$('.header_menu').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('active');
	$('.menu').toggleClass('active');
	// $('.menu_btm').toggleClass('active');
	$('.menu_text').toggleClass('active');
});

$('.menu-btm').on('click', function(){
	$(this).toggleClass('menu-btm_active');
});

$(function(){
	$("input[name=phone]").mask("+38 (099) 999 99 99");
  });

  
  
  
$('.examples__slider').slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 3
});