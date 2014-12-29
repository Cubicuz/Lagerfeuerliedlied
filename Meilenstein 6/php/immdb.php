<?php
//CREATE USER 'myMedia'@'localhost' IDENTIFIED BY 'megapasswort';
//CREATE DATABASE media;
//GRANT CREATE ON media.* TO 'myMedia'@'localhost';
//GRANT DROP ON media.* TO 'myMedia'@'localhost';
//GRANT DELETE ON media.* TO 'myMedia'@'localhost';
//GRANT INSERT ON media.* TO 'myMedia'@'localhost';
//GRANT UPDATE ON media.* TO 'myMedia'@'localhost';
//USE media;
//CREATE TABLE music(mid INTEGER AUTO_INCREMENT PRIMARY KEY,interpreter char(50),albumtitel char(50),erscheinungsjahr INTEGER,songs varchar(500),genre char(50),favorit BOOlEAN);
//CREATE TABLE film(fid INTEGER AUTO_INCREMENT PRIMARY KEY,filmtitel char(50),regie char(50),drehbuch char(50),erscheinungsjahr integer,schauspieler varchar(500),genre char(50),favorit BOOLEAN);
$mysqli = mysqli_connect("localhost","myMedia","megapasswort","media");
$music = true;
foreach($_GET as $key => $value) {
	$pos = strpos($key,"film");
	if ($pos !== false) {
		$music = false;
		break;
	}
}
if ($music){
    $interpreter = $_GET['interpreter'];
    $albumtitel = $_GET['albumtitel'];
    $jahr = $_GET['musicerscheinungsjahr'];
    $songs = $_GET['songs'];
    $genre = $_GET['musicgenre'];
    $favorit = $_GET['musicfavorit']==1;
    
    //falls das Lied schon eingetragen ist wird kein neuer Eintrag erstellt
    $sql="SELECT interpreter,albumtitel,erscheinungsjahr,genre FROM music WHERE  interpreter='$interpreter' AND albumtitel='$albumtitel' AND erscheinungsjahr='$jahr'";
    $result = $mysqli->query($sql);
    if ($result->num_rows < 1) {
        $sqlInsert = "INSERT INTO music (interpreter,albumtitel,erscheinungsjahr,songs,genre,favorit) VALUES ('$interpreter','$albumtitel','$jahr','$songs','$genre','$favorit')";
        $result = $mysqli->query($sqlInsert);
    }
} else {
    $filmtitel = $_GET['filmtitel'];
    $regie = $_GET['regie'];
    $drehbuch = $_GET['drehbuch'];
    $erscheinungsjahr = $_GET['erscheinungsjahr'];
    $schauspieler = $_GET['schauspieler'];
    $filmgenre = $_GET['filmgenre'];
    $filmfavorit = $_GET['filmfavorit']==1;

    //falls der Film schon eingetragen ist wird kein neuer Eintrag erstellt
    $sql="SELECT filmtitel,regie,drehbuch,erscheinungsjahr,genre FROM film WHERE filmtitel='$filmtitel' AND regie='$regie' AND drehbuch='$drehbuch' AND erscheinungsjahr='$erscheinungsjahr' AND genre='$filmgenre'";
    $result = $mysqli->query($sql);
    if ($result->num_rows < 1) {
        $sqlInsert="INSERT INTO film (filmtitel,regie,drehbuch,erscheinungsjahr,schauspieler,genre,favorit) VALUES ('$filmtitel','$regie','$drehbuch','$erscheinungsjahr','$schauspiler','$filmgenre','$filmfavorit')";
        $result = $mysqli->query($sqlInsert);
    }
}
?>