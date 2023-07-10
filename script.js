//Generate quiz

//come up with questions (put in an object inside a string?)
//come up with answers
//link questions to answers
//with each selection change the question/answers combo
//display total score
//make timer start with start of quiz
//store score and time to complete
//display high scores



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
        ]
    }
]

//show questions and answers
let currQuestion = 0
var score = 0

// move from displaying first question to the next

function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("ans")

    question.textContent = Questions[currQuestion].q;
    ans.innerHTML = ""

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("ans").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
//generate timer and get to start 

function Countdown() {
    var timerEl = document.getElementById('countdown');
    var timeLeft = 60;
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
            displaytimeLeft;
        }
    }, 1000);
}

addEventListener(click, function () {
    //display time left and keep score and time left stored for high scores

}
)