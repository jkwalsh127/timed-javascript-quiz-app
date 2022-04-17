var beginButton = document.querySelector("#btn-begin");
var submitScoreButton = document.querySelector("#btn-submit-score");
var answerbtn1 = document.querySelector("#btn1");
var answerbtn2 = document.querySelector("#btn2");
var answerbtn3 = document.querySelector("#btn3");
var answerbtn4 = document.querySelector("#btn4");
var quizSection = document.querySelector("#quiz-section")
var welcomeArticle = document.querySelector("#welcome-article");    
var quizArticle = document.querySelector("#quiz-article");    
var scoreBoard = document.querySelector("#scoreboard");   
var afterAction = document.querySelector("#after-action");
var submitScore = document.querySelector("#submit-score");
var highscoreOne = document.querySelector("#highscore-one");
var initialsOne = document.querySelector("#initials-one");
var highscoreList = document.querySelector("#highscore-list");
var questionNumber = document.querySelector("#question-number");
var questionPrompt = document.querySelector("#question-prompt");
var afterAction = document.querySelector("#after-action");
var correctScore = document.querySelector("#correct-score");
var incorrectScore = document.querySelector("#incorrect-score");
var welcomeHeader = document.querySelector("#welcome-header");
var welcomeParagraph = document.querySelector("#welcome-paragraph");
var timeEl = document.getElementById("time");
var answerButtonList = document.querySelector("#answer-button-list"); 
var correctCount = "";
var incorrectCount = "";

beginButton.addEventListener("click", beginQuiz);
 
// 
// 
// var highscores = [10, 7, 5, 3, 1];
// function checkHighScore() {
//     for (var i = 0; i < highscores.length; i++) {
//         if (correctCount > highscores[i]) {
//             highscores.splice(i, 1, correctCount);
//             localStorage.setItem("highscores", highscores);
//             return;
//         }
//     }
// };
function renderHighscores() {
    var score = localStorage.getItem("score");
    var initials = localStorage.getItem("initials");

    if (!score || !initials) {
        return;
    };
        var li = document.createElement("li");  
        li.textContent = initials + "    -    " + score;
        highscoreList.appendChild(li);
};

renderHighscores();

// reload page upon selecting to take the quiz again
function reloadPage() {
    location.reload();
}
 
// 
// 
function endQuiz() {

    timeEl.textContent = "";

    quizSection.setAttribute("style", "display: none");

    afterAction.setAttribute("style", "display: block");
    submitScore.setAttribute("style", "display: block");
    submitScoreButton.setAttribute("style", "display: block");

    questionNumber.textContent = "Time's up";
    afterAction.textContent = "Nice job. You got " + correctCount + " answers correct.";

    submitScoreButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        var getInitials = document.querySelector("#submit-text").value;
        
        if (getInitials === "") {
            reloadPage();
        } else {
            localStorage.setItem("score", correctCount);
            localStorage.setItem("initials", getInitials);
            renderHighscores();
            reloadPage();
        };
    })
}
 
// 
// Set timer to end quiz upon completion
function keepTime() {
    var timeTracker = setInterval(function() {
        timeRemaining--;
        timeEl.textContent = timeRemaining + " seconds remaining";
        if (timeRemaining === 0 || timeRemaining < 0) {
            clearInterval(timeTracker); 
            endQuiz();
        } 
    }, 1000);
};
// 
// 

// 
// The function that initiates the quiz 
function beginQuiz() {
    
    welcomeArticle.setAttribute("style", "display: none")
    quizArticle.setAttribute("style", "display: block");
    quizSection.setAttribute("style", "display: block");

    // Set timer
    timeRemaining = 50;

    keepTime();

    callQuestion();
};

function waitForSelection() {
    return new Promise(resolve => waitForUserSelection = resolve);
};
function resolveBtn() {
    waitForUserSelection();
};
var currentQuestion = [];

answerButtonList.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button")) {
        var state = element.getAttribute("data-value");

        var currentAnswer = currentQuestion.slice(-1);

        if (state == currentAnswer[0]) {
            correctCount++;
            correctScore.textContent = correctCount;
            localStorage.setItem("correctCount", correctCount);
        } else {
            incorrectCount++;
            incorrectScore.textContent = incorrectCount;
            timeRemaining = timeRemaining - 10;
        }
    };
});

answerButtonList.addEventListener("click", resolveBtn)

async function callQuestion() {

    for (var i = 0; i < questionInfo.length; i++) {
    
    var question = questionInfo[i];

    currentQuestion.push(question.correct);

    questionNumber.textContent = question.number;
    questionPrompt.textContent = question.prompt;
    answerbtn1.textContent = question.btn1;
    answerbtn2.textContent = question.btn2;
    answerbtn3.textContent = question.btn3;
    answerbtn4.textContent = question.btn4;

    await waitForSelection();    
    };
    endQuiz();
};





var questionInfo = [{
    number: "Question #1",
    prompt: "Which of the following JavaScript types are not immutable?",
    btn1: "Null and Undefined types",
    btn2: "Symbol, BigInt, and Boolean types",
    btn3: "String and Number types",
    btn4: "Objects",
    correct: "4",
},
{
    number: "Question #2",
    prompt: "What is the correct syntax for using the addEventListener method?",
    btn1: "document.addEventListener(event, function, Capture)",
    btn2: "document.addEventListener(name, value)",
    btn3: "document.addEventListener(keyname, value)",
    btn4: "document.adddEventListener(name, condition)",
    correct: "1",
},
{
    number: "Question #3",
    prompt: "What symbols are used for single-line comments in JavaScript",
    btn1: "/* */",
    btn2: "//",
    btn3: "#",
    btn4: "$",
    correct: "2",
},
{
    number: "Question #4",
    prompt: "What operator checks if two values or variables are not equal in value or type?",
    btn1: "!=",
    btn2: "x",
    btn3: "!==",
    btn4: "/",
    correct: "3",
},
{   
    number: "Question #5",
    prompt: "What does the parseInt() method do",
    btn1: "parses a string argument and returns an array",
    btn2: "parses a string argument and returns an integer",
    btn3: "parses an integer argument and returns a string",
    btn4: "parses an array argument and returns a string",
    correct: "2",
},
{   
    number: "Question #6",
    prompt: "Which of the following is not a method to call a pop-up box?",
    btn1: "Alert",
    btn2: "Confirm",
    btn3: "Prompt",
    btn4: "Message",
    correct: "4",
}
];

// This is a relic function from my first attempt at building this project. I relied very heavily on creating functions, making each individual question its own function, which would pass the user to the next question by calling the corresponding function after a click event. The final product is much cleaner, compartmentalized, and succinct. 
// Set the functions to call in questions
// function firstQuestion() {

//     questionNumber.textContent = "Question #1";
//     questionPrompt.textContent = "Which of the following JavaScript types are not immutable?";
//     answerbtn1.textContent = "Null and Undefined types";
//     answerbtn2.textContent = "Symbol, BigInt, and Boolean types";
//     answerbtn3.textContent = "String and Number types";
//     answerbtn4.textContent = "Objects";

//     answerbtn1.addEventListener("click", function(event) {
//         var element = event.target;
//         element.setAttribute("data-state", "incorrect");
//         secondQuestion();
//     });
//     answerbtn2.addEventListener("click", function(event) {
//         var element = event.target;
//         element.setAttribute("data-state", "incorrect");
//         secondQuestion();
//     });
//     answerbtn3.addEventListener("click", function(event) {
//         var element = event.target;
//         element.setAttribute("data-state", "incorrect");
//         secondQuestion();
//     });
//     answerbtn4.addEventListener("click", function(event) {
//         var element = event.target;
//         element.setAttribute("data-state", "correct")
//         secondQuestion();
//     });
// };
// The bad initial attempt at setting my for loop after instantiating the array of objectified questions
// function callQuestion() {
//     for (var i = 0; i < questionInfo.length; i++) {
//     var question = questionInfo[i];
//     questionNumber.textContent = question.number;
//     questionPrompt.textContent = question.prompt;
//     answerbtn1.textContent = question.btn1;
//     answerbtn2.textContent = question.btn2;
//     answerbtn3.textContent = question.btn3;
//     answerbtn4.textContent = question.btn4;
//     answerButtonList.addEventListener("click", function(event) {
//         var element = event.target;
//         if (element.matches("button")) {
//             var state = element.getAttribute("data-value");
//             if (state == question.correct) {
//                 correctCount++;
//                 correctScore.textContent = correctCount;
//                 localStorage.setItem("correctCount", correctCount);
//             } else {
//                 incorrectCount++;
//                 incorrectScore.textContent = incorrectCount;
//                 timeRemaining = timeRemaining - 10;
//             }
//         };
//     });
//     };
//     endQuiz();
// };