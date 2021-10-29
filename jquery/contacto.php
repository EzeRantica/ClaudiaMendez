<?php
if (isset($_POST["nombre"], $_POST["email"], $_POST["mensaje"])) {
	$fp= fopen('mensajes/'.$_POST["nombre"] ." - ". $_POST["email"].'.txt', 'w');

	fwrite($fp, $_POST["nombre"] ." - ". $_POST["email"] ." - ". $_POST["mensaje"]);

	fclose($fp);
}
?>