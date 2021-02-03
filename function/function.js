// //Генератор дразнилок 1-й вариант
// var randomBodyParts = ["глаз", "нос","череп",]; 
// var randomAbgectives = ["вонючая", "унылая","дурацкая",]; 
// var randomWords = ["муха", "выдра","дубина","мартышка","крыса",];
// var randomBodyParts = randomBodyParts[Math.floor(Math.random()*3)]; 
// var randomAbgectives = randomAbgectives[Math.floor(Math.random()*3)]; 
// var randomWords = randomWords[Math.floor(Math.random()*5)];
// var randomInsult = "У тебя " + randomBodyParts + " словно " + randomAbgectives + " " + randomWords + "!!!";
// console.log(randomInsult); 

// //Генератор дразнилок 2-й вариант
// var randomBodyParts = ["глаз", "нос","череп",]; 
// var randomAbgectives = ["вонючая", "унылая","дурацкая",]; 
// var randomWords = ["муха", "выдра","дубина","мартышка","крыса",];
// var pickRandomWord = function(word){
//     return word[Math.floor(Math.random()*randomBodyParts.length)]
// }
// var randomInsult = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAbgectives) + " " + pickRandomWord(randomWords) + "!!!";
// console.log(randomInsult); 

//Генератор дразнилок 3-й вариант
// var pickRandomWord = function(word){
//     return word[Math.floor(Math.random() * word.length)]
// }
// var generaterandomInsult = function(){
//     var randomAbgectives = ["вонючая", "унылая","дурацкая",]; 
//     var randomWords = ["муха", "выдра","дубина","мартышка","крыса",];
//     var randomBodyParts = ["глаз", "нос","череп",]; 
//     var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAbgectives) + " " + pickRandomWord(randomWords) + "!!!";
//     return randomString;
// }
// console.log(
//     generaterandomInsult(),
//     generaterandomInsult(),
//     generaterandomInsult()
// ); 

//Возвращение 5-й буквы
// var fifthLetter = function (name){
//     if (name.length < 5) {
//         return;
//     }
//     return "Пятая буква вашего имени: " + name[4] + ".";
// };
// console.log( fifthLetter("Ник") );

//Использование return + if
// var medalForScore = function (score) {
//     if (score < 3) {
//         return "Бронзовая";
//     }
//     if (score < 7) {
//         return "Серебряная";
//     }
//         return "Золотая";
// };
// console.log( medalForScore(5) );

//Дз по функциям 
//#1
// var add  = function ( x, y ){
//     var summ = x + y;
//     return summ;
// };
// var multiply  = function ( x, y ){
//     var mult = x * y;
//     return mult;
// };
// console.log (add(multiply(36325, 9824), 777));
//№2
// var areArraySame = function (array1 = [] , array2 = []) {
//     if (array1.length !== array2.length){
//         return "false"
//     }
//     for ( var i = 0; i < array1.length; i++){
//         if (array1[i] !== array2[i]){
//             return "false";
//         } 
//         return "true";
//     }
// }
// console.log (areArraySame([1, 2, 3], [1, 3, 3]));

//№3 модерниация Виселицы

var pickWord = function(){
    words = [
        "программа",
        "маккака",
        "прекрасный",
        "оладушек",
        "программист"
    ];
   return words[Math.floor(Math.random() * words.length)]; 
}
var setupAnswerArray = function(word){
    var answerArray = [];
    for (var i = 0; i < word.length; i++ ){
    answerArray[i] = "_";}
    return answerArray;
}
var showPlayerProgress = function(answerArray){
    alert(answerArray.join(' ')); 
}
var getGuess = function (){
    return prompt("Угадай букву или нажми Отмена для выхода из игры.");
}

var updateGameState = function(guess, word, answerArray){
    var appearences = 0;
    for (var j = 0; j < word.length; j++){
    if (word[j] === guess ){
            answerArray[j] = guess;
            remainingLetters--;
            appearences++;
        }
    }
    return appearences;
};

var showAnswerAndCangratelatePlayer = function(answerArray){
    alert("Отлично было загадано слово " + answerArray.join(" "));
}

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
while (remainingLetters > 0 ){
showPlayerProgress(answerArray);
// guess: ответ игрока
var guess = getGuess();
if (guess === null){
    break;
} else if (guess.length !== 1){
    alert("Пожалуйста, введите одиночную букву.");
} else {
    // correctGuesses: количество открытых букв
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
    }
}
showAnswerAndCangratelatePlayer(answerArray);