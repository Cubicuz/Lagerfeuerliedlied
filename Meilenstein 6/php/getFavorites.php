<?php
$mysqli = mysqli_connect("localhost","myMedia","megapasswort","media");
$music = true;
foreach($_GET as $key => $value) {
	$pos = strpos($key,"film");
	if ($pos !== false) {
		$music = false;
		break;
	}
}
if($music){
    $sql = "SELECT interpreter,albumtitel,erscheinungsjahr,genre FROM music";
    $result = $mysqli->query(sql);
    $data="[";
    while($row=mysqli_fetch_row($result)){
        $data .= "{'Interpreter':'$row[0]','Albumtitel':'$row[1]','Erscheinungsjahr':'$row[2]','Genre':'$row[3]'},";
    }
    //sonst ist ein Komma zu viel
    $data = substr($data,0,-1);
    $data .="]";
    echo ($data);
} else {
    $sql = "SELECT filmtitel,regie,drehbuch,erscheinungsjahr,genre FROM film";
    $result = $mysqli->query(sql);
    $data="[";
    while($row=mysqli_fetch_row($result)){
        $data .= "{'Filmtitel':'$row[0]','Regie':'$row[1]','Drehbuch':'$row[2]','Erscheinungsjahr':'$row[3]','Genre':'$row[4]'},";
    }
    //sonst ist ein Komma zu viel
    $data = substr($data,0,-1);
    $data .="]";
    echo($data);
}
mysqli_close($mysqli);
?>