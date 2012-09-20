<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>Home</title>
	<link rel="stylesheet" href="./reset.css" />
	<link rel="stylesheet" href="./style.css" />
	<link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="./zepto.js"></script>
	<script type="text/javascript">
	$(function(){
		m = 0;
		path = Array();

		<?php 
			$img_path = "./slideshow";
			$images = scandir($img_path);
			$i = 0;
			foreach($images as $image){
				$img_exp = explode('.',$image);
				$img_type = strtolower(end($img_exp));

				if($img_type == 'jpg'){
					$path[$i] = $img_path."/".$image;
		?>

		path[m] = <?php echo "'$path[$i]'"; ?>;
		m++;
		
		<?php

					$i++;
				};
			};
		?>

		length = <?php echo "$i"; ?>;
	});
	</script>
	<script type="text/javascript" src="./script.js"></script>
	<script type="text/javascript" src="./mailvalidate.js"></script>
</head>
<body>