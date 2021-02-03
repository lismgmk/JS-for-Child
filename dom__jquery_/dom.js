// var headingElement = document.getElementById("main-heading");
// console.log(headingElement.innerHTML);
// var newHeadingText = prompt("Введите новый заголовок:");
// headingElement.innerHTML = newHeadingText; 
// $("#main-heading").text(newHeadingText);
// $("body").append("<p> Это новый параграф</p>");

// for (var i = 0; i < 3; i++){
//     var hobby = prompt("Назови одно из своих хобби!");
//     $("body").append("<p>" + hobby + "</p>");
// // }
// for (i=0; i < 5; i++){
//     $("h1").fadeIn(3000);
//     $("h1").fadeOut(3000);
// }

// $("h1").text("Этот текст скоро исчезнет").fadeOut(3000);
// $("h1").fadeOut(3000);
// $("h1").slideUp(3000).slideDown(2000);
// $("h1").hide(2000).show(2000);

var arrayFriends = ["Игорь", "Сергей", "Саня"];
for(var i =0; i<3; i++){
    $("body").append("<p>" + arrayFriends[i] + "</p>");

}
$("h1").text("Мои друзья");
// $("p").fadeOut(2000).fadeIn(2000).append(" Лучший");
// for (i=0; i < 5; i++){
//     if (i < 1){
//         $("h1").fadeOut(500);
//         $("h1").fadeIn(500);
        
//     }
//     else if (i < 3){
//         $("h1").fadeOut(1000);
//         $("h1").fadeIn(1000);
        
//     }
//     else{
//         $("h1").fadeOut(3000);
//         $("h1").fadeIn(3000);  
//     }
// }
// $("h2").fadeOut(3000).delay(5000).fadeIn(500);
$("h1").fadeTo(2000, 0.1)