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