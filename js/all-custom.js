// JavaScript Document

$('.owl-new-slider').owlCarousel({
    loop:true,
	autoPlay:true,
    margin:0,
    nav:true,
	items:1,
	dots:false,
})

$('.hamber_menu').click( function(e){
	$(this).toggleClass('up');
	$('nav').toggleClass('open');	
	$('main, .banner').toggleClass('blur');	
	e.stopPropagation();
});
$('nav').click( function(e){
	e.stopPropagation();
})
$(document).click(function(){
	$("main, .banner").removeClass('blur');
	$("nav").removeClass('open');
	$(".hamber_menu").removeClass('up');
});

$('.updates').click(function(){
	$('.asid_bar').addClass('open');
});
$('.asid_bar .fa-times').click(function(){
	$('.asid_bar').removeClass('open');
});







$(window).scroll(function(){
	if ($(this).scrollTop() > 200) {
		$('.scroltop').fadeIn();
	} else {
		$('.scroltop').fadeOut();
	}
}); 

$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
}); 

 
 
$( function() {
$( "#datepicker" ).datepicker();
} );
 
$(window).scroll(function(){
  var sticky = $('.site-header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});



$(".artical_scroll").mCustomScrollbar({
	axis:"y",
	scrollbarPosition:"outside",
});