window.addEventListener("load", addListener);

function addListener() {
    Score = 300;
    localStorage.setItem("NumScore", Score);
    localStorage.setItem("history3", "selected");

    document.getElementById("option1").onclick = correct;
    document.getElementById("option2").onclick = wrong;
    document.getElementById("option3").onclick = wrong;
    document.getElementById("option4").onclick = wrong;
}

function correct() {
    alert("Correct!");
    window.location.href = "Jeopardy2.html";
}

function wrong() {
    alert("Wrong!");
    window.location.href = "Jeopardy2.html";
}
