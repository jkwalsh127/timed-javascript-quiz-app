var beginButton = document.querySelector("#begin");

var timeEl = document.getElementById("time");
var timeRemaining = 5;

beginButton.addEventListener("click", keepTime);
beginButton.addEventListener("click", beginQuiz);


function keepTime() {
    var timeTracker = setInterval(function() {
        timeRemaining--;
        timeEl.textContent = timeRemaining + " remaining";
        if (timeRemaining === 0) {
            timeEl.textContent = "time's up";
            clearInterval(timeTracker); 
            alert("Good Job");
        }
    }, 1000);
}



function beginQuiz() {
    beginButton.setAttribute("style", "display: none")
    var questionCard = document.createElement("article");
    questionCard.setAttribute("style", "background-color: red; color: white; width: 100%; height: 100%;")
    questionCard.textContent = "The quiz has begun";
    document.body.children[1].children[0].appendChild(questionCard);

};