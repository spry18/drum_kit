var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case 's':
            var tom1 = new Audio("sounds/tom1.wav");
            tom1.play();
            break;

        case 'r':
            var tom2 = new Audio("sounds/tom2.wav");
            tom2.play();
            break;

        case 'g':
            var tom3 = new Audio("sounds/tom3.wav");
            tom3.play();
            break;

        case 'm':
            var tom4 = new Audio("sounds/tom4.wav");
            tom4.play();
            break;

        case 'p':
            var tom5 = new Audio("sounds/tom5.wav");
            tom5.play();
            break;

        case 'd':
            var tom6 = new Audio("sounds/tom6.wav");
            tom6.play();
            break;

        case 'n':
            var tom7 = new Audio("sounds/tom7.wav");
            tom7.play();
            break;

        default:console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);
}

