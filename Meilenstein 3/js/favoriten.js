var musikClicked=true;

function onload(){
    musik();
}

function musik(){
    musikClicked=true;
    var o1 = document.getElementById("musikButton");
    o1.style.backgroundColor = "rgb(165,169,230)";
    var o2 = document.getElementById("filmButton");
    o2.style.backgroundColor = "rgb(26,32,94)";
}

function film(){
    musikClicked=false;
    var o1 = document.getElementById("filmButton");
    o1.style.backgroundColor = "rgb(165,169,230)";
    var o2 = document.getElementById("musikButton");
    o2.style.backgroundColor = "rgb(26,32,94)";
}