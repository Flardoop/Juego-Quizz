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
    {
        question: "¿Cuánto es 5 * 3?",
        options: ["10", "15", "20", "25"],
        answer: "15"
    },
    {
        question: "¿Cuánto es 10 / 2?",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "¿Cuánto es 8 - 3?",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "¿Cuánto es 7 + 9?",
        options: ["14", "15", "16", "17"],
        answer: "16"
    },
    {
        question: "¿En qué año se descubrió América?",
        options: ["1492", "1500", "1520", "1550"],
        answer: "1492"
    },
    {
        question: "¿Quién fue el primer presidente de Estados Unidos?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "¿Cuál fue la capital del Imperio Romano?",
        options: ["Roma", "Atenas", "Cartago", "Constantinopla"],
        answer: "Roma"
    },
    {
        question: "¿En qué año comenzó la Primera Guerra Mundial?",
        options: ["1914", "1916", "1918", "1920"],
        answer: "1914"
    },
    {
        question: "¿Quién fue el líder de la Revolución Rusa?",
        options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Mikhail Gorbachev"],
        answer: "Vladimir Lenin"
    },
    {
        question: "¿Cuál es el animal más grande del mundo?",
        options: ["Elefante", "Ballena Azul", "Jirafa", "Tiburón Ballena"],
        answer: "Ballena Azul"
    },
    {
        question: "¿Cuál es el animal más rápido del mundo?",
        options: ["Cheetah", "Guepardo", "León", "Leopardo"],
        answer: "Guepardo"
    },
    {
        question: "¿Qué animal es conocido como 'el rey de la selva'?",
        options: ["Tigre", "Oso", "León", "Jaguar"],
        answer: "León"
    },
   
];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(quizData);

let userName;

// Añade esto en tu JavaScript
document.getElementById('name-submit-btn').addEventListener('click', function() {
    userName = document.getElementById('name-input').value;
    document.getElementById('name-input-container').style.display = 'none'; // Oculta el campo de entrada y el botón
    document.getElementById('start-quiz-btn').style.display = 'block'; // Muestra el botón de inicio del quiz
});
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score-value");
const timerElement = document.getElementById("timer-value");
const nextButton = document.getElementById("next-btn");
const notasElement = document.getElementById("mensajenota");
const score2Element = document.getElementById("score");
const timer2Element = document.getElementById("timer");


let currentQuestionIndex = 0;
let score = 0;
let timer = 5*quizData.length;
let timerauxiliar = timer;

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


function endQuiz() {
    let nota = (score * 10) / quizData.length ;
    nota = nota.toFixed(2);
    if(nota < 5){
        notasElement.textContent = "Vaya, " + userName + ", has suspendido el quiz!";
    }else if(nota >= 5 && nota < 7){
        notasElement.textContent = "Bien, " + userName + ", has aprobado el quiz!";
    }else if(nota >= 7 && nota < 9){
        notasElement.textContent = "Muy bien, " + userName + ", has sacado un notable en el quiz!";
    }else if(nota >= 9 && nota <= 10){
        notasElement.textContent = "Excelente, " + userName + ", has sacado un sobresaliente en el quiz!";
    }
    questionElement.textContent = "Quiz acabado!";
    optionsContainer.innerHTML = "";
    feedbackElement.textContent = `Tu puntuación final es: ${score} de ${quizData.length}!`;
    feedbackElement.textContent += 'La nota del quiz es: ' + nota+'/ 10';
    feedbackElement.textContent += ' Tu tiempo final es: '+(timerauxiliar - timer)+' segundos!';
    timerElement.style.display = "none";
    scoreElement.style.display = "none";
    nextButton.style.display = "none";
    score2Element.style.display = "none";
    timer2Element.style.display = "none";
}
// Añade esto en tu JavaScript

// Añade esto en tu JavaScript
document.getElementById('start-quiz-btn').addEventListener('click', function() {
    document.getElementById('start-quiz-btn').style.display = 'none'; // Oculta el botón de inicio
    startQuiz(); // Comienza el quiz
});
