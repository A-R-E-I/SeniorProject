window.addEventListener("load", addListener);

function addListener()
{
	document.getElementById("teamScore").disabled = true;
	document.getElementById("teamScore2").disabled = true;
	document.getElementById("team 1").style.display = "none";
	document.getElementById("team 2").style.display = "none";
	document.getElementById("team 3").style.display = "none";
	document.getElementById("team 4").style.display = "none";
	document.getElementById("return").addEventListener("click", Mainmenu);
	document.getElementById("100math").addEventListener("click", Math100);
	document.getElementById("200math").addEventListener("click", Math200);
	document.getElementById("300math").addEventListener("click", Math300);
	document.getElementById("400math").addEventListener("click", Math400);
	document.getElementById("500math").addEventListener("click", Math500);
	document.getElementById("100science").addEventListener("click", Science100);
	document.getElementById("200science").addEventListener("click", Science200);
	document.getElementById("300science").addEventListener("click", Science300);
	document.getElementById("400science").addEventListener("click", Science400);
	document.getElementById("500science").addEventListener("click", Science500);
	document.getElementById("100history").addEventListener("click", History100);
	document.getElementById("200history").addEventListener("click", History200);
	document.getElementById("300history").addEventListener("click", History300);
	document.getElementById("400history").addEventListener("click", History400);
	document.getElementById("500history").addEventListener("click", History500);
	document.getElementById("100geography").addEventListener("click", Geography100);
	document.getElementById("200geography").addEventListener("click", Geography200);
	document.getElementById("300geography").addEventListener("click", Geography300);
	document.getElementById("400geography").addEventListener("click", Geography400);
	document.getElementById("500geography").addEventListener("click", Geography500);

	
	
	document.getElementById("addpoint").addEventListener("click", AddScore);
	document.getElementById("subpoint").addEventListener("click", SubScore);
	document.getElementById("addpoint2").addEventListener("click", AddScore2);
	document.getElementById("subpoint2").addEventListener("click", SubScore2);
	document.getElementById("addpoint3").addEventListener("click", AddScore3);
	document.getElementById("subpoint3").addEventListener("click", SubScore3);
	document.getElementById("addpoint4").addEventListener("click", AddScore4);
	document.getElementById("subpoint4").addEventListener("click", SubScore4);
	document.getElementById("teamScore").value = 0;
	document.getElementById("teamScore2").value = 0;
	document.getElementById("teamScore3").value = 0;
	document.getElementById("teamScore4").value = 0;
	NewScore = document.getElementById("teamScore").value;
	NewScore2 = document.getElementById("teamScore2").value;
	NewScore3 = document.getElementById("teamScore3").value;
	NewScore4 = document.getElementById("teamScore4").value;
	TeamAmount = localStorage.getItem("TeamAmount");
	NumScore = localStorage.getItem("NumScore");
	math1 = localStorage.getItem("math1");
	math2 = localStorage.getItem("math2");
	math3 = localStorage.getItem("math3");
	math4 = localStorage.getItem("math4");
	math5 = localStorage.getItem("math5");
	science1 = localStorage.getItem("science1");
	science2 = localStorage.getItem("science2");
	science3 = localStorage.getItem("science3");
	science4 = localStorage.getItem("science4");
	science5 = localStorage.getItem("science5");
	history1 = localStorage.getItem("history1");
	history2 = localStorage.getItem("history2");
	history3 = localStorage.getItem("history3");
	history4 = localStorage.getItem("history4");
	history5 = localStorage.getItem("history5");
	geography1 = localStorage.getItem("geography1");
	geography2 = localStorage.getItem("geography2");
	geography3 = localStorage.getItem("geography3");
	geography4 = localStorage.getItem("geography4");
	geography5 = localStorage.getItem("geography5");


	ShowTeam()
	
	if(math1 == "selected")
	{
		document.getElementById("100math").disabled = true;
	}
	
	if(math2 == "selected")
	{
		document.getElementById("200math").disabled = true;
	}
	
	if(math3 == "selected")
	{
		document.getElementById("300math").disabled = true;
	}
	
	if(math4 == "selected")
	{
		document.getElementById("400math").disabled = true;
	}
	
	if(math5 == "selected")
	{
		document.getElementById("500math").disabled = true;
	}
	
	if(science1 == "selected")
	{
		document.getElementById("100science").disabled = true;
	}
	
	if(science2 == "selected")
	{
		document.getElementById("200science").disabled = true;
	}
	
	if(science3 == "selected")
	{
		document.getElementById("300science").disabled = true;
	}
	
	if(science4 == "selected")
	{
		document.getElementById("400science").disabled = true;
	}
	
	if(science5 == "selected")
	{
		document.getElementById("500science").disabled = true;
	}
	
	if(history1 == "selected")
	{
		document.getElementById("100history").disabled = true;
	}
	
	if(history2 == "selected")
	{
		document.getElementById("200history").disabled = true;
	}

	if(history3 == "selected")
	{
		document.getElementById("300history").disabled = true;
	}

	if(history4 == "selected")
	{
		document.getElementById("400history").disabled = true;
	}

	if(history5 == "selected")
	{
		document.getElementById("500history").disabled = true;
	}

	if(geography1 == "selected")
	{
		document.getElementById("100geography").disabled = true;
	}

	if(geography2 == "selected")
	{
		document.getElementById("200geography").disabled = true;
	}

	if(geography3 == "selected")
	{
		document.getElementById("300geography").disabled = true;
	}

	if(geography4 == "selected")
	{
		document.getElementById("400geography").disabled = true;
	}

	if(geography5 == "selected")
	{
		document.getElementById("500geography").disabled = true;
	}

}

function ShowTeam()
{
	switch(TeamAmount)
	{
		case "team1":
			document.getElementById("team 1").style.display = "block";
			break;
			
		case "team2":
			document.getElementById("team 1").style.display = "block";
			document.getElementById("team 2").style.display = "block";
			break;
		
		case "team3":
			document.getElementById("team 1").style.display = "block";
			document.getElementById("team 2").style.display = "block";
			document.getElementById("team 3").style.display = "block";
			break;
			
		case "team4":
			document.getElementById("team 1").style.display = "block";
			document.getElementById("team 2").style.display = "block";
			document.getElementById("team 3").style.display = "block";
			document.getElementById("team 4").style.display = "block";
			break;
	}
}

function Mainmenu()
{
	window.location.href = "menu.html";
}

function Math100()
{
	window.location.href = "math100.html";
}

function Math200()
{
	window.location.href = "math200.html";
}

function Math300()
{
	window.location.href = "math300.html";
}

function Math400()
{
	window.location.href = "math400.html";
}

function Math500()
{
	window.location.href = "math500.html";
}

function Science100()
{
	window.location.href = "science100.html";
}

function Science200()
{
	window.location.href = "science200.html";
}

function Science300()
{
	window.location.href = "science300.html";
}

function Science400()
{
	window.location.href = "science400.html";
}

function Science500()
{
	window.location.href = "science500.html";
}

function History100()
{
	window.location.href = "history100.html";
}

function History200()
{
    window.location.href = "history200.html";
}

function History300()
{
    window.location.href = "history300.html";
}

function History400()
{
    window.location.href = "history400.html";
}

function History500()
{
    window.location.href = "history500.html";
}

function Geography100()
{
    window.location.href = "geography100.html";
}

function Geography200()
{
    window.location.href = "geography200.html";
}

function Geography300()
{
    window.location.href = "geography300.html";
}

function Geography400()
{
    window.location.href = "geography400.html";
}

function Geography500()
{
    window.location.href = "geography500.html";
}






function AddScore()
{
	NewScore = parseInt(NewScore) + parseInt(NumScore);
	document.getElementById("teamScore").value = NewScore;
}

function SubScore()
{
	NewScore = parseInt(NewScore) - parseInt(NumScore);
	document.getElementById("teamScore").value = NewScore;
}

function AddScore2()
{
	NewScore2 = parseInt(NewScore2) + parseInt(NumScore);
	document.getElementById("teamScore2").value = NewScore2;
}

function SubScore2()
{
	NewScore2 = parseInt(NewScore2) - parseInt(NumScore);
	document.getElementById("teamScore2").value = NewScore2;
}

function AddScore3()
{
	NewScore3 = parseInt(NewScore3) + parseInt(NumScore);
	document.getElementById("teamScore3").value = NewScore3;
}

function SubScore3()
{
	NewScore3 = parseInt(NewScore3) - parseInt(NumScore);
	document.getElementById("teamScore3").value = NewScore3;
}

function AddScore4()
{
	NewScore4 = parseInt(NewScore4) + parseInt(NumScore);
	document.getElementById("teamScore4").value = NewScore4;
}

function SubScore4()
{
	NewScore4 = parseInt(NewScore4) - parseInt(NumScore);
	document.getElementById("teamScore4").value = NewScore4;
}

