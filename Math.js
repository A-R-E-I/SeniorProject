window.addEventListener("load", addListener);

function addListener()
{
    Score = 100;
    point100 = "selected";
    localStorage.setItem("NumScore", Score);
    localStorage.setItem("math1", point100);

    // Attach ALL button actions immediately, helped me fix the latency problem I had
    document.getElementById("option1").onclick = correct;
    document.getElementById("option2").onclick = wrong;
    document.getElementById("option3").onclick = wrong;
    document.getElementById("option4").onclick = wrong;
}

function correct()
{
    alert("Correct!");
    window.location.href = "Jeopardy2.html";
}

function wrong()
{
    alert("Wrong!");
    window.location.href = "Jeopardy2.html";
}
