window.addEventListener("load", addListener);

function addListener()
{
	Score = 100;
	point100 = "selected";
	localStorage.setItem("NumScore", Score);
	localStorage.setItem("history1", point100);
	document.getElementById("option1").addEventListener("click", Points);
	
}

function Points()
{
	alert("Correct");
	window.location.href = "Jeopardy2.html";
}