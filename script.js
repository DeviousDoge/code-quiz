
var questionList = ['What is a document method Query Selector?'];
var answerListOne = ['Returns the first element within the document that matches the the specified selector(s)'];
var answerListTwo = ['Returns the number of child elements of the document.'];
var answerListThree = ['A special variable which can hold more than one value.'];
var answerListFour = ['Allows you to break up your code into separate fields.'];

var correctAnswer = false;
var questionNumber = 0;

var quiz = document.querySelector('.container');
var question = document.querySelector('.question').textContent = questionList[questionNumber];
var one = document.querySelector('.answer1').textContent = answerListOne[questionNumber];
var two = document.querySelector('.answer2').textContent = answerListTwo[questionNumber];
var three = document.querySelector('.answer3').textContent = answerListThree[questionNumber];
var four = document.querySelector('.answer4').textContent = answerListFour[questionNumber];
// var result =document.querySelector('.result');

var button =document.querySelector('button');
var result = document.querySelector('.result');
var answers = document.querySelector('.answers');

answers.addEventListener('click', (event) => {
    var isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
  result.classList.remove('show');
  void result.offsetWidth;
  result.classList.add('show');
    };
});