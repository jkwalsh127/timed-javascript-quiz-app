var beginButton = document.querySelector("#btn-begin");
var playAgainButton = document.querySelector("#btn-play-again");
var answerbtn1 = document.querySelector("#btn1");
var answerbtn2 = document.querySelector("#btn2");
var answerbtn3 = document.querySelector("#btn3");
var answerbtn4 = document.querySelector("#btn4");

var questionPrompt = document.querySelector("#question-prompt");

var afterAction = document.querySelector("#after-action")

var correctScore = document.querySelector("#correct-score")
var incorrectScore = document.querySelector("#incorrect-score")

var welcomeHeader = document.querySelector("#welcome-header")
var welcomeParagraph = document.querySelector("#welcome-paragraph")

var correctCount = localStorage.getItem("correctCount");

var incorrectCount = localStorage.getItem("incorrectCount");

var questionPrompt = document.querySelector("#question-prompt")

var timeEl = document.getElementById("time");

var timeRemaining = 6;



// Call answer-list to display answer ul upon starting each question
var answerButtonList = document.querySelector("#answer-button-list");
// 

// reload page upon clicking the play again button
playAgainButton.addEventListener("click", reloadPage);

function reloadPage() {
    location.reload();
}
// 

function keepTime() {
    var timeTracker = setInterval(function() {
        timeRemaining--;
        timeEl.textContent = timeRemaining + " remaining";
        if (timeRemaining === 0) {
            clearInterval(timeTracker); 
            timeEl.textContent = "time's up";
            correctScore.textContent = "0";
            incorrectScore.textContent = "0";
            // welcomeHeader.setAttribute("style", "display: none")
            // welcomeParagraph.setAttribute("style", "display: none")
            questionPrompt.setAttribute("style", "display: none");
            answerButtonList.setAttribute("style", "display: none");
            afterAction.setAttribute("style", "display: block");
            playAgainButton.setAttribute("style", "display: block");
        } 
    }, 1000);
};

// console.log("correct counter initiated", typeof correctCount)
if(correctCount !== null){
// console.log(correctCount, typeof correctCount)
correctScore.textContent = correctCount;
}else {
console.log(correctCount)
correctCount = 0;
localStorage.setItem("correctCount", correctCount);
correctScore.textContent = count;
}

// console.log("incorrect counter initiated", typeof incorrectCount)
if(incorrectCount !== null){
// console.log(incorrectCount, typeof incorrectCount)
incorrectScore.textContent = incorrectCount;
}else {
console.log(incorrectCount)
incorrectCount = 0;
localStorage.setItem("incorrectCount", incorrectCount);
incorrectScore.textContent = count;
}

// The function that initates the quiz 
beginButton.addEventListener("click", beginQuiz);

function beginQuiz() {
    
    beginButton.setAttribute("style", "display: none;");
    welcomeHeader.setAttribute("style", "display: none;");
    welcomeParagraph.setAttribute("style", "display: none;");
    questionPrompt.setAttribute("style", "display: block");
    answerButtonList.setAttribute("style", "display: block");
    playAgainButton.setAttribute("style", "display: none");
    answerButtonList.setAttribute("style", "display: block");

    // Set timer to begin game
    timeRemaining = 6;
    
    keepTime();

    firstQuestion();

    answerButtonList.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("button")) {
            var state = element.getAttribute("data-state");
            if (state === "correct") {
                correctCount++;
                correctScore.textContent = correctCount;
                // console.log(correctCount, typeof correctCount);
            } else {
                incorrectCount++;
                incorrectScore.textContent = incorrectCount;
                // console.log(incorrectCount, typeof incorrectCount);
            }
        }
    });
};
// 


// Set the functions to call in questions
function firstQuestion() {

    questionPrompt.textContent = "What is the correct syntax for using the addEventListener method?";
    answerbtn1.textContent = "document.addEventListener(event, function, Capture)";
    answerbtn2.textContent = "document.addEventListener(name, value)";
    answerbtn3.textContent = "document.addEventListener(keyname, value)";
    answerbtn4.textContent = "document.adddEventListener(name, condition)";

    answerbtn1.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "correct");
        secondQuestion();
    });
    answerbtn2.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        secondQuestion();
    });
    answerbtn3.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        secondQuestion();
    });
    answerbtn4.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect")
        secondQuestion();
    });


};

function secondQuestion() {

    questionPrompt.textContent = "Which of the following JavaScript types are not immutable?";
    answerbtn1.textContent = "Null and Undefined types";
    answerbtn2.textContent = "Symbol, BigInt, and Boolean types";
    answerbtn3.textContent = "String and Number types";
    answerbtn4.textContent = "Objects";

    answerbtn1.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        thirdQuestion();
    });
    answerbtn2.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "correct");
        thirdQuestion();
    });
    answerbtn3.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        thirdQuestion();
    });
    answerbtn4.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        thirdQuestion();
    });
};

function thirdQuestion() {

    questionPrompt.textContent = "3?";
    answerbtn1.textContent = "3";
    answerbtn2.textContent = "3";
    answerbtn3.textContent = "3";
    answerbtn4.textContent = "3";

    answerbtn1.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "correct");
        fourthQuestion();
    });
    answerbtn2.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        fourthQuestion();
    });
    answerbtn3.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        fourthQuestion();
    });
    answerbtn4.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        fourthQuestion();
    });
};

function fourthQuestion() {

    questionPrompt.textContent = "4?";
    answerbtn1.textContent = "4";
    answerbtn2.textContent = "4";
    answerbtn3.textContent = "4";
    answerbtn4.textContent = "4";

    answerbtn1.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        fifthQuestion();
    });
    answerbtn2.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "correct");
        fifthQuestion();
    });
    answerbtn3.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        fifthQuestion();
    });
    answerbtn4.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        fifthQuestion();
    });
};

function fifthQuestion() {

    questionPrompt.textContent = "5?";
    answerbtn1.textContent = "5";
    answerbtn2.textContent = "5";
    answerbtn3.textContent = "5";
    answerbtn4.textContent = "5";

    answerbtn1.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        sixthQuestion();
    });
    answerbtn2.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "correct");
        sixthQuestion();
    });
    answerbtn3.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        sixthQuestion();
    });
    answerbtn4.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        sixthQuestion();
    });
};

function sixthQuestion() {

    questionPrompt.textContent = "6?";
    answerbtn1.textContent = "6";
    answerbtn2.textContent = "6";
    answerbtn3.textContent = "6";
    answerbtn4.textContent = "6";

    answerbtn1.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        seventhQuestion();
    });
    answerbtn2.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "correct");
        seventhQuestion();
    });
    answerbtn3.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        seventhQuestion();
    });
    answerbtn4.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
        seventhQuestion();
    });
};

function seventhQuestion() {

};
// 