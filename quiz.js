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
    { question: "¿Cuál es la capital de Sudáfrica?", options: ["Ciudad del Cabo", "Johannesburgo", "Pretoria", "Durban"], answer: "Pretoria" },
        { question: "¿Cuál es la fórmula química del agua?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O" },
        { question: "¿Quién es conocido como el padre de la teoría de la relatividad?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], answer: "Albert Einstein" },
    
        // Animales
        { question: "¿Cuál es el animal más grande del mundo?", options: ["Elefante", "Ballena azul", "Jirafa", "Tiburón ballena"], answer: "Ballena azul" },
        { question: "¿Qué tipo de animal es un koala?", options: ["Oso", "Marsupial", "Primate", "Roedor"], answer: "Marsupial" },
    
        // Astrología
        { question: "¿Cuál es el planeta más grande del sistema solar?", options: ["Júpiter", "Saturno", "Neptuno", "Urano"], answer: "Júpiter" },
        { question: "¿Qué es un eclipse solar?", options: ["Cuando la luna pasa entre la tierra y el sol", "Cuando la tierra pasa entre el sol y la luna", "Cuando el sol pasa entre la tierra y la luna", "Cuando la luna pasa entre la tierra y una estrella"], answer: "Cuando la luna pasa entre la tierra y el sol" },
    
        // Arte
        { question: "¿Quién pintó la Mona Lisa?", options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"], answer: "Leonardo da Vinci" },
        { question: "¿Qué movimiento artístico surgió en Italia en el siglo XIV?", options: ["Renacimiento", "Barroco", "Cubismo", "Gótico"], answer: "Renacimiento" },
    
        // Deporte
        { question: "¿En qué deporte se juega en un campo llamado 'cancha'?", options: ["Fútbol", "Baloncesto", "Tenis", "Golf"], answer: "Fútbol" },
        { question: "¿Cuál de estos deportes no se juega con una pelota?", options: ["Tenis", "Hockey", "Natación", "Boxeo"], answer: "Natación" },
    
        // Geografía
        { question: "¿Cuál es la capital de Francia?", options: ["París", "Berlín", "Madrid", "Roma"], answer: "París" },
        { question: "¿Cuál es la capital de España?", options: ["París", "Berlín", "Madrid", "Roma"], answer: "Madrid" },
        // Animales
    { question: "¿Cuál es el animal más rápido del mundo?", options: ["Guepardo", "Leopardo", "Lobo", "Tigre"], answer: "Guepardo", theme: "animales" },
    { question: "¿Qué animal es conocido por su camuflaje?", options: ["Camaleón", "León", "Elefante", "Rinoceronte"], answer: "Camaleón", theme: "animales" },
    { question: "¿Cuál es el animal más venenoso del mundo?", options: ["Araña de rincón", "Serpiente de coral", "Medusa", "Rana dorada venenosa"], answer: "Rana dorada venenosa", theme: "animales" },
    { question: "¿Cuál es el animal más grande del mundo?", options: ["Elefante", "Ballena azul", "Jirafa", "Tiburón ballena"], answer: "Ballena azul", theme: "animales" },
    { question: "¿Qué animal es conocido por sus alas de colores vibrantes?", options: ["Colibrí", "Golondrina", "Cuervo", "Gaviota"], answer: "Colibrí", theme: "animales" },
    { question: "¿Cuál es el animal más largo del mundo?", options: ["Anaconda", "Gusano gigante", "Boa constrictor", "Serpiente de cascabel"], answer: "Anaconda", theme: "animales" },
    { question: "¿Qué animal es conocido por su capacidad de regeneración?", options: ["Estrella de mar", "Pulpo", "Calamar", "Medusa"], answer: "Estrella de mar", theme: "animales" },
    { question: "¿Cuál es el animal que hiberna durante el invierno?", options: ["Oso polar", "León", "Tigre", "Jirafa"], answer: "Oso polar", theme: "animales" },
    { question: "¿Cuál es el animal más fuerte en relación a su tamaño?", options: ["Escarabajo rinoceronte", "Elefante", "Rinoceronte", "León"], answer: "Escarabajo rinoceronte", theme: "animales" },
    { question: "¿Qué animal es conocido como el 'rey de la selva'?", options: ["León", "Tigre", "Leopardo", "Jaguar"], answer: "León", theme: "animales" },
    { question: "¿Cuál es el animal más inteligente después del ser humano?", options: ["Delfín", "Mono", "Perro", "Elefante"], answer: "Delfín", theme: "animales" },
    { question: "¿Qué animal es conocido por dormir boca arriba?", options: ["Murciélago", "Gato", "Perro", "Oso"], answer: "Murciélago", theme: "animales" },
    { question: "¿Cuál es el animal que tiene la piel más dura?", options: ["Cocodrilo", "Tortuga", "Armadillo", "Hormiga"], answer: "Cocodrilo", theme: "animales" },
    { question: "¿Qué animal es conocido por vivir en colonias y construir grandes montículos?", options: ["Hormiga", "Abeja", "Termita", "Saltamontes"], answer: "Termita", theme: "animales" },
    { question: "¿Cuál es el animal que puede correr más tiempo sin fatigarse?", options: ["Lobo", "Cebra", "Guepardo", "Perro"], answer: "Lobo", theme: "animales" },

    // Geografía
    { question: "¿Cuál es el país más grande del mundo por área terrestre?", options: ["Rusia", "China", "Canadá", "Estados Unidos"], answer: "Rusia", theme: "geografía" },
    { question: "¿Cuál es la montaña más alta del mundo?", options: ["Monte Everest", "K2", "Kangchenjunga", "Lhotse"], answer: "Monte Everest", theme: "geografía" },
    { question: "¿Cuál es el río más largo del mundo?", options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"], answer: "Amazonas", theme: "geografía" },
    { question: "¿Cuál es el desierto más grande del mundo?", options: ["Sahara", "Antártida", "Gobi", "Kalahari"], answer: "Antártida", theme: "geografía" },
    { question: "¿Cuál es el país más poblado del mundo?", options: ["China", "India", "Estados Unidos", "Indonesia"], answer: "China", theme: "geografía" },
    { question: "¿Cuál es la ciudad más poblada del mundo?", options: ["Tokio", "Mumbai", "Pekín", "Shanghái"], answer: "Tokio", theme: "geografía" },
    { question: "¿Cuál es la isla más grande del mundo?", options: ["Groenlandia", "Australia", "Nueva Guinea", "Borneo"], answer: "Groenlandia", theme: "geografía" },
    { question: "¿Cuál es el continente más pequeño del mundo?", options: ["Oceaní", "Europa", "África", "América del Sur"], answer: "Oceanía", theme: "geografía" },
    { question: "¿Cuál es el lago más profundo del mundo?", options: ["Lago Baikal", "Lago Titicaca", "Lago Victoria", "Gran Lago del Oso"], answer: "Lago Baikal", theme: "geografía" },
    { question: "¿Cuál es la península más grande del mundo?", options: ["Península arábiga", "Península ibérica", "Península de Kamchatka", "Península de Labrador"], answer: "Península de Kamchatka", theme: "geografía" },
    // Ciencia
{ question: "¿Cuál es el proceso por el cual las plantas producen su propio alimento?", options: ["Fotosíntesis", "Respiración", "Germinación", "Polinización"], answer: "Fotosíntesis", theme: "ciencia" },
{ question: "¿Cuál es el metal más ligero?", options: ["Aluminio", "Litio", "Titanio", "Hidrógeno"], answer: "Litio", theme: "ciencia" },
{ question: "¿Cuál es el ácido que se encuentra en los limones?", options: ["Ácido cítrico", "Ácido acético", "Ácido sulfúrico", "Ácido clorhídrico"], answer: "Ácido cítrico", theme: "ciencia" },
{ question: "¿Cuál es el hueso más largo del cuerpo humano?", options: ["Fémur", "Tibia", "Radio", "Húmero"], answer: "Fémur", theme: "ciencia" },
{ question: "¿Cuál es el componente más abundante en la atmósfera terrestre?", options: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Argón"], answer: "Nitrógeno", theme: "ciencia" },
{ question: "¿Cuál es la capa más externa de la Tierra?", options: ["Corteza", "Núcleo", "Manto", "Núcleo interno"], answer: "Corteza", theme: "ciencia" },
{ question: "¿Cuál es la unidad básica de la estructura de los seres vivos?", options: ["Célula", "Átomo", "Molécula", "Gen"], answer: "Célula", theme: "ciencia" },
{ question: "¿Cuál es la energía almacenada en los alimentos?", options: ["Calorífica", "Cinética", "Química", "Eléctrica"], answer: "Química", theme: "ciencia" },
{ question: "¿Cuál es la lente que se utiliza para corregir la miopía?", options: ["Lente cóncava", "Lente convexa", "Lente biconvexa", "Lente plana"], answer: "Lente cóncava", theme: "ciencia" },
{ question: "¿Cuál es el hueso más pequeño del cuerpo humano?", options: ["Estribo", "Martillo", "Yunque", "Clavícula"], answer: "Estribo", theme: "ciencia" },

// Deportes
{ question: "¿Cuál es el deporte más popular del mundo?", options: ["Fútbol", "Baloncesto", "Críquet", "Tenis"], answer: "Fútbol", theme: "deporte" },
{ question: "¿En qué deporte se utiliza un palo llamado 'brazo'?", options: ["Hockey", "Golf", "Polo", "Béisbol"], answer: "Polo", theme: "deporte" },
{ question: "¿En qué deporte se juega en una cancha llamada 'pista'?", options: ["Atletismo", "Baloncesto", "Fútbol", "Tenis"], answer: "Atletismo", theme: "deporte" },
{ question: "¿Cuál es el deporte de raqueta más rápido del mundo?", options: ["Squash", "Tenis", "Bádminton", "Ping Pong"], answer: "Squash", theme: "deporte" },
{ question: "¿En qué deporte se usa un disco volador?", options: ["Ultimate Frisbee", "Golf", "Disco", "Voleibol"], answer: "Ultimate Frisbee", theme: "deporte" },
{ question: "¿Cuál es el deporte que se juega en un campo llamado 'pista de hielo'?", options: ["Patinaje sobre hielo", "Hockey sobre hielo", "Curling", "Bobsleigh"], answer: "Patinaje sobre hielo", theme: "deporte" },
{ question: "¿Cuál es el deporte que se juega en un campo llamado 'cancha de squash'?", options: ["Squash", "Tenis", "Pádel", "Frontón"], answer: "Squash", theme: "deporte" },
{ question: "¿En qué deporte se utiliza un arco y flechas?", options: ["Tiro con arco", "Caza", "Polo", "Hockey"], answer: "Tiro con arco", theme: "deporte" },
{ question: "¿Cuál es el deporte que se juega en un campo llamado 'pista de tenis'?", options: ["Tenis", "Bádminton", "Pádel", "Squash"], answer: "Tenis", theme: "deporte" },
{ question: "¿En qué deporte se utiliza un casco protector?", options: ["Fútbol americano", "Rugby", "Hockey", "Béisbol"], answer: "Fútbol americano", theme: "deporte" },
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

const backgroundMusic = document.getElementById("background-music");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let interval;

document.getElementById('start-quiz-btn').addEventListener('click', function() {
    document.getElementById('start-quiz-btn').style.display = 'none';
    document.getElementById('exit-quiz-btn').style.display = 'block';
    document.getElementById('end-quiz-btn').style.display = 'block';
    startQuiz();
});

document.getElementById('exit-quiz-btn').addEventListener('click', function() {
    if (confirm('¿Estás seguro de que deseas salir de la partida?')) {
        location.reload();
    }
});

document.getElementById('end-quiz-btn').addEventListener('click', function() {
    if (confirm('¿Estás seguro de que deseas terminar el intento?')) {
        endQuiz();
    }
});

function startQuiz() {
    timer = quizData.length * 10;

    document.getElementById("question-container").style.display = 'block';
    document.getElementById("score").style.display = 'block';
    document.getElementById("timer").style.display = 'block';

    showQuestion();

    startTimer();
    playMusic();
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

document.getElementById('restart-btn').addEventListener('click', function() {
    currentQuestionIndex = 0;
    score = 0;
    timer = 0;
    clearInterval(interval);
    
    notasElement.textContent = "";
    feedbackElement.textContent = "";
    timerElement.textContent = "";
    scoreElement.textContent = "";

    document.getElementById('restart-container').style.display = 'none';

    document.getElementById('exit-quiz-btn').style.display = 'block';
    document.getElementById('end-quiz-btn').style.display = 'block';

    startQuiz();
});

document.getElementById('return-home-btn').addEventListener('click', function() {
    location.reload();
});

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

    notasElement.innerHTML = `<span class="quiz-feedback">${message}</span>`;
    feedbackElement.innerHTML = `Tu puntuación final es: <span class="quiz-feedback">${score} de ${quizData.length}</span>!<br>La nota del quiz es: <span class="quiz-feedback">${nota}/10</span>.<br>Tu tiempo final es: <span class="quiz-feedback">${quizData.length * 10 - timer} segundos</span>!`;

    questionElement.textContent = "Quiz acabado!";
    optionsContainer.innerHTML = "";
    timerElement.style.display = "none";
    score2Element.style.display = "none";
    timer2Element.style.display = "none";
    document.getElementById('restart-container').style.display = 'block';

    document.getElementById('exit-quiz-btn').style.display = 'none';
    document.getElementById('end-quiz-btn').style.display = 'none';

    stopMusic();
}

function playMusic() {
    backgroundMusic.play();
}

function stopMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; 
}