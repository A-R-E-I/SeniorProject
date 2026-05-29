window.addEventListener("load", addListener);

function addListener()
{
	Score4 = 400;
	point400 = "selected";
	localStorage.setItem("NumScore", Score4);
	localStorage.setItem("science4", point400);
	document.getElementById("option1").addEventListener("click", Points);
	
}

function Points()
{
	alert("Correct");
	window.location.href = "Jeopardy2.html";
}