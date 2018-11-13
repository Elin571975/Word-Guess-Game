// Globa Variables
//============================================================
// Create an array of words:
var word = ['asado', 'saltenas', 'feijoada', 'pastel', 'sancocho','ceviche','chivito','pabellon','encebollado','sopa'];

// Choose word radomly:
var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
console.log (chosenWord);

//or var chosenWord = word[Math.floor(Math.random() * word.length)];

var rightWord = [];
var wrongWord = [];
var underScore = [];

// // DOM manipulation
var docUnderScore = document.getElementsByClassName ("underScore");
var docRightGuess = document.getElementsByClassName ("rightGuess");
var docWrongGuess = document.getElementsByClassName ("wrongGuess");

// Create underscore based on length of word
function generateUnderScore (){
    for (var i=0; i<chosenWord.length; i++){
        underScore.push(' _ ');
    }
    return underScore;
    console.log (underScore);
}

docUnderScore[0].innerHTML = generateUnderScore().join('');    

// Get user guesses

document.addEventListener("keypress",(event)=>{
    var keyword = String.fromCharCode(event.keyCode);
    console.log (keyword);

    //if user guess is right
    if (chosenWord.indexOf(keyword)> -1 ){
       // Add to right words array
       rightWord.push(keyword);

       // Replace underscore with right letter
       underScore[chosenWord.indexOf(keyword)]=keyword;
       docUnderScore[0].innerHTML = underScore.join('');
       docRightGuess[0].innerHTML = rightWord;
       console.log (keyword);
        // Checks to see if user word matches gueses
    }
    
    if(underScore.join('') == chosenWord){
           alert ("You Win")
    }
    else{
           wrongWord.push (keyword);
           docWrongGuess[0].innerHTML = wrongWord;
           console.log (wrongWord);
    }

});
    





        



















































// // Creates the food images array
// var imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = 'assets/images/argentina.jpg';

// imgArray[1] = new Image();
// imgArray[1].src = 'assets/images/bolivia.jpg';

// imgArray[2] = new Image();
// imgArray[2].src = 'assets/images/brazil.jpg';

// imgArray[3] = new Image();
// imgArray[3].src = 'assets/images/chile.jpg';

// imgArray[4] = new Image();
// imgArray[4].src = 'assets/images/colombia.jpg';

// imgArray[5] = new Image();
// imgArray[5].src = 'assets/images/peru.jpg';

// imgArray[6] = new Image();
// imgArray[6].src = 'assets/images/uruguay.jpg';

// imgArray[7] = new Image();
// imgArray[7].src = 'assets/images/venezuela.jpg';

// imgArray[8] = new Image();
// imgArray[8].src = 'assets/images/ecuador.jpg';

// imgArray[9] = new Image();
// imgArray[9].src = 'assets/images/paraguay.jpg';

// /*------------------------------------------------------------------------*/

// function nextImage(element){

//     var img = document.getElementById(element);

//     for(var i = 0;i<imgArray.length;i++){
    
//         if(imgArray[i] == img){
        
//             if(i == imgArray.length){
//                 var j = 0;
//                 document.getElementById(element).src = imgArray[j].src;
//                 break;
//             }
            
//             else{
//             var j = i + 1;
//             document.getElementById(element).src = imgArray[j].src;
//             break;
//             }
//         }   
//     }
// }

// //Computer picks random word to guess

// document.onkeypress = wordGame();
