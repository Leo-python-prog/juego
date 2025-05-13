const questions = [
    { question: "¿Cuál es la función de la compuerta AND?", options: ["Invierte el valor", "Solo es 1 si ambas entradas son 1", "Es 1 si al menos una entrada es 1"], answer: 1 },
    { question: "¿Qué compuerta se usa para invertir un valor?", options: ["AND", "OR", "NOT"], answer: 2 },
    { question: "Si una compuerta OR tiene entradas 1 y 0, ¿cuál es la salida?", options: ["0", "1", "Depende"], answer: 1 },
    { question: "¿Cómo funciona una compuerta XOR?", options: ["Es 1 si ambas entradas son 1", "Es 1 si ambas entradas son 0", "Es 1 si las entradas son diferentes"], answer: 2 },
    { question: "¿Cuál es el resultado de una compuerta NOT con entrada 1?", options: ["1", "0", "Depende"], answer: 1 },
    { question: "¿Qué compuerta devuelve 1 solo si al menos una de sus entradas es 1?", options: ["AND", "OR", "NOT"], answer: 1 },
    { question: "En un sistema de riego automático, ¿cómo se usaría una compuerta lógica?", options: ["La bomba se activa solo si (1) la humedad es baja Y (2) no está lloviendo", "La bomba se activa si (1) hay sol O (2) el tanque está lleno", "El sistema se apaga si se pulsa un botón"], answer: 0 }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });

    document.getElementById("feedback").textContent = ""; // Limpia el mensaje previo
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].answer) {
        score++; // Incrementa la puntuación si es correcta
        document.getElementById("score").textContent = score; // Actualiza el contador en pantalla
        nextQuestion(); // Continúa automáticamente
    } else {
        document.getElementById("feedback").textContent = "Incorrecto, pero sigamos adelante."; // Muestra mensaje breve
        setTimeout(nextQuestion, 1000); // Avanza después de un segundo
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("game").innerHTML = `<h2>¡Juego terminado!</h2><p>Puntuación final: ${score}</p>`;
    }
}

loadQuestion();