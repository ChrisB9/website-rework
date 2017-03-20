var typer = {};

typer.greetings = {
	0:{
		title:"Hello"
	},
	1:{
		title:"Hallo"
	},
	2:{
		title:"Hóla"
	},
	3:{
		title:"Salut"
	},
	4:{
		title:"Konnichiwa"
	},
	5:{
		title:"Oy"
	}
}

typer.counter = 0;

typer.currentText = "";

typer.setText = (e, t) => {
	document.getElementById(e).innerText=t
}

typer.interval = null;

typer.setInterval = () => {
	typer.interval = setInterval(() => {
		typer.currentText += typer.greetings[typer.counter].
			title.charAt(typer.currentText.length);
		typer.setText("greetings", typer.currentText);
		if (typer.currentText.length === typer.greetings[typer.counter].title.length) {
			setTimeout(() => {
				typer.currentText = "";
				typer.setText("greetings", "");
				typer.counter++;
				if (typer.counter >= Object.keys(typer.greetings).length) {
					typer.counter = 0;
				}
			}, 650); 
		}
	}, 650);
}

typer.stopInterval = () => {
	typer.interval = null;
}




