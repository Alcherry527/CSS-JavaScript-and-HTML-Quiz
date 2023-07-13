//Generate quiz
//start quiz button loads quiz and replaces paragraph text
//come up with questions (put in an object inside a string?)
//come up with answers
//link questions to answers
//with each selection change the question/answers combo
//display total score
//make timer start with start of quiz
//store scores
//display high scores
var flash;
var timeLeft = 60;
var timerEl = document.getElementById('countdown');
var endScreen = document.querySelector('.EndContainer');
var inputEl = document.querySelector("#input");
var initialsBtn = document.getElementById("initials-btn");

var Questions = [
    {
        q: "Commonly Used Data Types Do Not Include",
        a: [{ text: "strings", isCorrect: false },
        { text: "alerts", isCorrect: true },
        { text: "booleans", isCorrect: false },
        ]
    },
    {
        q: "Variables are case sensitive",
        a: [{ text: "true", isCorrect: false },
        { text: "false", isCorrect: true },
        { text: "neither", isCorrect: false },]
    },
    {
        q: "functions are called with",
        a: [{ text: "parenthesis", isCorrect: true },
        { text: "dollar signs", isCorrect: false },
        { text: "neither", isCorrect: false },]
    }
]

//show questions and answers
let currQ = 0
var score = 0

// move from displaying first question to the next

function loadQues() {
    Countdown()
    const question = document.getElementById("ques")
    const opt = document.getElementById("ans")

    question.textContent = Questions[currQ].q;
    //ans.innerHTML = ""
    opt.innerHTML = ""

    // add radio buttons
    for (let i = 0; i < Questions[currQ].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQ].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();
//store the number correct 
function loadScore() {
    const totalScore = document.getElementById("results")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
// move to next question this is skipping a question now
function nextQuestion() {
    console.log({ currQ })
    if (currQ < Questions.length - 1) {
        currQ++;
        loadQues();
    } else {
        document.getElementById("ans").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
        displayEndScreen;
    }
}
//messes up here check answers and display after the clicked button correct or incorrect- this is causing skipping
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQ].a[selectedAns].isCorrect) {
        score++;
        var correctEl = document.querySelector(".correct")
        clearTimeout(flash)
        correctEl.textContent = "Correct"
        correctEl.classList.remove("Hide")
        flash = setTimeout(function () {
            correctEl.classList.add("Hide")
        }, 1000)

        console.log("Correct")
        nextQuestion();
    } else {
        var incorrectEl = document.querySelector(".incorrect")
        clearTimeout(flash)
        incorrectEl.textContent = "Incorrect"
        incorrectEl.classList.remove("Hide")
        flash = setTimeout(function () {
            incorrectEl.classList.add("Hide")
        }, 1000)
        nextQuestion();
    }
    if (currQ > Questions.length) {
        displayEndScreen()
    }
}

//generate timer and get to start 

function Countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayEndScreen();
        }
    }, 1000);
}
function displayEndScreen() {
    endScreen.classList.remove("Hide")
}
// storing scores
function savescore() {
    var initials = inputEl.value.trim()
    var storedScores = JSON.parse(localStorage.getItem("storedScores")) || []
    var newScore = {
        initials: initials,
        score: score,
    }
    storedScores.push(newScore)
    localStorage.setItem("storedScores", JSON.stringify(storedScores))

}

initialsBtn.addEventListener("click", function () {
    savescore()
    inputEl.value = ""
})
document.getElementById("btn").addEventListener("click", function () {
    checkAns();
})
// keep scores for high scores and display with button click

document.getElementById("highS").addEventListener("click", function () {
    var highScores = JSON.parse(localStorage.getItem("storedScores"))
    for (let index = 0; index < highScores.length; index++) {
        const element = highScores[index];

    }

})

function hide() {

    var button = document.getElementById('hide');
    button.style.display = "none";

    var start = document.getElementsByClassName("start");
    start.style.display = "none";

}