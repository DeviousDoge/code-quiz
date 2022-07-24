
// Question and answer lists
var questionList = ['What is a document method Query Selector?', 'What comes after an if statement?', 'How would one best make an easy to modify variable that pulls a certain item from an array?', 'How do you change the text of an HTML element with JavaScript?', 'How do you make a function happen when an HTML element is clicked?'];
var answerListOne = ['Returns the first element within the document that matches the the specified selector(s)', '{then statement} (condition)', 'variable = that array[]', 'document.element.textContent = ‘text’', 'element.addEventListener(click, function() {})'];
var answerListTwo = ['Returns the number of child elements of the document.', '{then statement (condition)}', 'variable = a number corresponding to the index number you want to pull from that array', 'document.querySelector(‘element’).textContent(‘text’)', 'elementVariable.addEventListener(‘click’, function() {})'];
var answerListThree = ['A special variable which can hold more than one value.', '(condition) {then statement}', 'variable = index(the index number you want to pull from that array)', 'document.element.textContent(‘text’)', 'addEventListener.click.elementVariable(function() {})'];
var answerListFour = ['Allows you to break up your code into separate fields.', '(condition {then statement})', 'It simply cannot be done 😔', 'document.querySelector(‘element’).textContent = ‘text’', 'addEventListener.element(‘click’, function() {})'];
// Array for correct answers, used to check user input depending on questionNumber
var correctAnswers = ['.answer1', '.answer3', '.answer2', '.answer4', '.answer2'];
// Used as index number picker 
var questionNumber = 0;
// HTML objects 
var global = document.querySelector('.global');
var quiz = document.querySelector('.container');
var question = document.querySelector('.question');
var one = document.querySelector('.answer1');
var two = document.querySelector('.answer2');
var three = document.querySelector('.answer3');
var four = document.querySelector('.answer4');
var congrats = document.querySelector('.congrats');
var result = document.querySelector('.result');
var answers = document.querySelector('.answers');
// Default state of HTML quiz elements
question.textContent = questionList[questionNumber];
one.textContent = answerListOne[questionNumber];
two.textContent = answerListTwo[questionNumber];
three.textContent = answerListThree[questionNumber];
four.textContent = answerListFour[questionNumber];
//timer variables
var secondsLeft = 60;
var timeEl = document.querySelector("#ticker");
//timer function
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    //change text to red when time is less than 10 seconds
    if(secondsLeft <= 10) {
        timeEl.setAttribute("style", "color:red;");
    }
    //stop timer when time reaches 0
    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        secondsLeft = 0;
        timeEl.textContent = secondsLeft;
        console.log(secondsLeft);
    }
  //run interval every second
  }, 1000);
} 
//run timer at page start
setTime();
//function to change the questionNumber, fires when user picks appropriate item corresponding to correctAnswers array
function navigate(next) {
    questionNumber = questionNumber + next;
    question.textContent = questionList[questionNumber];
    one.textContent = answerListOne[questionNumber];
    two.textContent = answerListTwo[questionNumber];
    three.textContent = answerListThree[questionNumber];
    four.textContent = answerListFour[questionNumber];
};
//master function for quiz mechanics
answers.addEventListener('click', function(event) {
    var element = event.target;
    //if user presses any button in answers div
    if (element.matches('button') ) {
        //if there is no more time left, do not let use continue and tell them there time is up at the results element
        if(secondsLeft === 0) {
            result.classList.remove('show');
            void result.offsetWidth;
            result.classList.add('show'); 
            result.textContent = 'TIMES UP!';
        }
        //if user presses button that matches the correct correctAnswers index depending on questionNumber
        else if (element.matches(correctAnswers[questionNumber])) {
       //briefly display result class with textcontent 'Correct'     
       result.classList.remove('show');
       void result.offsetWidth;
       result.classList.add('show');
       result.textContent = 'Correct!';
       event.stopPropagation();
       //change to next questionSet
       navigate(1);
       //if user navigates past the 5th question, remove quiz and congratulate user
       if (questionNumber === 5) {
        global.removeChild(quiz);
        congrats.textContent = 'YOU ARE WINNER';
    };  //otherwise, briefly display result class telling user they are incorrect    
        } else {
            result.classList.remove('show');
            void result.offsetWidth;
            result.classList.add('show'); 
            result.textContent = 'That answer is incorrect!';
            secondsLeft = secondsLeft - 10;
        };
       
    };
});

