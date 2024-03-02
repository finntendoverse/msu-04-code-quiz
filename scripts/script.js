// introduction text variable
let quizIntro = document.querySelector("#intro");

// quiz start button variable
let quizStart = document.querySelector("#start-quiz");

// quiz start function when the start button is clicked
quizStart.addEventListener("click", function() {                // WHEN the start button is clicked
    quizIntro.setAttribute("style", "display: none;");          // THEN the introduction is removed from the page
    question1.setAttribute("style", "display: block;");         // THEN the first question is displayed
    startTimer();                                               // THEN the timer is started
});

// timer variables
let timerElement = document.querySelector("#timer");
let timer;
let time = 59;

// timer function
let startTimer = function() {                                       // WHEN the startTimer function is called
    time = 59;                                                      // THEN the time is set to 59 seconds (not 60 because I believe it's 0 indexed)
    timerElement.setAttribute("style", "display: block");           // THEN the timer is displayed on the page
    timerElement.textContent = 60;                                  // THEN the timer text reads 60
    timer = setInterval(function() {                                // THEN the following code will repeat on the set interval displayed on line 67
        timerElement.textContent = time;                            // THEN the timer text reads 59
        time = -- time;                                             // THEN the timer counts down by 1
        
        if (time <= -1) {                                           // IF there's less than a second on the timer
            clearInterval(timer);                                   // THEN the interval stops and the timer stops counting down
            showScoreboard();                                       // THEN the questions and timer are hidden from the page, and the scoreboard is displayed on the page
        }
        
        return time;                                                // THEN the time is updated
    }, 1000);                                                       // THEN this loops every second, causing the time to continually count down by 1
}

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

// answer buttons variable
let nextQuestion = document.querySelectorAll(".quiz button");

// function that cycles through the 10 questions and then the scoreboard
nextQuestion.forEach(button => {                                                // FOR each button in the answers array
    button.addEventListener("click", function() {                               // WHEN any answer button is clicked
        // selects the parent element of each button    
        let currentQuestion = button.parentElement;

            let continueQuiz = function() {
                if (time <= -1) {                                               // IF there's less than a second on the timer
                    clearInterval(timer);                                       // THEN the time interval stops and the timer stops counting down
                    showScoreboard();                                           // THEN the questions and timer are hidden from the page, and the scoreboard is displayed on the page
                } else if (currentQuestion.id === "question-1") {               // IF the parent element of the button is the first question
                    question1.setAttribute("style", "display: none;");          // THEN question 1 is hidden
                    question2.setAttribute("style", "display: block;");         // THEN question 2 is displayed
                } else if (currentQuestion.id === "question-2") {               // IF the parent element of the button is the second question
                    question2.setAttribute("style", "display: none;");          // THEN question 2 is hidden
                    question3.setAttribute("style", "display: block;");         // THEN question 3 is displayed
                } else if (currentQuestion.id === "question-3") {               // IF the parent element of the button is the third question
                    question3.setAttribute("style", "display: none;");          // THEN question 3 is hidden
                    question4.setAttribute("style", "display: block;");         // THEN question 4 is displayed
                } else if (currentQuestion.id === "question-4") {               // IF the parent element of the button is the fourth question
                    question4.setAttribute("style", "display: none;");          // THEN question 4 is hidden
                    question5.setAttribute("style", "display: block;");         // THEN question 5 is displayed
                } else if (currentQuestion.id === "question-5") {               // IF the parent element of the button is the fifth question
                    question5.setAttribute("style", "display: none;");          // THEN question 5 is hidden
                    question6.setAttribute("style", "display: block;");         // THEN question 6 is displayed
                } else if (currentQuestion.id === "question-6") {               // IF the parent element of the button is the sixth question
                    question6.setAttribute("style", "display: none;");          // THEN question 6 is hidden
                    question7.setAttribute("style", "display: block;");         // THEN question 7 is displayed
                } else if (currentQuestion.id === "question-7") {               // IF the parent element of the button is the seventh question
                    question7.setAttribute("style", "display: none;");          // THEN question 7 is hidden
                    question8.setAttribute("style", "display: block;");         // THEN question 8 is displayed
                } else if (currentQuestion.id === "question-8") {               // IF the parent element of the button is the eigth question
                    question8.setAttribute("style", "display: none;");          // THEN question 8 is hidden
                    question9.setAttribute("style", "display: block;");         // THEN question 9 is displayed
                } else if (currentQuestion.id === "question-9") {               // IF the parent element of the button is the ninth question
                    question9.setAttribute("style", "display: none;");          // THEN question 9 is hidden
                    question10.setAttribute("style", "display: block;");        // THEN question 10 is displayed
                } else if (currentQuestion.id === "question-10") {              // IF the parent element of the button is the tenth question
                    question10.setAttribute("style", "display: none;");         // THEN question 10 is hidden
                    timerElement.setAttribute("style", "display: none;");       // THEN the timer is hidden
                    clearInterval(timer);                                       // THEN the time interval stops and the timer stops counting down
                    scoreboard.setAttribute("style", "display: block;");        // THEN the scoreboard is displayed on the screen
                }
            };
            // waits 1.5 seconds until the next question is displayed (mainly so the message in the next function has time to be read)
            setTimeout(continueQuiz, 1500);
    });
});

// correct/incorrect answer variables
let wrongAnswer = document.querySelectorAll(".incorrect")
let rightAnswer = document.querySelectorAll(".correct")
let alert = document.querySelector("#alert");

// functions for correct and incorrect answers
nextQuestion.forEach(button => {                                    // FOR each button in the answers array
    button.addEventListener("click", function() {                   // WHEN any answer button is clicked
        let message = document.createElement("p");                  // THEN a paragraph tag is created
        message.setAttribute("class", "alerts");                    // THEN it is given a class called "alerts"

        if (button.classList.contains("incorrect")) {               // IF the clicked answer is incorrect
            message.innerHTML = "incorrect ❌ <br> - 10 seconds"    // THEN the message within the p tag reads "incorrect ❌"
            alert.appendChild(message);                             // THEN the alert is added onto the page below the answers
        } else {                                                    // IF the clicked answer is correct
            message.innerHTML = "correct! ✅ <br> + 10 points"      // THEN the message within the p tag reads "correct! ✅"
            alert.appendChild(message);                             // THEN the alert is added onto the page below the answers
        }

        setTimeout(function() {                                     // THEN after 1.5 seconds
            message.innerHTML = "";                                 // THEN the message is removed from the page
        }, 1500);

        // updates the score for correct answers, and subtracts time for incorrect answers
        if (button.classList.contains("correct")) {                 // IF the clicked answer is correct
            score = score + 10;                                     // THEN 10 points are added to the score
            localStorage.setItem("score", score);                   // THEN the score is set within the local storage
            return score;                                           // THEN the updated score is saved
        } else {                                                    // IF the clicked answer is incorrect
            time -= 10;                                             // THEN 10 seconds will be subtracted from the timer
        }
    });
});

// scoreboard variables
let scoreboard = document.querySelector("#score");
let score = 0;
let form = document.querySelector("#form");
let score1 = document.querySelector("#score-1");
let score2 = document.querySelector("#score-2");
let score3 = document.querySelector("#score-3");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

// function that displays the scoreboard
let showScoreboard = function() {
    timerElement.setAttribute("style", "display: none;");   // THEN the timer is hidden from the page
    question1.setAttribute("style", "display: none;");      // THEN question 1 is hidden from the page
    question2.setAttribute("style", "display: none;");      // THEN question 2 is hidden from the page
    question3.setAttribute("style", "display: none;");      // THEN question 3 is hidden from the page
    question4.setAttribute("style", "display: none;");      // THEN question 4 is hidden from the page
    question5.setAttribute("style", "display: none;");      // THEN question 5 is hidden from the page
    question6.setAttribute("style", "display: none;");      // THEN question 6 is hidden from the page
    question7.setAttribute("style", "display: none;");      // THEN question 7 is hidden from the page
    question8.setAttribute("style", "display: none;");      // THEN question 8 is hidden from the page
    question9.setAttribute("style", "display: none;");      // THEN question 9 is hidden from the page
    question10.setAttribute("style", "display: none;");     // THEN question 10 is hidden from the page
    scoreboard.setAttribute("style", "display: block;");    // THEN the scoreboard is displayed on the page
}

// function that displays user's names/scores on the scoreboard
form.addEventListener("submit", function() {                                    // WHEN the user submits their name
    event.preventDefault();                                                     // THEN the page is not refreshed
    
    // selects the user-inputted name
    let userName = document.querySelector("#name").value;
    // selects the user's score
    let userScore = score;

    // creates a profile for the user to store their data
    let userProfile = {
        name: userName,
        score: userScore
    };

    highScores.push(userProfile);                                               // THEN the user's profile is added to an array
    highScores.sort((a,b) => b.score - a.score)                                 // THEN the scores are sorted in order from largest to smallest
    highScores.splice(3);                                                       // THEN anything outside of the top 3 scores are removed

    score1.textContent = highScores[0].name + ": " + highScores[0].score;       // THEN the highest score is displayed as the first spot on the scoreboard
    if (highScores.length === 1) {                                              // IF there is only one score saved so far
        score2.textContent = "no score yet"                                     // THEN the second score will read "no score yet"
        score3.textContent = "no score yet"                                     // THEN the third score will read "no score yet"
    } else if (highScores.length === 2) {                                       // IF there are only two scores saved so far
        score2.textContent = highScores[1].name + ": " + highScores[1].score;   // THEN the second-highest score will be displayed as the second spot on the scoreboard
        score3.textContent = "no score yet"                                     // THEN the third score will read "no score yet"
    } else {                                                                    // IF there are 3 scores saved
        score2.textContent = highScores[1].name + ": " + highScores[1].score;   // THEN the second-highest score will be displayed as the second spot on the scoreboard
        score3.textContent = highScores[2].name + ": " + highScores[2].score;   // THEN the third-highest score will be displayed as the third spot on the scoreboard
    }
});

// Play again button variable
let playAgain = document.querySelector("#play-again");

// function that lets the user play again
playAgain.addEventListener("click", function() {            // WHEN the user decides to take the quiz again
    score = 0                                               // THEN the score is reset to 0
    scoreboard.setAttribute("style", "display: none;");     // THEN the scoreboard is hidden
    quizIntro.setAttribute("style", "display: block;");     // THEN the quiz intro screen is displayed
});