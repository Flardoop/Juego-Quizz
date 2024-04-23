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
    },    // Para añadir preguntas aquí
    {
        question: "¿Cuál es la capital de Estados Unidos?",
        options: ["Washington D.C.", "Nueva York", "Los Ángeles", "Chicago"],
        answer: "Washington D.C."
    },
    {
        question: "¿Cuál es la capital de Canadá?",
        options: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
        answer: "Ottawa"
    },
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Brisbane", "Canberra"],
        answer: "Canberra"
    },
    {
        question: "¿Cuál es la capital de México?",
        options: ["Ciudad de México", "Guadalajara", "Monterrey", "Puebla"],
        answer: "Ciudad de México"
    },
    {
        question: "¿Cuál es la capital de Sudáfrica?",
        options: ["Ciudad del Cabo", "Johannesburgo", "Pretoria", "Durban"],
        answer: "Pretoria"
    }
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
