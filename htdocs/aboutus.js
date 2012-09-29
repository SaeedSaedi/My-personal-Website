$(function(){
	// Active menu for about us
	var menu = $('div.menu a');
	menu.eq(3).click(function(){
		menu.eq(2).removeClass('active');
		$(this).addClass('active');
	});
	
	//About us page Animation

	var title = $('div.aboutus > p'),
		maintxt = $('div.information p'),
		images = $('div.aboutimg img'),
		i = 0;

		menu.eq(3).click(function(){
			setTimeout(titlewidth,1000);
		});

		titlewidth = function(){
			title.animate({width:'200px'});
			setTimeout(mainheight,1000);
		};
		mainheight = function(){
			maintxt.animate({height:'inherit'},2000);
			for(i=0;i<4;i++){
				setTimeout(img(i),2000);
			}
		};

		img = function(i){
			images.eq(i).animate({marginTop:'0px'},1000+500*i);
		}

});