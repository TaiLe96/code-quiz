//----------Timer-------------
var timeEl = document.getElementById("time")
function countdown(){
    var secondsLeft = 75;
    var timer = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    if(secondsLeft === 0){
        clearInterval(timer);
        alldone()
    }
    }
    ,1000)
}

//-----------select all elements-----------
var start = document.getElementById("start");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var choices = document.getElementById("choices");



//--------------create our questions------------
let questions = [
    {
        question: "Q1: What does HTML stand for?",
        choiceA: "Hypertext Markup Language",
        choiceB: "HTML",
        choiceC: "Java Script",
        choiceD: "CSS",
        answer: "A"
    }, {
        question: "Q2: Inside which HTML element do we put the JavaScript?",
        choiceA: "head",
        choiceB: "title",
        choiceC: "Java Script",
        choiceD: "body",
        answer: "D"
    }, {
        question: "Q3: What is the correct JavaScript syntax to write 'Hello World'?",
        choiceA: "document.write('Hello World')",
        choiceB: "HTML",
        choiceC: "Java Script",
        choiceD: "CSS",
        answer: "A"
    }, {
        question: "Q4: How do you create a function?",
        choiceA: "function myFunction()",
        choiceB: "function = myFunction()",
        choiceC: "function:myFunction()",
        choiceD: "nothing",
        answer: "A"
    }, {
        question: "Q5: What tag do we put the JavaScript in HTML?",
        choiceA: "js",
        choiceB: "script",
        choiceC: "link",
        choiceD: "src",
        answer: "B"
    }, 
];


//----------------start quiz---------------
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    countdown();
};

//-------------to run questions--------------
var lastQuestion = questions.length - 1;
let runningQuestion = 0;


//-------------render a question---------------
function renderQuestion() {
    var q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    runningQuestion++;
};

var userAnswer;
choices.addEventListener("click", function(event){
    userAnswer = event.target.textContent;
    checkAnswer(event.target.value);
    renderQuestion();
    // console.log(event.target.value) //"A" "B" "C" "D"
});


var totalSecond = questions * 15;
var score = 0;
var correctAnswer; 

//--------------------------Check Answer----------------------
function checkAnswer(value) {
    console.log(value, questions[runningQuestion - 1].answer)
if (value === questions[runningQuestion - 1].answer){
    score++;
    alert("Correct!");

} else {
    totalSecond - 15;
    alert("Wrong!");
}
}

start.addEventListener("click", startQuiz);

