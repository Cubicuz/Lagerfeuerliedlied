/*	^ : vom start
	[A-Za-zäöüÄÖÜß]+ : Eine anzhal von deutschen buchstaben mit zahlen
	$ : danach nix mehr zusätzliches
*/
var regTitel = /^[A-Za-z0-9äöüÄÖÜß ]+$/;
/*	^ : vom start
	[A-Za-zäöüÄÖÜß]+ : Eine anzhal von deutschen buchstaben
	$ : danach nix mehr zusätzliches
*/
var regInterpreter = /^[A-Za-zäöüÄÖÜß ]+$/
/*	^ : vom start
	[A-Za-zäöüÄÖÜß]+ : Eine anzhal von deutschen buchstaben
	  : dann das leerzeichen
	[A-Za-zäöüÄÖÜß]+ : und wiederum eine anzahl von deutschen buchstaben
	$ : danach nix mehr zusätzliches
*/
var regRegieundDrehbuch = /^[A-Za-zäöüÄÖÜß]+ [A-Za-zäöüÄÖÜß]+$/;
/* 	^ : vom start
	entweder 1\d{3} : also 1 mit genau 3 ziffern ( 1000->1999)
	oder 200[0-9] : 2000 -> 2009
	oder 201[0-4] : 2010 -> 2014
	% : danach nix mehr zusätzliches
*/
var regErscheinungsjahr = /^(1\d{3}|200[0-9]|201[0-4])$/;
/*  ^ : vom start ( sonst kann davor zb sonderzeichen stehen )
	[A-Za-zäöüÄÖÜß ]+ : ein name halt in deutscher srprache
	(,[A-Za-zäöüÄÖÜß ]+) : dann "," mit mindestens 1 buchstaben bzw einen ganzen namen
	* : dies kann sich wiederholen von 0 - unendlich
	$ : damit man nicht danach müll schreiben kann ( peter, hans &$§ ) wäre ohne $ richtig
*/
var regSchauspielerundSongs = /^[A-Za-zäöüÄÖÜß ]+(,[A-Za-zäöüÄÖÜß ]+)*$/;
   

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