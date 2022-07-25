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

-created form for userName
-created timer interval starting at 60 
-created correctAnswers index of button classes
-created navigate function changing indexNumber by +1 each time a correctAnswer is selected
-Created quiz function as follows:
-first check if timer is 0, then display TIMES UP!
-otherwise check if button matches correctAnswers[questionNumber]
-then run navigate function and display CORRECT
-if qustionNumber = 5, terminate quiz and congratulate user
-otherwise deduct time by 10 and tell user they are wrong

-make it so when questionNumber = 5, timer stop and secondsLeft is sent to a userScore object


-Hide form until questionNumber = 5
-Send userInput to userScore object
-save userScore object in localStorage
-display userScore properties in new HTML page linked at 'highscores' tab.
 -highscores array containing userscore objects
