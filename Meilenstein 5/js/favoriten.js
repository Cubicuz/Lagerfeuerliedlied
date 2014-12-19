function onload(){
    music();
}

function sendRequest(filename) {
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status== 200) {
			console.log(xmlhttp.responseText);
			var json = $.parseJSON(xmlhttp.responseText);
			console.log(json);
			load(json);
		}
	}
	xmlhttp.open("GET","../php/getFavorites.php?filename="+filename);
	xmlhttp.send();
}

function music(){
    //selektiere Musik und deselektiere Film
    var o1 = document.getElementById("musikButton");
    o1.className = "button selected";
    
    var o2 = document.getElementById("filmButton");
    o2.className = "button";
	sendRequest("music_json");
}

function film(){
    var o1 = document.getElementById("filmButton");
    o1.className = "button selected"
    var o2 = document.getElementById("musikButton");
    o2.className = "button";
	sendRequest("film_json");
}

function load(json) {
	var table = "";
    table += '<table>';
	// keys = table title
	table += '<tr>';
	Object.keys(json[0]).forEach(function(k) {
		table += '<td>'+k+'</td>';
	});
	table += '</tr>';
	
	for (index = 0; index < json.length; ++index) {
		table += '<tr>';
		jQuery.each(json[index], function() {
			table += '<td>'+this+'</td>';
		});
		table += '</tr>';
	}
    document.getElementById("tabelle").innerHTML = table;
}