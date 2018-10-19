var game=0
var words = ['Space', 'Earth', 'Jupiter', 'Mars', 'Neptune', 'moon', 'Mercury', 'Pluto', 'Saturn, Venus', 'planet', 'waning', 'waxing', 'asteroid', 'astronaut', 'comet', 'binary', 'astronomer', 'astronomy', 'elliptical', 'density', 'constellation', 'cosmonaut', 'cosmos', 'crater', 'day', 'dust', 'equinox', 'eclipse', 'ecliptic', 'galaxy', 'lunar', 'meteorite', 'meteor', 'meteoroid', 'lens', 'gravity',  'inertia', 'nebula', 'orbit', 'rocket', 'solar', 'solstice', 'star', 'umbra', 'space', 'sky', 'satellite', 'penumbra', 'rings', 'observatory', 'phase', 'universe', 'zodiac', 'sun', 'starlight'];
var guesses=[]
var correctGuesses = 0
var wrongGuesses = 0
var tries = 5
var a =''
var answer=[]

endGame()
startGame()

function startGame(){
    game=1
    a = words[Math.floor(Math.random()*words.length)];
    answer = a.split('');
    document.getElementById('guessLeft').innerHTML = tries-wrongGuesses;
    for(i=0;i<answer.length;i++){
        var letter = document.createElement("h1");
        letter.innerHTML = '_'
        letter.setAttribute('id',i);
        document.getElementById("wordGuess").appendChild(letter);
    }
    for(i=0;i<document.getElementsByClassName('game').length;i++){
        document.getElementsByClassName('game')[i].style.visibility = 'visible';
    }
    document.getElementById('gameInfo').innerHTML = 'Try guessing the letters in the word'
}
function endGame(){
    
    game=0
    guesses=[]
    correctGuesses = 0
    wrongGuesses = 0
    answer=[]
    for(i=0;i<document.getElementsByClassName('reset').length;i++){
        document.getElementsByClassName('reset')[i].innerHTML = '';
    }
    for(i=0;i<document.getElementsByClassName('game').length;i++){
        document.getElementsByClassName('game')[i].style.visibility = 'hidden';
    }
        document.getElementById('gameInfo').innerHTML = 'Press any key to start'
}
function correct(i){
    document.getElementById(i).innerHTML=answer[i];
}
document.onkeyup = function (e){
    var guess = document.createElement('div')
    guess.innerHTML = e.key
    switch(e.which){
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 65:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        checkKey(answer, e.key)
        }    
    function checkKey(arr, content) {
            if (arr.indexOf(content)==-1){
                if(guesses.indexOf(content)==-1){
                    guesses.push(content)
                    document.getElementById("wrongGuess").appendChild(guess)
                    wrongGuesses++
                    document.getElementById('guessLeft').innerHTML = tries-wrongGuesses;
                    if(tries-wrongGuesses<1){
                        document.getElementById('gameInfo').innerHTML = 'You lose!'
                        for (i=0;i<arr.length;i++){
                            correct(i);
                        }
                        setTimeout(endGame, 3000)
                        setTimeout(startGame, 3001)
                    }
                }
            }
            else{
                if(guesses.indexOf(content)==-1){
                    for (i=0;i<arr.length;i++){
                        if(arr[i]==content){
                            guesses.push(content);
                            correct(i);
                            correctGuesses++;
                            if (correctGuesses==arr.length){
                                document.getElementById('gameInfo').innerHTML = 'You win!'
                                setTimeout(endGame, 3000)
                                setTimeout(startGame, 3001)
                            }
                        }
                            
                    }
                }
            }
    }
}