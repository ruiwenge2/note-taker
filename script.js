var settings = localStorage.getItem("submitSettings");
if(settings === "true"){
	document.body.style.background = localStorage.getItem("notesbgcolor");
	if(location.pathname == "/note-taker/edit.html" || location.pathname == "/note-taker/viewnote.html"){
		document.querySelector("textarea").style.color = localStorage.getItem("notestextcolor");
		document.querySelector("textarea").style.fontSize = localStorage.getItem("notestextsize") + "px";
		document.querySelector("textarea").style.fontFamily = localStorage.getItem("notesfontfamily");
	}
} else{
	document.body.style.background = "white";
	if(location.pathname == "/note-taker/edit.html" || location.pathname == "/note-taker/viewnote.html"){
		document.querySelector("textarea").style.color = "black";
		document.querySelector("textarea").style.fontSize = "16px";
		document.querySelector("textarea").style.fontFamily = "Roboto";
	}
}