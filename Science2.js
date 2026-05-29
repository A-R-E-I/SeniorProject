window.addEventListener("load", addListener);

function addListener()
{
	Score2 = 200;
	point200 = "selected";
	localStorage.setItem("NumScore", Score2);
	localStorage.setItem("science2", point200);
	document.getElementById("option1").addEventListener("click", Points);
	
}

function Points()
{
	alert("Correct");
	window.location.href = "Jeopardy2.html";
}