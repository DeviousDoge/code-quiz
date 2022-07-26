//get userScores from local storage and parse them back into listable objects
var highScores = JSON.parse(localStorage.getItem('savedScores'));
console.log(highScores);
//empty OL in DOM
var winners = document.querySelector('.scorelists');
//
if(highScores == null) highScores = []; else {
    function fillWinners () {
 //make cascading li's inside of scoreLists for the duration of the length of the array corresponding to its individual items
 for(var i = 0; i < highScores.length; i++){
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(JSON.stringify(highScores[i])));
    winners.appendChild(item);
 }
 return winners;
    }
  winners.appendChild(fillWinners(winners[0]));
 
}