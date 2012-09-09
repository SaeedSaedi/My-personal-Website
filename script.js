$(function(){

	//Slide show

	var part = $('div.slidebar div');

	//Set Background Position of each part
	part.each(function(i){


		if(i<32){
			$(this).css({backgroundPosition:(i)*-118.75+"px -262.5px"});
		};
		if(i<24){
			$(this).css({backgroundPosition:(i)*-118.75+"px -175px"});
		};
		if(i<16){
			$(this).css({backgroundPosition:(i)*-118.75+"px -87.5px"});
		};
		if(i<8){
			$(this).css({backgroundPosition:(i)*-118.75+"px 0px"});
		};

	});

	//Change Background 

	
	
});