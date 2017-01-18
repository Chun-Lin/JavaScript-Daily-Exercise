/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var dice, roundScore, currentScore, activePlayer;

roundScore = 0;
currentScore = [0, 0];
activePlayer = 0; //Player1

var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'none';
var current0 = document.querySelector('#current-0');
var current1 = document.querySelector('#current-1');
var score0 = document.querySelector('#score-0');
var score1 = document.querySelector('#score-1');


function winner() {
    if (currentScore[activePlayer] >= 100) {
        diceDOM.style.display = 'none';
        document.querySelector('#score-' + activePlayer).textContent = 'WIN';

    }
}

function getScore() {
    console.log(roundScore);
    document.querySelector('#score-' + activePlayer).textContent = currentScore[activePlayer] += roundScore;
    roundScore = 0;
}

function unactive() {
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}

function active() {
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

function init() {
    roundScore = 0;
    currentScore = [0, 0];
    activePlayer = 0; //Player1
    current0.textContent = roundScore;
    current1.textContent = roundScore;
    score0.textContent = 0;
    score1.textContent = 0;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    diceDOM.style.display = 'none';
}



document.querySelector('.btn-new').addEventListener('click', function () {
    init();
})


document.querySelector('.btn-roll').addEventListener('click', function () {
    //DICE
    dice = Math.floor(Math.random() * 6) + 1;
    //DICE DISPLAY
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //SCORE

    var hold = document.querySelector('.btn-hold');
    if (activePlayer === 0) {
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

            //HOLD
            hold.addEventListener('click', function () {
                getScore();
                winner();

                //CHANGE PLAYER
                unactive();
                activePlayer = 1;
                active();
            });
        } else {
            roundScore = 0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

            //CHANGE PLAYER
            unactive();
            activePlayer = 1;
            active();
        }
    } else if (activePlayer === 1) {
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

            //HOLD
            hold.addEventListener('click', function () {
                getScore();
                winner();

                //CHANGE PLAYER
                unactive();
                activePlayer = 0;
                active();
            });
        } else {
            roundScore = 0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

            //CHANGE PLAYER
            unactive();
            activePlayer = 0;
            active();
        }
    }

});

//console.log(roundScore);