// Main variables that will contain the program
const quiz = document.getElementById('quiz');
const submit = document.getElementById('submit');
const results = document.getElementById('results');

// Displays the quiz
function codeQuiz () {
    // When start button is clicked, quiz activates.
    // Quiz questions.
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
}

// Displays the results
function displayResults () {
    // when submit button is clicked, results populate.
}

// Executable functions live here
codeQuiz();
displayResults();

// Activating the submit button displays the results of the quiz.
submit.addEventListener('click', displayResults);