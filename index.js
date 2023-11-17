 // we don't add () after handleclick here as it will be a straight up method call that we don't want , instead of clicking on the button , the alert message will show up after website gets loaded ..
// when button clicked on the site 
function handleClick(){
var buttonInnerhtml = this.innerHTML;
soundCheck(buttonInnerhtml);
buttonAnimation(buttonInnerhtml);
}
function soundCheck(key){
    switch(key){
        case 'w':
            var audio1 = new Audio("./crash.mp3");
            audio1.play();
            break;
        case 'a':
            var audio2 = new Audio("./kick-bass.mp3");
            audio2.play();
            break;
        case 's':
            var audio3 = new Audio("./snare.mp3");
            audio3.play();
            break;
        case 'd':
                var audio4 = new Audio("./tom-1.mp3");
                audio4.play();
                break;
         case 'j':
                    var audio5 = new Audio("./tom-2.mp3");
                    audio5.play();
                    break;
         case 'k':
                        var audio6 = new Audio("./tom-3.mp3");
                        audio6.play();
                        break;
            case 'l':
                  var audio7 = new Audio("./tom-4.mp3");
                  audio7.play();
                 break;
        
        default :
        console.log(key);
        }
    
}

for(var i =0 ; i<7 ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    
}   
//keypress from the keyboard 
document.addEventListener("keydown", function(event){
    soundCheck(event.key);
    buttonAnimation(event.key);
  
});
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");   
}, 200);

}
// When a button is clicked in the browser, a "click" event is triggered by the browser itself. The event type "click" is predefined and built into the browser's JavaScript event system. When you add an event listener with the "click" event type, you're telling the browser to execute the handleClick function when a "click" event occurs on the selected button.
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for(var i =0 ; i<numberOfDrumButtons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("I got clicked !");
//     });
// }  another way of doing , we r selecting all using drum class..

