// jquery files


//adding splash screen
$("body").append('<div id="splashscreen"><img id="splash-logo" src="img/logofinal.svg"></div>');

//stops scrolling
$('body').addClass('stop-scrolling')

//hiding nav-mobile button
$(".nav-mobile").hide();

//fades #logo on splashcreen
$("#splashscreen img").hide().fadeIn(3000);

//creates button
$("#splashscreen").append("<button type='button' class='btn center-block btn-lg btn-default enter-site'>Enter site</button>");

//enter site button to close splashscreen and start website animations
$(".enter-site").one("click", function(){
	$("#splashscreen").hide();
	$(".nav-mobile").show();
	$('body').removeClass('stop-scrolling')
	$(".image-section").hide().slideDown("slow");
	$("#navbar").children().hide().fadeIn(2500);
});
