// Main variables that will contain the program
// const quiz = document.getElementById('quiz');
// const submit = document.getElementById('submit');
// const results = document.getElementById('results');

// Create Divs Here
//Header
// const header = document.createElement('header');
// const scoreBoard = document.createElement('nav');
// const timerContainer = document.createElement('time');

//grandparent
// const quizMain = document.createElement('main');

//parent
// const quizContain = document.createElement('section');

// Child 1
const quizIntro = document.createElement('article');
const titleText = document.createElement('h1');
const quizPara = document.createElement('p');
const startBtn = document.createElement('button');

const submitBtn = document.createElement('button');

//child 2, parent 2
const quizBox = document.createElement('article');

// Set attributes here
scoreBoard.setAttribute("a", "onclick=sce()");
scoreBoard.setAttribute('class', 'scoreBoard');
timerContainer.setAttribute('class','timer');
quizMain.setAttribute('id', '#quiz');
quizContain.setAttribute('class', 'quizContainer');
quizIntro.setAttribute('class', 'quizIntro');
// quizIntro.setAttribute('style', 'visibility:visible;')
startBtn.setAttribute('id','startBtn');
startBtn.setAttribute('click', 'quiz()');
submitBtn.setAttribute('click', 'showResults()')
quizBox.setAttribute('class', 'quizBox');
// quizBox.setAttribute('style', 'visibility:hidden;');


// Append divs here
// Header
document.body.append(header);
header.appendChild(scoreBoard);
header.appendChild(timerContainer);

//grandparent
document.body.appendChild(quizMain);

//Parent
quizMain.appendChild(quizContain);

//Child 1
quizContain.appendChild(quizIntro);
quizIntro.appendChild(titleText);
quizIntro.appendChild(quizPara);
quizIntro.appendChild(startBtn);
// append submitBtn

// child 2, parent 2
quizContain.appendChild(quizBox);


// Query Selectors
const headerStyle = document.querySelector('header');
const bodySize = document.querySelector('body');
var mainContain = document.querySelector('main');
let introGrab = document.querySelector('.quizIntro'); // hides
// let beginGrab = document.querySelector('.quizBox'); // appears
const btn = document.querySelectorAll('button');

const qAll = document.querySelectorAll('.question')

let articleSwitcher = document.querySelectorAll('button'); //not currently needed
let grabContainer = document.querySelectorAll('.quizContainer'); // not currently needed

// Set div styles
headerStyle.style.display = 'flex';
headerStyle.style.justifyContent = 'space-between';
bodySize.style.height = '100vh';
quizMain.style.position = 'relative';
titleText.style.margin = '0 auto';
titleText.style.textAlign = 'center';
quizPara.style.textAlign = "center";

// Style Objects
const flexStyle = {
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'margin': '0 auto',
    'width': '400px'
}

const quizStyle = {
    'display': 'flex',
    'flex-direction': 'column',
    'position': 'relative',
    'justify-content': 'center',
    'align-items': 'center',
    'margin': '0 auto',
    'width': '400px',
    'visibility': 'visible'
}

const btnStyle = {
    'background-color': '#651AE0',
    'color': '#FFF',
    'font-weight': 'bold',
    'border': 'none',
    'width': '100px',
    'height': '25px'
}

// Style applied to all btn objects
for (let i = 0; i < btn.length; i++) {
    Object.assign(btn[i].style, btnStyle);
}

Object.assign(mainContain.style, flexStyle);
Object.assign(quizContain.style, flexStyle);
Object.assign(quizIntro.style, flexStyle);
Object.assign(quizBox.style, quizStyle)

scoreBoard.textContent = `View Highscores`;
timerContainer.textContent = `Timer Placeholder`;
titleText.textContent = `Coding Quiz Challenge`;
quizPara.textContent = `Welcome to the JS Coding Quiz! 
Click 'Start Quiz' to get started. This timed quiz will provide 
ten questions each with a score of ten points. Take heed, for every 
wrong answer, 10 seconds will be subtracted from the clock. 
Good Luck!`
startBtn.textContent = `START QUIZ`;

// Quiz questions, remins hidden until 'onclick'
let questions = [
    {
        // See README for cited sources
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: "<script>"
    },
    {
        question: "How do you create an expressive function?",
        guesses: ["var varName = function myFunc()", "function = myFunc()", "function:myFunc()", "function myFunc()"],
        answer: "var varName = function myFunc()"
    },
    {
        question: "Which of these statements are truthy?",
        guesses: ["if (varName === true) {return true;}", "if (!varName == false) {return false;}", "if (varName == true) {return false;}", "if (varName) {return true;}"],
        answer: "if (varName) {return true;}"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        guesses: ["var colors = 'red', 'green', 'blue'", "var colors('red', 'green', 'blue')", "var colors = ['red', 'green', 'blue']", "var colors = rgb()"],
        answer: "var colors = ['red', 'green', 'blue']"
    },
    {
        question: "Which one of thses is more than just a mathmatic operator?",
        guesses: ["+", "=", "%", "*"],
        answer: "="
    },
]

//Creat Variables for quiz

// 'current' Question set at -1. This will allow the quiz to start at Question [0].
let cQuestion = -1; 
// Timer variables
let countdown = 0;
let timer;
// Score Tracking
let score = 0;

// Function trees go here
// When 'Start Quiz' is clicked, begin timer and run game.
function startQuiz(e) {
    
    countdown = 30;
    timerContainer.innerHTML = countdown;
    // Begin Countdown. When time = 0, clear timer and end game.
    timer = setInterval(function(){
        countdown--;
        timerContainer.innerHTML = countdown;
        if (countdown <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
    nextQuestion();
}

// Create loop for questions
function nextQuestion() {
    // Starts on array[0], question 1
    cQuestion++;
    //Once all questions are answered, game over.
    if (cQuestion > questions.length - 1) {
        gameOver();
        return;
    }

    // Header Question
    let qHeader = `<h2>${questions[cQuestion].question}</h2>`;

    for (let i = 0; i < questions[cQuestion].guesses?.length; i++) {
        let choiceBtn = "<button onclick=\"[#]\">[answer]</button>";
        choiceBtn = choiceBtn.replace("[answer]", questions[cQuestion].guesses[i]);
        if (questions[cQuestion].guesses[i] == questions[cQuestion].answer) {
            choiceBtn = choiceBtn.replace("[#]", "correct()");
        } else {
            choiceBtn = choiceBtn.replace("[#]", "incorrect()");
        }
        qHeader += choiceBtn;
      
    }  
    quizBox.innerHTML = qHeader;
}

function correct() {
    score += 10;
    nextQuestion();
}

function incorrect () {
    countdown -= 10;
    nextQuestion();
}

function gameOver() {
    clearInterval(timer);

    var quizEnd = `<h2>Time's Up!</h2>
                    <h3>Score: ${score} out of 100
                    <input type='text' class='name' placeholder='Initials'>
                    <button id='submitBtn'>SUBMIT</button>`;
    
    quizBox.innerHTML = quizEnd;
                    
}

function displayResults () {
    // when submit button is clicked, results populate.
    // if newGame, then saveResults
}

// Event Listeners go here
mainContain.addEventListener('click', function quiz() {
    introGrab.setAttribute('style', 'visibility:hidden');
    // quizBox.setAttribute('style', 'visibility:visible')
    startQuiz();
})

// Create quiz(). this will house the entire test

// Executable functions go here


/* header */

// Create Header and set space between







// Create 'Highscores' link






// Create Timer, Countdown on 'onclick'





/* Body */



/* #quiz */

// Create #quiz container





// Create #quiz title container, title text




// Add flexbox to container and set param






// Create Articles within the Section tag. This will swap decks thoughout the quiz.





//Add flexbox to Article and set param




// Create the title and set to h1






// Create #quiz Paragraph





// #quiz startButton, starts timer and quiz appears






// Button Styling


// Applies style to all buttons in the DOM


// Event Listener will change visibility to startQuiz


// introGrab.addEventListener('click', function startQuiz(e) {
//     'visibility:hidden;')
//     console.log(e.target)
// })

// Create Timer
// function quizTime() {
//     var countdownTimer = setInterval(function() {
//       secondsLeft--;

//       if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(countdownTimer);
//         // Goes to gameOver screen
//         // Calls function to create and append image
//         sendMessage();
//       }
//     }, 1000);
//   }

// Questionnare 

// Create container that will house the questionnaire, Child to section.






// beginGrab.addEventListener('click', function startQuiz(e) {
//     'visibility:visible;');
//     console.log(e.target);
// })




// questionBox.addEventListener('click', startQuiz());



// Create #question h2. The Questions themselves will populate here
// Create answer container.
// Create Multi Choice Buttons [A, B, C, & D]
    // Button = True, show 'Correct!', points++, next
    // Button = False, show 'Wrong!', timer--



// Gamne Over!

// Create #gameOver 2nd Header
// Final Score
// Capture initials on input

/* #submit */

// Create Submit Button, Records UI info and show results 'onclick'
// Activating the submit button displays the results of the quiz.
// submit.addEventListener('click', displayResults);

/* #results */
// Create #results 2nd Header 'Highscores'
// Displays the results


// Create tryAgain button, restarts the quiz, timer and score counter

/* Footer */

/* Functions */

// Executable functions live here
// codeQuiz();
// displayResults();