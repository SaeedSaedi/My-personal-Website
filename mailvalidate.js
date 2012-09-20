function validateText(str,len){
	return str.length >= len;
};

$(function(){
	$('form.contact').submit(function(){
		var target, error = false;

		target = $('input#name');
		if( validateText(target.val(),3) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}




		return !err;
	});

});