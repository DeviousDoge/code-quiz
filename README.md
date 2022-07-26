# code-quiz
Simple timed quiz game on JS fundamentals

## Description

I was tasked with creating a timed quiz game from scratch to test my fellow classmates on there coding knowledge to this point. This in turn made me perform an exersize of my own knowledge and use of technical language to create an interesting and challenging quiz that users on my technical level may not be able to flawlessly complete in 60 seconds while still being fair. 

The mechanics of this quiz involve a timer that runs for 60 seconds, and each wrong answer will give a prompt to the user that they are wrong, and deduct 10 seconds from the users already limited time. If the user's time reaches 0, the quiz items will not navigate forward even if the user guesses the correct answer. The user will have to restart the page or look at highscores. 

Should the user reach the end of the five question quiz, there timer will stop and they will be given an opportunity to continue submit their name, sending there submission and remaining time to a highscore page, along with redirecting the users browser to that page. The user can return to the quiz by clicking the top left link. 

The quiz UI functions by filling empty HTML elements via a series of arrays, indexed via a number starting with 0 and increasing each time the user selects a correct answer. The correct answer itself is pulled from its own array of HTML element classes and indexed by the same number. The quiz elements are terminated when this number reaches 5. Any answer not indexed as a correct answer at the time will deduct ten seconds from the timer. The timer works by a simple ticking interval and stops when the index number reaches 5. When time reaches 10 or less the number turns red. 

There are hidden elements that are filled and appended when the index number reaches 5. The user can submit a name in a text form and if submitted the name and time left get indexed to an object, and then that object is added to an array downloaded and parsed from the local storage (or created from scratch upon a fresh installation). The array is packaged into strings in local storage and parsed again into the highscore page to be listed out in order of submission in the new page. 

## Installation

1. Thanks to the World Wide Web you can view this document from any net-connected device using the following HyperText Transfer Protocol Secure Address: https://deviousdoge.github.io/code-quiz/

2. Source code can be viewed by cloning the repository found here to your local machine using git bash (PC) or HomeBrew (Mac): https://github.com/DeviousDoge/code-quiz

3. Document is structured with index.html and styled with reset.css and style.css. Document is scripted with script.js.

## Usage

![website](/assets/codequiz.png "website")

## Credits

Juliet Lamond (Major collaborator, helped greatly with concating the arrays and determining the logic of what the browser does when password does not meet length criteria)
Github:https://github.com/jlamond37



https://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
https://www.codegrepper.com/code-examples/javascript/how+to+append+data+in+localstorage