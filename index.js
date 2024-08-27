const display=document.getElementById("display")
var ans=false

function appendDisplay(input){
    if(!["+","-","/","*"].includes(input) && ans===true){
        display.value=input
        ans=false
    }
    else{
        display.value+=input;
    }
}
function clearDisplay(){
    display.value=""
}
function calculate(){
    display.value=eval(display.value)
    ans=true
}