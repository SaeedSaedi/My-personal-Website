$(function(){

	//Slide show
	var part = $('div.slidebar div'),
		li = $('div.selector li'),
		slideshow = $('div.slideshow'),
		cr = 0,
		AP = false;
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
	ChangeBG = function(n){
		rndArray = Array();
		for(i=0;i<32;i++){
			rndArray[i]=i
		};
		rndArray.sort(function(a,b){
			return Math.random() - 0.5;
		})
		for(j=0;j<32;j++){
			part.eq(rndArray[j]).animate({backgroundImage:'url(\'slideshow/pic'+n+'.jpg\')'},j*100);
		};
	};
	//Selector bottom
	li.each(function(i){
		$(this).click(function(){
			gotopic(i);
		});
	});
	(gotopic = function(n){
		if(n>3) n=0;
		if(n<0) n=3;
		li.eq(cr).removeClass('active');
		li.eq(n).addClass('active');
		ChangeBG(n);
		cr = n;
	})(0);

	previouspic = function(){
		gotopic(cr-1);
	};
	nextpic = function(){
		gotopic(cr+1);
	};
	//AutoPlay
	APstart = function(){
		if(AP) return;
		AP = setInterval(nextpic,5000);
	};
	APstop = function(){
		clearInterval(AP);
		AP = false;
	};

	slideshow.mouseover(function(){
		APstop();
	});

	slideshow.mouseout(function(){
		APstart();
	});

	APstart();
});