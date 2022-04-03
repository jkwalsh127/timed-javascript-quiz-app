var beginButton = document.querySelector("#btn-begin");
beginButton.addEventListener("click", beginQuiz);
var playAgainButton = document.querySelector("#btn-play-again");
playAgainButton.addEventListener("click", beginQuiz);

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

var timeRemaining = 6;



function keepTime() {
    var timeTracker = setInterval(function() {
        timeRemaining--;
        timeEl.textContent = timeRemaining + " remaining";
        if (timeRemaining === 0) {
            clearInterval(timeTracker); 
            timeEl.textContent = "time's up";
            alert("Good Job");
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

// function userAnswer() {
//     if ()
// }


var answerList = document.querySelector("#answer-list");
var afterAction = document.querySelector("#after-action")

var correctScore = document.querySelector("#correct-score")
var incorrectScore = document.querySelector("#incorrect-score")

var welcomeHeader = document.querySelector("#welcome-header")
var welcomeParagraph = document.querySelector("#welcome-paragraph")

var correctCount = localStorage.getItem("correctCount");

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

var incorrectCount = localStorage.getItem("incorrectCount");

console.log("correct counter initiated", typeof incorrectCount)

if(incorrectCount !== null){
  console.log(incorrectCount, typeof incorrectCount)
  incorrectScore.textContent = incorrectCount;
}else {
  console.log(incorrectCount)
  incorrectCount = 0;
  localStorage.setItem("incorrectCount", incorrectCount);
  incorrectScore.textContent = count;
}

function beginQuiz() {

    welcomeHeader.setAttribute("style", "display: none;")
    welcomeParagraph.setAttribute("style", "display: none;")
    questionPrompt.setAttribute("style", "display: block")
    answerList.setAttribute("style", "display: block")

    
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

    beginButton.setAttribute("style", "display: none")
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
    answerbtn1.setAttribute("data-class", "correct");
    answerbtn2.setAttribute("class", "incorrect");
    answerbtn2.setAttribute("data-class", "incorrect");
    answerbtn3.setAttribute("class", "incorrect");
    answerbtn3.setAttribute("data-class", "incorrect");
    answerbtn4.setAttribute("class", "incorrect");
    answerbtn4.setAttribute("data-class", "incorrect");


    answerbtn1.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "correct")
    });
    answerbtn2.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect")
    });
    answerbtn3.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect")
    });
    answerbtn4.addEventListener("click", function(event) {
        var element = event.target;
        element.setAttribute("data-state", "incorrect")
    });

};

    // var state = element.getAttribute("data-state");
    // if (state === "neutral") {
    //     element.setAttribute("data-name", "data-correct");
    // } else {
    //     element.setAttribute("data-name", "data-neutral");
    //     console.log("neutral")
    // }