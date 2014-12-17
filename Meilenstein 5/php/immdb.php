<?php
$filename = "music.txt";
foreach($_GET as $key => $value) {
	$pos = strpos($key,"film");
	if ($pos !== false) {
		$filename = "film.txt";
		break;
	}
}
$handle = fopen($filename, 'a') or die('Cannot open file:  '.$filename);
$txt = "";
foreach($_GET as $value) {
	$txt = $txt."$value,";
}
fwrite($handle, substr($txt, 0, -1)."\n");
fclose($handle);
?>