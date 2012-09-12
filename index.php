<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title></title>
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
	<script type="text/javascript" src="./script.js">
	</script>
</head>
<body>
	<div class="container-head">
		<div class="head"></div>
	</div>
	<div class="container-menu">
		<div class="menu">
			<ul>
				<li><a href="#" class='active'>HOME</a></li>
				<li><a href="#">PRODUCTS</a></li>
				<li><a href="#">GALLERY</a></li>
				<li><a href="#">ABOUT US</a></li>
			</ul>
		</div>
	</div>
	<div class="container-slideshow">
		<div class="slideshow">
			<div class="slidebar">
				<?php
					for ($m=0; $m < 32; $m++) { 
						echo "<div></div>";
					};
				?>
			</div>
			<div class="selector">
				<ul>
					<?php
						for ($j=0; $j < $i ; $j++) { 
							echo '<li></li>';
						};
					?>
				</ul>
			</div>
			<div class="previous arrow" onclick="previouspic();"></div>
			<div class="next arrow" onclick="nextpic();"></div>
		</div>
	</div>
	<div class="container-centerside">
		<div class="centerside">
			<p>Warren Paint & Color Co. provides unmatched optical flatness & pigment density to create time & labor saving best practices for every studio, regardless of size.</p>
		</div>
	</div>
	<div class="container-content">
		<div class="content"></div>
	</div>
	<div class="container-bg">
		<div class="bg">
			<a href="#"><img src="./image/down_arrow.png" alt=""></a>
		</div>
	</div>
	<div class="container-footer">
		<div class="footer"></div>
	</div>
	
</body>
</html>