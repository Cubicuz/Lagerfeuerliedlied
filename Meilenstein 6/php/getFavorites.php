<?php
if($mysqli = mysqli_connect("localhost","myMedia","megapasswort","media")){
    echo("Verbindung klappt");
} else {
    echo("keine Verbindung");
}
$music = true;
if($_GET['filename']=="film_json"){
    $music = false;
}
if($music){
    $sql = "SELECT interpreter,albumtitel,erscheinungsjahr,genre FROM music";
    if ($result = $mysqli->query($sql)){
        $data="[";
        while($row=$result->fetch_assoc()){
            $data .= "{'Interpreter':'$row[0]','Albumtitel':'$row[1]','Erscheinungsjahr':'$row[2]','Genre':'$row[3]'},";
        }
        //sonst ist ein Komma zu viel
        $data = substr($data,0,-1);
        $data .="]";
        echo ($data);
    } else {
        echo ("fehler beim Musik result");
    }
} else {
    $sqlSelect = "SELECT filmtitel,regie,drehbuch,erscheinungsjahr,genre FROM film";
    if ($result = $mysqli->query($sqlSelect)) {
        $data="[";
        while($row=$result->fetch_assoc()){
            $data .= "{'Filmtitel':'$row[0]','Regie':'$row[1]','Drehbuch':'$row[2]','Erscheinungsjahr':'$row[3]','Genre':'$row[4]'},";
        }
        //sonst ist ein Komma zu viel
        $data = substr($data,0,-1);
        $data .="]";
        echo($data);
    } else {
        echo ("fehler beim Film result");
    }
}
mysqli_close($mysqli);
?>