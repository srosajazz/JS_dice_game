/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Math.random(6)
0.8124471801028075
Math.random()
0.0026151438113244385
Math.floor(Math.random() * 6)
5
Math.cloor(4.6)
VM155:1 Uncaught TypeError: Math.cloor is not a function
    at <anonymous>:1:6
(anonymous) @ VM155:1
Math.floor(4.6)
4
Math.floor(Math.randon() * 6)
VM239:1 Uncaught TypeError: Math.randon is not a function
    at <anonymous>:1:17
(anonymous) @ VM239:1
Math.floor(Math.random() * 6)
3
Math.floor(Math.random() * 6)
1
Math.floor(Math.random() * 6)
2
Math.floor(Math.random() * 6)
5
Math.floor(Math.random() * 6)
2
Math.floor(Math.random() * 6)
0
Math.floor(Math.random() * 6) + 1
1

*/

var scores, roundScore, activePlayer;

score = [0,0];
roundScore = 0;
activePlayer = 0;

//hide the dice 
document.querySelector('.dice').style.display = 'none';

//Get element by id to Set all to Zero.
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//annonimus fuction
document.querySelector('.btn-roll').addEventListener('click', function(){
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    //3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // add score .Player 1.
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player. Player 2.Tenary operator
        activePlayer === 0 ? activePlayer  = 1 : activePlayer = 0;
        roundScore = 0;  //set score to zero

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';




        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.remove('active');


    }


});

//Ternaty operator

// activePlayer === 0 ? activePlayer  = 1 : activePlayer = 0;


// if(activePlayer === 0) {
//     activePlayer = 1;
// }else {
//     activePlayer = 0
// }