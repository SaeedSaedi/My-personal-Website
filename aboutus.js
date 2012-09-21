$(function(){
	// Active menu for about us
	var menu = $('div.menu a');
	menu.eq(3).click(function(){
		menu.eq(2).removeClass('active');
		$(this).addClass('active');
	});
	

});