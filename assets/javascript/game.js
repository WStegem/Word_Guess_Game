var a
var answer
var guesses =[]
var correctGuesses = 0
var wrongGuesses = 0
var words = ['worda','wordb','wordc','wordd'];
var a = words[Math.floor(Math.random()*words.length)];
var answer = a.split('');


for(i=0;i<answer.length;i++){
    var letter = document.createElement("h1");
    letter.innerHTML = '_'
    letter.setAttribute('id',i);
    document.getElementById("wordGuess").appendChild(letter);
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
                    console.log('Wrong: '+wrongGuesses)
                }
            }
            else{
                for (i=0;i<arr.length;i++){
                    if(guesses.indexOf(content)==-1)
                        if(arr[i]==content){
                            guesses.push(content)
                            correct(i);
                            correctGuesses++
                            console.log('Right: '+correctGuesses)
                        }
                }
            }
    }
}
function correct(i){
    document.getElementById(i).innerHTML=answer[i];
}