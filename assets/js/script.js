var beginButton = document.querySelector("#btn-begin");
beginButton.addEventListener("click", beginQuiz);

var answerbtn1 = document.querySelector("#btn1");
var answerbtn2 = document.querySelector("#btn2");
var answerbtn3 = document.querySelector("#btn3");
var answerbtn4 = document.querySelector("#btn4");
answerbtn1.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button")) {
        var state = element.getAttribute("data-state");
        if (state === "correct") {
            element.setAttribute("class", "correct");
            console.log("correct answer")
        } else {
            element.setAttribute("class", "incorrect")
            console.log("incorrect answer")
        }
    }
});

var timeEl = document.getElementById("time");

var timeRemaining = 5;

function keepTime() {
    var timeTracker = setInterval(function() {
        timeRemaining--;
        timeEl.textContent = timeRemaining + " remaining";
        if (timeRemaining === 0) {
            clearInterval(timeTracker); 
            timeEl.textContent = "time's up";
            alert("Good Job");
        }
    }, 1000);
};

function beginQuiz() {

    keepTime();

    beginButton.setAttribute("style", "display: none")
    var questionCard = document.createElement("article");
    questionCard.setAttribute("style", "background-color: red; color: white; width: 100%; height: 100%;");
    questionCard.textContent = "The quiz has begun";
    document.body.children[1].children[0].appendChild(questionCard);
};