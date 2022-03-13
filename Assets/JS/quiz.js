let quizItems = [
    {
        // See README for cited sources
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: "<script>"
    },
    {
        question: "How do you create an expressive function?",
        choices: ["var varName = function myFunc()", "function = myFunc()", "function:myFunc()", "function myFunc()"],
        answer: "var varName = function myFunc()"
    },
    {
        question: "Which of these statements are truthy?",
        choices: ["if (varName === true) {return true;}", "if (!varName == false) {return false;}", "if (varName == true) {return false;}", "if (varName) {return true;}"],
        answer: "if (varName) {return true;}"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: ["var colors = 'red', 'green', 'blue'", "var colors('red', 'green', 'blue')", "var colors = ['red', 'green', 'blue']", "var colors = rgb()"],
        answer: "var colors = ['red', 'green', 'blue']"    
    },
    {
        question: "Which one of thses is more than just a mathmatic operator?",
        choices: ["+", "=", "%", "*"],
        answer: "="
    },
];

// Tracking variables
let score = 0;
let seconds = 20;
let timer = 0;
let qIndex = 0;

// Declared Variables
let divGroup = document.querySelectorAll(".group");
const timeClock = document.querySelector(".countdown")

// Group one
const intro = document.querySelector(".intro");
const rules = document.querySelector(".rules");
const startBtn = document.querySelector("#startBtn");

// Group two
const quiz = document.querySelector(".quiz");
const quizBox = document.querySelector(".quizbox");
const answerBox = document.querySelector(".answerBox");
const ulList = document.createElement("ul")

//Group three
const results = document.querySelector(".results");
const submitBtn = document.querySelector("#submit");

// Start Countdown onclick, begin quiz
startBtn.addEventListener("click", function (){
    if (timer === 0) {
        timer = setInterval(function() {
            seconds--;
            timeClock.textContent = `Timer: ${seconds}`;

            if (seconds <= 0) {
                clearInterval(timer);
                // gameOver();
                timeClock.textContent = "GAME OVER";
            }
        }, 1000);
    }
    startQuiz(qIndex);
})

// Screen change to show Quiz. Declaring qIndex as argument to filter through multiple questions in an array.
function startQuiz(qIndex) {
    // Clear intro from screen
    intro.innerHTML = "";
    // ulCreate.innerHTML = ""; //rework
    // Call variables to run through loops
    let currentQ = quizItems[qIndex].question;
    let userInput = quizItems[qIndex].choices;
    // Rotate through the Questions
    for (var i = 0; i < quizItems.length; i++){
        quiz.innerHTML = currentQ;
    }

    //Writes and commits Answers to .answerBox
    userInput.forEach(function (inputItem){
        let answerDump = document.createElement("li");
        answerDump.textContent = inputItem;
        answerBox.appendChild(ulList)
        ulList.appendChild(answerDump);
        answerDump.addEventListener("click", nextQuestion())
        
    })
}

function nextQuestion() {
    // Starts on array[0], question 1
    qIndex++;
    //Once all questions are answered, game over.
    if (qIndex > quizItems.length - 1) {
        gameOver();
        return;
    }

    // Header Question
    let qHeader = document.querySelector(".question-head");

    for (let i = 0; i < quizItems[qIndex].choices.length; i++) {
        let choiceBtn = "<button onclick=\"[#]\">[answer]</button>";
        choiceBtn = choiceBtn.replace("[answer]", quizItems[qIndex].choices[i]);
        if (quizItems[qIndex].choices[i] == quizItems[qIndex].answer) {
            choiceBtn = choiceBtn.replace("[#]", "correct()");
        } else {
            choiceBtn = choiceBtn.replace("[#]", "incorrect()");
        }
        qHeader += choiceBtn;
      
    }  
    quizBox.textContent = qHeader; // rework
}

function correct() {
    score += 10;
    nextQuestion();
}

function incorrect () {
    seconds -= 10;
    nextQuestion();
}

function gameOver() {
    clearInterval(timer);

    var quizEnd = `<h2>GAME OVER</h2>
                    <h3>Score: ${score} out of 100
                    <input type='text' class='name' placeholder='Initials'>
                    <button id='submitBtn'>SUBMIT</button>`;
    
    quizBox.innerHTML = quizEnd;
                    
}



// Glean from here

// let answerBox;f


// let currentQ = -1
// let score = 0;
// let countDown = 30;
// let timer;

// startQuiz(questions, quizbox, resultsBox, submitBtn);

// // When button is clicked, game begins
// function startQuiz(questions, quizbox, resultsBox, submitBtn) {
//     const quizBox = document.querySelector(".quizBox");

//     function showQuestions(questions, quizBox) {
//         let output = [];
//         let answers;
    
//         // Question generator
//         for (let i = 0; i < question.length; i++) {
//             answers = [];
    
//             // Answer output for each question
//             for (letters in questions[i].choices) {
//                 answers.push(
//                     // create answer buttons
//                     `<button id="question-${i}" class=${letters}>
//                             ${letters}: ${questions[i].choices}
//                         </button>`
//                 );
//             }
//             // writes questions and answers to the page
//             output.push(
//                 `<div class="questions">${questions[i].question
//                 }</div><div class="answers"> ${answers.join("")}</div>`
//             );
//         }
//         // Combines list into a string and writes to page
//         quizBox.innerHTML = output.join("");
//     }

//     // At game over, score, button, and submittals build here
//     function showResults(questions, quizBox, resultsBox) {
//         let userAns = '';
//         answerBox = quizBox.querySelectorAll('answerBox')
//         for (let i = 0; i < questions.length; i++) {
//             userAns = (answerBox[i].querySelector(`input[name=question)${i}:checked`) || {}).value;
//             if (userAns === questions[i].answer) {
//                 score += 20;
//                 answerBox[i].style.color = 'lightgreen'; //change this color
//             } else {
//                 answerBox[i].style.color = 'red';
//             }
//         }
//         resultsBox.innerHTML = `${score} out of 100`
//     }
//     showQuestions(questions, quizBox);

//     submitBtn.addEventListener("click", function () {
//         showResults(questions, quizBox, resultsBox);
//     });
// }

// // Quiz questions will have functionality here


