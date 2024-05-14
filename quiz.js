const quizData = [
    { question: "¿Cuál es la capital de Francia?", options: ["París", "Berlín", "Madrid", "Roma"], answer: "París" },
    { question: "¿Cuánto es 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "¿Cuál es la capital de España?", options: ["París", "Berlín", "Madrid", "Roma"], answer: "Madrid" },
    { question: "¿Cuál es la capital de Italia?", options: ["París", "Berlín", "Madrid", "Roma"], answer: "Roma" },
    { question: "¿Cuál es la capital de Alemania?", options: ["París", "Berlín", "Madrid", "Roma"], answer: "Berlín" },
    { question: "¿Cuál es la capital del Reino Unido?", options: ["París", "Berlín", "Londres", "Roma"], answer: "Londres" },
    { question: "¿Cuál es la capital de Rusia?", options: ["París", "Berlín", "Moscú", "Roma"], answer: "Moscú" },
    { question: "¿Cuál es la capital de Turquía?", options: ["París", "Berlín", "Ankara", "Roma"], answer: "Ankara" },
    { question: "¿Cuál es la capital de Grecia?", options: ["París", "Berlín", "Atenas", "Roma"], answer: "Atenas" },
    { question: "¿Cuál es la capital de Suecia?", options: ["París", "Berlín", "Estocolmo", "Roma"], answer: "Estocolmo" },
    { question: "¿Cuál es la capital de Noruega?", options: ["París", "Berlín", "Oslo", "Roma"], answer: "Oslo" },
    { question: "¿Cuál es la capital de Dinamarca?", options: ["París", "Berlín", "Copenhague", "Roma"], answer: "Copenhague" },
    { question: "¿Cuál es la capital de Argentina?", options: ["Buenos Aires", "Santiago", "Lima", "Bogotá"], answer: "Buenos Aires" },
    { question: "¿Cuál es la capital de Brasil?", options: ["Buenos Aires", "Santiago", "Brasilia", "Bogotá"], answer: "Brasilia" },
    { question: "¿Cuál es la capital de Colombia?", options: ["Buenos Aires", "Santiago", "Lima", "Bogotá"], answer: "Bogotá" },
    { question: "¿Cuál es la capital de Perú?", options: ["Buenos Aires", "Santiago", "Lima", "Bogotá"], answer: "Lima" },
    { question: "¿Cuál es la capital de Chile?", options: ["Buenos Aires", "Santiago", "Lima", "Bogotá"], answer: "Santiago" },
    { question: "¿Cuál es la capital de China?", options: ["Pekín", "Tokio", "Seúl", "Shanghái"], answer: "Pekín" },
    { question: "¿Cuál es la capital de Japón?", options: ["Pekín", "Tokio", "Seúl", "Shanghái"], answer: "Tokio" },
    { question: "¿Cuál es la capital de Corea del Sur?", options: ["Pekín", "Tokio", "Seúl", "Shanghái"], answer: "Seúl" },
    { question: "¿Cuál es la capital de India?", options: ["Nueva Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Nueva Delhi" },
    { question: "¿Cuál es la capital de Estados Unidos?", options: ["Washington D.C.", "Nueva York", "Los Ángeles", "Chicago"], answer: "Washington D.C." },
    { question: "¿Cuál es la capital de Canadá?", options: ["Toronto", "Montreal", "Vancouver", "Ottawa"], answer: "Ottawa" },
    { question: "¿Cuál es la capital de Australia?", options: ["Sídney", "Melbourne", "Brisbane", "Canberra"], answer: "Canberra" },
    { question: "¿Cuál es la capital de México?", options: ["Ciudad de México", "Guadalajara", "Monterrey", "Puebla"], answer: "Ciudad de México" },
    { question: "¿Cuál es la capital de Sudáfrica?", options: ["Ciudad del Cabo", "Johannesburgo", "Pretoria", "Durban"], answer: "Pretoria" }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(quizData);

let userName;
document.getElementById('name-submit-btn').addEventListener('click', function() {
    userName = document.getElementById('name-input').value;
    document.getElementById('name-input-container').style.display = 'none';
    document.getElementById('start-quiz-btn').style.display = 'block';
});

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score-value");
const timerElement = document.getElementById("timer-value");
const notasElement = document.getElementById("mensajenota");
const score2Element = document.getElementById("score");
const timer2Element = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let interval;

document.getElementById('start-quiz-btn').addEventListener('click', function() {
    document.getElementById('start-quiz-btn').style.display = 'none';
    startQuiz();
});

function startQuiz() {
    document.getElementById("question-container").style.display = 'block';
    document.getElementById("score").style.display = 'block';
    document.getElementById("timer").style.display = 'block';
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
        button.classList.add('btn', 'btn-outline-primary', 'mb-2');
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        feedbackElement.textContent = "¡Correcto!";
        score++;
    } else {
        feedbackElement.textContent = "¡Incorrecto!";
    }
    scoreElement.textContent = score;
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timer = quizData.length * 10;
    interval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer <= 0) {
            clearInterval(interval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(interval);
    let nota = (score * 10) / quizData.length;
    nota = nota.toFixed(2);
    let message;

    if (nota < 5) {
        message = `Vaya, ${userName}, ¡has suspendido el quiz!`;
    } else if (nota >= 5 && nota < 7) {
        message = `Bien, ${userName}, ¡has aprobado el quiz!`;
    } else if (nota >= 7 && nota < 9) {
        message = `Muy bien, ${userName}, ¡has sacado un notable en el quiz!`;
    } else if (nota >= 9 && nota <= 10) {
        message = `¡Excelente, ${userName}, has sacado un sobresaliente en el quiz!`;
    }

    notasElement.textContent = message;
    feedbackElement.textContent = `Tu puntuación final es: ${score} de ${quizData.length}! La nota del quiz es: ${nota}/10. Tu tiempo final es: ${quizData.length * 10 - timer} segundos!`;

    questionElement.textContent = "Quiz acabado!";
    optionsContainer.innerHTML = "";
    timerElement.style.display = "none";
    score2Element.style.display = "none";
    timer2Element.style.display = "none";

    setTimeout(() => {
        window.location.href = 'perfilJugador.html';
    }, 5000);
    
}
