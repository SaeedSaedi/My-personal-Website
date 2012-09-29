<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<style type="text/css">
		div{
			-webkit-transform: rotate(90deg);
			   -moz-transform: rotate(90deg);
			    -ms-transform: rotate(90deg);
			     -o-transform: rotate(90deg);
			        transform: rotate(90deg);
			
		}
		h2{
			color:white;
			width:200px;
			margin-top:130px;
		}
	</style>
</head>
<body>
	<?php
		error_reporting(E_ALL ^ E_NOTICE);

		$admin = 'info@mydomain.com';

		$name    = $_POST['name'];
		$email   = $_POST['mail'];
		$subject = $_POST['subject'];
		$text    = $_POST['message'];

		if( strlen($name)>=3 && strlen($email)>=7 && strlen($subject)>=5 && strlen($text)>=10 ){
			if( @mail (
					$admin,
					"mydomain.com contact : $subject",
					$text,
					"From:$name <$email" )
			){
				echo '<div><h2>Mail sent</h2></div>';
			}else{
				echo '<div><h2>Error in sending mail.</h2></div>';
			}
		}else{
			echo '<div><h2>Access Restricted !</h2></div>';
		}
	?>
</body>
</html>