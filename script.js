// Main variables that will contain the program
const quiz = document.getElementById('quiz');
const submit = document.getElementById('submit');
const results = document.getElementById('results');

/* header */

// Create Header and set space between
const header = document.createElement('header');
document.body.append(header);

const headerStyle = document.querySelector('header');
headerStyle.style.display = 'flex';
headerStyle.style.justifyContent = 'space-between';

// Create 'Highscores' link
const scoreBoard = document.createElement('nav');
scoreBoard.setAttribute("href", "#highscores");
scoreBoard.textContent = "View Highscores";
scoreBoard.classList.add('scoreBoard');
header.appendChild(scoreBoard);

// Create Timer, Countdown on 'onclick'
const timerContainer = document.createElement('time');
timerContainer.classList.add('timer');
timerContainer.textContent = "Timer Placeholder";
header.appendChild(timerContainer);

/* #quiz */

// Create #quiz container
const quizMain = document.createElement('main');
quizMain.setAttribute('id', '#quiz');
quizMain.style.position = 'fixed';
quizMain.style.top = '15%';
quizMain.style.left = '25%';
document.body.appendChild(quizMain);

// Create #quiz title container, title text
const quizContain = document.createElement('section');
quizContain.setAttribute('class', 'quizContainer');
quizMain.appendChild(quizContain);

// Add flexbox to container and set param
const flexStyle = {
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'width': '400px'
}

Object.assign(quizContain.style, flexStyle);

// Create Articles within the Section tag. This will swap decks thoughout the quiz.
const quizIntro = document.createElement('article');
quizIntro.setAttribute('class', 'quizIntro')
quizIntro.setAttribute('visibility', 'visible');
quizContain.appendChild(quizIntro);

//Add flexbox to Article and set param
const introStyle = {
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'width': '400px',
    'visibility': 'visible'
}

Object.assign(quizIntro.style, flexStyle);

// Create the title and set to h1
const titleText = document.createElement('h1');
titleText.textContent = "Coding Quiz Challenge";
titleText.style.margin = '0 auto'
titleText.style.textAlign = 'center';
quizIntro.appendChild(titleText);

// Create #quiz Paragraph
const quizPara = document.createElement('p');
quizPara.textContent = "Welcome to the JS Coding Quiz! Click 'Start Quiz' to get started. This timed quiz will provide ten questions each with a score of ten points. Take heed, for every wrong answer, 10 seconds will be subtracted from the clock. Good Luck!"
quizPara.style.textAlign = "center";
quizIntro.appendChild(quizPara);

// #quiz startButton, starts timer and quiz appears
const startBtn = document.createElement('button');
startBtn.setAttribute('id','startBtn');
startBtn.setAttribute('onclick', 'startQuiz()');
startBtn.textContent = 'START QUIZ';
quizIntro.appendChild(startBtn);

// Button Styling
const btn = document.querySelectorAll('button');
const btnStyle = {
    'background-color': '#651AE0',
    'color': '#FFF',
    'font-weight': 'bold',
    'border': 'none',
    'width': '100px',
    'height': '25px'
}
// Applies style to all buttons in the DOM
for (let i = 0; i < btn.length; i++) {
    Object.assign(btn[i].style, btnStyle);
}

function startQuiz () {
    // When startButton is pressed, Quiz appears and timer begins.
    //Add onclick function that will swap visibility between QuizIntro and quizBegin
    }

// Questionnare 

// Create container that will house the questionnaire, Child to section.
let quizBegin = document.createElement('article');
quizBegin.setAttribute('class', 'quizBegin');
quizBegin.setAttribute('visibility', 'hidden');
quizContain.appendChild(quizBegin);

let questionBox = document.createElement('div');
questionBox.setAttribute('class', 'questionBox');
// questionBox.setAttribute('visibility', 'hidden');
questionBox.addEventListener('click', startQuiz());
quizBegin.appendChild(questionBox);


// Create #question h2. The Questions themselves will populate here
// Create answer container.
// Create Multi Choice Buttons [A, B, C, & D]
    // Button = True, show 'Correct!', points++, next
    // Button = False, show 'Wrong!', timer--

// Quiz questions, remins hidden until 'onclick'
const questions = [
    {
        // See README for cited sources
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            A: "<js>",
            B: "<scripting>",
            C: "<script>",
            D: "<javascript>"
        },
        correctAnswer: "C"
    },
    {
        question: "How do you create an expressive function?",
        answers: {
            A: "var varName = function myFunc()",
            B: "function = myFunc()",
            C: "function:myFunc()",
            D: "function myFunc()"
        },
        correctAnswer: "A"
    },
    {
        question: "Which of these statements are truthy?",
        answers: {
            A: "if (varName === true) {return true;}",
            B: "if (!varName == false) {return false;}",
            C: "if (varName == true) {return false;}",
            D: "if (varName) {return true;}"
        },
        correctAnswer: "D"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answer: {
            A: "var colors = 'red', 'green', 'blue'",
            B: "var colors('red', 'green', 'blue')",
            C: "var colors = ['red', 'green', 'blue']",
            D: "var colors = rgb()"
        },
        correctAnswer: "C"
    },
    {
        question: "Which one of thses is more than just a mathmatic operator?",
        answers: {
            A: "+",
            B: "=",
            C: "%",
            D: "*"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the output of console.log(typeof true)?",
        answers: {
            A: "string",
            B: "number",
            C: "undefined",
            D: "boolean"
        },
        correctAnswer: "D"
    },
    {
        question: "In which instance whould 'this' be called?",
        answers: {
            A: "When using a global variable",
            B: "Inside a function",
            C: "When using an array",
            D: "After calling a declaritive function"
        },
        correctAnswer: "B"
    },
    {
        question: "How is a 'for' loop written?",
        answers: {
            A: "for (i > varName; i++) {}",
            B: "for (i = 0, i < varName, i++)",
            C: "for (i++; var i < 10)",
            D: "for (var i = 0; i < 10; i++) {}"
        },
        correctAnswer: "D"
    },
    {
        question: "Which one of these are true?",
        answers: {
            A: "(12 === '12')",
            B: "(5 == '5')",
            C: "(a === b)",
            D: "None of the above"
        },
        correctAnswer: "B"
    },
    {
        question: "Which dot notation method would be used to insert an object at the beginning of an existing array?",
        answers: {
            A: ".splice()",
            B: ".push()",
            C: ".unshift()",
            D: ".insert()"
        },
        correctAnswer: "C"
    }
]

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
function displayResults () {
    // when submit button is clicked, results populate.
    // if newGame, then saveResults
}

// Create tryAgain button, restarts the quiz, timer and score counter

/* Footer */

/* Functions */

// Executable functions live here
// codeQuiz();
// displayResults();