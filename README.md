# code-quiz

## Summary
This is a multiple chocie quiz with a timer. Player is able to save their scores in highscore option.

## Techonologies Used
- Bootstrap - used to create components in a faster pace.
- CSS - used to style the layout of the page.
- GitHub - used to push and commit the page.
- Javascript - to create function and 


## Site Pictures
![Site]

## Code Snippet
```html
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

```
This code render the all the questions in array and also check the answer from current questions

## Author Links
[LinkedIn](www.linkedin.com/in/tu-tai-le-2a9646139)
[GitHub](https://github.com/TaiLe96)