$(function(){

	//Slide show......................................................................................................
	var width=950,
		height=350,
		part = $('div.slidebar div'),
		li = $('div.selector li'),
		slideshow = $('div.slideshow'),
		arrow = $('div.slideshow div.arrow'),
		ul = $('div.selector ul'),
		cr = 0,
		AP = false;
	//Set Background Position of each part
	ul.css({width:length*25+'px'})

	part.each(function(i){
		if(i<32){
			$(this).css({backgroundPosition:(i)*(-width/8)+"px "+((-height/4)*3)+"px"});
		};
		if(i<24){
			$(this).css({backgroundPosition:(i)*(-width/8)+"px "+((-height/4)*2)+"px"});
		};
		if(i<16){
			$(this).css({backgroundPosition:(i)*(-width/8)+"px "+((-height/4)*1)+"px"});
		};
		if(i<8){
			$(this).css({backgroundPosition:(i)*(-width/8)+"px 0px"});
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
			part.eq(rndArray[j]).animate({backgroundImage:'url('+path[n]+')'},j*100);
		};
	};
	//Selector bottom
	li.each(function(i){
		$(this).click(function(){
			gotopic(i);
		});
	});
	(gotopic = function(n){
		if(n>length-1) n=0;
		if(n<0) n=length-1;
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
		ShowArrow();
	});

	slideshow.mouseout(function(){
		APstart();
		HideArrow();
	});

	APstart();

	//Animation of arrow
	ShowArrow = function(){
		arrow.animate({top:'140px'});
	};
	HideArrow = function(){
		arrow.animate({top:'-40px'})
	};

	//Slide show......................................................................................................

	//Center arrow

	var CenterArrow = $('div.bg a'),
		Content = $('div.container-content'),
		Check = true;

	CenterArrow.click(function(){
		if(Check){
			Content.animate({minHeight:'300px'});
			CenterArrow.animate({rotate:'180deg'},50);
			Check = false
		}else{
			Content.animate({minHeight:'0px'});
			CenterArrow.animate({rotate:'360deg'},50);
			Check = true;
		};
		
	});
});