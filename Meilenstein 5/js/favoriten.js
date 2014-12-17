function onload(){
    musik();
}

function musik(){
    //selektiere Musik und deselektiere Film
    var o1 = document.getElementById("musikButton");
    o1.className = "button selected";
    
    var o2 = document.getElementById("filmButton");
    o2.className = "button";
    loadMusik ();
}

function film(){
    var o1 = document.getElementById("filmButton");
    o1.className = "button selected"
    var o2 = document.getElementById("musikButton");
    o2.className = "button";
    loadFilm();
}

function loadFilm (){
    var table = "";
    table += '<table>';
    table += '<tr> <td>Filmtitel</td> <td>Regie</td> <td>Drehbuch</td> <td>Erscheinungsjahr</td> <td>Genre</td> </tr>';   
    for (var i=0; i<filmfav.length;i++){
        table += '<tr> <td>' + filmfav[i].Filmtitel 
		+ '</td> <td>' + filmfav[i].Regie 
		+ '</td> <td>' + filmfav[i].Drehbuch 
		+ '</td> <td>' + filmfav[i].Erscheinungsjahr 
		+ '</td> <td>' + filmfav[i].Genre 
		+ '</td></tr>';
    }
    document.getElementById("tabelle").innerHTML = table;
}

function loadMusik (){
    var table = "";
    table += '<table>';
    table += '<tr> <td>Interpreter</td> <td>Albumtitel</td> <td>Erscheinungsjahr</td> <td>Genre</td> </tr>';   
    for (var i=0; i<musicfav.length;i++){
        table += '<tr> <td>' + musicfav[i].Interpreter 
		+ '</td> <td>' + musicfav[i].Albumtitel 
		+ '</td> <td>' + musicfav[i].Erscheinungsjahr 
		+ '</td> <td>' + musicfav[i].Genre 
		+ '</td></tr>';
    }
    document.getElementById("tabelle").innerHTML = table;
  
}