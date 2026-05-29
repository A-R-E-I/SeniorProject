window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnjeopardy").addEventListener("click",Jeopardy);
	document.getElementById("btncalculator").addEventListener("click",Calculator);
}

function Calculator()
{
	window.location.href="calculator.html";
}

function Jeopardy()
{
	window.location.href="Jeopardy.html";
}
