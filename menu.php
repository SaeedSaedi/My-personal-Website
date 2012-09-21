<div class="container-menu">
	<div class="menu">
		<ul>
			<li><a href="./index.php">HOME</a></li>
			<li><a href="./index-project.php">PROJECT</a></li>
			<li><a href="./index-contact.php">CONTACT US</a></li>
			<?php 
				if ($page == 'contact') {
					echo "<li><a href='#''>ABOUT US</a></li>";
				};
			?>
		</ul>
	</div>
</div>