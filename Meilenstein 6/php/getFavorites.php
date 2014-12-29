<?php
	
	$filename = "../JSON/".$_GET['filename'].".js";
	$handle = fopen($filename, 'r') or die('Cannot open file:  '.$filename);
	$data = fread($handle, filesize($filename));
	echo ($data);
	fclose($handle);
?>