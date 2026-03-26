var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         var buttonInnerHTML = this.innerHTML;
//         console.log(buttonInnerHTML);
//         switch (buttonInnerHTML) {
//             case "w":
//                 var audio = new Audio("sounds/tom-1.mp3");
//                 audio.play();
//                 break;
//             case "a":
//                 var audio = new Audio("sounds/kick-bass.mp3");
//                 audio.play();
//                 break;
//             case "s":
//                 var audio = new Audio("sounds/snare.mp3");
//                 audio.play();
//                 break;
//             case "d":
//                 var audio = new Audio("sounds/crash.mp3");
//                 audio.play();
//                 break;
//             case "j":
//                 var audio = new Audio("sounds/tom-2.mp3");
//                 audio.play();
//                 break;
//             case "k":
//                 var audio = new Audio("sounds/tom-3.mp3");
//                 audio.play();
//                 break;
//             case "l":
//                 var audio = new Audio("sounds/tom-4.mp3");
//                 audio.play();
//                 break;
//             default:
//                 break;
//         }

//     });
// }
function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/crash.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;
        default:
            console.log("Wrong key");
    }
}
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
}
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("keypress", function (event) {
        makeSound(event.key.toLowerCase());
        buttonAnimation(event.key.toLowerCase());
    });
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}