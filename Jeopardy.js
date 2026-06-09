window.addEventListener("load", addListener);

function addListener()
{
	document.getElementById("entTeam").addEventListener("click", ShowGrid);
	document.getElementById("return").addEventListener("click", Mainmenu);
}

function ShowGrid()
{
	numTeam = document.getElementById("WhatTeam").value;
	localStorage.setItem("TeamAmount", numTeam);
	point100 = " ";
	point200 = " ";
	point300 = " ";
	point400 = " ";
	point500 = " ";
	localStorage.setItem("math1", point100);
	localStorage.setItem("math2", point200);
	localStorage.setItem("math3", point300);
	localStorage.setItem("math4", point400);
	localStorage.setItem("math5", point500);
	localStorage.setItem("science1", point100);
	localStorage.setItem("science2", point200);
	localStorage.setItem("science3", point300);
	localStorage.setItem("science4", point400);
	localStorage.setItem("science5", point500);
	localStorage.setItem("history1", point100);
	localStorage.setItem("history2", point200);
	localStorage.setItem("history3", point300);
	localStorage.setItem("history4", point400);
	localStorage.setItem("history5", point500);
	localStorage.setItem("geography1", point100);
	localStorage.setItem("geography2", point200);
	localStorage.setItem("geography3", point300);
	localStorage.setItem("geography4", point400);
	localStorage.setItem("geography5", point500);


	window.location.href = "Jeopardy2.html";
}

function Mainmenu()
{
	window.location.href = "menu.html";
}