// script.js
const correctAnswer = "post office"; // Replace with the actual answer

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("post office").innerHTML = '<h1>Congratulations! You solved the riddle. Clue: jfjfkf</h1>';
        
    } else {
        document.getElementById("post office").innerHTML = '<h1>Oops.Try again</h1>';
    }
}