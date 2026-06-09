window.addEventListener("load", addListener);

function addListener()
{
    Score5 = 500;
    point500 = "selected";
    localStorage.setItem("NumScore", Score5);
    localStorage.setItem("history5", point500);
    document.getElementById("option1").addEventListener("click", Points);
}

function Points()
{
    alert("Correct");
    window.location.href = "Jeopardy2.html";
}
