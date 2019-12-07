//select all elements
var start = document.getElementById("start");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var choices = document.getElementById("choices");


// create our questions
let questions = [
    {
        question: "Q1: What does HTML stand for?",
        choiceA: "Hypertext Markup Language",
        choiceB: "HTML",
        choiceC: "Java Script",
        choiceD: "CSS",
        answer: "A"
    }, {
        question: "Q2: ....asdasdas...?",
        choiceA: "Hypertext Markup Language",
        choiceB: "HTML",
        choiceC: "Java Script",
        choiceD: "CSS",
        answer: "A"
    }, {
        question: "Q3: 223423423..234234?",
        choiceA: "Hypertext Markup Language",
        choiceB: "HTML",
        choiceC: "Java Script",
        choiceD: "CSS",
        answer: "A"
    }, {
        question: "Q4: weqwe12312rwqr..?",
        choiceA: "Hypertext Markup Language",
        choiceB: "HTML",
        choiceC: "Java Script",
        choiceD: "CSS",
        answer: "A"
    }, {
        question: "Q5: wer23rwersdfm n,mc vm,/?",
        choiceA: "Wrong",
        choiceB: "Answer",
        choiceC: "Wrong",
        choiceD: "Wrong",
        answer: "B"
    }, {
        question: "Q6: What does JS stand for?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Answer",
        answer: "D"
    }, {
        question: "Q7: What blah blah blah...?",
        choiceA: "Answer",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Wrong",
        answer: "A"
    }, {
        question: "Q8: What blah.......blah....?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Answer",
        choiceD: "Wrong",
        answer: "C"
    }
];


// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
};

//to run questions
var lastQuestion = questions.length - 1;
let runningQuestion = 0;


// render a question
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
