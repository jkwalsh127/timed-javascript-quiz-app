var beginButton = document.querySelector("#btn-begin");
var playAgainButton = document.querySelector("#btn-play-again");
var answerbtn1 = document.querySelector("#btn1");
var answerbtn2 = document.querySelector("#btn2");
var answerbtn3 = document.querySelector("#btn3");
var answerbtn4 = document.querySelector("#btn4");

var questionPrompt = document.querySelector("#question-prompt");

var answerList = document.querySelector("#answer-list");
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
var answerList = document.querySelector("#answer-list");
// 

// reload page upon clicking the play again button
playAgainButton.addEventListener("click", reloadPage);

function reloadPage() {
    location.reload();
}
// 

// answerbtn1.addEventListener("click", function(event) {
//     var state = event.target.getAttribute("class");
//     if (state === "correct") {
//         console.log("correct answer")
//     } else {
//         console.log("incorrect answer")
//     }
// });
// answerbtn2.addEventListener("click", function(event) {
//     var state = event.target.getAttribute("class");
//     if (state === "correct") {
//         console.log("correct answer")
//     } else {
//         console.log("incorrect answer")
//     }
// });
// answerbtn3.addEventListener("click", function(event) {
//     var state = event.target.getAttribute("class");
//     if (state === "correct") {
//         console.log("correct answer")
//     } else {
//         console.log("incorrect answer")
//     }
// });
// answerbtn4.addEventListener("click", function(event) {
//     var state = event.target.getAttribute("class");
//     if (state === "correct") {
//         console.log("correct answer")
//     } else {
//         console.log("incorrect answer")
//     }
// });

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
            answerList.setAttribute("style", "display: none");
            afterAction.setAttribute("style", "display: block");
            playAgainButton.setAttribute("style", "display: block");
        } 
    }, 1000);
};

console.log("correct counter initiated", typeof correctCount)

if(correctCount !== null){
console.log(correctCount, typeof correctCount)
correctScore.textContent = correctCount;
}else {
console.log(correctCount)
correctCount = 0;
localStorage.setItem("correctCount", correctCount);
correctScore.textContent = count;
}

console.log("incorrect counter initiated", typeof incorrectCount)
if(incorrectCount !== null){
console.log(incorrectCount, typeof incorrectCount)
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
    answerList.setAttribute("style", "display: block");
    playAgainButton.setAttribute("style", "display: none");
    answerList.setAttribute("style", "display: block");

    // Set timer to begin game
    timeRemaining = 6;
    
    keepTime();

    firstQuestion();

    // userAnswer();

    answerList.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("button")) {
            var state = element.getAttribute("data-state");
            if (state === "correct") {
                correctCount++;
                correctScore.textContent = correctCount;
                console.log(correctCount, typeof correctCount);
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

    questionPrompt.textContent = "What is the correct syntax for using the addEventListener method?";
    answerbtn1.textContent = "document.addEventListener(event, function, Capture)";
    answerbtn2.textContent = "document.addEventListener(name, value)";
    answerbtn3.textContent = "document.addEventListener(keyname, value)";
    answerbtn4.textContent = "document.adddEventListener(name, condition)";

    answerbtn1.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "correct");
    });
    answerbtn2.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
    });
    answerbtn3.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
    });
    answerbtn4.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect")
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
    });
    answerbtn2.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
    });
    answerbtn3.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect");
    });
    answerbtn4.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "correct")
    });
};
// 