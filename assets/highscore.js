var highScores = JSON.parse(localStorage.getItem('savedScores'));
console.log(highScores);

var winners = document.querySelector('.scorelists');

if(highScores == null) highScores = []; else {
    function fillWinners () {
 
 for(var i = 0; i < highScores.length; i++){
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(highScores[i]));
    winners.appendChild(item);
 }
 return winners;
    }
  winners.appendChild(fillWinners(winners[0]));
}