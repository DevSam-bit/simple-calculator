function getHistory(){
    return document.getAnimations("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function printOutput(num){
    return document.getElementById("output-value").innerText=num;
}
function printOutput(num){
    document.getElementById("output-value").innerText=getFormattedNumber(num);
}