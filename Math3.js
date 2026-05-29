window.addEventListener("load", addListener);

function addListener()
{
	Score3 = 300;
	point300 = "selected";
	localStorage.setItem("NumScore", Score3);
	localStorage.setItem("math3", point300);
	document.getElementById("option2").addEventListener("click", Points);
	
}

function Points()
{
	alert("Correct");
	window.location.href = "Jeopardy2.html";
}