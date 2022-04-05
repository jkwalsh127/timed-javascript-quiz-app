var beginButton = document.querySelector("#btn-begin");
var playAgainButton = document.querySelector("#btn-play-again");
var answerbtn1 = document.querySelector("#btn1");
var answerbtn2 = document.querySelector("#btn2");
var answerbtn3 = document.querySelector("#btn3");
var answerbtn4 = document.querySelector("#btn4");
var quizSection = document.querySelector("#quiz-section")
var welcomeArticle = document.querySelector("#welcome-article");    
var quizArticle = document.querySelector("#quiz-article");    
var scoreBoard = document.querySelector("#scoreboard");   
var afterAction = document.querySelector("#after-action");
 

var highscoreList = document.querySelector("#highscore-list");

var questionNumber = document.querySelector("#question-number");
var questionPrompt = document.querySelector("#question-prompt");

var afterAction = document.querySelector("#after-action")

var correctScore = document.querySelector("#correct-score")
var incorrectScore = document.querySelector("#incorrect-score")

var welcomeHeader = document.querySelector("#welcome-header")
var welcomeParagraph = document.querySelector("#welcome-paragraph")


var timeEl = document.getElementById("time");

var timeRemaining = 6;

// Call answer-list to display answer ul upon starting each question
var answerButtonList = document.querySelector("#answer-button-list");
// 

















// reload page upon clicking the play again button
playAgainButton.addEventListener("click", reloadPage);

// reload page upon selecting to take the quiz again
function reloadPage() {
    location.reload();
}
// 

var correctCount = "";
console.log("correct counter initiated", typeof correctCount)
if(correctCount !== null){
correctScore.textContent = correctCount;
}else {
correctCount = 0;
correctScore.textContent = correctCount;
}

var incorrectCount = "";
console.log("incorrect counter initiated", typeof incorrectCount)
if(incorrectCount !== null){
incorrectScore.textContent = incorrectCount;
}else {
incorrectCount = 0;
incorrectScore.textContent = incorrectCount;
}










var highscores = [];

function renderHighScores() {
    highscoreList.innerHTML = "";

    for (var i = 0; i < highScores.length; i++) {
        var highScore = highScores[i];

        var li = document.createElement("li");
        li.textContent = highScore;
        li.setAttribute("data-index", i);

        highscoreList.appendChild(li);
    }
}

function init() {
    var storedHighScores = JSON.parse(localStorage.getItem("highscores"));
    if (storedHighScores !== null) {
        highscores = storedHighScores;
    }

    renderHighScores();
}

function storeHighScores() {
    localStorage.setItem("highscores", JSON.stringify(highscores))
}


var highScores = [];
var correctCounts = correctCount;
console.log(correctCounts);


// Set timer to end quiz upon completion
function keepTime() {
    var timeTracker = setInterval(function() {
        timeRemaining--;
        timeEl.textContent = timeRemaining + " seconds remaining";
        if (timeRemaining === 0) {
            clearInterval(timeTracker); 
            timeEl.textContent = "";

            quizSection.setAttribute("style", "display: none");

            questionNumber.textContent = "Time's up";
            afterAction.setAttribute("style", "display: block");
            afterAction.textContent = "Nice job. You got " + correctCount + " answers correct.";

            playAgainButton.setAttribute("style", "display: block");
        } 
    }, 1000);
};
// 





















// The function that initiates the quiz 
beginButton.addEventListener("click", beginQuiz);

function beginQuiz() {
    
    welcomeArticle.setAttribute("style", "display: none")
    quizArticle.setAttribute("style", "display: block");
    scoreBoard.setAttribute("style", "display: block");

    // Set timer
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
                console.log(correctCount, typeof correctCount);
                localStorage.setItem("correctCount", correctCount);
            } else {
                incorrectCount++;
                incorrectScore.textContent = incorrectCount;
                console.log(incorrectCount, typeof incorrectCount);
            }
        }
    });
};
// 



























// Set the functions to call in questions
function firstQuestion() {

    questionNumber.textContent = "Question #1";
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

    questionNumber.textContent = "Question #2";
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

    questionNumber.textContent = "Question #3";
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

    questionNumber.textContent = "Question #4";
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

    questionNumber.textContent = "Question #5";
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

    questionNumber.textContent = "Question #6";
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

// Call to retrieve data and render it upon page load
init()