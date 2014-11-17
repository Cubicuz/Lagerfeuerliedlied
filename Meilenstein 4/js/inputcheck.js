var regTitel = /[A-Za-z0-1]+/;
var regInterpreter = /[A-Za-z]+/;
var regRegie = /([A-Za-z]+) \s ([A-Za-z]+)/;
var regErscheinungsjahr = /1[89][0-9][0-9]|20[01][0-9]/;
var regSongs = /([A-Za-z]+)(,[A-Za-z]+)+/;
   

function checkFilm(){
    if(!regTitel.test(document.Formular.filmtitel.valueOf())){
        
    }
    if(!regInterpreter.test(document.Formular.regie.valueOf())){
        
    }
    if(!regRegie.test(document.Formular.drehbuch.valueOf())){
        
    }
    if(!regErscheinungsjahr.test(document.Formular.erscheinungsjahr.valueOf())){
        
    }
    if(!regSongs.test(document.Formular.erscheinungsjahr.valueOf())){
        
    }
}