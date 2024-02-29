// introduction text variable
let quizIntro = document.querySelector("#intro");

// button variables
let quizStart = document.querySelector("#start-quiz");
let nextQuestion = document.querySelectorAll(".quiz button");

// question variables
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
let questions = document.querySelectorAll(".question");

let scoreboard = document.querySelector("#score");

// answer variables
let wrongAnswer = document.querySelectorAll(".incorrect")
let rightAnswer = document.querySelectorAll(".correct")
let alert = document.querySelector("#alert");

// scoreboard variables
let score = 0;
let score1 = document.querySelector("#score-1");
let score2 = document.querySelector("#score-2");
let score3 = document.querySelector("#score-3");

// timer variables
let timerElement = document.querySelector("#timer");
let time = 59;

// starts the quiz when the start button is clicked
quizStart.addEventListener("click", function() {                // WHEN the start button is clicked
    quizIntro.setAttribute("style", "display: none;");          // THEN the introduction is removed from the page
    question1.setAttribute("style", "display: block;");         // THEN the first question is displayed

    timerElement.setAttribute("style", "display: block");       // THEN the timer is displayed
    timerElement.textContent = 60;                              // THEN the timer text reads 60
    let timer = setInterval(function() {
        timerElement.textContent = time;                        // THEN the timer text reads 59
        time = -- time;                                         // THEN the timer counts down by 1
        
        if (time <= -1) {
            showScoreboard();
        }
        
        return time;
    }, 1000);                                                   // THEN this loops every second, causing the time to continually count down by 1
});

// cycles through the 10 questions and then shows the timer
nextQuestion.forEach(button => {
    button.addEventListener("click", function() {
            let currentQuestion = button.parentElement;
            let continueQuiz = function() {
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
            };
            setTimeout(continueQuiz, 1500);
    });
});

// alerts users if they answered correctly or incorrectly
nextQuestion.forEach(button => {
    button.addEventListener("click", function() {
        let message = document.createElement("p");

        if (button.classList.contains("incorrect")) {
            message.innerHTML = "incorrect ❌"
            alert.appendChild(message);
        } else {
            message.innerHTML = "correct! ✅"
            alert.appendChild(message);
        }

        setTimeout(function() {
            message.innerHTML = "";
        }, 1500);

        // updates the score for correct answers, and subtracts time for incorrect answers
        if (button.classList.contains("correct")) {
            score = score + 10;
            score1.textContent = "name: " + score;
        } else {
            time = time - 10;
            
            if (time <= -1) {
                showScoreboard();
            }
        }
    });
});

// goes directly to scoreboard
let showScoreboard = function() {
    timerElement.setAttribute("style", "display: none;");
    timerElement.setAttribute("style", "display: none;");
    question1.setAttribute("style", "display: none;");
    question2.setAttribute("style", "display: none;");
    question3.setAttribute("style", "display: none;");
    question4.setAttribute("style", "display: none;");
    question5.setAttribute("style", "display: none;");
    question6.setAttribute("style", "display: none;");
    question7.setAttribute("style", "display: none;");
    question8.setAttribute("style", "display: none;");
    question9.setAttribute("style", "display: none;");
    question10.setAttribute("style", "display: none;");
    scoreboard.setAttribute("style", "display: block;");
}