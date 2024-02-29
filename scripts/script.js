let quizStart = document.querySelector("#start-quiz");
let quizIntro = document.querySelector("#intro");
let nextQuestion = document.querySelectorAll(".quiz button");

let question1 = document.querySelector("#question-1");
let question2 = document.querySelector("#question-2");
let question3 = document.querySelector("#question-3");
let question4 = document.querySelector("#question-4");
let question5 = document.querySelector("#question-5");
let question6 = document.querySelector("#question-6");
let question7 = document.querySelector("#question-7");
let question8 = document.querySelector("#question-8");
let question9 = document.querySelector("#question-9");
let question10 = document.querySelector("#question-10");
let scoreboard = document.querySelector("#score");

quizStart.addEventListener("click", function() {
    quizIntro.setAttribute("style", "display: none;");
    question1.setAttribute("style", "display: block;");
});

nextQuestion.forEach(button => {
    button.addEventListener("click", function() {
            let currentQuestion = button.parentElement;
            console.log(currentQuestion);
            if (currentQuestion.id === "question-1") {
                question1.setAttribute("style", "display: none;");
                question2.setAttribute("style", "display: block;");
            } else if (currentQuestion.id === "question-2") {
                question2.setAttribute("style", "display: none;");
                question3.setAttribute("style", "display: block;");
            } else if (currentQuestion.id === "question-3") {
                question3.setAttribute("style", "display: none;");
                question4.setAttribute("style", "display: block;");
            } else if (currentQuestion.id === "question-4") {
                question4.setAttribute("style", "display: none;");
                question5.setAttribute("style", "display: block;");
            } else if (currentQuestion.id === "question-5") {
                question5.setAttribute("style", "display: none;");
                question6.setAttribute("style", "display: block;");
            } else if (currentQuestion.id === "question-6") {
                question6.setAttribute("style", "display: none;");
                question7.setAttribute("style", "display: block;");
            } else if (currentQuestion.id === "question-7") {
                question7.setAttribute("style", "display: none;");
                question8.setAttribute("style", "display: block;");
            } else if (currentQuestion.id === "question-8") {
                question8.setAttribute("style", "display: none;");
                question9.setAttribute("style", "display: block;");
            } else if (currentQuestion.id === "question-9") {
                question9.setAttribute("style", "display: none;");
                question10.setAttribute("style", "display: block;");
            } else if (currentQuestion.id === "question-10") {
                question10.setAttribute("style", "display: none;");
                scoreboard.setAttribute("style", "display: block;");
            }
    })
});