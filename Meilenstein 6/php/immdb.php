<?php
//CREATE USER 'myMedia'@'localhost' IDENTIFIED BY 'megapasswort':
//CREATE DATABASE media;
//GRANT CREATE ON media.* TO 'myMedia'@'localhost';
//GRANT DROP ON media.* TO 'myMedia'@'localhost';
//GRANT DELETE ON media.* TO 'myMedia'@'localhost';
//GRANT INSERT ON media.* TO 'myMedia'@'localhost';
//GRANT UPDATE ON media.* TO 'myMedia'@'localhost';
//CREATE TABLE m_interpreter(iid INTEGER NOT NULL AUTO_INCREMENT,name CHAR(50),PRIMARY KEY(iid));
//CREATE TABLE m_albumtitel(aid INTEGER NOT NULL AUTO_INCREMENT,titel CHAR(50),songs VARCHAR(500),jahr INTEGER,favorit BOOL,PRIMARY KEY(aid));
//CREATE TABLE m_interpreter_albumtitel(iid INTEGER NOT NULL,aid INTEGER NOT NULL,FOREIGN KEY(iid) REFERENCES m_interpreter(iid),FOREIGN KEY(aid) REFERENCES m_albumtitel(aid));
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
    $interpreter = $_POST['interpreter'];
    $albumtitel = $_POST['albumtitel'];
    $jahr = $_POST['musicerscheinungsjahr'];
    $songs = $_POST['songs'];
    $genre = $_POST['musicgenre'];
    $favorit = isset($_POST['musicfavorit']);
    
    //falls der Interpret noch nicht existiert
    $sql="SELECT iid,name FROM m_interpreter WHERE name = $interpreter";
    $result = $mysqli->query($sql);
    if ($result->num_rows < 1) {
        $sqlInsert = "INSERT INTO m_interpreter (name) VALUES ($interpreter)";
        $result = $mysqli->query($sqlInsert);
        $result = $mysqli->query($sql);
    }
    $row = $result->fetch_assoc();
    $iid = row["iid"];
    
    //falls das Album noch nicht existiert
    $sql="SELECT aid,titel FROM m_albumtitel WHERE titel = $albumtitel";
    $result = $mysqli->query($sql);
    if ($result->num_rows < 1) {
        $sqlInsert = "INSERT INTO m_albumtitel (titel,songs,jahr,favorit,genre) VALUES ($albumtitel,$songs,$jahr,$favorit,$genre)";
        $result = $mysqli->query($sqlInsert);
        $result = $mysqli->query($sql);
    }
    $row = $result->fetch_assoc();
    $aid = row["aid"];
    
    //falls die beziehung zwischen Interpreter und Album noch nicht existiert
    $sql = "SELECT iid,aid FROM m_interpreter_albumtitel WHERE iid = $iid AND aid = $aid";
    $result = $mysqli->query($sql);
    if ($result->num_rows < 1)  {
        $sqlInsert = "INSERT INTO m_interpreter_albumtitel (iid,aid) VALUES ($iid,$aid)";
    }
    
    
    
    
    
    
    
    
    
} else {
    $filmtitel = $_POST['filmtitel'];
    $regie = $_POST['regie'];
    $drehbuch = $_POST['drehbuch'];
    $erscheinungsjahr = $_POST['erscheinungsjahr'];
    $schauspieler = $_POST['schauspieler'];
    $filmgenre = $_POST['filmgenre'];
    $filmfavorit = isset($_POST(['filmfavorit']));
}

foreach($_GET as $value) {
	$txt = $txt."$value,";
}
fwrite($handle, substr($txt, 0, -1)."\n");
fclose($handle);
?>