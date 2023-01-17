//Dom elements 

const startButton = document.querySelector("#start");
const initialScreen = document.querySelector("#start-screen");
const questionArea = document.querySelector("#questions");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");




// The starting amount of seconds for timer
let timerSeconds = 60;

// Place seconds in to time span
document.getElementById('time').innerHTML = timerSeconds;



// Functions to hide and reveal specific elements. This function can be called in to
// other functions to hide/reveal a variety of elements including start screen, questions etc.

function hidden(section) {
    section.style.display = 'none';
}

function reveal(section) {
    section.style.display = 'block';
}


// Timer - countdown in seconds and also call endQuiz() if reaching zero

function countdown() {
	timerSeconds--;
	document.getElementById("time").innerHTML = String( timerSeconds );
	if (timerSeconds > 0) {
		setTimeout(countdown, 1000);
	}
    if (timerSeconds <= 0) {
        endQuiz();
    }
    if (timerSeconds <= 0) {
        timerSeconds = 0;
    }
};

// Reveal end screen and hide question area
function endQuiz() {
    reveal(endScreen);
    hidden(questionArea)
    finalScore.textContent = timerSeconds;
}


// Adds event listener to the start button
// On click runs a series of functions including hide start button, start timer, reveal questions etc

startButton.addEventListener('click', function () {
    hidden(initialScreen);
    reveal(questionArea);
    setTimeout(countdown, 1000);
    renderQuestion();
});


// Show questions

let currentQ = 0;


function renderQuestion() {
    const currentQuestion = questions[currentQ].question

    let questionTitle = document.getElementById('question-title');

    questionTitle.textContent = currentQuestion

    let choicesContainer = document.getElementById('choices')


    for (let i = 0; i < questions[currentQ].choices.length; i++) {

        let answerButton = document.createElement('button')
        
        answerButton.setAttribute("value",choices )

        answerButton.textContent = questions[currentQ].choices[i]

        answerButton.onclick = checkAnswer;

        choicesContainer.appendChild(answerButton)
    }
}

// Check Answer and ammend score if wrong

function checkAnswer() {

    if (this.value == questions[currentQ].answer) {
        timerSeconds -= 0;
    }
        else {
            timerSeconds -= 10;
        }
    }





