var cnv 
var side = 10;
var playerX = 0;


function setup(){
    cnv = createCanvas(displayWidth, displayHeight);
}
function draw(){
    background("#acacac");
    rect(pmouseX,displayHeight/2,side,side);
}
