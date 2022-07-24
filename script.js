
// Question and answer lists
var questionList = ['What is a document method Query Selector?', 'What comes after an if statement?', 'How would one best make an easy to modify variable that pulls a certain item from an array?', 'How do you change the text of an HTML element with JavaScript?', 'How do you make a function happen when an HTML element is clicked?'];
var answerListOne = ['Returns the first element within the document that matches the the specified selector(s)', '{then statement} (condition)', 'variable = that array[]', 'document.element.textContent = ‘text’', 'element.addEventListener(click, function() {})'];
var answerListTwo = ['Returns the number of child elements of the document.', '{then statement (condition)}', 'variable = a number corresponding to the index number you want to pull from that array', 'document.querySelector(‘element’).textContent(‘text’)', 'elementVariable.addEventListener(‘click’, function() {})'];
var answerListThree = ['A special variable which can hold more than one value.', '(condition) {then statement}', 'variable = index(the index number you want to pull from that array)', 'document.element.textContent(‘text’)', 'addEventListener.click.elementVariable(function() {})'];
var answerListFour = ['Allows you to break up your code into separate fields.', '(condition {then statement})', 'It simply cannot be done 😔', 'document.querySelector(‘element’).textContent = ‘text’', 'addEventListener.element(‘click’, function() {})'];
var correctAnswers = ['.answer1', '.answer3', '.answer2', '.answer4', '.answer2'];

var questionNumber = 0;

var global = document.querySelector('.global');
var quiz = document.querySelector('.container');
var question = document.querySelector('.question');
var one = document.querySelector('.answer1');
var two = document.querySelector('.answer2');
var three = document.querySelector('.answer3');
var four = document.querySelector('.answer4');
var congrats = document.querySelector('.congrats');
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
       if (questionNumber === 5) {
        global.removeChild(quiz);
        congrats.textContent = 'YOU ARE WINNER';
    };      
        } else {
            result.classList.remove('show');
            void result.offsetWidth;
            result.classList.add('show'); 
            result.textContent = 'That answer is incorrect!';
        };
       
    };
});

