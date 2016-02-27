$(function() {
  $('.nav-toggle').on('click', function() {
    $('.main-navigation').toggleClass('open')
  });
});
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
    $('.main-navigation'.toggleClass('close'));
	});
});
