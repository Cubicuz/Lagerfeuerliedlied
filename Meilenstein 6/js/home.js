var taddel = {
	posX : 0,
	posY : -143,
	
	angel : 0,
	dance : 0,
	
	obj : null,
}

function onload() {
	taddel.obj = document.getElementById("taddel");
	taddel.obj.style.right = 0;
	taddel.obj.style.top = '-143px';
	
	var aktiv = window.setInterval("TaddelMove()", 16);
}

function TaddelMove () {
	if (taddel.dance == 1)
		return;
	if (taddel.angel == 0) {
		taddel.posX += 3;
		
		if (taddel.posX >= 740) {
			taddel.angel = 1;
			taddel.posY = -60;
			taddel.posX = 805;
			taddel.obj.style.transform = 'rotate(270deg)';
		}
	}
	else if (taddel.angel == 1) {
		taddel.posY += 3;
		
		if (taddel.posY >= 243) {
			taddel.angel = 2;
			taddel.posY = 264;
			taddel.posX = 740;
			taddel.obj.style.transform = 'rotate(180deg)';
		}
	}
	else if (taddel.angel == 2) {
		taddel.posX -= 3;
		
		if (taddel.posX <= -50) {
			taddel.angel = 3;
			taddel.posY = 200;
			taddel.posX = -115;
			taddel.obj.style.transform = 'rotate(90deg)';
		}
	}
	else if (taddel.angel == 3) {
		taddel.posY -= 3;
		
		if (taddel.posY <= -90) {
			taddel.angel = 0;
			taddel.posY = -143;
			taddel.posX = 0;
			taddel.obj.style.transform = 'rotate(0deg)';
		}
	}
	taddel.obj.style.right = taddel.posX+'px';
	taddel.obj.style.top = taddel.posY+'px';
}

function onTaddelHover() {
	taddel.obj.style.backgroundImage = 'url("../jpg/taddeldance.gif")';
	taddel.obj.style.width = '139px';
	if (taddel.angel == 0) {
		taddel.obj.style.top = (taddel.posY+10)+'px';
	}
	else if (taddel.angel == 1) {
		taddel.obj.style.right = (taddel.posX-30)+'px';
	}
	else if (taddel.angel == 2) {
		taddel.obj.style.top = (taddel.posY-10)+'px';
	}
	else if (taddel.angel == 3) {
		taddel.obj.style.right = (taddel.posX-20)+'px';
	}
	taddel.dance = 1;
}

function onTaddelHoverOut() {
	taddel.obj.style.backgroundImage = 'url("../jpg/taddel.gif")';
	taddel.obj.style.width = '90px';
	taddel.dance = 0;
}