var allQuestion = [
    {
        question: "How long does it take for the moon to make a revolution around the Earth?",
        option0: "360 Days",
        option1: "27 Days",
        option2: "27 Hours",
        option3: "14 Weeks",
        correctAnswer: "1"
    }, {
        question:"If you needed to execute some code repeatedly based on a certain condition, which of the following would you use?",
        option0: "Condition",
        option1: "Function",
        option2: "Variable",
        option3: "Loop",
        correctAnswer: "3"
    }, {
        question:"Multiply (x - 4)(x + 5)",
        option0: "x2 + x - 20",
        option1: "x2 - 4x - 20",
        option2: "x2 + 5x - 20",
        option3: " x2 - x - 20",
        correctAnswer: "0"
    }, {
        question:"What can we do to reduce global warming?",
        option0: "Refuse single use plastics",
        option1: "Reduce Waste",
        option2: "Save energy",
        option3: "All true",
        correctAnswer: "3"
    }, {
        question:"The green pigment in plant cells is called?",
        option0: "Propyl",
        option1: "Sprirulina",
        option2: "Chlorophyll",
        option3: "Formaldehyde",
        correctAnswer: "2"
    }, {
        question:"Who is the founder of Tesla?",
        option0: "Elon Musk",
        option1: "Jack Ma",
        option2: "Nadiem Makarim",
        option3: "Jeff Bezos",
        correctAnswer: "0"
    }
];

var start = document.getElementById("startQuiz");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var option0 = document.getElementById("0");
var option1 = document.getElementById("1");
var option2 = document.getElementById("2");
var option3  = document.getElementById("3");
var button = document.getElementById("button");
var benarSalah = document.getElementById("benarSalah");



start.addEventListener("click",startQuiz);

function startQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    showQuestion();
}

var i = 0;
function showQuestion() {
    var questOn = allQuestion[i];
    
    question.innerHTML = questOn.question;
    option0.innerHTML = questOn.option0;
    option1.innerHTML = questOn.option1;
    option2.innerHTML = questOn.option2;
    option3.innerHTML = questOn.option3;
}

var score = 0;
function checkAns(answer){
    if( answer == allQuestion[i].correctAnswer){
        score++
        correct();
    }
    else{
        wrong();
    }
    
    if(i < allQuestion.length-1){
        i++;
        showQuestion();
    }
    else{
        hitungScore();
    }
}

function correct(){
    benarSalah.innerHTML = " CORRECT &#9989"
    benarSalah.style.color = "green"
    benarSalah.style.fontWeight = "Bold"
}

function wrong(){
    benarSalah.innerHTML = "INCORRECT &#10060"
    benarSalah.style.color = "Red"
    benarSalah.style.fontWeight = "Bold"
}

function hitungScore() {
    if(score >= 5) {
        alert("Jumbled Words : only / the / of / The / satellite / natural / Moon / is / Earth");
        button.innerHTML = "Go To Homepage"
        button.style.display = "block";
        button.onclick = function backButton() {
            location.href = "homepage.html"
        }
    }
    else {
        button.style.display = "block";
        button.onclick = function tryAgainButton() {
            location.href = "QuizPage.html"
        }
    }
}