var regTitel = /[A-Za-z0-1]+/;
var regInterpreter = /[A-Za-z]+/;
var regRegieundDrehbuch = /([A-Za-zäöüÄÖÜß]+) \s ([A-Za-zäöüÄÖÜß]+)/;
var regErscheinungsjahr = /1[89][0-9][0-9]|20[01][0-9]/;
var regSchauspielerundSongs = /([A-Za-zäöüÄÖÜß ]+)(,[A-Za-zäöüÄÖÜß ]+)+/;
   

function checkFilm(){
	var check = true;
	var ele = document.getElementsByName("schauspieler")[0];
    if(!regSchauspielerundSongs.test(ele.value)){
        check = false;
		ele.focus();
		ele.className = "error";
    }
	else { ele.className = ""; }
	ele = document.getElementsByName("erscheinungsjahr")[0];
    if(!regErscheinungsjahr.test(ele.value)){
        check = false;
		ele.focus();
		ele.className = "error";
    }
	else { ele.className = ""; }
	ele = document.getElementsByName("drehbuch")[0];
    if(!regRegieundDrehbuch.test(ele.value)){
		check = false;
		ele.focus();
		ele.className = "error";
    }
	else { ele.className = ""; }
	ele = document.getElementsByName("regie")[0];
	if(!regRegieundDrehbuch.test(ele.value)){
		check = false;
		ele.focus();
		ele.className = "error";
    }
	else { ele.className = ""; }
	ele = document.getElementsByName("filmtitel")[0];
    if(!regTitel.test(ele.value)){
		check = false;
		ele.focus();
		ele.className = "error";
    }
	else { ele.className = ""; }
	if (check == false) {
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingabe");
	}
	return check;
}

function checkMusic(){
	var check = true;
	var ele = document.getElementsByName("songs")[0];
    if(!regSchauspielerundSongs.test(ele.value)){
        check = false;
		ele.focus();
		ele.className = "error";
    }
	else { ele.className = ""; }
	ele = document.getElementsByName("musicerscheinungsjahr")[0];
    if(!regErscheinungsjahr.test(ele.value)){
        check = false;
		ele.focus();
		ele.className = "error";
    }
	else { ele.className = ""; }
	ele = document.getElementsByName("albumtitel")[0];
    if(!regTitel.test(ele.value)){
		check = false;
		ele.focus();
		ele.className = "error";
    }
	else { ele.className = ""; }
	ele = document.getElementsByName("interpreter")[0];
	if(!regInterpreter.test(ele.value)){
		check = false;
		ele.focus();
		ele.className = "error";
    }
	else { ele.className = ""; }
	if (check == false) {
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingabe");
	}
	return check;
}