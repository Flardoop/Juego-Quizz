const quizData = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["París", "Berlín", "Madrid", "Roma"],
        answer: "París"
    },
    {
        question: "¿Cuánto es 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {  question: "¿Cuál es la capital de España?",
        options: ["París", "Berlín", "Madrid", "Roma"],
        answer: "Madrid"
    },
    {  question: "¿Cuál es la capital de Italia?",
        options: ["París", "Berlín", "Madrid", "Roma"],
        answer: "Roma"
    },
    {
        question: "¿Cuál es la capital de Alemania?",
        options: ["París", "Berlín", "Madrid", "Roma"],
        answer: "Berlín"
    },
    {
        question: "¿Cuál es la capital de España?",
        options: ["París", "Berlín", "Madrid", "Roma"],
        answer: "Madrid"
    },
    {
        question: "¿Cuál es la capital de Italia?",
        options: ["París", "Berlín", "Madrid", "Roma"],
        answer: "Roma"
    },
    {
        question: "¿Cuál es la capital del Reino Unido?",
        options: ["París", "Berlín", "Londres", "Roma"],
        answer: "Londres"
    },
    {
        question: "¿Cuál es la capital de Rusia?",
        options: ["París", "Berlín", "Moscú", "Roma"],
        answer: "Moscú"
    },
    {
        question: "¿Cuál es la capital de Turquía?",
        options: ["París", "Berlín", "Ankara", "Roma"],
        answer: "Ankara"
    },
    {
        question: "¿Cuál es la capital de Grecia?",
        options: ["París", "Berlín", "Atenas", "Roma"],
        answer: "Atenas"
    },
    {
        question: "¿Cuál es la capital de Suecia?",
        options: ["París", "Berlín", "Estocolmo", "Roma"],
        answer: "Estocolmo"
    },
    {
        question: "¿Cuál es la capital de Noruega?",
        options: ["París", "Berlín", "Oslo", "Roma"],
        answer: "Oslo"
    },
    {
        question: "¿Cuál es la capital de Dinamarca?",
        options: ["París", "Berlín", "Copenhague", "Roma"],
        answer: "Copenhague"
    },
    {
        question: "¿Cuál es la capital de Argentina?",
        options: ["Buenos Aires", "Santiago", "Lima", "Bogotá"],
        answer: "Buenos Aires"
    },
    {
        question: "¿Cuál es la capital de Brasil?",
        options: ["Buenos Aires", "Santiago", "Brasilia", "Bogotá"],
        answer: "Brasilia"
    },
    {
        question: "¿Cuál es la capital de Colombia?",
        options: ["Buenos Aires", "Santiago", "Lima", "Bogotá"],
        answer: "Bogotá"
    },
    {
        question: "¿Cuál es la capital de Perú?",
        options: ["Buenos Aires", "Santiago", "Lima", "Bogotá"],
        answer: "Lima"
    },
    {
        question: "¿Cuál es la capital de Chile?",
        options: ["Buenos Aires", "Santiago", "Lima", "Bogotá"],
        answer: "Santiago"
    },
    {
        question: "¿Cuál es la capital de China?",
        options: ["Pekín", "Tokio", "Seúl", "Shanghái"],
        answer: "Pekín"
    },
    {
        question: "¿Cuál es la capital de Japón?",
        options: ["Pekín", "Tokio", "Seúl", "Shanghái"],
        answer: "Tokio"
    },
    {
        question: "¿Cuál es la capital de Corea del Sur?",
        options: ["Pekín", "Tokio", "Seúl", "Shanghái"],
        answer: "Seúl"
    },
    {
        question: "¿Cuál es la capital de India?",
        options: ["Nueva Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: "Nueva Delhi"
    },
    {
        question: "¿Cuál es la capital de Rusia?",
        options: ["Moscú", "San Petersburgo", "Novosibirsk", "Yekaterimburgo"],
        answer: "Moscú"
    }    // Para añadir preguntas aquí
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
        if (timer === 0 ) {
            clearInterval(interval);
            nextButton.disabled = true;
            feedbackElement.textContent = "Se ha acabado el tiempo!";
            setTimeout(() => {
                nextButton.disabled = false;
                    endQuiz();
            }, 1000);
        }
        if (currentQuestionIndex >= quizData.length) {
            clearInterval(interval);
            nextButton.disabled = true;
            feedbackElement.textContent = "Fin del juego!";
            setTimeout(() => {
                nextButton.disabled = false;
                endQuiz();
            }, 1000);
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
    questionElement.textContent = "Quiz acabado!";
    optionsContainer.innerHTML = "";
    feedbackElement.textContent = `Tu puntuación final es: ${score}!`;
    feedbackElement.textContent += 'La nota del quiz es: ' + (score * 10) / quizData.length +'/ 10';
    feedbackElement.textContent += ` Tu tiempo final es: ${timer} segundos!`;
    timerElement.style.display = "none";
    nextButton.style.display = "none";
}

startQuiz();