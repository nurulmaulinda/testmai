<form name="form" action="" method="post">
	<input type="text" name="string">
	<button type=submit onclick=is_palindrome;>Cek</button>
</form>
<?php
if(isset($_POST['string'])){
	$string = $_POST['string'];
	function is_palindrome($string){
		$string = str_replace('',",$string);
		$string = preg_replace('/[^A-Za-z0-9\-]/',",$string);
		$string = strtolower($string);
		$reverse = strrev($string);
			if ($string == $reverse ) {
				echo "<p>It is Palindrome</p>";
			}
			else {
				echo "<p>Not Palindrome</p>";

			}
	}

	is_palindrome($string);
}
?>
