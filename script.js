// Main variables that will contain the program
// const quiz = document.getElementById('quiz');
// const submit = document.getElementById('submit');
// const results = document.getElementById('results');

// Create Divs Here
const header = document.createElement('header');
const scoreBoard = document.createElement('nav');
const timerContainer = document.createElement('time');
const quizMain = document.createElement('main');
const quizContain = document.createElement('section');
const quizIntro = document.createElement('article');
const titleText = document.createElement('h1');
const quizPara = document.createElement('p');
const startBtn = document.createElement('button');
const submitBtn = document.createElement('button');
const quizBegin = document.createElement('article');
const questionBox = document.createElement('div');


// Set attributes here
scoreBoard.setAttribute("href", "#highscores");
scoreBoard.setAttribute('class', 'scoreBoard');
timerContainer.setAttribute('class','timer');
quizMain.setAttribute('id', '#quiz');
quizContain.setAttribute('class', 'quizContainer');
quizIntro.setAttribute('class', 'quizIntro')
quizIntro.setAttribute('style', 'visibility:visible;')
startBtn.setAttribute('id','startBtn');
startBtn.setAttribute('click', 'startQuiz()');
submitBtn.setAttribute('click', 'showResults()')
quizBegin.setAttribute('class', 'quizBegin');
quizBegin.setAttribute('style', 'visibility:hidden;');
questionBox.setAttribute('class', 'questionBox');
questionBox.setAttribute('visibility', 'hidden');

// Append divs here
document.body.append(header);
document.body.appendChild(quizMain);
header.appendChild(scoreBoard);
header.appendChild(timerContainer);
quizMain.appendChild(quizContain);
quizContain.appendChild(quizIntro);
quizIntro.appendChild(titleText);
quizIntro.appendChild(quizPara);
quizIntro.appendChild(startBtn);
// append submitBtn
quizContain.appendChild(quizBegin);
quizBegin.appendChild(questionBox);

// Query Selectors
const headerStyle = document.querySelector('header');
const bodySize = document.querySelector('body');
var mainContain = document.querySelector('main');
let introGrab = document.querySelector('.quizIntro'); // hides
let beginGrab = document.querySelector('.quizBegin'); // appears
const btn = document.querySelectorAll('button');
// let articleSwitcher = document.querySelectorAll('button'); //not currently needed
// let grabContainer = document.querySelectorAll('.quizContainer'); // not currently needed

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
    'position': 'absolute',
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
Object.assign(quizBegin.style, quizStyle)

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

//Creat Variables for quiz
let cQuestion = 0;
let countdown = 0;
let score = 0
let timer;

// Function trees go here
// When 'Start Quiz' is clicked, begin timer and run game.
function quizBuild() {
    
    countdown = 50;
    timerContainer.textContent = countdown;
    // Begin Countdown. When time = 0, clear timer and end game.
    timer = setInterval(function(){
        countdown--;
        timerContainer.textContent = countdown;
        if (countdown === 0) {
            clearInterval();
            gameOver();
        }
    }, 1000)
}


function displayResults () {
    // when submit button is clicked, results populate.
    // if newGame, then saveResults
}

// Event Listeners go here
mainContain.addEventListener('click', function startQuiz() {
    introGrab.setAttribute('style', 'visibility:hidden');
    quizBuild();
})

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