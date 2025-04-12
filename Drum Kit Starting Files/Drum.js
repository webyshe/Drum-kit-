 
 //js addEventListener with function 
 
 /*function handleClick(){
    alert("I  got clicked")
}

document.querySelector("button").addEventListener("click", handleClick());*/ 
  

//js addEventListener with anonymous function  AND QUERYSELECTOR FOR 1 BUTTON
 
/*document.querySelector("button").addEventListener("click",function(){
    alert("i got clicked" )
 });*/



/*var numberOFdrums=document.querySelectorAll(".drum").length; //counting how many elements  are there in  class drum

for (var i=0 ; i < numberOFdrums ; i++){

// why didnt use button as query why used drum coz we need to be more 
// specific coz we well use more button in the html code so it will take all button in the loop 

 document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 

    //console.log(this); 
    /*var audio = new Audio("sounds/tom-1.mp3");
    audio.play();   //play is method */
//alert("i got clicked" )})

 //});
//}

//click drum kit

  // switch statement  
var numberOFdrums=document.querySelectorAll(".drum").length; 

for (var i=0 ; i < numberOFdrums ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
    var  buttonInnerHtml= this.innerHTML;
    //calling function buttonAnimation
    buttonAnimation(buttonInnerHtml);
    
        switch (buttonInnerHtml) {
               case "w":
                    var Tom1 = new Audio("sounds/tom-1.mp3");
                    Tom1.play();
                    break;
                case "a":
                    var Tom2 = new Audio("sounds/tom-2.mp3");
                    Tom2.play();
                    break;
                case "s":
                   var Tom3 = new Audio("sounds/tom-3.mp3");
                   Tom3.play();
                   break;
                case "d":
                    var Tom4= new Audio("sounds/tom-4.mp3");
                    Tom4.play();
                    break;
                case "j":
                   var crash= new Audio("sounds/crash.mp3");
                   crash.play();
                   break;
                case "k":
                   var kickBass = new Audio("sounds/kick-bass.mp3");
                   kickBass.play();
                break;
                case "l":
                   var snare = new Audio("sounds/snare.mp3");
                   snare.play();
                break;
            default: console.log(buttonInnerHtml);
                
        }

    });
}


//animation function
 
function buttonAnimation(currentKey){

    var activeButton=document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");       //adding class which is already styles in css file

    //adding settimeout  function to remove pressed effect after 0.1 sec clicked 
    // syntax- setTimeout(function,time(in milli second),parameter 1 , ....)

    setTimeout (function(){
        activeButton.classList.remove("pressed");
    } , 100 );
}


//keyboard drum kit
var numberOFdrums=document.querySelectorAll(".drum").length; 

for (var i=0 ; i < numberOFdrums ; i++){


// detecting keyboard press
    document.addEventListener("keydown",function(event){
     makeSound(event.key)  ;
     // calling buttonanimation
     buttonAnimation(event.key) ;
    })};

    function makeSound(key) {
        switch (key){   
               case "w":
                    var Tom1 = new Audio("sounds/tom-1.mp3");
                    Tom1.play();
                    break;
                case "a":
                    var Tom2 = new Audio("sounds/tom-2.mp3");
                    Tom2.play();
                    break;
                case "s":
                   var Tom3 = new Audio("sounds/tom-3.mp3");
                   Tom3.play();
                   break;
                case "d":
                    var Tom4= new Audio("sounds/tom-4.mp3");
                    Tom4.play();
                    break;
                case "j":
                   var crash= new Audio("sounds/crash.mp3");
                   crash.play();
                   break;
                case "k":
                   var kickBass = new Audio("sounds/kick-bass.mp3");
                   kickBass.play();
                break;
                case "l":
                   var snare = new Audio("sounds/snare.mp3");
                   snare.play();
                break;
            default: console.log(keydown);
                
        }

    }

    //animation function
 
function buttonAnimation(currentKey){

    var activeButton=document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");    //adding class to a active button which is already styled in css file

    //adding settimeout  function to remove pressed effect after 0.1 sec clicked 
    // syntax- setTimeout(function,time,parameter 1 , ....)

    setTimeout (function(){
        activeButton.classList.remove("pressed");
    } , 100 );
}






var numberOFdrums=document.querySelectorAll(".drum").length; 

for (var i=0 ; i < numberOFdrums ; i++){


// detecting keyboard press
    document.addEventListener("keydown",function(event){
     makeSound(event.key)  ;
     // calling buttonanimation
     buttonAnimation(event.key) ;
    })};

    function makeSound(key) {
        switch (key){   
               case "w":
                    var Tom1 = new Audio("sounds/tom-1.mp3");
                    Tom1.play();
                    break;
                case "a":
                    var Tom2 = new Audio("sounds/tom-2.mp3");
                    Tom2.play();
                    break;
                case "s":
                   var Tom3 = new Audio("sounds/tom-3.mp3");
                   Tom3.play();
                   break;
                case "d":
                    var Tom4= new Audio("sounds/tom-4.mp3");
                    Tom4.play();
                    break;
                case "j":
                   var crash= new Audio("sounds/crash.mp3");
                   crash.play();
                   break;
                case "k":
                   var kickBass = new Audio("sounds/kick-bass.mp3");
                   kickBass.play();
                break;
                case "l":
                   var snare = new Audio("sounds/snare.mp3");
                   snare.play();
                break;
            default: console.log(keydown);
                
        }

    }

    //animation function
 
function buttonAnimation(currentKey){

    var activeButton=document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");    //adding class to a active button which is already styled in css file

    //adding settimeout  function to remove pressed effect after 0.1 sec clicked 
    // syntax- setTimeout(function,time,parameter 1 , ....)

    setTimeout (function(){
        activeButton.classList.remove("pressed");
    } , 100 );
}







