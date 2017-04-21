// jquery files

$(".image-section").hide().slideDown("slow");

$("#navbar").children().hide().fadeIn(2500);

//adding splash screen
$("body").append('<div id="splashscreen"></div>');

//adding image to splash
$("#splashscreen").prepend('<div id="splash"></div>')

//stops scroll bar working
$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});
