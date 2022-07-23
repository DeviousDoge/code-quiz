Basic Quiz

-variables: 
-DOM queries
quiz = DOM query for container element;
question = DOM query for question element;
one
two
three
four
^^^^^^^^
DOM query for buttons
result = DOM query for result

-arrays:
questionList:
answerListOne:
answerListTwo:
answerListThree:
answerListFour:

correctAnswer = boolean for wether button is correct answer
questionNumber = 0-4 number that determines which item is pulled from the index of the arrays and applied to the empty elements

-Fill the HTML elements in body with JavaScript
By default questionNumber is 0. Pull the 0th item from each array and apply it as a string to the text content of each corresponding empty element. 
ex: question = questionList[questionNumber]

-Hide the div class result until answer is chosen. Code it so that result only shows true when correct answer is chosen

listen for buttonclick {
    if button is true (
        change text content of result to "Correct"
        display result
    ) else (
        display result
    )
} 1000, 
  ^^^^^
Make result only show for 1 seconds

-add new question and answers to the arrays, change the correctAnswer variable to 1