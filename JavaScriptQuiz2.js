var start = document.getElementById("startQuiz");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var option0 = document.getElementById("0");
var option1 = document.getElementById("1");
var option2 = document.getElementById("2");
var option3  = document.getElementById("3");
var button = document.getElementById("button");
var benarSalah = document.getElementById("benarSalah");

var allQuestion = [
    {
        question: "What are stars mainly made of?",
        option0: "Dust Particles",
        option1: "Hot gas",
        option2: "Rock",
        option3: "Nothing",
        correctAnswer: "1"
    }, {
        question: "What is chemical symbol of Gold?",
        option0: "Fe",
        option1: "Si",
        option2: "Ge",
        option3: "Au",
        correctAnswer: "3"
    }, {
        question: "What type of respiratory system do insect have?",
        option0: "Tracheae",
        option1: "Lungs",
        option2: "Gill",
        option3: "Absorb",
        correctAnswer: "0"
    }, {
        question:"Which one of the following is not a basic laws of physics?",
        option0: "Coulumb's law",
        option1: "Newton's law",
        option2: "Pascal's law",
        option3: "Lavoisier's law",
        correctAnswer: "3"
    }, {
        question:"5, 11, 23, 47, ..., 191, 383, 767, 1535",
        option0: "60",
        option1: "80",
        option2: "95",
        option3: "150",
        correctAnswer: "2"
    }, {
        question:"17, 25, 42, 67, 109, 176, ....",
        option0: "180",
        option1: "285",
        option2: "245",
        option3: "260",
        correctAnswer: "1"
    }
];


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
        alert("Jumbled Words : consist / of / billions / stars / Galaxy ");
        button.innerHTML = "Go To Homepage"
        button.style.display = "block";
        button.onclick = function backButton() {
            location.href = "homepage.html"
        }
    }
    else {
        button.style.display = "block";
        button.onclick = function tryAgainButton() {
            location.href = "QuizPage2.html"
        }
    }
}