const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {  question: "Cual es la capital de españa",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Madrid"
    },
    // Add more questions here
];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score-value");
const timerElement = document.getElementById("timer-value");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let timer = 10;

function startQuiz() {
    showQuestion();
    startTimer();
}

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = "Wrong!";
    }
    scoreElement.textContent = score;
    currentQuestionIndex++;
    showQuestion();
}

function startTimer() {
    const interval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer === 0) {
            clearInterval(interval);
            nextButton.disabled = true;
            feedbackElement.textContent = "Time's up!";
        }
    }, 1000);
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
        timer = 10;
        timerElement.textContent = timer;
        feedbackElement.textContent = "";
    } else {
        endQuiz();
    }
});

function endQuiz() {
    // Display final score and other relevant information
}

startQuiz();