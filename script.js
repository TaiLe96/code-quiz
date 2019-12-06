var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quest = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var score = document.getElementById("score");

//array question
var questions = [
    {
        question: "Question 1",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        answer: "1",
    },
    {
        question: "Question 2",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        chocieD: "4",
        answer: "1",
    },
    {
        question: "Question 3",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        chocieD: "4",
        answer: "1",
    },
    {
        question: "Question 4",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        chocieD: "4",
        answer: "1",
    },
    {
        question: "Question 5",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        chocieD: "4",
        answer: "1",
    },
]

var nextQuestion = questions.length - 1;
var runQuestion = 0;

//Render all questions
function renderQuestion(){
    // runQuestionIndex++;
    var q = questions[runQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";


//Timer
var totalSecond = 15 * 10;

//Click to start!!!
start.addEventListener("click")


//Check answer
score = 0;

function checkAnswer(answer){
    if (answer == answer){
        score++;
        alert("Correct!!!")
    }else { 
        totalSecond - 15;
        alert("Wrong.")
    }
}
