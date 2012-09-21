<div class="container-menu">
	<div class="menu">
		<ul>
			<li><a class="<?php if($page == 'home') echo 'active'?>" href="./index.php">HOME</a></li>
			<li><a class="<?php if($page == 'project') echo 'active'?>" href="./index-project.php">PROJECT</a></li>
			<li><a class="<?php if($page == 'contact') echo 'active'?>" href="./index-contact.php">CONTACT US</a></li>
			<?php 
				if ($page == 'contact') {
					echo "<li><a href='#''>ABOUT US</a></li>";
				};
			?>
		</ul>
	</div>
</div>