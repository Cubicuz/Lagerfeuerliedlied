<?php
$openFile = 'musik.txt';
$handle = fopen($openFile,'a');
$write = $_GET["interpreter"].","
        .$_GET["albumtitel"].","
        .$_GET["musicerscheinungsjahr"].","
        .$_GET["songs"].","
        .$_GET["musicgenre"].","
        .$_GET["musicfavorit"];

fwrite($handle,$write);
fclose($handle);

