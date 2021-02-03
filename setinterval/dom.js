// var leftOffset = 0;
// var moveHeading = function(){
//     $("#heading").offset({left: leftOffset});
//     leftOffset++;
//     if (leftOffset > 200) {
//         leftOffset = 0
//     }
// };
// setInterval(moveHeading, 30);

// var clickHander = function(event){
//     console.log("" + event.pageX + " " + event.pageY);
// };
// $("h1").click(clickHander);


//ДЗ №1

// $("html").click(function(event){
//     $("#heading").offset({
//         left: event.pageX,
//         top: event.pageY,
//     });
// });

//ДЗ №2

// var direction = "вправо";
// var offset = 0;
// var clics = 0;
// var intervalLength = 30;

// $("#heading").offset({left: offset, top: offset});

// var heaqdingOffset = function (){
//     if (direction === "вправо"){
//         $("#heading").offset({left: offset});
//         offset++;
//         if (offset > 200) {
//             offset = 0;
//             direction = "вниз";
//         }
//     }
//     else if (direction === "вниз"){
//             $("#heading").offset({top: offset});
//             offset++;
//         if (offset > 200) {
//             offset = 200;
//             direction = "влево";
//         }
//     }
//     else if (direction === "влево"){
//             $("#heading").offset({left: offset});
//             offset--;
//         if (offset < 0) {
//             offset = 200;
//             direction = "вверх";
//         }
//     }
//     else if (direction === "вверх"){
//             $("#heading").offset({top: offset});
//             offset--;
//         if (offset < 0) {
//             offset = 0;
//             direction = "вправо";
//         }
//     }
// }
// var intervalId = setInterval(heaqdingOffset, intervalLength);


// $("#heading").click(function(){
//     clearInterval(intervalId);
//     intervalLength /= 2;
//     clics++; 
//     if ( clics > 3){
//         clearInterval(intervalId);
//         $("#heading").text("Вы победили");
//     } else {
//         intervalId = setInterval(heaqdingOffset, intervalLength)
//     }


        
// });

// var textInput = document.querySelector('input');
// $("#but").click(function(){
     
//     if (textInput.value === "google"){
//         alert("Яндекс круче"); 
//     }
//     else{
//         alert(textInput.value + " " + array.name[0]);
//     }
// })
// var array = {
//     name: ["Игорь", "Сергей", "Саня"],
//     age: ["32", "33", "31"],
// }


// var syperSum = function(a, b){
//     return(a + b);
// };
// alert(syperSum(10, 5));

// var array = [1, 25, 74545455, 1112];
// var maxNumber = 0;
//     for(var i=0; i < array.length; i++){
//         if (array[i] <  array[0]){
//             maxNumber = array[0]
//         }  
//         else {
//             maxNumber = array[i]
//         }  
        
//     }
//     alert(maxNumber); 


