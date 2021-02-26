imag_e="";

function preload(){
    imag_e=loadImage("download (22).jpg");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.position(500,160); 
}
function draw(){
    image(imag_e,0,0,600,500);
    fill("red");
    stroke("red");
    text("dog",100,45);
    noFill();
    stroke("red");
    rect(95,30,420,400);
}