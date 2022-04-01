var beginButton = document.querySelector("#begin");

var timeEl = document.getElementById("time");
var timeRemaining = 5;

beginButton.addEventListener("click", keepTime);

function keepTime() {
    var timeTracker = setInterval(function() {
        timeRemaining--;
        timeEl.textContent = timeRemaining + " remaining";
        if (timeRemaining === 0) {
            clearInterval(timeTracker); 
            alert("Good Job");
        }
    }, 1000);
}

// var questionCard = document.createElement("article");
// questionCard.setAttribute("style", "background-color: red; color: white; width: 100%; height: 100%;")
// questionCard.textContent = "The quiz has begun";

function beginQuiz() {
    console.log("working")
};