//navigation open
$(function() {
  $('.nav-toggle').on('click', function() {
    $('.main-navigation').toggleClass('open')
  });
//navigation collapse
//$('#nav1,#nav2,#nav3').click(function() {
//   $('.main-navigation').toggle();

// });

});

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
  $('#nav1,#nav3').click(function(){
		$('.main-navigation').hide();
	});
  $('#nav-icon1').click(function(){
    $('.main-navigation').show();
    $(this).toggleClass('close');
  });

  $('#btn').click(function(){
    $('btn').delay("slow");
  });
});
