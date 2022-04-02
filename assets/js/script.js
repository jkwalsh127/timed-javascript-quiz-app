var beginButton = document.querySelector("#btn-begin");
beginButton.addEventListener("click", beginQuiz);

var answerbtn1 = document.querySelector("#btn1");
var answerbtn2 = document.querySelector("#btn2");
var answerbtn3 = document.querySelector("#btn3");
var answerbtn4 = document.querySelector("#btn4");

var questionPrompt = document.querySelector("#question-prompt")

answerbtn1.addEventListener("click", function(event) {
    var state = event.target.getAttribute("class");
    if (state === "correct") {
        console.log("correct answer")
    } else if (state === "incorrect") {
        console.log("incorrect answer")
    }
});
answerbtn2.addEventListener("click", function(event) {
    var state = event.target.getAttribute("class");
    if (state === "correct") {
        console.log("correct answer")
    } else if (state === "incorrect") {
        console.log("incorrect answer")
    }
});
answerbtn3.addEventListener("click", function(event) {
    var state = event.target.getAttribute("class");
    if (state === "correct") {
        console.log("correct answer")
    } else if (state === "incorrect") {
        console.log("incorrect answer")
    }
});
answerbtn4.addEventListener("click", function(event) {
    var state = event.target.getAttribute("class");
    if (state === "correct") {
        console.log("correct answer")
    } else if (state === "incorrect") {
        console.log("incorrect answer")
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

    firstQuestion();

    beginButton.setAttribute("style", "display: none")
    var questionCard = document.createElement("article");
    questionCard.setAttribute("style", "background-color: red; color: white; width: 100%; height: 100%;");
    questionCard.textContent = "The quiz has begun";
    document.body.children[1].children[0].appendChild(questionCard);
};

// function setCorrect(event) {
//     var element = event.target;
//     // event.stopPropagation();
//     element.setAttribute("data-state", "correct");
// };

// function setIncorrect(event) {
//     var element = event.target;
//     element.setAttribute("data-state", "incorrect");
// };

function firstQuestion() {
    answerbtn1.setAttribute("class", "correct");
    answerbtn2.setAttribute("class", "incorrect");
    answerbtn3.setAttribute("class", "incorrect");
    answerbtn4.setAttribute("class", "incorrect");
};

    // var state = element.getAttribute("data-state");
    // if (state === "neutral") {
    //     element.setAttribute("data-name", "data-correct");
    // } else {
    //     element.setAttribute("data-name", "data-neutral");
    //     console.log("neutral")
    // }

