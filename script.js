
// Question and answer lists
var questionList = ['What is a document method Query Selector?', 'What comes after an if statement?'];
var answerListOne = ['Returns the first element within the document that matches the the specified selector(s)', '{then statement} (condition)'];
var answerListTwo = ['Returns the number of child elements of the document.', '{then statement (condition)}'];
var answerListThree = ['A special variable which can hold more than one value.', '(condition) {then statement}'];
var answerListFour = ['Allows you to break up your code into separate fields.', '(condition {then statement})'];
var correctAnswers = ['.answer1', '.answer3'];

var questionNumber = 0;

var quiz = document.querySelector('.container');
var question = document.querySelector('.question')
var one = document.querySelector('.answer1')
var two = document.querySelector('.answer2')
var three = document.querySelector('.answer3')
var four = document.querySelector('.answer4')

question.textContent = questionList[questionNumber];
one.textContent = answerListOne[questionNumber];
two.textContent = answerListTwo[questionNumber];
three.textContent = answerListThree[questionNumber];
four.textContent = answerListFour[questionNumber];

var result = document.querySelector('.result');
var answers = document.querySelector('.answers');
var correctAnswer = document.querySelector('.answer1');

function navigate(next) {
    questionNumber = questionNumber + next;
    question.textContent = questionList[questionNumber];
    one.textContent = answerListOne[questionNumber];
    two.textContent = answerListTwo[questionNumber];
    three.textContent = answerListThree[questionNumber];
    four.textContent = answerListFour[questionNumber];
};

answers.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches('button') ) {
        if (element.matches(correctAnswers[questionNumber])) {
       result.classList.remove('show');
       void result.offsetWidth;
       result.classList.add('show');
       result.textContent = 'Correct!';
       event.stopPropagation();
       navigate(1);
        } else {
            result.classList.remove('show');
            void result.offsetWidth;
            result.classList.add('show'); 
            result.textContent = 'That answer is incorrect!';
        };
       
    };
});

// answers.addEventListener('click', function (event) {
    // var element = event.target;
    // if (element.matches("button")){
        // event.stopPropagation();
        // navigate(1);
    // };

// });